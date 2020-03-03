import styled from 'styled-components';

export const Text = styled.p`
  word-break: break-all
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: ${({ margin }) => margin || '0'};
  overflow: ${({ overflow }) => overflow || 'auto'};
  justify-self: ${({ justifySelf }) => justifySelf};
  border: ${({ border }) => border};
  cursor: ${({ cursor }) => cursor || 'auto'};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  border-bottom: ${({ borderBottom }) => borderBottom};
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

export const DivContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-height: ${({ maxHeight }) => maxHeight};
  overflow: ${({ overflow }) => overflow};
  overflow-y: ${({ overflowY }) => overflowY};
  display: ${({ display }) => display};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border: ${({ border }) => border};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-radius: ${({ borderRadius }) => borderRadius};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  align-self: ${({ alignSelf }) => alignSelf};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
`;