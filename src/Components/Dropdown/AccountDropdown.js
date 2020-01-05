import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
 *  @param {String} name - (Required) It's the name to be displayed next to avatar.
 *  @param {String} description - (Required) It's the description to be displayed below of name.
 *  @param {String} avatarSrc - (Required) The relative or absolute path of an image to be rendered in header. 
 *  @param {Array} children - (Optional) They're the options to be display.
 *  @param {String} email - (Optional) It's the email to be displayed above of sign-out button.
 *  @return {React Component} A view for account dropdown with avatar and a selectable list inside.
 */
const AccountDropdown = ({ name, description, avatarSrc, children, email, }) => {
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
            src: avatarSrc,
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

AccountDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatarSrc: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.shape({
    props: PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      color: PropTypes.string,
      children: PropTypes.array,
    }),
  })),
  email: PropTypes.string,
};

AccountDropdown.defaultProps = {
  children: null,
  email: '',
};


export default AccountDropdown;
