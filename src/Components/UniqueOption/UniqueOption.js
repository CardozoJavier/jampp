import React from 'react';
import { IconGenerator, CheckIcon } from '../UI/Icons';
import { bemDestruct } from '../../utils';
import { OptionContainer, OptionLabel } from './styles';
import { palette } from '../styles';

const { white } = palette;

/**
 * UniqueOption component should be called with
 * @param {String} id - (Required) It's an unique ID to identifier each option in options group.
 * @param {String} label - (Optional) It's a text to be displayed in option.
 * @param {String} className - (Required) The className determines option styles.
 * @param {Function} handleCheck - (Required) It's a callback to be called in onClick event.
 * @return {React Component} A view for label and selectable option.
 */
const UniqueOption = ({ id, label, className, handleCheck }) => (
  <OptionContainer
    key={id}
    className={bemDestruct(className)}
    onClick={(e) => handleCheck(e, id)}
  >
    <OptionLabel>{ label }</OptionLabel>
    <IconGenerator
      renderIcon={CheckIcon}
      props={{
        right: '10px',
        fill: 'transparent',
        width: '14px',
        height: '10px',
        className: bemDestruct(className),
      }}
    />
  </OptionContainer>
)

export default UniqueOption;
