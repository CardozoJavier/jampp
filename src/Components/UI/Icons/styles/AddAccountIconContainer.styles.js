import styled from 'styled-components';
import { palette } from '../../../styles';
import { SVGContainer } from '.';
const { action, gray } = palette;

export default styled(SVGContainer)`
  svg {
    fill: ${({ checked }) => checked ? action : gray.g3};
    fill: ${({ fill }) => fill};
  }
`;