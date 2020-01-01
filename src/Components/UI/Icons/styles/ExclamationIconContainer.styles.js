import styled from 'styled-components';

export default styled.div`
  svg {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    
    path {
      fill: ${({ fill }) => fill};
    }
  }
`;