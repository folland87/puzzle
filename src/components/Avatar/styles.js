import styled from 'styled-components';
import { margin, size } from 'styled-system';
import { get } from '../../theme/getters';

const getRadius = ({ size, square }) => {
  if (!square) return get('radius.rounded');
  if (size > 64) return get('radius.double');
  return get('radius.regular');
}

export const AvatarImg = styled.img`
  ${margin};
  ${size};
  border-radius: ${getRadius};
  overflow: hidden;
  vertical-align: middle;
`;

export const AvatarFallback = styled.span`
  ${margin};
  ${size};
  font-family: ${get('fonts.primary')};
  font-size: ${({fontSize}) => get(`fontSizes.${fontSize}`)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${get('colors.primary.0')};
  border-radius: ${getRadius};
  color: ${get('colors.background.4')};
`;
