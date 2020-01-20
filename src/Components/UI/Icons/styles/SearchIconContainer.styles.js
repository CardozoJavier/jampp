import styled from 'styled-components';

export default styled.div`
  display: flex;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  margin: ${({ margin }) => margin};

  svg {
    fill: ${({ fill }) => fill};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    vertical-align: middle;
  }
`;