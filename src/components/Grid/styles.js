import { space } from 'styled-system';
import styled from 'styled-components';
import { get } from '../utils';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${({ itemMinWidth }) => itemMinWidth}, 1fr));
  row-gap: ${({ rowGap }) => get(`space.${rowGap}`)};
  column-gap: ${({ columnGap }) => get(`space.${columnGap}`)};
  ${space}

  > * {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default StyledGrid;
