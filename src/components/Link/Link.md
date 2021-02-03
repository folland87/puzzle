Link is a components that wraps a text component, ensuring it renders a <a> tag.
It uses a link from `react-router-dom` for internal links and a classic anchor tag for external links.

```jsx padded
import Box from '../Box';
<>
  <Box><Link to="https://scanr.enseignementsup-recherche.gouv.fr/">Go to scanR</Link></Box>
  <Box><Link to="#/Composants UI/Text">Go to Text component</Link></Box>
</>
```
