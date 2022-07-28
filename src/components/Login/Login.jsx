import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useAuth } from '../../hooks/use-auth'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLogging, setIsLogging] = useState(false)

  const { login, auth } = useAuth()

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLogging(true)
    login({ username, password })
      .then(() => setIsLogging(false))
      .catch(() => setIsLogging(false))
  }
  return (
    <Wrapper>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" disabled={isLogging}>
          Login
        </button>
        {auth && <h2>Logged!</h2>}
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default Login
