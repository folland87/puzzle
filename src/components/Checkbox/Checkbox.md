```jsx
import { useState } from 'react';

const [checked, setChecked] = useState(false);

<Checkbox
  description="Hello world as an additional description of the Box !"
  label="Check Me"
  checked={checked}
  onChange={(value, checkedStatus) => setChecked(checkedStatus)}
/>
```
