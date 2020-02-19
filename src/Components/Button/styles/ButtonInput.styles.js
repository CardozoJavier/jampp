import styled from 'styled-components';

export default styled.a`
  display: inline-block;
  pointer-events: none;
  max-width: ${({ maxWidth }) => maxWidth};
  overflow: ${({ overflow }) => overflow};
`;