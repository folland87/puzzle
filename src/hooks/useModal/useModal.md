useModal example:

```jsx padded
import { useRef } from 'react';
import { Button } from '../../components/Button';
import Box from '../../components/Box';
import Link from '../../components/Link';
import Text from '../../components/Text';
import Input from '../../components/InputText';
import useModal from './useModal';
const { Modal, show } = useModal();

<>
  <Button secondary onClick={() => show()}>
    Toggle modal
  </Button>
  <Modal title="My modal">
    <Text>Put anything you want in the modal.</Text>
    <Box mb={1}><Link to="/">go to 1</Link></Box>
    <Box mb={1}><Link to="/">go to 2</Link></Box>
    <Box mb={1}><Link to="/">go to 3</Link></Box>
    <Input label="Need an TextInput ?" />
  </Modal>
</>
```
