import styled from 'styled-components';
import { palette } from '../../styles';
import { CardHeader, CardTitle, CardContainer, } from '../../Card/styles';
import { XIconContainer } from '../../UI/Icons/styles';
import { SecondaryButtonContainer } from '../../Button/styles';

const { gray } = palette;


export const ModalContainer = styled(CardContainer)`
  height: auto;
  border: none;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: ${({ minHeight }) => minHeight};
  width: ${({ width }) => width};
`;

export const ModalTitle = styled(CardTitle)`
  margin: ${({ margin }) => margin};
  font-weight: 900;
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
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding}
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: flex-end;
`;

export const ModalText = styled.p`
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
`;

export const ModalContainerB = styled.div`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  ${ModalContainer} {
    min-height: 0;
    width: ${({ width }) => width};
  }

  ${ModalText} {
    color: ${gray.g4};
    font-size: 12px;
    margin: 16px 40px 24px 40px;
  }

  ${ModalRowContainer} {
    justify-content: flex-end;
    padding: 20px 10px 20px 20px;
  }

  ${ModalTitle} {
    padding: 0;
  }

  ${SecondaryButtonContainer} {
    margin: 0 10px;
  }
`;