import styled from 'styled-components';
import { palette } from '../../../styles';
import { SVGContainer } from '.';
const { gray, white } = palette;

export default styled(SVGContainer)`
  &:hover {
    cursor: inherit;
  }
`;