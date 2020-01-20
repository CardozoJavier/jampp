import styled from 'styled-components';

export default styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 100%;
  pointer-events: none;
`;