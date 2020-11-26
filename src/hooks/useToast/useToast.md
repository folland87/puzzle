```jsx padded
import Button from '../../components/Button';
import useToast from './useToast';
const { toast } = useToast();
<>
  <Button
    color="warning"
    variant="filled"
    radius="regular"
    onClick={() => toast({
      content: 'Je suis tout grillé ! ',
      description: 'Attention aux doigts... Tu risques de te brûler en me prenant tout de suite.',
      toastType: 'warning',
    })}
  >
    Toast warning
  </Button>
  <Button
    color="success"
    variant="filled"
    radius="regular"
    onClick={() => toast({
      content: 'Je suis tout grillé ! ',
      toastType: 'success',
    })}
  >
    Toast success
  </Button>
  <Button
    color="danger"
    variant="filled"
    radius="regular"
    onClick={() => toast({
      content: 'Je suis tout grillé ! ',
      toastType: 'danger',
    })}
  >
    Toast danger
  </Button>
  <Button
    color="info"
    variant="filled"
    radius="regular"
    onClick={() => toast({
      content: 'Je suis tout grillé ! ',
      toastType: 'info',
      autoDismissAfter: null,
    })}
  >
    Toast Info
  </Button>
</>
```
