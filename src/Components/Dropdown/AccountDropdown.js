import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { AccountStatement, AccountTitle, AccountDescription, AccountDropdownContainer } from './styles';
import { AvatarIcon, DownChevronIcon } from '../UI/Icons';
import { bemDestruct, getClassName, useEventListener, getReferencedId } from '../../utils';
import OptionListAccount from '../OptionList/OptionListAccount';
import { UniqueOption } from '../UniqueOption';

const classesName = {
  normal: {
    defaultClassName: "dropdown button--default-right__closed",
    optionalClassName: "dropdown button--default-right__opened",
  },
  chevron: {
    defaultClassName: 'chevron chevron--header__closed',
    optionalClassName: 'chevron chevron--header__opened',
  },
};

/**
 *  AccountDropdown component should be called with
 *  @param {String} name - (Required) It's the name to be displayed next to avatar.
 *  @param {String} description - (Required) It's the description to be displayed below of name.
 *  @param {String} avatarSrc - (Required) The relative or absolute path of an image to be rendered in header. 
 *  @param {Node} children - (Optional) They're the options to be display.
 *  @param {String} email - (Optional) It's the email to be displayed above of sign-out button.
 *  @param {Function} signOutCallback - (Optional) Callback to trigger on click button event. It receive the email in first argument.
 *  @return {React Component} A view for account dropdown with avatar and a selectable list inside.
 */
const AccountDropdown = ({ name, description, avatarSrc, children, email, signOutCallback }) => {
  const { defaultClassName, optionalClassName } = classesName['normal'];

  const [className, setClassName] = useState(defaultClassName);
  const [chevron, setChevron] = useState(classesName.chevron.defaultClassName);
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleChevronDirection = getClassName(chevron, classesName.chevron.defaultClassName, classesName.chevron.optionalClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
    setChevron(toggleChevronDirection);
  };

  /**
   * Hook to handle click events on window
   */
  const dropdownId = getReferencedId();
  const listId = getReferencedId();
  const [, setClick] = useState();
  const dropdownButton = document.getElementById(dropdownId) || {};
  const dropdownList = document.getElementById(listId) || { contains: () => null };
    
  const eventHandler = useCallback(
    (e) => {
      setClick(e);

      if(e.target.id !== dropdownButton.id && !dropdownList.contains(e.target)) {
        setChevron(classesName.chevron.defaultClassName);
        setClassName(defaultClassName);
      }
    },
    [dropdownButton, dropdownList, setClick]
  );
  
  useEventListener('click', eventHandler);

  return (
    <>
      <AccountDropdownContainer className={bemDestruct(className)} onClick={handleClick} id={dropdownId}>
        <AccountStatement>
          <AccountTitle>{name}</AccountTitle>
          <AccountDescription>{description}</AccountDescription>
        </AccountStatement>
        <AvatarIcon
          props={{
            src: avatarSrc,
            width: '40px',
            height: '40px',
            borderRadius: '100%',
          }}
        />
        <DownChevronIcon
          props={{
            position: 'relative',
            width: '24px',
            height: '24px',
            margin: '0 5px',
            className: bemDestruct(chevron),
            pointerEvents: 'none',
          }}
        />
      </AccountDropdownContainer>

      <OptionListAccount
        type="unique-option"
        OptionItem={UniqueOption}
        children={children}
        className={className}
        email={email}
        listId={listId}
        signOutCallback={signOutCallback}
      />
    </>
  );
};

AccountDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatarSrc: PropTypes.string.isRequired,
  children: PropTypes.node,
  email: PropTypes.string,
  signOutCallback: PropTypes.func,
};

AccountDropdown.defaultProps = {
  children: null,
  email: '',
  signOutCallback: () => null,
};


export default AccountDropdown;
