import styled from 'styled-components';

export default styled.img`
  src: ${({ src }) => src};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
`;