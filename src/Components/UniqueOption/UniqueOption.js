import React from 'react';
import PropTypes from 'prop-types';
import { CheckIcon } from '../UI/Icons';
import { bemDestruct } from '../../utils';
import { OptionContainer, OptionLabel } from './styles';
import { palette } from '../styles';

const { white } = palette;

/**
 * UniqueOption component should be called with
 * @param {String} id - (Required) It's an unique ID to identifier each option in options group.
 * @param {String} className - (Required) The className determines option styles.
 * @param {Function} handleCheck - (Required) It's a callback to be called in onClick event.
 * @param {String} label - (Optional) It's a text to be displayed in option.
 * @param {String} notIcon - (Optional) It's a modifier to not display the check icon next to text.
 * @return {React Component} A view for label and selectable option.
 */
const UniqueOption = ({ id, className, handleCheck, label, notIcon }) => (
  <OptionContainer
    key={id}
    className={bemDestruct(className)}
    onClick={() => handleCheck(id, label)}
  >
    <OptionLabel>{ label }</OptionLabel>
    {!notIcon &&
      <CheckIcon
        props={{
          right: '10px',
          fill: 'transparent',
          width: '14px',
          height: '10px',
          className: bemDestruct(className),
        }}
      />
    }
  </OptionContainer>
)

UniqueOption.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleCheck: PropTypes.func.isRequired,
  label: PropTypes.string,
  notIcon: PropTypes.bool,
};

UniqueOption.defaultProps = {
  label: '',
  notIcon: false,
};

export default UniqueOption;
