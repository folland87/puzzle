import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  space,
  layout,
  grid,
  border,
} from 'styled-system';
import StyledGrid from './styles';

const Grid = styled.div`
  display: grid;
  ${grid}
  ${border}
  ${space}
  ${layout}
`;

/* @components */
export default Grid;

export const ResponsiveGrid = ({
  children,
  itemMinWidth,
  gap,
  rowGap,
  columnGap,
  ...rest
}) => {
  const rGap = (gap || gap === 0) ? gap : rowGap;
  const cGap = (gap || gap === 0) ? gap : columnGap;
  return (
    <StyledGrid
      itemMinWidth={itemMinWidth}
      rowGap={rGap}
      columnGap={cGap}
      {...rest}
    >
      {children}
    </StyledGrid>
  );
};

ResponsiveGrid.propTypes = {
  /**
  * Grid centent
  */
  children: PropTypes.node,
  /**
  * The minimum with a grid item can take. Indicates when to wrap elements in a new row;
  * Indicate it as a string with px, em, rem.
  */
  itemMinWidth: PropTypes.string,
  /**
  * Shortcut for setting the same Row and column gap.
  */
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
  * Grid row gap
  */
  rowGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
  * Grid column gap
  */
  columnGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ResponsiveGrid.defaultProps = {
  gap: null,
  rowGap: 3,
  columnGap: 3,
  itemMinWidth: '300px',
};
