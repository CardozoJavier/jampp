import React from 'react';
import { Card, InputField, Button, OptionDropdown } from '../src/Components';
import {
  Table,
  TableItem,
} from '../src/Components/Table';
import {
  TableTitle,
  TableButtons,
  ColumnTitle,
} from '../src/Components/Table/styles';
import {
  CardHeader,
} from '../src/Components/Card/styles';
import { CardContainer } from '../src/Components/Card/styles';
import { SearchIcon, DownloadFileIcon, AddIcon } from '../src/Components/UI/Icons';
import { SearchBarContainer } from '../src/Components/InputField/styles';

export default {
  title: 'Table',
};

/**
 * Table component can be called with
 * @prop {String} title - (Optional) It's title to be displayed in card.
 * @prop {String} description - (Optional) It's description to be displayed in card below of title.
 */
export const WithTitle = () => (
  <CardContainer width="1392px">
    <CardHeader borderBottom="none" flexDirection="row">
      <TableTitle>{ "Table Title" }</TableTitle>
      <SearchBarContainer width="535px">
        <InputField placeholder="Text" type="searchbar" icon={SearchIcon} />
      </SearchBarContainer>
      <TableButtons>
        <OptionDropdown text="Export" type="solid" leftIcon={DownloadFileIcon} />
        <Button label="CTA text" type="accessory-default-left" icon={AddIcon} />
      </TableButtons>
    </CardHeader>
    <Card>
      <Table>
        <ColumnTitle>{ '' }</ColumnTitle>
      </Table>
    </Card>
  </CardContainer>
);
