grid test


Usinf responsiveGrid components to display responsive equaly sized columns;
You need to define the minimum item width
```jsx
import Grid, {ResponsiveGrid} from './Grid';
import Text from '../Text';
import Box from '../Box';

<ResponsiveGrid itemMinWidth="250px">
  <Box bg='palevioletred'><Text p={2} m={0} textAlign='center'>grid content</Text></Box>
  <Box bg='palevioletred'><Text p={2} m={0} textAlign='center'>grid content</Text></Box>
  <Box bg='palevioletred'><Text p={2} m={0} textAlign='center'>grid content</Text></Box>
  <Box bg='palevioletred'><Text p={2} m={0} textAlign='center'>grid content</Text></Box>
  <Box bg='palevioletred'>
    <Text p={2} m={0} textAlign='center'>
      grid content vfreinjfnpiuezherzpoghvuofdmvhmeroighvoîfhgqoeùjraigùvjùzreorjvaùe
    </Text>
  </Box>
  <Box bg='palevioletred'><Text p={2} m={0} textAlign='center'>grid content</Text></Box>
  <Box bg='palevioletred'><Text p={2} m={0} textAlign='center'>grid content</Text></Box>
</ResponsiveGrid>
```

Using Styled system responsive fonctionnality.
```jsx
import Grid, {ResponsiveGrid} from './Grid';
import Text from '../Text';
import Box from '../Box';

<Grid mt={3} gridAutoRows="400px" gridTemplateColumns={["1fr", "1fr", "1fr", "2fr 1fr"]} gridGap="16px">
  <Box display='flex' justifyContent="center" bg='lightgreen'><Text p={2} m={0}>grid content</Text></Box>
  <Box display='flex' justifyContent="center" bg='lightgreen'><Text p={2} m={0}>grid content</Text></Box>
</Grid>

```

Define everything yourself
```jsx
import Grid, {ResponsiveGrid} from './Grid';
import Text from '../Text';
import Box from '../Box';

<Grid mt={3} gridAutoRows="100px" gridTemplateColumns="repeat(3, calc(33.33333333% - 11px))" gridGap="16px">
  <Box display='flex' justifyContent="center" bg='aliceblue'><Text p={2} m={0}>grid content</Text></Box>
  <Box display='flex' justifyContent="center" bg='aliceblue'><Text p={2} m={0}>grid content</Text></Box>
  <Box display='flex' justifyContent="center" bg='aliceblue'><Text p={2} m={0}>grid content</Text></Box>
  <Box display='flex' justifyContent="center" bg='aliceblue'><Text p={2} m={0}>grid content</Text></Box>
  <Box display='flex' justifyContent="center" bg='aliceblue'>
    <Text p={2} m={0}>
      grid content vfreinjfnpiuezherzpoghvuofdmvhmeroighvoîfhgqoeùjraigùvjùzreorjvaùe
    </Text>
  </Box>
  <Box display='flex' justifyContent="center" bg='aliceblue'><Text p={2} m={0} textAlign='center'>grid content</Text></Box>
  <Box display='flex' justifyContent="center" bg='aliceblue'><Text p={2} m={0} textAlign='center'>grid content</Text></Box>
</Grid>
```
