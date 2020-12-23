import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import useSelect from '../../hooks/useSelect';
import {
  StyledSelect,
  StyledList,
  StyledOverlay,
  StyledOption,
  StyledSelectWrapper,
} from './styles';

const Select = ({ onSelect, options, ...rest }) => {
  const selectRef = useRef(null);
  const optionsRef = useRef(null);
  const {
    toggle,
    isOpen,
    onKeyDown,
    onClick,
    selectedElement,
  } = useSelect(selectRef, optionsRef);
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    onSelect(selectedElement);
    setSelectedOption(options.find((option) => option.value === selectedElement));
  }, [selectedElement, onSelect, setSelectedOption, options]);
  return (
    <StyledSelectWrapper>
      <StyledSelect
        tabIndex={0}
        ref={selectRef}
        aria-expanded={isOpen}
        onClick={(e) => toggle(e)}
        onKeyDown={(e) => toggle(e)}
        {...rest}
      >
        {(selectedOption && selectedOption.label) || selectedElement || 'Select me im famous...'}
        {isOpen ? <FaCaretUp /> : <FaCaretDown />}
      </StyledSelect>
      {
        (isOpen)
          ? (
            <>
              <StyledList ref={optionsRef} tabIndex={!isOpen ? '-1' : undefined} onKeyDown={onKeyDown} onClick={onClick} {...rest}>
                {options && options.map((option, i) => (
                  <StyledOption tabIndex={0} key={option.value} value={option.value} {...rest}>
                    {option.label || option.value}
                  </StyledOption>
                ))}
              </StyledList>
              <StyledOverlay onClick={(e) => toggle(e)} />
            </>
          )
          : null
      }
    </StyledSelectWrapper>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  scale: PropTypes.oneOf(['small', 'large', 'medium']),
  radius: PropTypes.string,
};
Select.defaultProps = {
  onSelect: () => {},
  scale: 'medium',
  radius: 'regular',
};

export default Select;
