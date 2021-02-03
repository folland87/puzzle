bla


```jsx
import React, { useRef } from 'react';
import useSelect from './useSelect';
import { Button } from '../../components/Button';
import Text from '../../components/Text';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const ref = useRef(null);
const bref = useRef(null);
const { toggle, isOpen, onKeyDown, onClick, selectedElement, activeElementIndex } = useSelect(bref, ref);
const styles = {
  boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
  listStyle: 'none',
  padding: '3px',
  margin: 0,
  borderRadius: '4px',
  minWidth: '150px',
  position: 'absolute',
  background: '#fff',
  display: 'flex',
  flexDirection: 'column',
};


<>
  <Button
    iconRight={(isOpen) ? <FaCaretUp /> : <FaCaretDown />}
    ref={bref}
    outline
    aria-expanded={isOpen}
    onClick={(e) => toggle(e)}
    onKeyDown={(e) => toggle(e)}
  >
    {selectedElement || 'hello'}
  </Button>
  {
    (isOpen)
      ? (
        <div tabIndex={!isOpen ? '-1' : undefined} style={styles} ref={ref} onKeyDown={onKeyDown} onClick={onClick}>
          <Text fontWeight="medium" color="medium" underline="always">LIENS</Text>
          <a href="https://scanr.enseignementsup-recherche.gouv.fr/">scanr</a>
          <a href="https://scanr.enseignementsup-recherche.gouv.fr/">scanr1</a>
          <a href="https://scanr.enseignementsup-recherche.gouv.fr/">scanr2</a>
          <a href="https://scanr.enseignementsup-recherche.gouv.fr/">scanr3</a>
        </div>
      )
      : null
  }
</>

```
