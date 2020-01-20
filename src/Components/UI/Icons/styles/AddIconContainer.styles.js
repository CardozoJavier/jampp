import styled from 'styled-components';
import { palette } from '../../../styles';
const { gray, white } = palette;

export default styled.div`
  display: flex;

  svg {
    width: ${({ width }) => width};
    height: ${({ height }) => height};

    path {
      fill: ${({ fill }) => fill};
    }
  }
`;