import React from 'react';
import '../src/main.css';
import {
  HelpIcon,
  JamppImage,
} from '../src/Components/UI/Icons';

import {
  HeaderContainer,
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
import { Option } from '../src/Components/OptionList/styles';
import { NotificationsIcon } from '../src/Components/UI/Icons';

export default {
  title: 'Header',
};

/**
 * HeaderOptionDropdown component should be called with
 * @prop {String} text - (Required) Text to be displayed inside button.
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} menuTitle - (Required) It's the title in dropdown opened.
 *  
 *  Option component should be used with
 *  @prop {String} label - (Optional) It's a text to be display inside button.
 *  @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
 *
 *  AccountDropdown component should be called with
 *  @prop {String} avatarSrc - (Required) The relative or absolute path of an image to be rendered in header. 
 *  @prop {String} name - (Required) It's the name to be displayed next to avatar.
 *  @prop {String} description - (Required) It's the description to be displayed below of name.
 */
export const Header = () => (
  <HeaderContainer>
    <JamppImage />
    <DropdownContainer margin="0 auto 0 30px">
      <HeaderOptionDropdown text="Option" type="header-no-border-purple" menuTitle="Menu title">
        <Option label="Option 1" id="id1" />
        <Option label="Option 2" id="id2" />
        <Option label="Option 3" id="id3" />
        <Option label="Option 4" id="id4" />
      </HeaderOptionDropdown>
    </DropdownContainer>
    <DropdownContainer>
      <NotificationContainer>
        <HelpIcon />
        <NotificationsIcon />
      </NotificationContainer>
      <AccountDropdown
        avatarSrc={AvatarSrc}
        name="Guido Crego"
        description="Jampp - Head of product"
      />
    </DropdownContainer>
  </HeaderContainer>
);

/**
 * HeaderOptionDropdown component should be called with
 * @prop {String} text - (Required) Text to be displayed inside button.
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} menuTitle - (Required) It's the title in dropdown opened.
 *  
 *  Option component should be used with
 *  @prop {String} label - (Optional) It's a text to be display inside button.
 *  @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
 * 
 *  AccountDropdown component should be called with
 *  @prop {String} avatarSrc - (Required) The relative or absolute path of an image to be rendered in header. 
 *  @prop {String} name - (Required) It's the name to be displayed next to avatar.
 *  @prop {String} description - (Required) It's the description to be displayed below of name.
 *  @prop {String} email - (Required) It's the email to be displayed above of sign-out button.
 */
export const BusinessLevel = () => (
  <>
    <HeaderContainer>
      <JamppImage />
      <DropdownContainer margin="0 auto 0 30px">
        <HeaderOptionDropdown text="Option" type="header-no-border-purple" menuTitle="Menu title">
          <Option label="Option 1" id="id1" />
          <Option label="Option 2" id="id2" />
          <Option label="Option 3" id="id3" />
          <Option label="Option 4" id="id4" />
        </HeaderOptionDropdown>
      </DropdownContainer>
      <DropdownContainer>
        <NotificationContainer>
          <HelpIcon />
          <NotificationsIcon />
        </NotificationContainer>
        <AccountDropdown avatarSrc={AvatarSrc} name="Guido Crego" description="Jampp - Head of product" email="guido.crego@jampp.com">
          <Option label="Organization name A" id="id1" />
          <Option label="Organization name B" id="id2" />
          <Option label="Organization name C" id="id3" />
          <Option label="Organization name D" id="id4" />
        </AccountDropdown>
      </DropdownContainer>
    </HeaderContainer>
  </>
);

/**
 * HeaderOptionDropdown component should be called with
 * @prop {String} text - (Required) Text to be displayed inside button.
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} menuTitle - (Required) It's the title in dropdown opened.
 *  
 *  Option component should be used with
 *  @prop {String} label - (Optional) It's a text to be display inside button.
 *  @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
 * 
 *  AdAccountsDropdown component should be called with
 *  @prop {String} avatarSrc - (Required) The relative or absolute path of an image to be rendered in header. 
 *  @prop {String} name - (Required) It's the name to be displayed next to avatar.
 *  @prop {String} description - (Required) It's the description to be displayed below of name.
 * 
 *    OptionDropdown component should be called with
 *    @prop {String} text - (Required) It's the dropdown title.
 *    @prop {String} type - (Required) Define dropdown classes for styling.
 *    @prop {Node} children - (Required) The options to be display.
 */
export const AdAccountsLevel = () => (
  <>
    <HeaderContainer>
      <JamppImage />
      <DropdownContainer margin="0 auto 0 30px">
        <HeaderOptionDropdown text="Option" type="header-no-border-purple" menuTitle="Menu title">
          <Option label="Option 1" id="id1" />
          <Option label="Option 2" id="id2" />
          <Option label="Option 3" id="id3" />
          <Option label="Option 4" id="id4" />
        </HeaderOptionDropdown>
      </DropdownContainer>
      <DropdownContainer>
        <NotificationContainer>
          <HelpIcon />
          <NotificationsIcon />
        </NotificationContainer>

        <AdAccountsDropdown avatarSrc={AvatarSrc} name="Guido Crego" description="Jampp - Head of product" email="guido.crego@jampp.com">
          <OptionDropdown text="Organization name A" type="expandable-no-border-purple">
            <Option label="Ad Account Name A" id="id1" />
            <Option label="Ad Account Name B" id="id2" />
            <Option label="Ad Account Name C" id="id3" />
            <Option label="Ad Account Name D" id="id4" />
          </OptionDropdown>
          <OptionDropdown text="Organization name B" type="expandable-no-border-purple">
            <Option label="Ad Account Name A" id="id11" />
            <Option label="Ad Account Name B" id="id21" />
            <Option label="Ad Account Name C" id="id31" />
            <Option label="Ad Account Name D" id="id41" />
          </OptionDropdown>
        </AdAccountsDropdown>
      </DropdownContainer>
    </HeaderContainer>
  </>
);
