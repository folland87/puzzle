import { space } from 'styled-system';
import styled from 'styled-components';
import { getSpace } from '../../theme/getters';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${({itemMinWidth}) => itemMinWidth}, 1fr));
  row-gap: ${({rowGap}) => getSpace(rowGap)};
  column-gap: ${({columnGap}) => getSpace(columnGap)};
  ${space}

  > * {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default StyledGrid;
