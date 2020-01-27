import React from 'react';
import { Card, InputField, Button, OptionDropdown } from '../src/Components';
import { Table, Row } from '../src/Components/Table';
import {
  RowName,
  RowTitle,
  TableTitle,
  ColumnField,
  ColumnTitle,
  TableButtons,
  ColumnFieldButton,
} from '../src/Components/Table/styles';
import {
  CardHeader,
} from '../src/Components/Card/styles';
import { SearchIcon, DownloadFileIcon, AddIcon } from '../src/Components/UI/Icons';
import { SearchBarContainer } from '../src/Components/InputField/styles';

export default {
  title: 'Table',
};

/**
 * Table component should be called with
 * @prop {Node} children - (Required) It's the content to be displayed.
 *  
 *  Row component should be called with
 *  @prop {Node} children - (Required) It's the content to be displayed into each row.
 */
export const WithTitle = () => (
  <Card width="1392px" padding="16px 16px 62px 16px">
    <CardHeader borderBottom="none">
      <TableTitle>{ "Table Title" }</TableTitle>
      <SearchBarContainer width="535px">
        <InputField placeholder="Text" type="searchbar" icon={SearchIcon} />
      </SearchBarContainer>
      <TableButtons>
        <OptionDropdown text="Export" type="solid" leftIcon={DownloadFileIcon} />
        <Button label="CTA text" type="accessory-default-left" icon={AddIcon} />
      </TableButtons>
    </CardHeader>
    <Table>
      <RowTitle>
        <ColumnTitle borderLeft="none">{ 'First column title' }</ColumnTitle>
        <ColumnTitle>{ 'Column title' }</ColumnTitle>
        <ColumnTitle>{ 'Column title' }</ColumnTitle>
        <ColumnTitle>{ 'Column title' }</ColumnTitle>
        <ColumnTitle>{ 'Column title' }</ColumnTitle>
      </RowTitle>
      <Row>
        <RowName>{ 'Name here' }</RowName>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnFieldButton isButtonGroup>
          <Button label="Button text" type="secondary-gray-medium" />
          <Button label="Button text" type="secondary-gray-medium" />
        </ColumnFieldButton>
      </Row>
      <Row>
        <RowName>{ 'Name here' }</RowName>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnFieldButton isButtonGroup>
          <Button label="Button text" type="secondary-gray-medium" />
          <Button label="Button text" type="secondary-gray-medium" />
        </ColumnFieldButton>
      </Row>
      <Row>
        <RowName>{ 'Name here' }</RowName>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnFieldButton isButtonGroup>
          <Button label="Button text" type="secondary-gray-medium" />
          <Button label="Button text" type="secondary-gray-medium" />
        </ColumnFieldButton>
      </Row>
      <Row>
        <RowName>{ 'Name here' }</RowName>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnFieldButton isButtonGroup>
          <Button label="Button text" type="secondary-gray-medium" />
          <Button label="Button text" type="secondary-gray-medium" />
        </ColumnFieldButton>
      </Row>
      <Row>
        <RowName>{ 'Name here' }</RowName>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnFieldButton isButtonGroup>
          <Button label="Button text" type="secondary-gray-medium" />
          <Button label="Button text" type="secondary-gray-medium" />
        </ColumnFieldButton>
      </Row>
    </Table>
  </Card>
);


/**
 * Table component should be called with
 * @prop {Node} children - (Required) It's the content to be displayed.
 *  
 *  Row component can be called with
 *  @prop {Node} children - (Required) It's the content to be displayed into each row.
 *  @prop {Boolean} loading - (Optional) It's the flag to determinate a loading state for view data.
 */
export const WithLoadingState = () => (
  <Card width="1392px" padding="16px 16px 62px 16px">
    <CardHeader borderBottom="none">
      <TableTitle>{ "Table Title" }</TableTitle>
      <SearchBarContainer width="535px">
        <InputField placeholder="Text" type="searchbar" icon={SearchIcon} />
      </SearchBarContainer>
      <TableButtons>
        <OptionDropdown text="Export" type="solid" leftIcon={DownloadFileIcon} />
        <Button label="CTA text" type="accessory-default-left" icon={AddIcon} />
      </TableButtons>
    </CardHeader>
    <Table>
      <RowTitle>
        <ColumnTitle borderLeft="none">{ 'First column title' }</ColumnTitle>
        <ColumnTitle>{ 'Column title' }</ColumnTitle>
        <ColumnTitle>{ 'Column title' }</ColumnTitle>
        <ColumnTitle>{ 'Column title' }</ColumnTitle>
        <ColumnTitle>{ 'Column title' }</ColumnTitle>
      </RowTitle>
      <Row loading={true}>
        <RowName>{ 'Name here' }</RowName>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnFieldButton isButtonGroup>
          <Button label="Button text" type="secondary-gray-medium" />
          <Button label="Button text" type="secondary-gray-medium" />
        </ColumnFieldButton>
      </Row>
      <Row loading={true}>
        <RowName>{ 'Name here' }</RowName>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnFieldButton isButtonGroup>
          <Button label="Button text" type="secondary-gray-medium" />
          <Button label="Button text" type="secondary-gray-medium" />
        </ColumnFieldButton>
      </Row>
      <Row loading={true}>
        <RowName>{ 'Name here' }</RowName>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnFieldButton isButtonGroup>
          <Button label="Button text" type="secondary-gray-medium" />
          <Button label="Button text" type="secondary-gray-medium" />
        </ColumnFieldButton>
      </Row>
      <Row loading={true}>
        <RowName>{ 'Name here' }</RowName>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnFieldButton isButtonGroup>
          <Button label="Button text" type="secondary-gray-medium" />
          <Button label="Button text" type="secondary-gray-medium" />
        </ColumnFieldButton>
      </Row>
      <Row loading={true}>
        <RowName>{ 'Name here' }</RowName>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnField>{ 'Data here' }</ColumnField>
        <ColumnFieldButton isButtonGroup>
          <Button label="Button text" type="secondary-gray-medium" />
          <Button label="Button text" type="secondary-gray-medium" />
        </ColumnFieldButton>
      </Row>
    </Table>
  </Card>
);

