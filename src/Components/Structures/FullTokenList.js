import React, { useState, useContext } from 'react';
import { Modal } from '../Modal';
import { ModalContainer, TokenListContainer, FullTokenListRowTitle, } from './styles';
import { DefaultLabel } from '../Label';
import { PlainText } from '../CreationTag/styles';
import {
  PaymentColumnField,
  PaymentColumnTitle,
} from '../Table/styles';
import { PaymentMethodTable, PaymentRow } from '../Table';
import { CheckIcon } from '../UI/Icons';
import { removeEmptySpace, getUniqueId } from '../../utils';
import StructurePreviewContext from './Context';

const FullTokenList = ({ tokenList, onSelect, onFullTokenListClose, optionDropdownId }) => {
  const context = useContext(StructurePreviewContext);
  
  const handleClick = (optionSelected) => {
    const { customParam, arrayParameters } = context;
    const paramKey = customParam.get(optionDropdownId)?.paramName;
    const updateDefaultLabelArray = arrayParameters.labelTag[paramKey] ? [...arrayParameters.labelTag[paramKey]] : [];
    const trimValue = removeEmptySpace(optionSelected);
    const defaultLabelId = getUniqueId();
    const targetId = getUniqueId();
    updateDefaultLabelArray.push(
      <DefaultLabel
        targetId={targetId}
        key={defaultLabelId}
        id={defaultLabelId}
        text={`{${optionSelected}}`}
        size="medium"
        margin="4px 3px"
        // onClose={deleteTagHandler}
      />
    );

    /**
     * It's for displaying the tags like plain text when input is freezed
     */
    const updateTextArray = context.arrayParameters.plainText[paramKey] ? [...context.arrayParameters.plainText[paramKey]] : [];
    const plainTextId = Math.random().toString();
    updateTextArray.push(
      <PlainText targetId={targetId} text={optionSelected} key={plainTextId} id={plainTextId}>{trimValue}</PlainText>
    );
    optionSelected.trim() && onSelect(optionSelected.trim(), paramKey, updateDefaultLabelArray, updateTextArray);
  };

  return (
    <ModalContainer>
      <Modal title="Full token list" onClose={onFullTokenListClose} padding='22px'>
        <FullTokenListRowTitle gridTemplateColumns="22% 78%">
          <PaymentColumnTitle borderLeft="none">{ 'Jampp parameter' }</PaymentColumnTitle>
          <PaymentColumnTitle borderLeft="none">{ 'Description' }</PaymentColumnTitle>
        </FullTokenListRowTitle>
        <TokenListContainer>
          <PaymentMethodTable>
            {tokenList.map(token => (
              <PaymentRow key={token.name} id={token.name} style={{ gridTemplateColumns: '20% 68% 12%', padding: '0' }}>
                <PaymentColumnField borderLeft="none">{token.name}</PaymentColumnField>
                <PaymentColumnField borderLeft="none">{token.description}</PaymentColumnField>
                <PaymentColumnField button iconWhenSelect={CheckIcon} onClick={() => handleClick(token.name)}>{ 'Select' }</PaymentColumnField>
              </PaymentRow>
            ))}
          </PaymentMethodTable>
        </TokenListContainer>
      </Modal>
    </ModalContainer>
  );
};

export default FullTokenList;
