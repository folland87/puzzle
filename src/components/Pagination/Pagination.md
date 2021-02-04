Pagination example:

```jsx
import { useState } from 'react';
const [page, setPage] = useState(1);

<Pagination
  pageCount={1258}
  currentPage={page}
  onPageChange={(nextPage) => setPage(nextPage)}
/>
```
