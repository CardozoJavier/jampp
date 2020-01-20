import styled from 'styled-components';
import { palette } from '../../styles';
const { gray } = palette;

export const Container = styled.div`
  background-color: ${gray.g2};
  border-radius: 4px;
  margin: 0 20px;
  height: 16px;
  width: 82px;
  overflow: hidden;
`;

export const Fading = styled.div`
  height: 16px;
  width: 32px;
  filter: blur(5px);
  background-color: rgba(0, 0, 0, .075);
  transform: translateX(-32px);
  overflow: hidden;
  
  animation: loading .75s ease-out infinite;
  
  @keyframes loading {
    0% {
    }
    100% {
      transform: translateX(82px);
    }
  }
`;