Pagination example:

```jsx
import { useState } from 'react';
const [page, setPage] = useState(1);

<Pagination
  pageCount={12}
  currentPage={page}
  onPageChange={(nextPage) => setPage(nextPage)}
/>
```
