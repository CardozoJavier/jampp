import styled from 'styled-components';

export default styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  position: ${({ position}) => position || 'unset'};
  top: ${({ top }) => top || 'unset'};
  right: ${({ right }) => right || 'unset'};
  bottom: ${({ bottom }) => bottom || 'unset'};
  left: ${({ left }) => left || 'unset'};
  margin: ${({ margin }) => margin || '0'};
  cursor: ${({ cursor }) => cursor};
  display: ${({ display }) => display};
  justify-self: ${({ justifySelf }) => justifySelf};

  svg {
    fill: ${({ fill }) => fill};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    path {
      stroke: ${({ stroke }) => stroke};
    }
  }
`;