import { useState, useEffect } from 'react';

const useFocusTrap = (ref) => {
  const [focus, setFocus] = useState(0);
  const [focusableElements, setFocusableElements] = useState(null);

  const getKeyboardFocusableElements = (element) => {
    return [...element.querySelectorAll(
      'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    )]
    .filter(el => !el.hasAttribute('disabled'))
  }

  const handleTabulation = (e) => {
    e.preventDefault();
    if (e.keyCode === 9 && !e.shiftKey) {
      setFocus((focus) => ((focus + 1) % focusableElements.length));
    }
    if (e.keyCode === 9 && e.shiftKey) {
      setFocus((focus) => ((focus - 1 < 0) ? (focusableElements.length - 1) : (focus -1)));
    }
  };

  useEffect(() => {
    if (!focusableElements) {
      const elements = ref.current && getKeyboardFocusableElements(ref.current);
      setFocusableElements(elements);
    } else {
      focusableElements[focus].focus();
    }
  }, [focus, focusableElements, ref])

  return handleTabulation;
}

/* @component */
export default useFocusTrap;
