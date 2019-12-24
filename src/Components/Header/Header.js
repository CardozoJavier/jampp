import React from 'react';
import { HeaderContainer } from './styles';
import { Option } from '../OptionList/styles';
import { AccountDropdown } from '../Dropdown';

const Header = ({ name, description, email, avatar }) => (
  <HeaderContainer>
    <AccountDropdown name={name} description={description} email={email} avatar={avatar}>
      <Option label="Organization name A" id="id1" right />
      <Option label="Organization name B" id="id2" right />
      <Option label="Organization name C" id="id3" right />
      <Option label="Organization name D" id="id4" right />
    </AccountDropdown>
  </HeaderContainer>
);

export default Header;
