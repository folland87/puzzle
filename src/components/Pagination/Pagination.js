import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { FaAngleLeft, FaAngleRight, FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa'

import Button from '../Button';
import Text from '../Text';
import {
  getColor,
  filterProps,
  getFontSize,
  getHeight,
  getFont,
  getRadius,
  getSpace,
  getElevation,
} from '../../theme/getters';


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

const PaginationInput = styled(({ pageCount, ...props }) => <input type="number" min={1} max={pageCount} {...filterProps(props)}/>)`
  color: ${getColor('text')};
  background: ${getColor('background-2')};
  text-align: center;
  max-width: 60px;
  padding: 0 ${getSpace(1)};
  border-radius: ${getRadius('regular')};
  font-size: ${({scale}) => getFontSize(scale)};
  height: ${({scale}) => getHeight(scale)};
  font-family: ${getFont('primary')};
  min-width: 40px;
  cursor: text;
  color: ${getColor('text')};
  border: 0;
  &:focus {
    outline: 2px solid transparent;
    ${getElevation('raised')};
    background-color: ${getColor('background-4')};
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
  const handleChange = (nextPageIndex) => {
    if (nextPageIndex === currentPage) return;
    if (nextPageIndex > pageCount || nextPageIndex <= 0) return;
    setInputPage(nextPageIndex);
    onPageChange(nextPageIndex);
  };
  const [inputPage, setInputPage] = useState(currentPage);


  return (
    <PaginationContainer as="nav">
      <Button
        m={1}
        scale={scale}
        color={buttonColor}
        outline={buttonOutline}
        radius={buttonRadius}
        disabled={currentPage === 1}
        onClick={() => handleChange(1)}
        icon={<FaAngleDoubleLeft aria-label="première page"/>}
      />
      <Button
        m={1}
        scale={scale}
        color={buttonColor}
        outline={buttonOutline}
        radius={buttonRadius}
        disabled={currentPage === 1}
        onClick={() => handleChange(currentPage - 1)}
        icon={<FaAngleLeft aria-label="page précédante" />}
      />
      <PaginationForm mx={3} onSubmit={() => handleChange(inputPage)}>
        <PaginationInput
          scale={scale}
          value={inputPage}
          onChange={e => setInputPage(e.value)}
          aria-label={`page ${currentPage} / ${pageCount}. Entrez un numéro de page et validez avec la touche Entrée`}
          pageCount={pageCount}
          onBlur={() => setInputPage(currentPage)}
        />
        <Text fontSize={scale} px={2} noWrap> / {pageCount}</Text>
      </PaginationForm>
      <Button
        m={1}
        scale={scale}
        color={buttonColor}
        outline={buttonOutline}
        radius={buttonRadius}
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
        disabled={currentPage === pageCount}
        onClick={() => handleChange(pageCount)}
        icon={<FaAngleDoubleRight aria-label="dernière page" />}
      />
    </PaginationContainer>
  );
}

Pagination.propTypes = {
  scale: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonRadius: PropTypes.string,
  buttonOutline: PropTypes.bool,
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
  onPageChange: PropTypes.func,
  m: PropTypes.number,
};

Pagination.defaultProps = {
  scale: 'medium',
  buttonColor: 'primary',
  buttonRadius: 'rounded',
  buttonOutline: true,
  currentPage: 1,
  pageCount: 1,
  onPageChange: () => {},
  m: 2,
};

export default Pagination;
