import styled from 'styled-components';
import { PaymentRowTitle } from '../../Table/styles';

export const ModalContainer = styled.div`
  position: absolute;
  bottom: 250px;
  right: -37.5px;
`;

export const TokenListContainer = styled.div`
  max-height: 214px;
  overflow: scroll;
  padding: 0 22px 22px 22px;
`;

export const FullTokenListRowTitle = styled(PaymentRowTitle)`
  padding: 0;
  margin: 0 22px;
`;
