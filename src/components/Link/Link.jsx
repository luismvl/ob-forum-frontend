import styled from 'styled-components/macro'
import { Link as RouterLink } from 'react-router-dom'

const Link = styled(RouterLink)`
  color: ${({ theme }) => theme.primary.main};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
export default Link
