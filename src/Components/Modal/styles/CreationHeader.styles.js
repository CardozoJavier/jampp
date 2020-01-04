import styled from 'styled-components';
import { palette } from '../../styles';
const { black, gray } = palette;

export const CreationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  align-items: center;
`;

export const CreationHeader = styled.div``;

export const CreationHeaderTitle = styled.p`
  font-size: 24px;
  color: ${black};
  margin: 32px 0 0 0;
`;

export const CreationHeaderDescription = styled.p`
  font-size: 12px;
  color: ${gray.g4};
  margin: 8px 0 16px 0;
`;