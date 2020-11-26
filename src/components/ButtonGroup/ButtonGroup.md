```jsx
import Button from '../Button';
import { FaChevronRight } from 'react-icons/fa';

<ButtonGroup>
  <Button variant="filled" color="success" iconRight={<FaChevronRight />}>
    Click Me
  </Button>
  <Button variant="filled" color="success" iconRight={<FaChevronRight />} iconLeft={<FaChevronRight />}>
    Click Me
  </Button>
  <Button variant="filled" color="success" iconLeft={<FaChevronRight />}>
    Click Me
  </Button>
</ButtonGroup>
```
```jsx
import Button from '../Button';
import { FaChevronRight } from 'react-icons/fa';

<ButtonGroup>
  <Button variant="flat" color="success" iconRight={<FaChevronRight />}>
    Click Me
  </Button>
  <Button variant="flat" color="success" iconRight={<FaChevronRight />} iconLeft={<FaChevronRight />}>
    Click Me
  </Button>
  <Button variant="flat" color="success" iconLeft={<FaChevronRight />}>
    Click Me
  </Button>
</ButtonGroup>
```
```jsx
import Button from '../Button';
import { FaChevronRight } from 'react-icons/fa';

<ButtonGroup>
  <Button color="success" iconRight={<FaChevronRight />}>
    Click Me
  </Button>
  <Button color="success" iconRight={<FaChevronRight />} iconLeft={<FaChevronRight />}>
    Click Me
  </Button>
  <Button color="success" iconLeft={<FaChevronRight />}>
    Click Me
  </Button>
</ButtonGroup>
```
