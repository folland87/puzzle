import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { InputText, Text, FlexRow } from '../../src';

const TableOfContentsRenderer = ({
  children,
  searchTerm,
  onSearchTermChange
}) => {
  return (
    <div>
      <nav>
        <FlexRow alignItems="flex-end" justifyContent="space-around">
          <Text fontSize="huge" fontWeight="bold">Puzzle</Text>
        </FlexRow>
        <InputText
          m={3}
          radius="regular"
          placeholder="Filter by name..."
          width="180px"
          value={searchTerm}
          iconRight={<FaSearch />}
          onChange={(e) => onSearchTermChange(e.target.value)}
        />
        {children}
      </nav>
    </div>
  );
}

TableOfContentsRenderer.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default TableOfContentsRenderer;
