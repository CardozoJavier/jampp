import React from 'react';
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


const AdAccountsList = ({ children, email, disabled, className }) => (
  <OptionListContainer className={bemDestruct(className, disabled)}>
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
      <Button label="Sign out" type="secondary-gray-medium" fixed />
    </ButtonContainer>
  </OptionListContainer>
);

export default AdAccountsList;
