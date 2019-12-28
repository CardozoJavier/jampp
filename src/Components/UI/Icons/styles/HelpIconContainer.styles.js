import styled from 'styled-components';

export default styled.div`
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  margin: ${({ margin }) => margin || '0 10px'};

  svg {
    fill: ${({ fill }) => fill};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    vertical-align: middle;
  }
`;