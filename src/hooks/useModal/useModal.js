import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalModal from '../../components/Modal';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);

  const Modal = ({ title, children }) => (
    (isOpen) ? <GlobalModal title={title} hide={hide}>{children}</GlobalModal> : null
  );

  Modal.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };

  Modal.defaultProps = {
    title: null,
    children: null,
  };

  return {
    show,
    hide,
    Modal,
  };
};

/* @component */
export default useModal;
