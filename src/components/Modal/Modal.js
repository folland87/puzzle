import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { RiCloseLine } from 'react-icons/ri';
import { Button } from '../Button';
import { Title } from '../Headings';
import { FlexRow } from '../Flexbox';
import Box from '../Box';

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
            <Title mr="auto" htmlTag="h1" titleStyle="H3">{title}</Title>
            <Button onClick={hide} secondary icon={<RiCloseLine />} scale="tiny" />
          </FlexRow>
          <Box pt={3}>
            {children}
          </Box>
        </StyledModal>
      </StyledOverlay>, document.body,
    )
  );
};

export default Modal;
