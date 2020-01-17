import styled from 'styled-components';
import { palette } from '../../../styles';
const { red } = palette;

export default styled.svg`
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  vertical-align: middle;
  path {
    fill: ${({ fill }) => fill || red.r3};
  }
`;