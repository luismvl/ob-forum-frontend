import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

function InputCheckbox({ label, onClick }) {
  return (
    <Label>
      <Input type="checkbox" onClick={onClick} />
      <span>{label}</span>
    </Label>
  )
}

const Label = styled.label`
  display: flex;
  gap: 4px;
  align-items: center;
`
const Input = styled.input`
  margin: 0;
  width: 14px;
`

InputCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default InputCheckbox
