import styled from 'styled-components';

export default styled.div`
  display: flex;

  svg {
    fill: ${({ fill }) => fill};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    vertical-align: middle;
  }
`;