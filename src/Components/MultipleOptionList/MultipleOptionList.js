import React from 'react';
import PropTypes from 'prop-types';
import { MultipleOptionListContainer, OptionContainer } from './styles';
import { bemDestruct, isLastItem } from '../../utils';

/**
 * MultipleOptionList component should be called with
 * @param {Node} children - (Required) The options to be displayed.
 * @param {String} className - (Required) The className determines if list is opened or closed.
 * @param {String} listId - (Required) It's an unique id to identifier each list on click events.
 * @return {React Component} A view with multiple options can be selected (checkboxes).
 */
const MultipleOptionList = ({ children = [], className, listId }) => (
  <MultipleOptionListContainer className={bemDestruct(className)} id={listId}>
    {children.map((option, index) => (
      <OptionContainer key={index} className={`last-item__${isLastItem(children.length, index)}`}>
        {option}
      </OptionContainer>
    ))}
  </MultipleOptionListContainer>
);

MultipleOptionList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string.isRequired,
};

export default MultipleOptionList;
