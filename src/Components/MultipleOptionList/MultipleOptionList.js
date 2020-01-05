import React from 'react';
import PropTypes from 'prop-types';
import { MultipleOptionListContainer, OptionContainer } from './styles';
import { bemDestruct, isLastItem } from '../../utils';

/**
 * MultipleOptionList component should be called with
 * @param {Array} children - (Required) The options to be displayed.
 * @param {String} className - (Required) The className determines if list is opened or closed.
 * @return {React Component} A view with multiple options can be selected (checkboxes).
 */
const MultipleOptionList = ({ children, className }) => (
  <MultipleOptionListContainer className={bemDestruct(className)}>
    {children.map((option, index) => (
      <OptionContainer key={index} className={`last-item__${isLastItem(children.length, index)}`}>
        {option}
      </OptionContainer>
    ))}
  </MultipleOptionListContainer>
);

MultipleOptionList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)).isRequired,
  className: PropTypes.string.isRequired,
};


export default MultipleOptionList;
