Router tabs

```jsx
import { useState } from 'react';
const [ activeTab, setActiveTab] = useState(2);

<>
  <Tabs color="istres">
    <Tabs.Tab isActive={activeTab === 1} onMouseDown={() => setActiveTab(1)} to="#">
      Hello
    </Tabs.Tab>
    <Tabs.Tab isActive={activeTab === 2} onMouseDown={() => setActiveTab(2)} to="#">
      Hello2
    </Tabs.Tab>
    <Tabs.Tab isActive={activeTab === 3} onMouseDown={() => setActiveTab(3)} to="#">
      Hello3
    </Tabs.Tab>
  </Tabs>
</>
```
