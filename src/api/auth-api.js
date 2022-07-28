import axios from 'axios'
import url from './base-url'

export async function loginByUsernameOrEmail({ username, email, password }) {
  const body = { password }
  if (username) body.username = username
  else if (email) body.email = email

  const res = await axios.post(`${url}/auth/login`, body)
  return res.data
}

export async function checkToken({ token }) {
  const res = await axios.post(`${url}/auth/check-token`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return res.data
}
