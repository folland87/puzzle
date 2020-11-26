useModal example:

```jsx padded
import Button from '../../components/Button';
import Link from '../../components/Link';
import Input from '../../components/InputText';
import useModal from './useModal';
const { Modal, show } = useModal();

<>
  <Button onClick={() => show()}>
    Toggle modal
  </Button>
  <Modal title="My modal">
    Put anything you want in the modal.
    <Link to="/">go to 1</Link>
    <Link to="/">go to 2</Link>
    <Link to="/">go to 3</Link>
    <Input />
  </Modal>
</>
```
