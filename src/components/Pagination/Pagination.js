import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin } from 'styled-system';
import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
} from 'react-icons/fa';

import Button from '../Button';
import Text from '../Text';
import { get, filterProps } from '../utils';

const PaginationContainer = styled.div`
  ${margin};
  min-width: 100%;
  display: flex;
  align-items: center;
`;

const PaginationForm = styled.form`
  ${margin}
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

const PaginationInput = styled(({ pageCount, ...props }) => <input type="number" min={1} max={pageCount} {...filterProps(props)} />)`
  color: ${get('colors.dark.1')};
  background: ${get('colors.light.2')};
  text-align: center;
  max-width: 60px;
  padding: 0 ${get('space.1')};
  border-radius: ${get('radius.regular')};
  font-size: ${({ scale }) => get(`fontSizes.${scale}`)};
  height: ${({ scale }) => get(`heights.${scale}`)};
  min-width: 40px;
  cursor: text;
  color: ${get('colors.dark.1')};
  border: 0;
  &:focus {
    outline: 2px solid transparent;
    box-shadow: ${get('shadows.raised')};
    background-color: ${get('colors.light.0')};
  };
  &:disabled {
    cursor: default;
  };
  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

export const Pagination = ({
  scale,
  currentPage,
  pageCount,
  onPageChange,
  buttonOutline,
  buttonColor,
  buttonRadius,
}) => {
  const [inputPage, setInputPage] = useState(currentPage);
  const handleChange = (nextPageIndex) => {
    if (nextPageIndex === currentPage) return;
    if (nextPageIndex > pageCount || nextPageIndex <= 0) return;
    setInputPage(nextPageIndex);
    onPageChange(nextPageIndex);
  };

  return (
    <PaginationContainer as="nav">
      <Button
        m={1}
        scale={scale}
        color={buttonColor}
        outline={buttonOutline}
        variant="filled"
        radius={buttonRadius}
        disabled={currentPage === 1}
        onClick={() => handleChange(1)}
        icon={<FaAngleDoubleLeft aria-label="première page" />}
      />
      <Button
        m={1}
        scale={scale}
        color={buttonColor}
        outline={buttonOutline}
        variant="filled"
        radius={buttonRadius}
        disabled={currentPage === 1}
        onClick={() => handleChange(currentPage - 1)}
        icon={<FaAngleLeft aria-label="page précédante" />}
      />
      <PaginationForm mx={3} onSubmit={() => handleChange(inputPage)}>
        <PaginationInput
          scale={scale}
          value={inputPage}
          onChange={(e) => setInputPage(e.value)}
          aria-label={`page ${currentPage} / ${pageCount}. Entrez un numéro de page et validez avec la touche Entrée`}
          pageCount={pageCount}
          onBlur={() => setInputPage(currentPage)}
        />
        <Text fontSize={scale} px={2} noWrap>
          /
          {pageCount}
        </Text>
      </PaginationForm>
      <Button
        m={1}
        scale={scale}
        color={buttonColor}
        outline={buttonOutline}
        radius={buttonRadius}
        variant="filled"
        disabled={currentPage === pageCount}
        onClick={() => handleChange(currentPage + 1)}
        icon={<FaAngleRight aria-label="page suivante" />}
      />
      <Button
        m={1}
        scale={scale}
        color={buttonColor}
        outline={buttonOutline}
        radius={buttonRadius}
        variant="filled"
        disabled={currentPage === pageCount}
        onClick={() => handleChange(pageCount)}
        icon={<FaAngleDoubleRight aria-label="dernière page" />}
      />
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  scale: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonRadius: PropTypes.string,
  buttonOutline: PropTypes.bool,
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  scale: 'medium',
  buttonColor: 'primary',
  buttonRadius: 'rounded',
  buttonOutline: true,
  currentPage: 1,
  pageCount: 1,
  onPageChange: () => {},
};

export default Pagination;
