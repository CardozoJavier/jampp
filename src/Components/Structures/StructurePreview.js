import React, { useState, } from 'react';
import {
  Card,
  Modal,
  Button,
  TabGroup,
  ToggleSwitch,
  CreateElement,
  OptionDropdown,
} from '../';
import { CreationTracking } from '../CreationTag';
import { Tab } from '../Tab/styles';
import { ParametersDuplicationContainer } from '../CreationTag/styles';
import { DropdownContainer, DropdownListContainer } from '../Dropdown/styles';
import { LockIcon, XIcon, BoldAddIcon } from '../UI/Icons';
import { DivContainer, Text } from '../UI/GenericElements/GenericElements.styles';
import { palette, fonts } from '../styles';
import { HeaderParameter, HeaderText } from './styles/StructurePreview.styles';
const { gray, green, black, white } = palette;
const { size10, size12, size18 } = fonts;

const StructurePreview = () => {
  const [freeze, setFreeze] = useState(false);
  const [flatParameters, setFlatParameters] = useState({});
  const [labelParameters, setLabelParameters] = useState({});

  const toggleHandler = (status) => {
    setFreeze(status);
  };

  const addParameterTag = (parameterValue, parameterKey, defaultLabelArray, textArray) => {
    let updateFlatParameters = Object.assign({}, flatParameters);
    const updateLabelParameters = Object.assign({}, labelParameters);
    updateLabelParameters[parameterKey] = defaultLabelArray;
    updateFlatParameters[parameterKey] = textArray;
    
    setLabelParameters(updateLabelParameters);
    setFlatParameters(updateFlatParameters);
  };

  const deleteParameterTag = (parameterKey, defaultLabelArray, textArray) => {
    // console.log({ labelParameters, flatParameters, parameterKey, parameterValue, tagId })
    // console.log(defaultLabelArray);
    // console.log({ textArray })
    const updateLabelParameters = Object.assign({}, labelParameters);
    const updateFlatParameters = Object.assign({}, flatParameters);
    updateFlatParameters[parameterKey] = textArray;
    updateLabelParameters[parameterKey] = defaultLabelArray;
    setLabelParameters(updateLabelParameters);
    setFlatParameters(updateFlatParameters);
  };
  
  return (
    <Modal width="525px">
      <DivContainer padding="25px" position='relative' >
        <TabGroup defaultActive="tab1" name="group1" onChange={id => console.log(id + ' is active')}>
          <Tab text="Clicks URL" id="tab1" />
          <Tab text="Impressions URL" id="tab2" />
        </TabGroup>
        <DivContainer position="absolute" top="25px" right="25px" display="flex" alignItems="center">
          <Text fontSize={size10} color={freeze ? green.g1 : gray.g3} margin="0 5px 0 0">{'Preview tokens'}</Text>
          <ToggleSwitch onChange={toggleHandler}/>
        </DivContainer>
        <DivContainer margin="16px 0 0 0">
          <Card width="auto" padding="0" backgroundColor={freeze ? gray.g0 : white}>
            <DivContainer padding="16px" maxHeight='124px' overflowY='scroll'>
              <Text fontSize={size18} color={freeze ? gray.g3 : black}>{'http://adjust.com/1234/?c=Campaign_Brasil&click_id={C_ID}_suffix&device_id={D_ID}&creative={ad_parameters}'}</Text>
            </DivContainer>
            <HeaderParameter>
              <HeaderText padding='4px 37px 4px 16px' borderRight={`1px solid ${gray.g1}`}>{'Partner parameter'}</HeaderText>
              <HeaderText padding='4px 0 4px 20px'>{'Jampp parameter'}</HeaderText>
              {freeze ? null : 
                <LockIcon props={{ fill: black, margin: '0 15px 0 auto', cursor: 'pointer', onClick: () => console.log('Lock icon clicked') }} />
              }
            </HeaderParameter>
            <DivContainer>
              <DivContainer id="original-structure" display="grid" alignItems="center" gridTemplateColumns="28% 5% auto 8%" padding="15px" borderBottom={`1px solid ${gray.g1}`}>
                <Text color={freeze ? gray.g3 : black} fontSize={size12} fontWeight="bold">c</Text>
                <Text>=</Text>
                <CreationTracking
                  flatParameters={flatParameters}
                  labelParameters={labelParameters}
                  parameterKey={'c'}
                  width="264px"
                  linkText="Full list"
                  id="creation-tracking-A"
                  type="suggestions-tracking"
                  textBelowSuggestions="or select from the"
                  suggestions={["First 1", "First 2", "First 3"]}
                  callback={() => console.log('Displaying full list')}
                  onTagCreated={addParameterTag}
                  onTagDeleted={deleteParameterTag}
                  disabled={freeze}
                />
                <XIcon
                  role='icon-to-remove-structure'
                  props={{
                    width: '10px',
                    height: '10px',
                    fill: gray.g3,
                    margin: '0 5px',
                    cursor: 'pointer',
                    hover: black,
                    justifySelf: 'end',
                    onClick: () => console.log('Display modal and pass it the structure id: original-structure'),
                  }}
                />
              </DivContainer>

              <DivContainer id="original-structure" display="grid" alignItems="center" gridTemplateColumns="28% 5% auto 8%" padding="15px" borderBottom={`1px solid ${gray.g1}`}>
                <Text color={freeze ? gray.g3 : black} fontSize={size12} fontWeight="bold">click_id</Text>
                <Text>=</Text>
                <CreationTracking
                  flatParameters={flatParameters}
                  labelParameters={labelParameters}
                  parameterKey={'click_id'}
                  width="264px"
                  linkText="Full list"
                  id="creation-tracking-A"
                  type="suggestions-tracking"
                  textBelowSuggestions="or select from the"
                  suggestions={["Second 1", "Second 2", "Second 3"]}
                  callback={() => console.log('Displaying full list')}
                  onTagCreated={addParameterTag}
                  onTagDeleted={deleteParameterTag}
                  disabled={freeze}
                />
                <XIcon
                  role='icon-to-remove-structure'
                  props={{
                    width: '10px',
                    height: '10px',
                    fill: gray.g3,
                    margin: '0 5px',
                    cursor: 'pointer',
                    hover: black,
                    justifySelf: 'end',
                    onClick: () => console.log('Display modal and pass it the structure id: original-structure'),
                  }}
                />
              </DivContainer>

              <DivContainer id="original-structure" display="grid" alignItems="center" gridTemplateColumns="28% 5% auto 8%" padding="15px" borderBottom={`1px solid ${gray.g1}`}>
                <Text color={freeze ? gray.g3 : black} fontSize={size12} fontWeight="bold">device_id</Text>
                <Text>=</Text>
                <CreationTracking
                  flatParameters={flatParameters}
                  labelParameters={labelParameters}
                  parameterKey={'device_id'}
                  width="264px"
                  linkText="Full list"
                  id="creation-tracking-A"
                  type="suggestions-tracking"
                  textBelowSuggestions="or select from the"
                  suggestions={["third 1", "third 2", "third 3"]}
                  callback={() => console.log('Displaying full list')}
                  onTagCreated={addParameterTag}
                  onTagDeleted={deleteParameterTag}
                  disabled={freeze}
                />
                <XIcon
                  role='icon-to-remove-structure'
                  props={{
                    width: '10px',
                    height: '10px',
                    fill: gray.g3,
                    margin: '0 5px',
                    cursor: 'pointer',
                    hover: black,
                    justifySelf: 'end',
                    onClick: () => console.log('Display modal and pass it the structure id: original-structure'),
                  }}
                />
              </DivContainer>

              <DivContainer id="original-structure" display="grid" alignItems="center" gridTemplateColumns="28% 5% auto 8%" padding="15px" borderBottom={`1px solid ${gray.g1}`}>
                <Text color={freeze ? gray.g3 : black} fontSize={size12} fontWeight="bold">creative</Text>
                <Text>=</Text>
                <CreationTracking
                  flatParameters={flatParameters}
                  labelParameters={labelParameters}
                  parameterKey={'creative'}
                  width="264px"
                  linkText="Full list"
                  id="creation-tracking-A"
                  type="suggestions-tracking"
                  textBelowSuggestions="or select from the"
                  suggestions={["fourth 1", "fourth 2", "fourth 3"]}
                  callback={() => console.log('Displaying full list')}
                  onTagCreated={addParameterTag}
                  onTagDeleted={deleteParameterTag}
                  disabled={freeze}
                />
                <XIcon
                  role='icon-to-remove-structure'
                  props={{
                    width: '10px',
                    height: '10px',
                    fill: gray.g3,
                    margin: '0 5px',
                    cursor: 'pointer',
                    hover: black,
                    justifySelf: 'end',
                    onClick: () => console.log('Display modal and pass it the structure id: original-structure'),
                  }}
                />
              </DivContainer>

              <CreateElement disabled={freeze} buttonText="Add parameter" buttonType="link-default-left" buttonIcon={BoldAddIcon} onDeleteCallback={structureId => console.log('Structure with id ' + structureId + ' want to be deleted')}>
                <ParametersDuplicationContainer>
                  <DropdownContainer width="100%" padding="0 10px 0 0">
                    <DropdownListContainer>
                      <OptionDropdown disabled={freeze} wide={true} text="Text" type="basic-clean" onChange={optionId => console.log('Option ' + optionId + ' is selected')} listWidth="fit-content">
                        <Option label="Option A" id="a" />
                        <Option label="Option B" id="b" />
                        <Option label="Option C" id="c" />
                        <Option label="Option D" id="d" />
                      </OptionDropdown>
                    </DropdownListContainer>
                  </DropdownContainer>
                  <Text>=</Text>
                  <DivContainer alignSelf="flex-start">
                    <CreationTracking
                      flatParameters={flatParameters}
                      labelParameters={labelParameters}
                      parameterKey={'Option A'}
                      width="264px"
                      type="suggestions-tracking"
                      suggestions={["Option 1", "Option 2", "Option 3"]}
                      callback={() => console.log('Displaying full list')}
                      onTagCreated={addParameterTag}
                      onTagDeleted={deleteParameterTag}
                      disabled={freeze}
                    />
                    <DivContainer display="flex" alignItems="center" margin="8px 0 0 0">
                      <Text color={gray.g4} fontSize={size10} display="inline" margin="0 3px 0 0">or select from the </Text>
                      <Button fontSize={size10} label="Full token list" type="link-default-left" onClick={() => console.log('Display full token list')} />
                    </DivContainer>
                  </DivContainer>
                  <XIcon
                    role='icon-to-remove-structure'
                    props={{
                      width: '10px',
                      height: '10px',
                      fill: gray.g3,
                      margin: '0 5px',
                      cursor: 'pointer',
                      hover: black,
                      justifySelf: 'end',
                      onClick: () => console.log('Display modal and pass it the structure id: structure-id'),
                    }}
                  />
                </ParametersDuplicationContainer>
              </CreateElement>
            </DivContainer>
          </Card>
        </DivContainer>
        {freeze ? 
          <DivContainer height="84px"/>
          :
          <DivContainer display='flex' justifyContent='flex-end' padding='24px 0 15px 0'>
            <Button label='Save' type='secondary-default-medium' />
          </DivContainer>
        }
      </DivContainer>
    </Modal>
  );
};

export default StructurePreview;
