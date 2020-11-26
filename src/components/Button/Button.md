```jsx padded
import { FaChevronRight } from 'react-icons/fa';
import Avatar from '../Avatar';
<>
  <Button iconRight={<FaChevronRight />} color="success" scale="small" label="Push me i'm famous">
    Click Me
  </Button>
  <Button iconRight={<FaChevronRight />} iconLeft={<FaChevronRight />} scale="medium">
   Test button
  </Button>
  <Button scale="large" icon={<FaChevronRight />}>
    Click Me
  </Button>
</>
```

```jsx padded
<Button variant='filled'>
  Click Me
</Button>
<Button isLoading variant='filled' color="primary">
  Click Me
</Button>
<Button variant='filled' color="info">
  Click Me
</Button>
<Button variant='filled' color="danger">
  Click Me
</Button>
```

```jsx padded
<Button variant="flat">
  Click Me
</Button>
<Button isLoading variant="flat" color="primary">
  Click Me
</Button>
<Button variant="flat" color="success">
  Click Me
</Button>
<Button variant="flat" color="danger">
  Click Me
</Button>
```

```jsx padded
<Button outline color="frejus">
  Cancel
</Button>
<Button>
Go ahead !
</Button>
```

```jsx padded
<Button color="success">
  Click Me
</Button>
<Button outline color="success">
Click Me
</Button>

```

```jsx padded
import { FaEllipsisV, FaBars, FaCoffee } from 'react-icons/fa';

<>
  <Button radius="rounded" label="bye me a coffee" scale="extralarge" icon={<FaCoffee />} />

  <Button radius="rounded" icon={<FaBars />}>
    Click Me
  </Button>
  <Button radius="rounded" outline icon={<FaBars />}>
    Click Me
  </Button>
  <Button radius="rounded" scale="tiny" icon={<FaEllipsisV />}>
    Click Me
  </Button>
</>
```

```jsx padded
<>
  <Button scale='large' isLoading>
    Click Me
  </Button>
  <Button disabled>
    Click Me
  </Button>
  <Button>
    Click Me
  </Button>
  <Button>
    Click Me
  </Button>
</>
```
