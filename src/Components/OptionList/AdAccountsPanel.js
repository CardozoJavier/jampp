import React from 'react';
import PropTypes from 'prop-types';
import {
  EmailFieldContainer,
  OptionListContainer,
  OptionItemContainer,
  ButtonContainer,
  EmailField,
} from './styles';
import { bemDestruct } from '../../utils';
import { SearchIcon } from '../UI/Icons';
import { InputField } from '../InputField';
import { Button } from '../Button';
import { ExpandableDropdown } from '../Dropdown';

/**
 *  AdAccountsList component should be called with
 *  @param {Node} children - (Required) The options to be display in expandable dropdown.
 *  @param {String} email - (Required) It's the email to be displayed above of sign-out button.
 *  @param {String} className - (Required) It's the className that switching between closed and opened dropdown.
 *  @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 *  @param {String} listId - (Required) It's an unique id to identifier each list on click events.
 *  @param {Function} signOutCallback - (Optional) Callback to trigger on click button event. It receive the email in first argument.
 *  @return {React Component} A view for panel account with input field, a selectable list and sign out button.
 */
const AdAccountsList = ({ children = [], email, className, disabled, listId, signOutCallback }) => (
  <OptionListContainer className={bemDestruct(className, disabled)} id={listId}>
    <InputField placeholder="Filter organization" type="icon-small-left" icon={SearchIcon} />

    <OptionItemContainer>
      {children.map(child => (
        <ExpandableDropdown
          key={child.props.text}
          text={child.props.text}
          type={child.props.type}
          children={child.props.children}
        />
      ))}
    </OptionItemContainer>

    <EmailFieldContainer>
      <EmailField>{email}</EmailField>
    </EmailFieldContainer>

    <ButtonContainer>
      <Button label="Sign out" type="secondary-gray-medium" onClick={() => signOutCallback(email)} />
    </ButtonContainer>
  </OptionListContainer>
);

AdAccountsList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    props: PropTypes.shape({
      text: PropTypes.string,
      type: PropTypes.string,
    }),
  })).isRequired,
  email: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  listId: PropTypes.string.isRequired,
  signOutCallback: PropTypes.func,
};

AdAccountsList.defaultProps = {
  disabled: false,
  signOutCallback: () => null,
};

export default AdAccountsList;
