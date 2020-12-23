import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import Button from '../Button';
import Text from '../Text';
import { FlexBox, FlexRow } from '../Flexbox';
import useFocusTrap from '../../hooks/useFocusTrap';
import { StyledOverlay, StyledModal } from './styles';

const Modal = ({ children, title, hide }) => {
  // Focus trap from https://medium.com/@seif_ghezala/how-to-create-an-accessible-react-modal-5b87e6a27503
  const modalRef = useRef();
  const overlayRef = useRef();
  const handleTabulation = useFocusTrap(modalRef);
  const handleOverlayClick = (e) => {
    if (!overlayRef.current || (overlayRef.current === e.target)) {
      hide();
    }
  };

  const handleAllKeyDown = (e) => {
    if (e.keyCode === 27) {
      hide();
      e.preventDefault();
    }
    if (e.keyCode === 9) {
      handleTabulation(e);
    }
  };

  return (
    ReactDOM.createPortal(
      <StyledOverlay ref={overlayRef} onClick={(e) => handleOverlayClick(e)}>
        <StyledModal
          ref={modalRef}
          onKeyDown={(e) => handleAllKeyDown(e)}
        >
          <FlexRow alignItems="center" flexShrink={0}>
            <Text m={1} mr="auto" fontWeight="bold" fontSize="extralarge">{title}</Text>
            <Button
              onClick={hide}
              color="secondary"
              radius="rounded"
              flat
              icon={<FaTimes />}
            />
          </FlexRow>
          <FlexBox pt={3}>
            {children}
          </FlexBox>
        </StyledModal>
      </StyledOverlay>, document.body,
    )
  );
};

export default Modal;
