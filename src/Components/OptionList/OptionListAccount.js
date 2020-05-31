import React, { useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  EmailFieldContainer,
  OptionListContainer,
  OptionItemContainer,
  ButtonContainer,
  EmailField,
} from './styles';
import { bemDestruct, settingClassName } from '../../utils';
import { SearchIcon } from '../UI/Icons';
import optionListProps from './optionListProps';
import { InputField } from '../InputField';
import { Button } from '../Button';


/**
 * OptionListAccount component should be called with
 * @param {String} type - (Required) It's defines the classes for button styles.
 * @param {String} email - (Required) It's the email to be displayed above of sign-out button.
 * @param {Node} children - (Required) The options to be displayed.
 * @param {String} className - (Required) The className determines if list is opened or closed.
 * @param {Function} OptionItem - (Required) It's each option component styled to be displayed into list.
 * @param {String} listId - (Required) It's an unique id to identifier each list on click events.
 * @param {Function} signOutCallback - (Optional) Callback to trigger on click button event. It receive the email in first argument.
 * @param {Function} onSelect - (Optional) Callback to change text displayed in button dropdown. It receive option ID in first argument, and label option in second argument.
 * @param {String} optionSelected - (Optional) It's the option selected. Should be the Option id.
 * @return {React Component} A view for panel account with input field, a selectable list and sign out button.
 */
const OptionListAccount = ({
  children = [], type, email, className, OptionItem, listId, signOutCallback, onSelect, optionSelected,
}) => {
  const { defaultClassName } = optionListProps[type];
  const childrenParsed = children ? settingClassName(children, optionSelected, defaultClassName) : [];

  /**
   * When an option is clicked, his className is toggle to selected and everyone else are being uncheck.
   */
  const handleCheck = useCallback((id) => {
    onSelect(id);
  }, [onSelect]);

  useEffect(() => {
    if (optionSelected) {
      childrenParsed.map((input) => (input.id === optionSelected) && handleCheck(input.id));
    }
  }, [childrenParsed, handleCheck, optionSelected]);

  return (
    <OptionListContainer className={bemDestruct(className)} id={listId}>
      {children
        && (
        <>
          <InputField placeholder="Filter organization" type="icon-small-left" icon={SearchIcon} />
          <OptionItemContainer>
            {childrenParsed.map((input) => (
              <OptionItem
                className={input.className}
                handleCheck={handleCheck}
                label={input.label}
                color={input.color}
                key={input.id}
                id={input.id}
              />
            ))}
          </OptionItemContainer>
          <EmailFieldContainer>
            <EmailField>{email}</EmailField>
          </EmailFieldContainer>
        </>
        )}
      <ButtonContainer>
        <Button label="Sign out" type="secondary-gray-medium" onClick={signOutCallback} />
      </ButtonContainer>
    </OptionListContainer>
  );
};

OptionListAccount.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    props: PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      color: PropTypes.string,
      children: PropTypes.array,
    }),
  })).isRequired,
  type: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  OptionItem: PropTypes.func.isRequired,
  signOutCallback: PropTypes.func,
  onSelect: PropTypes.func.isRequired,
  optionSelected: PropTypes.string.isRequired,
};

OptionListAccount.defaultProps = {
  signOutCallback: () => null,
};

export default React.memo(OptionListAccount);
