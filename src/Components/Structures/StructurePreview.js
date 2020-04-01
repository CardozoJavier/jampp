import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import {
  Card,
  Modal,
  Button,
  TabGroup,
  ToggleSwitch,
  CreateElement,
} from '../';
import CreationTracking from './CreationTracking';
import AddParameterDropdown from './AddParameterDropdown';
import FullTokenList from './FullTokenList';
import { Tab } from '../Tab/styles';
import { ParametersDuplicationContainer } from '../CreationTag/styles';
import { DropdownContainer, DropdownListContainer } from '../Dropdown/styles';
import { LockedIcon, XIcon, BoldAddIcon } from '../UI/Icons';
import { DivContainer, Text } from '../UI/GenericElements/GenericElements.styles';
import { palette, fonts } from '../styles';
import { getQueryParams, removeEmptySpace, getReferencedId, highlighter, getUniqueId, deleteQueryStringParameter, sanitizeUrl } from '../../utils';
import { HeaderParameter, HeaderText } from './styles/StructurePreview.styles';
import StructurePreviewContext from './Context';
import Consumer from './Consumer';
const { gray, green, black, white } = palette;
const { size10, size12, size18 } = fonts;

const highlightColor = '#ab94ff';

/**
 * StructurePreview should be called with
 * @param {String} url - (Required) It's the original url pasted by user
 * @param {Function} onSave - (Required) It's the callback to be call when save button is clicked
 * @param {Array} partnerParameterList - (Required) It's the array list to be displayed when new parameter is added
 * @param {Array} jamppParameterList - (Optional) It's the array of jampp parameter suggestions to be displayed when user is typing the new parameter value
 * @param {Array} fullTokenList - (Optional) It's the array of all available tokens can be selected. The array of 'jamppParameterList' will be the default value
 */
