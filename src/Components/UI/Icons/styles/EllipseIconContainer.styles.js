import styled from 'styled-components';
import { SVGContainer } from '.';

export default styled(SVGContainer)`
  display: ${({ hasNotification }) => hasNotification ? 'flex' : 'none'};
  svg {
    viewBox: ${({ viewBox }) => viewBox};
    fill: ${({ fill }) => fill};
    circle {
      r: ${({ radio }) => radio};
      cx: ${({ radio }) => radio};
      cy: ${({ radio }) => radio};
    }
  }
`;