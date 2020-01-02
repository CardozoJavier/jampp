import styled from 'styled-components';
import { palette } from '../../styles';
import { CardHeader, CardTitle, CardContainer, } from '../../Card/styles';
import { XIconContainer } from '../../UI/Icons/styles';

const { gray } = palette;


export const ModalContainer = styled(CardContainer)`
  border: none;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalTitle = styled(CardTitle)`
  margin: ${({ margin }) => margin};
`;

export const ModalHeader = styled(CardHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;

  ${XIconContainer} {
    svg {
      width: 6px;
      height: 6px;
    }
  }

  ${XIconContainer}:hover {
    cursor: pointer;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${gray.g0};
  width: 100%;
  height: 64px;
  border-radius: 0 0 4px 4px;
  padding: 20px;
`;

export const ModalRowContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  align-items: flex-end;
`;
