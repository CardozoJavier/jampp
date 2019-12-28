import React, { useState } from 'react';
import {
  EmailFieldContainer,
  OptionListContainer,
  OptionItemContainer,
  ButtonContainer,
  EmailField,
} from './styles';
import { bemDestruct, settingClassName } from '../../utils';
import { CheckIcon, IconGenerator, SearchIcon } from '../UI/Icons';
import { palette } from '../styles';
import optionListProps from './optionListProps';
import { InputField } from '../InputField';
import { Button } from '../Button';

const { white } = palette;

const OptionList = ({ children, type, email, disabled, className, OptionItem }) => {
  const {
    iconProps,
    iconClassName,
    OptionContainer,
    defaultClassName,
    optionalClassName,
  } = optionListProps[type];
  const isThereChildren = !!children;
  const childrenParsed = isThereChildren ? settingClassName(children, -1, defaultClassName) : [];
  const [array, setArray] = useState(childrenParsed);

  /**
   * When an option is clicked, his className is toggle to selected and everyone else are being uncheck.
   */
  const handleCheck = (e, id) => {
    const inputsArray = settingClassName(children, id, defaultClassName);
    setArray(inputsArray);
  }

  return (
    <OptionListContainer className={bemDestruct(className, disabled)}>
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
        <Button label="Sign out" type="secondary-gray-medium" fixed />
      </ButtonContainer>
    </OptionListContainer>
  );
};

export default OptionList;
