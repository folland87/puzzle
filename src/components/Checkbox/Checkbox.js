import React from 'react'
import { FaCheck } from 'react-icons/fa'
import {
  StyledCheckbox,
  StyledCheckboxContainer,
  StyledHiddenCheckbox,
  StyledLabel,
} from './styles'

const Checkbox = ({ label, disabled, value, checked, onChange }) => (
  <StyledCheckboxContainer>
    <StyledHiddenCheckbox disabled={disabled} checked={checked} onChange={() => onChange(value, !checked)}/>
    <StyledCheckbox checked={checked}>
      {checked && <FaCheck />}
    </StyledCheckbox>
    <StyledLabel disabled={disabled}>
      Check me
    </StyledLabel>
  </StyledCheckboxContainer>
)

export default Checkbox;
