Modal example:

```jsx
import {useState} from 'react';
import Text from '../Text'
const [isOpen, setIsOpen] = useState(false);

const show = () => setIsOpen(true);
const hide = () => setIsOpen(false);

<>
  {
    (isOpen) ? <Modal title="🍕" hide={hide}><Text>Try useModal. it handles modal toggle for U!</Text> </Modal> : <button onClick={show}>open modal</button>
  }
</>
```
