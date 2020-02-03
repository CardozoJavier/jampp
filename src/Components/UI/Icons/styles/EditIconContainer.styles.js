import styled from 'styled-components';

export default styled.div`
  svg {
    fill: ${({ fill }) => fill};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  }
`;