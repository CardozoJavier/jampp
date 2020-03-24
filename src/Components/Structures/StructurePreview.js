import React, { useState, useRef, useEffect, useCallback } from 'react';
import parse from 'html-react-parser';
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
import { getQueryParams, removeEmptySpace, getReferencedId, highlighter, getUniqueId } from '../../utils';
import { HeaderParameter, HeaderText } from './styles/StructurePreview.styles';
import StructurePreviewContext from './Context';
const { gray, green, black, white, action } = palette;
const { size10, size12, size18 } = fonts;

const highlightColor = '#ab94ff';
// const highlightColor = action;

const StructurePreview = ({ url }) => {
  const [freeze, setFreeze] = useState(false);
  const [urlValue, setUrlValue] = useState(url);
  const latestUrlValue = useRef(urlValue);
  const [arrayParameters, setArrayParameters] = useState({ plainText: {}, labelTag: {} });
  const latestParameters = useRef(arrayParameters);
  const [queryParams, setQueryParams] = useState(null);

  const [customParam, setCustomParam] = useState(new Map());
  const latestCustomParam = useRef(customParam);
  const [optionDropdownId, setOptionDropdownId] = useState(getReferencedId());

  const [buttonText, setButtonText] = useState('New Param');
  
  const [paramFocus, setParamFocus] = useState(null);
  const latestParamFocus = useRef(paramFocus);

  const toggleHandler = (status) => {
    setFreeze(!status);
    setParamFocus(null);
  };

  useEffect(() => {
    latestParamFocus.current = paramFocus;
  }, [paramFocus]);

  useEffect(() => {
    latestCustomParam.current = customParam;
  }, [customParam]);

  useEffect(() => {
    latestParameters.current = arrayParameters;
  }, [arrayParameters]);

  useEffect(() => {
    latestUrlValue.current = urlValue;
  }, [urlValue]);

  useEffect(() => {
    const params = getQueryParams(url);
    setQueryParams(params);
  }, []);


  /**
   * Function to remove span tags from the url
   */
  const sanitizeUrl = (url) => {
    const firsTag = new RegExp('<span.+?>');
    const secondTag = new RegExp('</span>');
    const urlSanitized = url.replace(firsTag, '').replace(secondTag, '');

    return urlSanitized;
  };

  const updateCustomParam = (key, value, customParamId, selectedOptionId, buttonText) => {
    const { defaultValue, paramName } = customParam.get(customParamId);
    const updateParameters = Object.assign({}, arrayParameters);
    updateParameters.plainText[key] = updateParameters.plainText[paramName];
    updateParameters.labelTag[key] = updateParameters.labelTag[paramName];
    if (key !== paramName) {
      delete arrayParameters.plainText[paramName];
      delete arrayParameters.labelTag[paramName];
    }
    customParam.set(customParamId, {
      paramName: key,
      paramValue: value,
      defaultValue: selectedOptionId || defaultValue,
      buttonText,
    });
    setCustomParam(customParam);
  };

  const handleUrlChange = useCallback((key, value = '', customParamId, selectedOptionId, buttonText) => {
    const urlSanitized = sanitizeUrl(latestUrlValue.current);
    const newUrl = new URL(urlSanitized);
    const params = new URLSearchParams(newUrl.search);

    if (customParamId) {
      const { paramName } = customParam.get(customParamId);

      updateCustomParam(key, value, customParamId, selectedOptionId, buttonText);

      // Delete old param from URL
      params.delete(paramName);
      params.set(key, value);
    } else {
      params.set(key, value);
    };

    newUrl.search = params;
    const urlDecoded = decodeURIComponent(newUrl.href);

    const urlHighlighted = latestParamFocus.current ? urlHighlightHandler(key, urlDecoded) : urlDecoded;
    
    // Avoid problem with race condition
    setTimeout(() => setUrlValue(urlHighlighted), 0);
  }, [urlValue, paramFocus, arrayParameters]);

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
    urlHighlightHandler(parameterKey);
  };

  /**
   * Setting default value and unique id for new param created.
   */
  const onStructureCreated = (id) => {
    customParam.set(id, { paramName: 'NewParam', paramValue: '', defaultValue: null, buttonText: 'New Param', });
    setCustomParam(customParam);
    setOptionDropdownId(getUniqueId());
  };

  const handleOptionChange = useCallback((dropdownId, text, selectedOptionId) => {
    setButtonText(text);
    const paramName = removeEmptySpace(text);
    const paramValue = removeEmptySpace(customParam.get(dropdownId)?.paramValue);
    handleUrlChange(paramName, paramValue, dropdownId, selectedOptionId, text);
  }, [customParam]);


  /**
   * Callback to handle parameter focus for highlight url
   */
  const urlHighlightHandler = useCallback((paramKey, url = latestUrlValue.current) => {
    const urlSanitized = sanitizeUrl(url);
    const newUrl = new URL(urlSanitized);
    const params = new URLSearchParams(newUrl.search);
    const paramValue = params.get(paramKey);
    const paramFocused = `${paramKey}=${paramValue}`;
    const paramHighlighted = highlighter(paramFocused, highlightColor);
    const updateUrl = newUrl.href.replace(paramFocused, paramHighlighted);
    const urlDecoded = decodeURIComponent(updateUrl);

    setParamFocus(paramKey);
    setUrlValue(urlDecoded);
    return urlDecoded;
  }, [urlValue]);
  
  const renderQueryParams = (params) => {
    const elements = [];
    params.forEach((value, paramKey) => {
      if (!paramKey) {
        params.delete(paramKey);
      } else {
        elements.push(
          <StructurePreviewContext.Provider value={{ disabled: freeze, arrayParameters }} key={paramKey}>
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
                handleUrlChange={handleUrlChange}
                urlHighlightHandler={urlHighlightHandler}
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
                <Text key="test-2" fontSize={size18} color={freeze ? gray.g3 : black}>{parse(urlValue)}</Text>
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

                <StructurePreviewContext.Provider value={{ disabled: freeze, customParam: latestCustomParam.current, arrayParameters, }}>
                  <CreateElement id={optionDropdownId} onStructureCreated={onStructureCreated} disabled={freeze} buttonText="Add parameter" buttonType="link-default-left" buttonIcon={BoldAddIcon} onDeleteCallback={structureId => console.log('Structure with id ' + structureId + ' want to be deleted')}>
                    <ParametersDuplicationContainer>
                      <DropdownContainer width="100%" padding="0 10px 0 0">
                        <DropdownListContainer>
                          <OptionDropdown handleOptionChange={handleOptionChange} optionDropdownId={optionDropdownId} wide={true} type="customize-text" buttonList="Custom parameter" listWidth="fit-content">
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
                          latestParameters={latestParameters.current}
                          handleUrlChange={handleUrlChange}
                          optionDropdownId={optionDropdownId}
                          urlHighlightHandler={urlHighlightHandler}
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