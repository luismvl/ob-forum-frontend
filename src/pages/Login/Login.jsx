import React, { useState } from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useAuth } from '../../hooks/useAuth'
import checkIfEmail from './Login.helpers'
import Input from '../../components/Input'
import Button from '../../components/Button'
import InputCheckbox from '../../components/InputCheckbox'
import Link from '../../components/Link'

function Login() {
  const [identity, setIdentity] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [isLogging, setIsLogging] = useState(false)

  const location = useLocation()
  const { login, auth } = useAuth()
  const from = location.state?.from?.pathname || '/'

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLogging(true)

    const credentials = {
      rememberMe,
      password,
    }
    if (checkIfEmail(identity)) credentials.email = identity
    else credentials.username = identity
    login(credentials)
      .then(() => navigate(from, { replace: true }))
      .finally(() => setIsLogging(false))
  }

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe)
  }

  if (auth) return <Navigate to={from} />

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <FormTitle>¡Bienvenido/a!</FormTitle>

        <InputGroup>
          <Label htmlFor="identity">Email / usuario</Label>
          <Input
            placeholder="Ej. user@mail.com, luismvl"
            type="text"
            id="username"
            value={identity}
            onChange={(e) => setIdentity(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="password">Contraseña</Label>
          <Input
            placeholder="Introduce tu contraseña"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>

        <RememberMeForgotPassword>
          <InputCheckbox label="Recuérdame" value={rememberMe} onClick={toggleRememberMe} />
          <Link to="/forgot-password">¿Has olvidado tu contraseña?</Link>
        </RememberMeForgotPassword>

        <ButtonsContainer>
          <Button type="submit" disabled={isLogging}>
            Iniciar sesión
          </Button>
          <Button type="button" onClick={() => navigate('/register')} color="secondary">
            Registrarse
          </Button>
        </ButtonsContainer>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const Form = styled.form`
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 405px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  border-radius: 8px;

  @media (max-width: 420px) {
    padding: 20px;
  }

  @media (max-width: 370px) {
    padding: 15px;
  }
`

const FormTitle = styled.h2`
  align-self: flex-start;
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 700;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.textColor};
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  width: 100%;
`
const RememberMeForgotPassword = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
  font-size: 15px;

  // Custom styles for Link component
  & ${Link} {
    font-weight: 600;
    font-size: 14px;
  }

  @media (max-width: 355px) {
    flex-direction: column;
  }
`

export default Login
