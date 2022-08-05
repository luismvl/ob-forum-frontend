import React, { useState } from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useAuth } from '../../hooks/use-auth'
import Input from '../Input'
import Button from '../Button'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLogging, setIsLogging] = useState(false)

  const location = useLocation()
  const { login, auth } = useAuth()
  const from = location.state?.from?.pathname || '/'

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLogging(true)
    login({ username, password, rememberMe: true })
      .then(() => navigate(from, { replace: true }))
      .finally(() => setIsLogging(false))
  }

  if (auth) return <Navigate to={from} />

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <h2>¡Bienvenido/a!</h2>

        <InputGroup>
          <label htmlFor="username">Username</label>
          <Input
            placeholder="Username"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <label htmlFor="password">Password</label>
          <Input
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>

        {/* TODO: Agregar botón de 'recuérdame' y link de olvidé la contraseña */}

        <Button type="submit" disabled={isLogging} label="Login" />
        <button type="button" onClick={() => navigate('/test')}>
          Go to /test
        </button>
      </Form>
    </Container>
  )
}

const Form = styled.form`
  display: flex;
  gap: 20px;
  min-width: 400px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  border-radius: 8px;

  & h2 {
    align-self: flex-start;
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 700;
  }
`

const Container = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: 100vh;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  & label {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
  }
`
export default Login
