import styled from 'styled-components';

export const Text = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin || '0'};
  overflow: ${({ overflow }) => overflow || 'auto'};
  justify-self: ${({ justifySelf }) => justifySelf};
  border: ${({ border }) => border};
  cursor: ${({ cursor }) => cursor || 'auto'};
  width: ${({ width }) => width};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-top: ${({ borderTop }) => borderTop};
  padding: ${({ padding }) => padding};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  z-index: ${({ zIndex }) => zIndex};
  position: ${({ position }) => position};
`;

export const GradientContainer = styled.div`
  z-index: initial;
  position: relative;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.47) 0%, #FFFFFF 100%);
`;

export const Gradient = styled.div`
  z-index: 10;
  position: relative;
`;