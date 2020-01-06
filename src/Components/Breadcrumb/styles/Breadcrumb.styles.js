import styled from 'styled-components';
import { palette } from '../../styles';
import { CheckIconContainer } from '../../UI/Icons/styles';
const { action, gray, green, white } = palette;

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StepContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin: 0 5px;

  ${CheckIconContainer} {
    display: flex;
    position: absolute;
    svg {
      width: 10px;
      height: 10px;
    }

    path {
      stroke: ${white};
    }
  }
`;

export const IconCircle = styled.div`
  transition: all .3s;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  border: 1px solid ${({ borderColor }) => borderColor};
  background-color: ${({ isDone }) => isDone ? green.g1 : white};
`;

export const StepText = styled.p`
  transition: all .3s;
  color: ${({ isCurrent }) => isCurrent ? action : gray.g3};
  margin: 0;
`;

export const Step = styled.div``;