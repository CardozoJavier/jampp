import React, { useState, useRef, useEffect, useCallback } from 'react';
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
import { getQueryParams, removeEmptySpace } from '../../utils';
import { HeaderParameter, HeaderText } from './styles/StructurePreview.styles';
const { gray, green, black, white } = palette;
const { size10, size12, size18 } = fonts;

export const StructurePreviewContext = React.createContext({
  plainText: {},
  labelTag: {},  
});


const StructurePreview = ({ url }) => {
  const [freeze, setFreeze] = useState(false);
  const [urlValue, setUrlValue] = useState(url);
  const [parameters, setParameters] = useState({ plainText: {}, labelTag: {} });
  const latestParameters = useRef(parameters);
  const [queryParams, setQueryParams] = useState(null);

  const [newParam, setNewParam] = useState('New Param');

  const toggleHandler = (status) => {
    setFreeze(!status);
  };

  useEffect(() => {
    latestParameters.current = parameters;
  }, [parameters]);

  useEffect(() => {
    const params = getQueryParams(url);
    setQueryParams(params);
  }, []);

  const handleUrlChange = (key, value) => {
    const newUrl = new URL(urlValue);
    const params = new URLSearchParams(newUrl.search);
    params.set(key, value);
    newUrl.search = params;
    const urlDecoded = decodeURIComponent(newUrl.href);

    // Avoid problem with race condition
    setTimeout(() => setUrlValue(urlDecoded), 0);
  };

  const onTagCreated = (parameterValue, parameterKey, arrayLabelTag, arrayPlainText) => {
    const updateParameters = Object.assign({}, parameters);
    updateParameters.plainText[parameterKey] = arrayPlainText;
    updateParameters.labelTag[parameterKey] = arrayLabelTag;

    console.log(updateParameters)

    setParameters(updateParameters);
  };

  const onTagDelete = (parameterValue, parameterKey, arrayLabelTag, arrayPlainText) => {
    const updateParameters = Object.assign({}, parameters);
    updateParameters.plainText[parameterKey] = arrayPlainText;
    updateParameters.labelTag[parameterKey] = arrayLabelTag;
    setParameters(updateParameters);
  };

  /**
   * Set the parameter key when is selected from dropdown
   */
  const handleAddNewParam = (optionId, text) => {
    const keyParameter = removeEmptySpace(text);
    console.log(text)
    setNewParam(text);
    handleUrlChange(keyParameter, '');
  };
  
  const renderQueryParams = (params) => {
    const elements = [];
    params.forEach((value, paramKey) => {
      if (!paramKey) {
        params.delete(paramKey);
      } else {
        elements.push(
          <DivContainer key={paramKey} id="original-structure" display="grid" alignItems="center" gridTemplateColumns="28% 5% 59% 8%" padding="15px" borderBottom={`1px solid ${gray.g1}`}>
            <Text color={freeze ? gray.g3 : black} fontSize={size12} fontWeight="bold">{paramKey}</Text>
            <Text>=</Text>
            <CreationTracking
              defaultValue={value}
              parameterKey={paramKey}
              width="100%"
              linkText="Full list"
              id={`creation-tracking_${paramKey}`}
              type="suggestions-tracking"
              textBelowSuggestions="or select from the"
              suggestions={["Option 1", "Option 2", "Option 3"]}
              callback={() => console.log('Displaying full list')}
              onTagCreated={onTagCreated}
              onTagDeleted={onTagDelete}
              disabled={freeze}
              parameters={freeze ? parameters.plainText[paramKey] : parameters.labelTag[paramKey]}
              latestParameters={latestParameters.current}
              handleUrlChange={handleUrlChange}
            />
            <XIcon
              role='icon-to-remove-structure'
              props={{
                width: '10px',
                height: '10px',
                fill: freeze ? gray.g2 : gray.g3,
                margin: '0 5px',
                cursor: freeze ? 'default' : 'pointer',
                hover: black,
                justifySelf: 'end',
                onClick: freeze ? null : () => console.log('Display modal and pass it the key parameter: ' + paramKey),
              }}
            />
          </DivContainer>
        )}
      });

    return elements;
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
            <ToggleSwitch status={freeze} onChange={toggleHandler}/>
          </DivContainer>
          <DivContainer margin="16px 0 0 0">
            <Card width="auto" padding="0" backgroundColor={freeze ? gray.g0 : white}>
              <DivContainer margin="16px" maxHeight="90px" overflow="auto">
                <Text key="test-2" fontSize={size18} color={freeze ? gray.g3 : black}>{urlValue}</Text>
              </DivContainer>
              <HeaderParameter>
                <HeaderText padding='4px 37px 4px 16px' borderRight={`1px solid ${gray.g1}`}>{'Partner parameter'}</HeaderText>
                <HeaderText padding='4px 0 4px 20px'>{'Jampp parameter'}</HeaderText>
                {freeze ? null : 
                  <LockIcon props={{ fill: black, margin: '0 15px 0 auto', cursor: 'pointer', onClick: () => console.log('Lock icon clicked') }} />
                }
              </HeaderParameter>
              <DivContainer>

                {queryParams && renderQueryParams(queryParams)}

                <CreateElement disabled={freeze} buttonText="Add parameter" buttonType="link-default-left" buttonIcon={BoldAddIcon} onDeleteCallback={structureId => console.log('Structure with id ' + structureId + ' want to be deleted')}>
                  <ParametersDuplicationContainer>
                    <DropdownContainer width="100%" padding="0 10px 0 0">
                      <DropdownListContainer>
                        <OptionDropdown listWidth="auto" disabled={freeze} wide={true} text={newParam} type="customize-text" buttonList="Custom parameter" onChange={handleAddNewParam}>
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
                        parameterKey={newParam}
                        width="100%"
                        linkText="Full list"
                        id={`creation-tracking_${newParam}`}
                        key={`creation-tracking_${newParam}`}
                        type="suggestions-tracking"
                        textBelowSuggestions="or select from the"
                        suggestions={["Option 1", "Option 2", "Option 3"]}
                        callback={() => console.log('Displaying full list')}
                        onTagCreated={onTagCreated}
                        onTagDeleted={onTagDelete}
                        disabled={freeze}
                        parameters={freeze ? parameters.plainText[newParam] : parameters.labelTag[newParam]}
                        latestParameters={latestParameters.current}
                        handleUrlChange={handleUrlChange}
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
                        fill: freeze ? gray.g2 : gray.g3,
                        margin: '0 5px',
                        cursor: freeze ? 'default' : 'pointer',
                        hover: black,
                        justifySelf: 'end',
                        onClick: freeze ? null : () => console.log('Display modal and pass it the key parameter: ' + paramKey),
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