Dropdown example:

```jsx
import { FaCaretDown } from 'react-icons/fa';
import Link from '../Link';
import { FlexRow } from '../Flexbox';
import Text from '../Text';
import { Button } from '../Button';
import Separator from '../Separator';

const button = (
  <>
    <Button>
      About
      <FaCaretDown />
    </Button>
  </>
);
<FlexRow>
  <Dropdown button={button}>
    <Text color='mediumdark' mx={3} my={0}>LINKS</Text>
    <Separator width='50%' height='1px' color='mediumdark' m={0} mx={3}/>
    <Link color="darker" underline="none" to="https://scanr.enseignementsup-recherche.gouv.fr/">
      Hello
    </Link>
    <Link color="darker" underline="none" to="https://scanr.enseignementsup-recherche.gouv.fr/">
      world
    </Link>
    <Text color='mediumdark' mx={3} my={0}>SOMETHING ELSE</Text>
    <Separator width='50%' height='1px' color='mediumdark' mx={3}/>
    <Link color="darker" underline="none" to="https://scanr.enseignementsup-recherche.gouv.fr/">
      Hello
    </Link>
    <Link color="darker" underline="none" to="https://scanr.enseignementsup-recherche.gouv.fr/">
      world
    </Link>
  </Dropdown>

  <Dropdown ml="auto" button={button} direction='left'>
    <Link color="darker" underline="none" to="https://scanr.enseignementsup-recherche.gouv.fr/">
      Hello
    </Link>
    <Link color="darker" underline="none" to="https://scanr.enseignementsup-recherche.gouv.fr/">
      world
    </Link>
  </Dropdown>
</FlexRow>
```
