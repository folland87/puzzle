Modal example:

```jsx
import {useState} from 'react';

const [isOpen, setIsOpen] = useState(false);

const show = () => setIsOpen(true);
const hide = () => setIsOpen(false);

<>
  {
    (isOpen) ? <Modal title="🍕" hide={hide}>Try useModal. it handles modal toggle for U! </Modal> : <button onClick={show}>open modal</button>
  }
</>
```
