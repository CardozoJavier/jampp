import styled from 'styled-components';
import { palette } from '../../../styles';
const { action, gray } = palette;

export default styled.div`
  position: ${({ position }) => position || 'absolute'};

  path {
    fill: ${({ checked }) => checked ? action : gray.g3};
  }
`;