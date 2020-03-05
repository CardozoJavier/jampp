import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconGenerator } from '../UI/Icons';
import { bemDestruct, getClassName, } from '../../utils';
import { CheckboxContainer, CheckboxLabel, Box, Container } from './styles';
import { CheckIcon } from '../UI/Icons';
import { palette } from '../styles';

const { white } = palette;
const classesName = {
  normal: {
    defaultClassName: "checkbox basic--default-multipleoptions",
    optionalClassName: "checkbox basic--default-multipleoptions__selected",
  },
  dropdown: {
    defaultClassName: "dropdown basic--default-multipleoptions",
    optionalClassName: "dropdown basic--default-multipleoptions__selected",
  },
  label: {
    defaultLabel: "checkbox label--default",
    selectedLabel: "checkbox label--default__selected",
  },
};

/**
 *  Checkbox component should be called with
 *  @param {String} type - (Required) Define dropdown classes for styling.
 *  @param {String} id - (Optional) It's an unique ID to identifier each checkbox.
 *  @param {String} label - (Optional) It's a text to be display next to checkbox.
 *  @param {Boolean} inverted - (Optional) If true, the checkbox is put on the left text.
 *  @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive two arguments: checkbox id and true/false value.
 *  @param {Boolean} checked - (Optional) It's determines if checkbox is checked or not by default.
 *  @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 *  @return {React Component} A view for checkbox.
 */
const Checkbox = ({ type, id, label, inverted, onChange, checked, disabled }) => {
  const { defaultClassName, optionalClassName } = classesName[type];
  const { defaultLabel, selectedLabel } = classesName['label'];
  const initialState = checked ? optionalClassName : defaultClassName;
  const labelInitialClassName = checked ? selectedLabel : defaultLabel;

  const [className, setClassName] = useState(initialState);
  const [labelClassName, setLabelClassName] = useState(labelInitialClassName);
  const [status, setStatus] = useState(checked);
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleToLabelClassName = getClassName(labelClassName, defaultLabel, selectedLabel);

  const handleClick = () => {
    onChange(id, !status);
    setStatus(!status);
    setClassName(toggleToClassName);
    setLabelClassName(toggleToLabelClassName);
  }

  return (
    <Container className={bemDestruct(className, disabled)} inverted={inverted} onClick={disabled ? null : handleClick} disabled={disabled}>
      <CheckboxContainer>
        <Box className={bemDestruct(className, disabled)} />
        <CheckIcon props={{
          position: 'absolute',
          right: '1px',
          bottom: '4px',
          stroke: white,
          fill: 'none',
          width: '12px',
          height: '8px',
          disabled,
          }}
        />
      </CheckboxContainer>
      <CheckboxLabel className={bemDestruct(labelClassName)} disabled={disabled}>{ label }</CheckboxLabel>
    </Container>
  )
};

Checkbox.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  inverted: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  id: '',
  label: '',
  type: 'normal',
  inverted: false,
  onChange: () => null,
  checked: false,
  disabled: false,
};

export default Checkbox;
