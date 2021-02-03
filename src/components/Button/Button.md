```jsx padded
import { Button } from '.';
import { RiArrowRightLine } from 'react-icons/ri';

<>
  <Button scale="tiny" label="Push me i'm famous">
    Click Me
  </Button>
  <Button isLoading scale="small">
   Test button
  </Button>
  <Button iconRight={<RiArrowRightLine />} scale="regular">
   Test button
  </Button>
  <Button scale="large">
    Click Me
  </Button>
</>
```

```jsx padded
import { Button } from '.';
<>
  <Button secondary>
    Click Me
  </Button>
  <Button isLoading secondary>
    Click Me
  </Button>
  <Button secondary>
    Click Me
  </Button>
  <Button secondary disabled>
    Click Me
  </Button>
</>
```

```jsx padded
import { LinkButton } from '.';
import { RiArrowRightLine } from 'react-icons/ri';
<>
  <LinkButton>
    Click Me
  </LinkButton>
  <LinkButton iconRight={<RiArrowRightLine />}>
    Click Me
  </LinkButton>
</>
```

```jsx padded
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { Button, CloseButton } from '.';

<>
  <Button scale="tiny" secondary label="bye me a coffee" icon={<RiMenuLine />} />
  <Button scale="large">
    Click Me
  </Button>
  <Button icon={<RiMenuLine />}>
    Click Me
  </Button>
  <Button secondary icon={<RiCloseLine />}/>
  <Button secondary scale="tiny" icon={<RiMenuLine />}>
    Click Me
  </Button>
</>
```

```jsx padded
import { Button } from '.';

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
