import styled from 'styled-components';
import { palette } from '../../styles';
const { black, gray, white } = palette;

export const CardTitle = styled.p`
  font-size: 14px;
  color: ${black};
  margin: 0;
  padding: 5px 0;
`;

export const CardContainer = styled.div`
  width: ${({ width }) => width || '600px'};
  min-height: 240px;
  border: 1px solid ${gray.g2};
  border-radius: 4px;
  padding: ${({ padding }) => padding || '15px'};
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
`;

export const CardDescription = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${gray.g4};
  padding: 5px 0;
`;

export const CardHeader = styled.div`
  border-bottom: ${({ borderBottom }) => borderBottom || `1px solid ${gray.g2}`};
  padding-bottom: 15px;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  align-items: baseline;
  justify-content: flex-start;
`;