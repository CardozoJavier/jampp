import React from 'react';
import '../src/main.css';
import {
  HelpIcon,
  JamppImage,
} from '../src/Components/UI/Icons';

import {
  DropdownContainer,
  NotificationContainer,
} from '../src/Components/Dropdown/styles';

import AvatarSrc from '../src/assets/guido-crego.jpg'; 

import {
  OptionDropdown,
  AccountDropdown,
  AdAccountsDropdown,
  HeaderOptionDropdown,
} from '../src/Components';
import { HeaderContainer } from '../src/Components/Header/styles';
import { Option } from '../src/Components/OptionList/styles';
import { NotificationsIcon } from '../src/Components/UI/Icons';

export default {
  title: 'Header',
};

export const Header = () => (
  <HeaderContainer>
    <JamppImage />
    <DropdownContainer margin="0 auto 0 30px">
      <HeaderOptionDropdown text="Option" type="header-no-border-purple" menuTitle="Menu title">
        <Option label="Option 1" id="id1" type="dropdown" right />
        <Option label="Option 2" id="id2" type="dropdown" right />
        <Option label="Option 3" id="id3" type="dropdown" right />
        <Option label="Option 4" id="id4" type="dropdown" right />
      </HeaderOptionDropdown>
    </DropdownContainer>
    <DropdownContainer>
      <NotificationContainer>
        <HelpIcon />
        <NotificationsIcon />
      </NotificationContainer>
      <AccountDropdown
        avatar={AvatarSrc}
        name="Guido Crego"
        description="Jampp - Head of product"
      />
    </DropdownContainer>
  </HeaderContainer>
);

export const BusinessLevel = () => (
  <>
    <HeaderContainer>
      <JamppImage />
      <DropdownContainer margin="0 auto 0 30px">
        <HeaderOptionDropdown text="Option" type="header-no-border-purple" menuTitle="Menu title">
          <Option label="Option 1" id="id1" type="dropdown" right />
          <Option label="Option 2" id="id2" type="dropdown" right />
          <Option label="Option 3" id="id3" type="dropdown" right />
          <Option label="Option 4" id="id4" type="dropdown" right />
        </HeaderOptionDropdown>
      </DropdownContainer>
      <DropdownContainer>
        <NotificationContainer>
          <HelpIcon />
          <NotificationsIcon />
        </NotificationContainer>
        <AccountDropdown avatar={AvatarSrc} name="Guido Crego" description="Jampp - Head of product" email="guido.crego@jampp.com">
          <Option label="Organization name A" id="id1" right />
          <Option label="Organization name B" id="id2" right />
          <Option label="Organization name C" id="id3" right />
          <Option label="Organization name D" id="id4" right />
        </AccountDropdown>
      </DropdownContainer>
    </HeaderContainer>
  </>
);


export const AdAccountsLevel = () => (
  <>
    <HeaderContainer>
      <JamppImage />
      <DropdownContainer margin="0 auto 0 30px">
        <HeaderOptionDropdown text="Option" type="header-no-border-purple" menuTitle="Menu title">
          <Option label="Option 1" id="id1" type="dropdown" right />
          <Option label="Option 2" id="id2" type="dropdown" right />
          <Option label="Option 3" id="id3" type="dropdown" right />
          <Option label="Option 4" id="id4" type="dropdown" right />
        </HeaderOptionDropdown>
      </DropdownContainer>
      <DropdownContainer>
        <NotificationContainer>
          <HelpIcon />
          <NotificationsIcon />
        </NotificationContainer>

        <AdAccountsDropdown avatar={AvatarSrc} name="Guido Crego" description="Jampp - Head of product" email="guido.crego@jampp.com">
          <OptionDropdown text="Organization name A" type="expandable-no-border-purple">
            <Option label="Ad Account Name A" id="id1" type="dropdown" right />
            <Option label="Ad Account Name B" id="id2" type="dropdown" right />
            <Option label="Ad Account Name C" id="id3" type="dropdown" right />
            <Option label="Ad Account Name D" id="id4" type="dropdown" right />
          </OptionDropdown>
          <OptionDropdown text="Organization name B" type="expandable-no-border-purple">
            <Option label="Ad pepe Name A" id="id11" type="dropdown" right />
            <Option label="Ad pepe Name B" id="id21" type="dropdown" right />
            <Option label="Ad pepe Name C" id="id31" type="dropdown" right />
            <Option label="Ad pepe Name D" id="id41" type="dropdown" right />
          </OptionDropdown>
        </AdAccountsDropdown>
      </DropdownContainer>
    </HeaderContainer>
  </>
);
