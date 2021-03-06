import styled from 'styled-components';
import { size } from 'styled-system';
import { get } from '../utils';

/**
 * Styled conponents loading spinner.
 * credits to jdacosta from https://codepen.io/jdacosta/pen/dobzpM
 */
const StyledSpinner = styled.svg`
  ${size};
  transform: rotate(-90deg);
  stroke-linecap: round;
  stroke-width: 4;
  fill: none;

  .internal-circle,
  .external-circle {
    stroke-dashoffset: 0;
    transform-origin: center;
    opacity: 1;
  }

  .internal-circle {
    stroke: ${({ color }) => get(`colors.${color}`, get('colors.link'))};
    stroke-dasharray: 187;
    animation: internal 1s ease-in-out infinite;
  }

  .external-circle {
    stroke: ${({ color }) => get(`colors.${color}`, get('colors.link'))};
    stroke-dasharray: 312;
    animation: external 1s linear infinite;
  }
  @keyframes internal {
    0% {
      stroke-dashoffset: 187;
    }
    25% {
      stroke-dashoffset: 80;
    }
    100% {
      stroke-dashoffset: 187;
      transform: rotate(360deg);
    }
  }

  @keyframes external {
    0% {
      stroke-dashoffset: 312;
      transform: rotate(70deg);
    }
    60% {
      stroke-dashoffset: -312;
    }
    100% {
      stroke-dashoffset: -312;
      transform: rotate(450deg);
    }
  }
`;

export default StyledSpinner;
