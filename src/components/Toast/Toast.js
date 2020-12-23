import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  FaTimesCircle,
  FaTimes,
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa';
import usePausableTimer from '../../hooks/usePausableTimer';
import Button from '../Button';
import Text from '../Text';
import { FlexRow } from '../Flexbox';
import {
  StyledToast,
  StyledProgressBar,
  StyledColoredBox,
  StyledToastContent,
} from './styles';

// Toast component
// ==============================
const Toast = ({
  id,
  content,
  description,
  toastType,
  autoDismissAfter,
  remove,
  position,
}) => {
  const removeSelf = useCallback(() => remove(id), [id, remove]);
  const { paused, pause, resume } = usePausableTimer(removeSelf, autoDismissAfter);

  const icon = {
    info: <FaInfoCircle />,
    warning: <FaExclamationCircle />,
    success: <FaCheckCircle />,
    danger: <FaTimesCircle />,
  };
  return (
    <StyledToast
      position={position}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <StyledColoredBox toastType={toastType}>
        {icon[toastType]}
        {
          (autoDismissAfter !== 0)
            ? (<StyledProgressBar paused={paused} autoDismissAfter={autoDismissAfter} />)
            : null
        }
      </StyledColoredBox>
      <StyledToastContent role="alert">
        <FlexRow alignItems="center">
          <Text m={0} fontWeight="medium">
            {content}
          </Text>
          <Button
            mr={1}
            ml="auto"
            onClick={() => remove(id)}
            flat
            color="secondary"
            radius="rounded"
            icon={<FaTimes />}
          />
        </FlexRow>
        <FlexRow>
          {description && (<Text mt={1} mr={2} fontSize="small">{description}</Text>)}
        </FlexRow>
      </StyledToastContent>
    </StyledToast>
  );
};
Toast.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string,
  description: PropTypes.string,
  autoDismissAfter: PropTypes.number,
  remove: PropTypes.func,
  position: PropTypes.oneOf([
    'top-left',
    'top-right',
    'top-center',
    'top-left',
    'top-right',
    'top-center',
  ]),
  toastType: PropTypes.oneOf(['info', 'success', 'danger', 'warning']),
};

Toast.defaultProps = {
  content: '',
  description: null,
  autoDismissAfter: 5000,
  remove: () => {},
  position: 'top-right',
  toastType: 'success',
};

export default Toast;
