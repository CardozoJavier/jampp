import styled from 'styled-components';

export const Text = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin || '0'};
  overflow: ${({ overflow }) => overflow || 'auto'};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
`;