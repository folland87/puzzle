import React from 'react';
import { RiCheckLine } from 'react-icons/ri';
import {
  StyledCheckbox,
  StyledHiddenCheckbox,
} from './styles';
import Text from '../Text';
import { FlexColumn, FlexRow } from '../Flexbox';

const Checkbox = ({
  label, disabled, name, checked, onChange, description,
}) => (
  <FlexRow>
    <StyledHiddenCheckbox
      disabled={disabled}
      checked={checked}
      name={name}
      onChange={() => onChange(name, !checked)}
    />
    <StyledCheckbox checked={checked}>
      {checked && <RiCheckLine />}
    </StyledCheckbox>
    <FlexColumn pl={3}>
      <Text color={((disabled) ? 'dark.3' : 'dark.0')}>
        Check me
      </Text>
      {
        description && <Text fontSize="small" color="dark.3">{description}</Text>
      }
    </FlexColumn>
  </FlexRow>
);
export default Checkbox;
