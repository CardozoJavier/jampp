import React, { useState } from 'react';
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
 * @return {React Component} A view for panel account with input field, a selectable list and sign out button.
 */
const OptionListAccount = ({ children = [], type, email, className, OptionItem }) => {
  const { defaultClassName } = optionListProps[type];
  const isThereChildren = !!children;
  const childrenParsed = isThereChildren ? settingClassName(children, -1, defaultClassName) : [];
  const [array, setArray] = useState(childrenParsed);

  /**
   * When an option is clicked, his className is toggle to selected and everyone else are being uncheck.
   */
  const handleCheck = (id) => {
    const inputsArray = settingClassName(children, id, defaultClassName);
    setArray(inputsArray);
  }

  return (
    <OptionListContainer className={bemDestruct(className)}>
      {isThereChildren &&
        <>
          <InputField placeholder="Filter organization" type="icon-small-left" icon={SearchIcon} />
          <OptionItemContainer>
            {array.map((input) => (
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
      }
      <ButtonContainer>
        <Button label="Sign out" type="secondary-gray-medium" />
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
};

export default OptionListAccount;
