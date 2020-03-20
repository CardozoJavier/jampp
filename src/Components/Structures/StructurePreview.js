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
import { LockedIcon, XIcon, BoldAddIcon } from '../UI/Icons';
import { DivContainer, Text } from '../UI/GenericElements/GenericElements.styles';
import { palette, fonts } from '../styles';
import { getQueryParams, removeEmptySpace, getReferencedId } from '../../utils';
import { HeaderParameter, HeaderText } from './styles/StructurePreview.styles';
import StructurePreviewContext from './Context';
const { gray, green, black, white } = palette;
const { size10, size12, size18 } = fonts;

const StructurePreview = ({ url }) => {
  const [freeze, setFreeze] = useState(false);
  const [urlValue, setUrlValue] = useState(url);
  const [arrayParameters, setArrayParameters] = useState({ plainText: {}, labelTag: {} });
  const latestParameters = useRef(arrayParameters);
  const [queryParams, setQueryParams] = useState(null);

  const [customParam, setCustomParam] = useState(new Map());
  const [optionDropdownId, setOptionDropdownId] = useState(getReferencedId());
  const [previousParamName, setPreviousParamName] = useState('');
  

  const toggleHandler = (status) => {
    setFreeze(!status);
  };

  useEffect(() => {
    latestParameters.current = arrayParameters;
  }, [arrayParameters]);

  useEffect(() => {
    const params = getQueryParams(url);
    setQueryParams(params);
  }, []);

  const handleUrlChange = useCallback((key, value, customParamId, previousParamName) => {
    const newUrl = new URL(urlValue);
    const params = new URLSearchParams(newUrl.search);
    
    if (customParamId) {
      const { defaultValue, paramName } = customParam.get(customParamId);

      console.log('%c handleUrlChange', 'background-color: white; color: red;', { previousParamName, params: params.toString(), newUrl, urlValue, })
      
      customParam.set(customParamId, {
        paramName: key,
        paramValue: value,
        defaultValue,
      });
      setCustomParam(customParam);
      params.delete(previousParamName);
      params.set(key, value);
      console.log('%c handleUrlChange', 'background-color: cyan; color: white;',{ key, value, customParamId, previousParamName, params: params.toString(), customParam })

    } else {
      params.set(key, value);
    };
    
    // console.log('%c handleUrlChange', 'background-color: red; color: white;',{ key, value, customParamId, params, newUrl, urlValue, customParam })
    
    newUrl.search = params;
    const urlDecoded = decodeURIComponent(newUrl.href);

    console.log({ search: newUrl.search, urlDecoded })

    // Avoid problem with race condition
    setTimeout(() => setUrlValue(urlDecoded), 0);
  }, [urlValue.search]);

  const onTagCreated = (parameterValue, parameterKey, arrayLabelTag, arrayPlainText) => {
    const updateParameters = Object.assign({}, arrayParameters);
    updateParameters.plainText[parameterKey] = arrayPlainText;
    updateParameters.labelTag[parameterKey] = arrayLabelTag;

    setArrayParameters(updateParameters);
  };

  const onTagDelete = (parameterValue, parameterKey, arrayLabelTag, arrayPlainText) => {
    const updateParameters = Object.assign({}, arrayParameters);
    updateParameters.plainText[parameterKey] = arrayPlainText;
    updateParameters.labelTag[parameterKey] = arrayLabelTag;
    setArrayParameters(updateParameters);
  };

  /**
   * Setting default value and unique id for new param created.
   */
  const onStructureCreated = (id) => {
    customParam.set(id, { paramName: 'NewParam', paramValue: '' });
    setCustomParam(customParam);
    // handleUrlChange('NewParam', '');
    // console.log('%c onStructureCreated', 'background-color: white; color: red;', { id, customParam })

    // setCustomParam(customParam);
  };


  const handleOptionChange = (buttonId, text, selectedOptionId, prevParamName) => {
    const paramName = removeEmptySpace(text);
    const paramValue = removeEmptySpace(customParam.get(buttonId).paramValue);

    // console.log({ paramName, prevParamName });
    
    if (prevParamName !== paramName) {
      setPreviousParamName(prevParamName);
    }
    customParam.set(buttonId, { paramName, paramValue, defaultValue: selectedOptionId });
    
    // console.log('%c handleOptionChange', 'background-color: cyan; color: black;',{ buttonId, customParam, });

    handleUrlChange(paramName, paramValue, buttonId, prevParamName);
    setCustomParam(customParam);

    // console.log(customParam)
  };
  
  const renderQueryParams = (params) => {
    const elements = [];
    params.forEach((value, paramKey) => {
      if (!paramKey) {
        params.delete(paramKey);
      } else {
        elements.push(
          <StructurePreviewContext.Provider value={{ disabled: freeze }} key={paramKey}>
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
                // callback={() => console.log('Displaying full list')}
                onTagCreated={onTagCreated}
                onTagDeleted={onTagDelete}
                disabled={freeze}
                arrayParameters={freeze ? arrayParameters.plainText[paramKey] : arrayParameters.labelTag[paramKey]}
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
          </StructurePreviewContext.Provider>
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
                  <LockedIcon props={{ fill: black, margin: '0 20px 0 auto', cursor: 'pointer', onClick: () => console.log('Lock icon clicked') }} />
                }
              </HeaderParameter>
              <DivContainer>

                {queryParams && renderQueryParams(queryParams)}

                <StructurePreviewContext.Provider value={{ disabled: freeze, handleOptionChange, customParam,  }}>
                  <CreateElement id={optionDropdownId} onStructureCreated={onStructureCreated} disabled={freeze} buttonText="Add parameter" buttonType="link-default-left" buttonIcon={BoldAddIcon} onDeleteCallback={structureId => console.log('Structure with id ' + structureId + ' want to be deleted')}>
                    <ParametersDuplicationContainer>
                      <DropdownContainer width="100%" padding="0 10px 0 0">
                        <DropdownListContainer>
                          <OptionDropdown optionDropdownId={optionDropdownId} wide={true} text={'New Param'} type="basic-clean" listWidth="fit-content">
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
                          width="100%"
                          linkText="Full list"
                          id={optionDropdownId}
                          key={optionDropdownId}
                          type="suggestions-tracking"
                          textBelowSuggestions="or select from the"
                          suggestions={["Option 1", "Option 2", "Option 3"]}
                          callback={() => console.log('Displaying full list')}
                          onTagCreated={onTagCreated}
                          onTagDeleted={onTagDelete}
                          disabled={freeze}
                          arrayParameters={freeze ? arrayParameters.plainText[customParam.get(optionDropdownId)?.key] : arrayParameters.labelTag[customParam.get(optionDropdownId)?.key]}
                          latestParameters={latestParameters.current}
                          handleUrlChange={handleUrlChange}
                          optionDropdownId={optionDropdownId}
                        />
                        <DivContainer display={freeze ? 'none' : 'flex'} alignItems="center" margin="8px 0 0 0">
                          <Text color={gray.g4} fontSize={size10} display="inline" margin="0 3px 0 0">or select from the </Text>
                          <Button disabled={freeze} fontSize={size10} label="Full token list" type="link-default-left" onClick={() => console.log('Display full token list')} />
                        </DivContainer>
                      </DivContainer>
                      <XIcon
                        context="structure-previeww"
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
                </StructurePreviewContext.Provider>
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