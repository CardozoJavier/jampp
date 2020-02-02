import React from 'react';
import { Card, InputField, Button, OptionDropdown, StatusLabel } from '../src/Components';
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
import { SearchIcon, DownloadFileIcon, AddIcon, TableImageIcon } from '../src/Components/UI/Icons';
import { SearchBarContainer } from '../src/Components/InputField/styles';
import { GridContainer, Gradient, GradientContainer, Text } from '../src/Components/UI/GenericElements/GenericElements.styles';
import { palette, fonts } from '../src/Components/styles';
const { link, black, gray } = palette;
const { size12, size14 } = fonts;

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

export const EndUserA = () => (
  <Card title="Title" width="548px" padding="24px;">
    <GridContainer gridTemplateColumns="50% 25% 25%" borderBottom={`1px solid ${gray.g1}`} padding="40px 0 24px 0">
      <Text color={link} fontSize={size14} justifySelf="start">Apr 1, 2019</Text>
      <Text justifySelf="start"><StatusLabel text="Paid" color="green" flat /></Text>
      <Text color={black} fontSize={size14} justifySelf="end">$999999</Text>
    </GridContainer>
    <GridContainer gridTemplateColumns="50% 25% 25%" borderBottom={`1px solid ${gray.g1}`} padding="24px 0">
      <Text color={link} fontSize={size14} justifySelf="start">Mar 1, 2019</Text>
      <Text justifySelf="start"><StatusLabel text="Due" color="blue" flat /></Text>
      <Text color={black} fontSize={size14} justifySelf="end">$999999</Text>
    </GridContainer>
    <GridContainer gridTemplateColumns="50% 25% 25%" borderBottom={`1px solid ${gray.g1}`} padding="24px 0">
      <Text color={link} fontSize={size14} justifySelf="start">Feb 1, 2019</Text>
      <Text justifySelf="start"><StatusLabel text="Overdue" color="red" flat /></Text>
      <Text color={black} fontSize={size14} justifySelf="end">$999999</Text>
    </GridContainer>
    <GridContainer gridTemplateColumns="50% 25% 25%" borderBottom={`1px solid ${gray.g1}`} padding="24px 0">
      <Text color={link} fontSize={size14} justifySelf="start">Jan 1, 2019</Text>
      <Text justifySelf="start"><StatusLabel text="Paid" color="green" flat /></Text>
      <Text color={black} fontSize={size14} justifySelf="end">$999999</Text>
    </GridContainer>
    <GridContainer gridTemplateColumns="100%" padding="24px 0 0 0">
      <Text onClick={() => console.log('Link clicked!')} cursor="pointer" width="fit-content" color={link} fontSize={size14}>Link to see more</Text>
    </GridContainer>
  </Card>
);

export const EndUserB = () => (
  <Card title="Title" width="365px" padding="12px" borderBottom="none">
    <GridContainer borderBottom={`1px solid ${gray.g1}`} padding="12px 0 24px 0" gridTemplateColumns="15% 35% 25% 25%">
      <TableImageIcon />
      <Text color={black} fontSize={size12} justifySelf="center" >Line Of Credit</Text>
      <Text color={black} fontSize={size12} justifySelf="center">AR</Text>
      <Text justifySelf="end"><StatusLabel text="Active" color="green" flat /></Text>
    </GridContainer>
    <GridContainer borderBottom={`1px solid ${gray.g1}`} padding="24px 0" gridTemplateColumns="15% 35% 25% 25%">
      <TableImageIcon />
      <Text color={black} fontSize={size12} justifySelf="center" >Line Of Credit</Text>
      <Text color={black} fontSize={size12} justifySelf="center">AR</Text>
      <Text justifySelf="end"><StatusLabel text="Inactive" color="red" flat /></Text>
    </GridContainer>
    <Gradient>
      <GradientContainer>
        <GridContainer position="relative" zIndex="-1" borderBottom={`1px solid ${gray.g1}`} padding="24px 0" gridTemplateColumns="15% 35% 25% 25%">
          <TableImageIcon />
          <Text color={black} fontSize={size12} justifySelf="center" >Line Of Credit</Text>
          <Text color={black} fontSize={size12} justifySelf="center">AR</Text>
          <Text justifySelf="end"><StatusLabel text="Active" color="green" flat /></Text>
        </GridContainer>
        <GridContainer position="relative" zIndex="-1" padding="24px 0" gridTemplateColumns="15% 35% 25% 25%">
          <TableImageIcon />
          <Text color={black} fontSize={size12} justifySelf="center" >Line Of Credit</Text>
          <Text color={black} fontSize={size12} justifySelf="center">AR</Text>
          <Text justifySelf="end"><StatusLabel text="Inactive" color="red" flat /></Text>
        </GridContainer>
      </GradientContainer>
    </Gradient>
    <GridContainer gridTemplateColumns="100%" padding="24px 0 12px 0" borderTop={`1px solid ${gray.g1}`}>
      <Text onClick={() => console.log('Link clicked!')} cursor="pointer" width="fit-content" color={link} fontSize={size14}>Link to see more</Text>
    </GridContainer>
  </Card>
);