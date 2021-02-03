import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  RiCloseLine,
  RiInformationLine,
  RiCheckLine,
  RiAlertLine,
} from 'react-icons/ri';
import usePausableTimer from '../../hooks/usePausableTimer';
import { Button } from '../Button';
import Text from '../Text';
import { FlexColumn } from '../Flexbox';
import {
  StyledToast,
  StyledProgressBar,
  StyledColoredBox,
  StyledToastContent,
  StyledToastIcon,
  StyledCloseButton,
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
    info: <RiInformationLine />,
    warning: <RiAlertLine />,
    success: <RiCheckLine />,
    danger: <RiCloseLine />,
  };
  return (
    <StyledToast
      position={position}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <StyledColoredBox toastType={toastType}>
        {
          (autoDismissAfter !== 0)
            ? (<StyledProgressBar paused={paused} autoDismissAfter={autoDismissAfter} />)
            : null
        }
      </StyledColoredBox>
      <StyledToastContent role="alert">
        <StyledCloseButton>
          <Button
            m={0}
            onClick={() => remove(id)}
            secondary
            icon={<RiCloseLine />}
            scale="tiny"
          />
        </StyledCloseButton>
        <StyledToastIcon>{icon[toastType]}</StyledToastIcon>
        <FlexColumn mx={6} my={2}>
          <Text m={0} pl={2} fontSize="small" fontWeight="bold">{content}</Text>
          {description && (<Text mt={1} mx={1} fontSize="small">{description}</Text>)}
        </FlexColumn>
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
