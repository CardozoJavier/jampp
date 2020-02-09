import styled from 'styled-components';
import { SVGContainer } from '.';

export default styled(SVGContainer)`
  &:hover {
    svg {
      fill: ${({ hover }) => hover};
    }
  }
`;