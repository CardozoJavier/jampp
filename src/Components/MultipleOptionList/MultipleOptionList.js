/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { MultipleOptionListContainer, OptionContainer } from './styles';
import { InputSearchContainer, InputSearch } from '../OptionList/styles';
import { bemDestruct, isLastItem } from '../../utils';

/**
 * MultipleOptionList component should be called with
 * @param {Node} children - (Required) The options to be displayed.
 * @param {String} className - (Required) The className determines if list is opened or closed.
 * @param {String} listId - (Required) It's an unique id to identifier each list on click events.
 * @param {Boolean} search - (Optional) If true, an input filter is displayed into dropdown list.
 * @return {React Component} A view with multiple options can be selected (checkboxes).
 */
const MultipleOptionList = ({
  children = [], className, listId, search, onFilterHandler,
}) => (
  <MultipleOptionListContainer className={bemDestruct(className)} id={listId}>
    {search
      && (
      <InputSearchContainer>
        <InputSearch onChange={onFilterHandler} type="text" placeholder="Search" />
      </InputSearchContainer>
      )}
    {children.map((option, index) => (
      <OptionContainer key={`${option.label}_${index}`} className={`last-item__${isLastItem(children.length, index)}`}>
        {option}
      </OptionContainer>
    ))}
  </MultipleOptionListContainer>
);

MultipleOptionList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string.isRequired,
  listId: PropTypes.string.isRequired,
  search: PropTypes.bool,
  onFilterHandler: PropTypes.func,
};

MultipleOptionList.defaultProps = {
  search: false,
  onFilterHandler: () => null,
};

export default MultipleOptionList;
