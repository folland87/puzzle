import {
  space,
  layout,
  flexbox,
  border,
} from 'styled-system';
import styled from 'styled-components';

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${flexbox}
  ${border}
  ${space}
  ${layout}
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  ${flexbox}
  ${space}
  ${layout}
  ${border}
`;

export const FlexBox = styled.div`
  display: flex;
  ${flexbox}
  ${space}
  ${layout}
  ${border}
`;
