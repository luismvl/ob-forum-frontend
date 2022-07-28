/* eslint-disable react/jsx-filename-extension */
import React, { createContext, useState, useEffect, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { loginByUsernameOrEmail, checkToken } from '../api/auth-api'

const authContext = createContext()

export function AuthProvider({ children }) {
  // Contains the user token and the user data
  // { token, user }
  const [auth, setAuth] = useState(null)

  // Checks token is in localStorage and if is valid
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken({ token })
        .then((user) => {
          localStorage.setItem('user', JSON.stringify(user))
          setAuth({ user, token })
        })
        .catch(() => {
          localStorage.removeItem('user')
          localStorage.removeItem('token')
          setAuth(null)
        })
    }
  }, [])

  const login = async ({ username, email, password, rememberMe }) => {
    const { token, user } = await loginByUsernameOrEmail({ username, email, password })

    if (rememberMe) {
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
    }
    setAuth({ user, token })
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
