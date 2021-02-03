import React from 'react';
import PropTypes from 'prop-types';
import {
  RiCloseCircleLine,
  RiInformationLine,
  RiCheckLine,
  RiAlertLine,
} from 'react-icons/ri';
import {
  StyledInputWrapper,
  StyledInputContainer,
  StyledIconLeftContainer,
  StyledInput,
  StyledIconRightContainer,
  StyledMessage,
  StyledLabel,
} from './styles';

let lastId = 0;
const uniqueId = () => {
  lastId += 1;
  return `input_${lastId}`;
};

const getMessageIcon = (messageType) => {
  switch (messageType) {
    case 'danger': return <RiCloseCircleLine />;
    case 'info': return <RiInformationLine />;
    case 'success': return <RiCheckLine />;
    case 'warning': return <RiAlertLine />;
    default: return null;
  }
};

const InputText = React.forwardRef((props, ref) => {
  const {
    iconLeft,
    iconRight,
    label,
    message,
    messageType,
    radius,
    placeholder,
    scale,
    ...rest
  } = props;
  const id = (rest.id) ? rest.id : uniqueId();
  const descriptionId = (message) && `desc_${id}`;
  return (
    <StyledInputWrapper {...rest}>
      { (label) && <StyledLabel as="label" isRequired={props.required} pl={1} id={id}>{label}</StyledLabel> }
      <StyledInputContainer messageType={messageType} radius={radius}>
        { iconLeft && (
          <StyledIconLeftContainer scale={scale} aria-hidden="true" position="left">
            {iconLeft}
          </StyledIconLeftContainer>
        )}
        <StyledInput
          iconLeft={iconLeft}
          iconRight={iconRight}
          placeholder={placeholder}
          aria-labelledby={id}
          ref={ref}
          aria-describedby={descriptionId}
          scale={scale}
          {...rest}
        />
        { iconRight && (
          <StyledIconRightContainer scale={scale} aria-hidden="true" position="right">
            {iconRight}
          </StyledIconRightContainer>
        )}
      </StyledInputContainer>
      { (message) && (
        <StyledMessage id={descriptionId} messageType={messageType}>
          {getMessageIcon(messageType)}
          {message}
        </StyledMessage>
      )}
    </StyledInputWrapper>
  );
});

InputText.propTypes = {
  /**
  * Button scale
  */
  scale: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
  * Sets the input width
  */
  width: PropTypes.string,
  /**
  * Sets the input border radius
  */
  radius: PropTypes.string,
  /**
  * Sets input's state to disabled
  */
  disabled: PropTypes.bool,
  /**
  * Input label for accessibility purposes
  */
  required: PropTypes.bool,
  /**
  * Input label for accessibility purposes
  */
  label: PropTypes.string,
  /**
  * Placeholder
  */
  placeholder: PropTypes.string,
  /**
  * Type of message
  */
  message: PropTypes.string,
  /**
  * Type of message
  */
  messageType: PropTypes.oneOf([
    'danger',
    'success',
    'warning',
    'info',
    'text',
  ]),
  /**
  * Sets an icon on input's left
  * Require an icon component.
  */
  iconLeft: PropTypes.node,
  /**
  * Sets an icon on input's right
  * Require an icon component.
  */
  iconRight: PropTypes.node,
  /**
  * Styled system margins. Please use shortcuts m, mx, my, mt, ...
  */
  m: PropTypes.number,
};

InputText.defaultProps = {
  scale: 'medium',
  width: null,
  required: null,
  radius: 'regular',
  disabled: null,
  label: null,
  message: null,
  placeholder: null,
  messageType: 'text',
  iconLeft: null,
  iconRight: null,
};

export default InputText;
