/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MultipleOptionListContainer, OptionContainer } from './styles';
import { InputSearchContainer, InputSearch } from '../OptionList/styles';
import { bemDestruct, isLastItem, getUniqueId } from '../../utils';
import { match } from '../Dropdown/utils';

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
}) => {
  const isOpen = match('opened', className);
  const INPUT_ID = getUniqueId();

  useEffect(() => {
    if (search && isOpen) {
      const input = document.getElementById(INPUT_ID);
      // Set delay for avoid blur before list is open
      setTimeout(() => input.focus(), 150);
    }
  }, [isOpen]);
  return (
    <MultipleOptionListContainer className={bemDestruct(className)} id={listId}>
      {search
        && (
        <InputSearchContainer>
          <InputSearch id={INPUT_ID} onChange={onFilterHandler} type="text" placeholder="Search" autoFocus />
        </InputSearchContainer>
        )}
      {children.map((option, index) => (
        <OptionContainer key={`${option.label}_${index}`} className={`last-item__${isLastItem(children.length, index)}`}>
          {option}
        </OptionContainer>
      ))}
    </MultipleOptionListContainer>
  );
}

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
