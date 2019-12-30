import React, { useState } from 'react';
import OptionDropdown from './OptionDropdown';
import { AccountStatement, AccountTitle, AccountDescription, AccountDropdownContainer } from './styles';
import { IconGenerator, AvatarIcon, DownChevronIcon } from '../UI/Icons';
import { bemDestruct, getClassName } from '../../utils';
import { palette } from '../styles';
import OptionListAccount from '../OptionList/OptionListAccount';
import { UniqueOption } from '../UniqueOption';

const { gray } = palette;
const classesName = {
  normal: {
    defaultClassName: "dropdown button--default-right__closed",
    optionalClassName: "dropdown button--default-right__opened",
  },
  chevron: {
    defaultClassName: 'chevron chevron--default__closed',
    optionalClassName: 'chevron chevron--default__opened',
  },
};

/**
 *  AccountDropdown component should be called with
 *  @param {String} avatar - (Required) The relative or absolute path of an image to be rendered in header. 
 *  @param {String} name - (Required) It's the name to be displayed next to avatar.
 *  @param {String} description - (Required) It's the description to be displayed below of name.
 *  @param {String} email - (Required) It's the email to be displayed above of sign-out button.
 *  @param {Array} children - (Required) They're the options to be display.
 */
const AccountDropdown = ({ name, description, email, avatar, children }) => {
  const { defaultClassName, optionalClassName } = classesName['normal'];

  const [className, setClassName] = useState(defaultClassName);
  const [chevron, setChevron] = useState(classesName.chevron.defaultClassName);
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleChevronDirection = getClassName(chevron, classesName.chevron.defaultClassName, classesName.chevron.optionalClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
    setChevron(toggleChevronDirection);
  };

  return (
    <>
      <AccountDropdownContainer className={bemDestruct(className)} onClick={handleClick}>
        <AccountStatement>
          <AccountTitle>{name}</AccountTitle>
          <AccountDescription>{description}</AccountDescription>
        </AccountStatement>
        <IconGenerator
          renderIcon={AvatarIcon}
          props={{
            src: avatar,
            width: '40px',
            height: '40px',
            borderRadius: '100%',
          }}
        />
        <IconGenerator
          renderIcon={DownChevronIcon}
          props={{
            position: 'relative',
            fill: gray.g4,
            width: '24px',
            height: '24px',
            margin: '0 5px',
            className: bemDestruct(chevron),
          }}
        />
      </AccountDropdownContainer>

      <OptionListAccount
        type="unique-option"
        OptionItem={UniqueOption}
        children={children}
        className={className}
        email={email}
      />
    </>
  );
};

export default AccountDropdown;
