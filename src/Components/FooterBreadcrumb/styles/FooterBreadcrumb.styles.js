import styled from 'styled-components';
import { palette } from '../../styles';
const { white } = palette;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: ${white};
  padding: 10px 0;
`;