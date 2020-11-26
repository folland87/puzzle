```jsx
import { useState } from 'react';

const [checked, setChecked] = useState(false);

<Checkbox label="Check Me" checked={checked} onChange={() => setChecked(!checked)} />
```
