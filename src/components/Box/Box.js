import {
  space,
  layout,
  color,
  typography,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
} from 'styled-system';
import styled from 'styled-components';

const Box = styled.div`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${position}
  ${shadow}
`;

/* @component */
export default Box;
