import styled from 'styled-components';

export default styled.div`
  position: ${({ position }) => position || 'absolute'};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  margin: ${({ margin }) => margin};

  svg {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    vertical-align: middle;
    path {
      fill: ${({ fill }) => fill};
    }
  }

  &:hover {
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  }
`;