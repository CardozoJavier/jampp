import styled from 'styled-components';

export default styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  position: ${({ position}) => position || 'unset'};
  top: ${({ top }) => top || '0'};
  right: ${({ right }) => right || '0'};
  bottom: ${({ bottom }) => bottom || '0'};
  left: ${({ left }) => left || '0'};
  margin: ${({ margin }) => margin || '0'};

  svg {
    fill: ${({ fill }) => fill};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  }

  &:hover {
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  }
`;