import styled from 'styled-components';
import { Input } from '../../InputField/styles';
import { palette } from '../../styles';
const { violet, gray } = palette;

export default styled(Input)`
  width: ${({ width }) => width};
  padding: 8px 0;
  font-size: ${({ fontSize }) => fontSize};

  &.preview-tracking {
    border: 1px solid ${violet.v05};
    padding: 4px 20px 4px 8px;

    margin: 4px 3px;
  }

  &:disabled {
    color: ${gray.g3};
  }
`;