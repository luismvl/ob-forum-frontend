import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 42px;
  width: 100%;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.primary.main};
  background-color: ${({ theme, color }) => color === 'secondary' && theme.greys.black};
  background-color: ${({ theme, color }) => color === 'white' && theme.greys.white};
  background-color: ${({ theme, color }) => color === 'grey' && theme.greys.grey3};
  color: ${({ theme }) => theme.textColorContrast};
  color: ${({ theme, color }) => color === 'white' && theme.textColor};
  color: ${({ theme, color }) => color === 'grey' && theme.textColor};
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  border: none;
  border: ${({ theme, variant }) => variant === 'outlined' && `1px solid ${theme.greys.grey4}`};
  border: ${({ theme, variant, color }) =>
    variant === 'outlined' && color === 'primary' && `1px solid ${theme.greys.grey4}`};

  &:hover {
    background-color: ${({ theme }) => theme.primary.dark};
    background-color: ${({ theme, color }) => color === 'secondary' && theme.secondary.black};
    background-color: ${({ theme, color }) => color === 'white' && theme.greys.grey2};
    background-color: ${({ theme, color }) => color === 'grey' && theme.greys.grey4};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.greys.grey4};
    cursor: wait;
  }
`

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined', 'shaded', 'colorShaded']),
  color: PropTypes.oneOf(['primary', 'secondary', 'white', 'grey']),
}

Button.defaultProps = {
  type: 'button',
  variant: 'filled',
  color: 'primary',
}

export default Button
