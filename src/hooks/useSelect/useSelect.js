import { useState, useEffect } from 'react';

const useSelect = (bref, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeElementIndex, setActiveElementIndex] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [focusableElements, setFocusableElements] = useState(null);
  const getKeyboardFocusableElements = (element) => ([...element.querySelectorAll(
    'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
  )].filter((el) => !el.hasAttribute('disabled')));

  useEffect(() => {
    if (isOpen && !focusableElements) {
      const elements = ref.current && getKeyboardFocusableElements(ref.current);
      setFocusableElements(elements);
    } else if (isOpen && focusableElements.length && (activeElementIndex !== null)) {
      focusableElements[activeElementIndex].focus();
    }
    if (!isOpen) {
      setFocusableElements(null);
      setActiveElementIndex(null);
    }
  }, [isOpen, activeElementIndex, focusableElements, ref, bref]);

  const toggle = (e) => {
    if (isOpen) {
      if (e.key && (e.keyCode === 13 || e.keyCode === 9 || e.keyCode === 32 || e.keyCode === 27)) {
        e.preventDefault();
        setIsOpen(false);
        if (bref.current) return bref.current.focus();
      }
      if (e.key && (e.keyCode === 38 || e.keyCode === 40)) {
        e.preventDefault();
        return setActiveElementIndex(0);
      }
      if (!e.key) {
        setIsOpen(false);
        if (bref.current) return bref.current.focus();
      }
    } else {
      if (e.key && (e.keyCode === 13 || e.keyCode === 32)) {
        e.preventDefault();
        return setIsOpen(true);
      }
      if (!e.key) {
        e.preventDefault();
        return setIsOpen(true);
      }
    }
  };

  const onKeyDown = (e) => {
    // User pressed the down arrow
    if (e.keyCode === 40) {
      if (activeElementIndex === null) return setActiveElementIndex(0);
      setActiveElementIndex((activeElementIndex) => (
        ((activeElementIndex + 1) === focusableElements.length)
          ? 0
          : (activeElementIndex + 1)
      ));
      e.preventDefault();
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeElementIndex === null) return setActiveElementIndex(0);
      setActiveElementIndex((activeElementIndex) => (
        (activeElementIndex !== 0) ? (activeElementIndex - 1) : (focusableElements.length - 1)
      ));
      e.preventDefault();
    } else if (e.keyCode === 13 || e.keyCode === 9 || e.keyCode === 32) {
      if (activeElementIndex === null) {
        return toggle(e);
      }
      if (focusableElements[activeElementIndex].getAttribute('href')) return;
      setSelectedElement(focusableElements[activeElementIndex].getAttribute('value'));
      toggle(e);
    } else if (e.keyCode === 27) {
      e.preventDefault();
      toggle(e);
    }
  };
  const onClick = (e) => {
    if (e.target.getAttribute('href')) {
      toggle(e);
      return;
    }
    setSelectedElement(e.target.getAttribute('value'));
    toggle(e);
  };

  return {
    toggle, isOpen, onKeyDown, onClick, selectedElement, activeElementIndex,
  };
};

/* @component */
export default useSelect;
