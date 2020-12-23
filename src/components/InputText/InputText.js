import React from 'react';
import PropTypes from 'prop-types';
import {
  FaTimes,
  FaInfoCircle,
  FaCheck,
  FaExclamationTriangle,
} from 'react-icons/fa';
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
    case 'danger': return <FaTimes />;
    case 'info': return <FaInfoCircle />;
    case 'success': return <FaCheck />;
    case 'warning': return <FaExclamationTriangle />;
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
    ...rest
  } = props;
  const id = (rest.id) ? rest.id : uniqueId();
  const descriptionId = (message) && `desc_${id}`;
  return (
    <StyledInputWrapper {...rest}>
      { (label) && <StyledLabel as="label" isRequired={props.required} pl={1} id={id}>{label}</StyledLabel> }
      <StyledInputContainer error={messageType === 'danger'} radius={radius}>
        { iconLeft && (
          <StyledIconLeftContainer aria-hidden="true" position="left">
            {iconLeft}
          </StyledIconLeftContainer>
        )}
        <StyledInput aria-labelledby={id} ref={ref} aria-describedby={descriptionId} {...rest} />
        { iconRight && (
          <StyledIconRightContainer aria-hidden="true" position="right">
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
  * Use message to print a messsage describing field's value state.
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
  messageType: 'text',
  iconLeft: null,
  iconRight: null,
};

export default InputText;
