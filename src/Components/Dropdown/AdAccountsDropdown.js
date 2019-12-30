import React, { useState } from 'react';
import { AccountStatement, AccountTitle, AccountDescription, AccountDropdownContainer } from './styles';
import { IconGenerator, AvatarIcon, DownChevronIcon } from '../UI/Icons';
import { bemDestruct, getClassName } from '../../utils';
import { palette } from '../styles';
import AdAccountsPanel from '../OptionList/AdAccountsPanel';
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
 *  AdAccountsDropdown component should be called with
 *  @param {String} avatar - (Required) The relative or absolute path of an image to be rendered in header. 
 *  @param {String} name - (Required) It's the name to be displayed next to avatar.
 *  @param {String} description - (Required) It's the description to be displayed below of name.
 *  @param {String} email - (Required) It's the email to be displayed above of sign-out button.
 *  @param {Array} children - (Required) The options to be display.
 */
const AdAccountsDropdown = ({ name, description, email, avatar, children }) => {
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

      <AdAccountsPanel
        type="unique-option"
        OptionItem={UniqueOption}
        children={children}
        className={className}
        email={email}
      />
    </>
  );
};

export default AdAccountsDropdown;
