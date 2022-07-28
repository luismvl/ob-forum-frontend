/* eslint-disable react/jsx-filename-extension */
import React, { createContext, useState, useEffect, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { loginByUsernameOrEmail, checkToken } from '../api/auth-api'

const authContext = createContext()

export function AuthProvider({ children }) {
  // Contains the user's token and the user's data
  // { token, user }
  const [auth, setAuth] = useState(null)

  // Checks if token is valid
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken(token)
        .then((user) => {
          setAuth({ user, token })
          localStorage.setItem('user', JSON.stringify(user))
        })
        .catch(() => {
          setAuth(null)
          localStorage.removeItem('user')
          localStorage.removeItem('token')
        })
    }
  }, [])

  const login = async ({ username, email, password, rememberMe }) => {
    const { token, user } = loginByUsernameOrEmail({ username, email, password })

    setAuth({ user, token })
    if (rememberMe) {
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
    }
  }
  const ctxValue = useMemo(() => ({ auth, login }), [auth, login])

  return <authContext.Provider value={ctxValue}>{children}</authContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function useAuth() {
  return useContext(authContext)
}