const StructurePreview = ({ url, onSave, partnerParameterList, jamppParameterList, fullTokenList }) => {
  const [freeze, setFreeze] = useState(false);
  const [urlValue, setUrlValue] = useState(url);
  const latestUrlValue = useRef(urlValue);
  const [arrayParameters, setArrayParameters] = useState({ plainText: {}, labelTag: {} });
  const latestParameters = useRef(arrayParameters);
  const [queryParams, setQueryParams] = useState(new Map());
  const [customParam, setCustomParam] = useState(new Map());
  const latestCustomParam = useRef(customParam);

  const globalId = getReferencedId(); 
  const [optionDropdownId, setOptionDropdownId] = useState(globalId);
  const [fullTokenListId, setFullTokenListId] = useState(globalId);
  const [paramFocus, setParamFocus] = useState(null);
  const latestParamFocus = useRef(paramFocus);

  const [tokenList, setTokenList] = useState(false);

  const handleSave = () => {
    onSave(urlValue);
  };

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

  const replaceParamKey = (params, oldKey, newKey) => {
    const paramsSplitted = params.split('&');
    const paramsMapped = paramsSplitted.map(param => param.split('='));
    paramsMapped.forEach(param => {
      if (param[0] === oldKey) {
        param[0] = newKey;
      }
    });
    const paramsJoin = paramsMapped.map(param => param.join('='));
    return paramsJoin.join('&');
  };

  const handleUrlChange = useCallback((key, value = '', customParamId, selectedOptionId, buttonText) => {
    const urlSanitized = sanitizeUrl(latestUrlValue.current, 'span');
    const newUrl = new URL(urlSanitized);
    let params = new URLSearchParams(newUrl.search);

    if (customParamId) {
      const { paramName } = customParam.get(customParamId);
      updateCustomParam(key, value, customParamId, selectedOptionId, buttonText);
      if (params.has(paramName)) {
        // Replace previous param with new param key
        const updateParams = new URLSearchParams(replaceParamKey(params.toString(), paramName, key));
        params = updateParams;
      }
      params.set(key, value)
    } else {
      params.set(key, value);
    };
    newUrl.search = params;
    const urlDecoded = decodeURIComponent(newUrl.href);
    const urlHighlighted = (paramFocus || latestParamFocus.current) ? urlHighlightHandler(key, urlDecoded) : urlDecoded;
    // Avoid problem with race condition
    setTimeout(() => setUrlValue(urlHighlighted), 0);
  }, [urlValue, paramFocus, arrayParameters]);

  const onTagCreated = (parameterValue, parameterKey, arrayLabelTag, arrayPlainText) => {
    const updateParameters = Object.assign({}, arrayParameters);
    updateParameters.plainText[parameterKey] = arrayPlainText;
    updateParameters.labelTag[parameterKey] = arrayLabelTag;
    setArrayParameters(updateParameters);
  };

  const onTagDeleted = (parameterValue, parameterKey, arrayLabelTag, arrayPlainText, optionDropdownId) => {
    const updateParameters = Object.assign({}, arrayParameters);
    updateParameters.plainText[parameterKey] = arrayPlainText;
    updateParameters.labelTag[parameterKey] = arrayLabelTag;
    const customParamKey = customParam.get(optionDropdownId);

    if (customParamKey) {
      const { paramName, buttonText } = customParamKey;
      customParam.set(optionDropdownId, {
        paramName,
        paramValue: parameterValue,
        buttonText,
      });
      setCustomParam(customParam);
    }
    
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

  // TODO: Fix when a new parameter is added and has the same key with other, the url is wrong
  const handleOptionChange = useCallback((dropdownId, text, selectedOptionId) => {
    const paramName = removeEmptySpace(text);
    const paramValue = removeEmptySpace(customParam.get(dropdownId)?.paramValue);
    handleUrlChange(paramName, paramValue, dropdownId, selectedOptionId, text);
  }, [customParam]);


  /**
   * Callback to handle parameter focus for highlight url
   */
  const urlHighlightHandler = useCallback((paramKey, url = latestUrlValue.current) => {
    const urlSanitized = sanitizeUrl(url, 'span');
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
  
  /**
   * Delete structure of parameter
   */
  const onDeleteStructureHandler = useCallback((key) => {   
    let paramKey; 
    if (queryParams.has(key)) {
      paramKey = key;
      queryParams.delete(key);
    } else if (customParam.has(key)) {
      paramKey = customParam.get(key).paramName;
      const structure = document.getElementById(key);
      structure.style.display = 'none';
    }
    const updateUrl = deleteQueryStringParameter(latestUrlValue.current, paramKey);
    setQueryParams(queryParams);
    setUrlValue(updateUrl);
  }, [queryParams, customParam]);

  const divContainerConstructor = (context) => {
    const { disabled } = context;
    return {
      display: disabled ? 'none' : 'flex',
    };
  };

  const xIconConstructor = (context, props) => {
    const { disabled } = context;
    return {
      ...props,
      props: {
        ...props.props,
        fill: disabled ? gray.g2 : gray.g3,
        cursor: disabled ? 'default' : 'pointer',
      }
    };
  };

  const onFullTokenListClick = (id) => {
    setTokenList(true);
    setFullTokenListId(id);
  };

  const onFullTokenListSelect = (parameterValue, parameterKey, arrayLabelTag, arrayPlainText) => {
    onTagCreated(parameterValue, parameterKey, arrayLabelTag, arrayPlainText);
  };
  
  const onFullTokenListClose = () => {
    setTokenList(false);
  };

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
                callback={() => onFullTokenListClick(paramKey)}
                onTagCreated={onTagCreated}
                onTagDeleted={onTagDeleted}
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
                  onClick: freeze ? null : () => onDeleteStructureHandler(paramKey),
                }}
              />
            </DivContainer>
          </StructurePreviewContext.Provider>
        )}
      });

    return elements;
  };

  return (
      <Modal width="525px" style={{ position: 'relative' }}>
        <DivContainer padding="25px" position='relative'>
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
                  <CreateElement id={optionDropdownId} onStructureCreated={onStructureCreated} disabled={freeze} buttonText="Add parameter" buttonType="link-default-left" buttonIcon={BoldAddIcon} onDeleteCallback={onDeleteStructureHandler}>
                    <ParametersDuplicationContainer id={optionDropdownId} key={optionDropdownId}>
                      <DropdownContainer width="100%" padding="0 10px 0 0">
                        <DropdownListContainer>
                          <AddParameterDropdown handleOptionChange={handleOptionChange} optionDropdownId={optionDropdownId} wide={true} type="customize-text" buttonList="Custom parameter" listWidth="fit-content">
                            {partnerParameterList.map((param, i) => <Option label={param} id={`${param}-${i}`} key={`${param}-${i}`} />)}
                          </AddParameterDropdown>
                        </DropdownListContainer>
                      </DropdownContainer>
                      <Text>=</Text>
                      <DivContainer alignSelf="flex-start">
                        <CreationTracking
                          width="100%"
                          key={optionDropdownId}
                          type="suggestions-tracking"
                          suggestions={jamppParameterList}
                          onTagCreated={onTagCreated}
                          onTagDeleted={onTagDeleted}
                          disabled={freeze}
                          latestParameters={latestParameters.current}
                          handleUrlChange={handleUrlChange}
                          optionDropdownId={optionDropdownId}
                          urlHighlightHandler={urlHighlightHandler}
                        />
                        <Consumer constructor={divContainerConstructor}>
                          <DivContainer alignItems="center" margin="8px 0 0 0">
                            <Text color={gray.g4} fontSize={size10} display="inline" margin="0 3px 0 0">or select from the </Text>
                            <Button fontSize={size10} label="Full token list" type="link-default-left" onClick={() => onFullTokenListClick(optionDropdownId)} />
                          </DivContainer>
                        </Consumer>
                      </DivContainer>
                      <Consumer constructor={xIconConstructor}>
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
                            onClick: freeze ? null : () => onDeleteStructureHandler(optionDropdownId),
                          }}
                        />
                      </Consumer>
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
              <Button onClick={handleSave} label='Save' type='secondary-default-medium' />
            </DivContainer>
          }
        </DivContainer>
        <StructurePreviewContext.Provider value={{ customParam: latestCustomParam.current, arrayParameters }}>
          {tokenList ?
            <FullTokenList
              tokenList={fullTokenList}
              onTagDeleted={onTagDeleted}
              onSelect={onFullTokenListSelect}
              optionDropdownId={fullTokenListId}
              parameterKey={fullTokenListId}
              onFullTokenListClose={onFullTokenListClose}
            />
            : null
          }
        </StructurePreviewContext.Provider>
      </Modal>
  );
};

StructurePreview.propTypes = {
  url: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  partnerParameterList: PropTypes.arrayOf(PropTypes.string).isRequired,
  jamppParameterList: PropTypes.arrayOf(PropTypes.string),
  fullTokenList: PropTypes.arrayOf(PropTypes.shape({
    token: PropTypes.string,
    description: PropTypes.string,
  })),
};

PropTypes.defaultProps = {
  jamppParameterList: [],
  fullTokenList: [],
};

export default StructurePreview;