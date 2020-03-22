import React, { useState, useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { LabelContainer, Input, Label, SuggestionsListContainer, SuggestionsList, PreviewContainer, PlainText} from './styles';
import { getClassName, bemDestruct, useEventListener, removeEmptySpace } from '../../utils';
import inputProps from './inputProps';
import { DefaultLabel } from '../Label';
import { Text } from '../UI/GenericElements/GenericElements.styles';
import { Button } from '../Button';
import { palette, fonts } from '../styles';
import { XIcon } from '../UI/Icons';
import InputText from '../Structures/InputText';
import StructurePreviewContext from '../Structures/Context';
const { gray, black } = palette;
const { size10 } = fonts;

/**
 * CreationTracking component should be called with
 * @param {String} type - (Required) It's to define styles of input field.
 * @param {String} placeholder - (Optional) It's to display text into input field.
 * @param {String} label - (Optional) Text to be display in label.
 * @param {Function} icon - (Optional) Function that returns an svg icon.
 * @param {Function} onTagCreated - (Optional) Callback to trigger on tag created. It receive tag value in first argument.
 * @param {Function} onTagDeleted - (Optional) Callback to trigger on tag created. It receive tag value in first argument.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @param {Array} suggestions - (Required) Array of string to be displayed in suggestions list.
 * @param {Function} callback - (Optional) Callback to be triggered on click event in button into suggestions list.
 * @param {String} linkText - (Optional) It's the text to be displayed like link.
 * @param {String} textBelowSuggestions - (Optional) It's the text to be displayed at the bottom of suggestions list.
 * @param {Object} flatParameters - (Optional) It's the object with array of parameters created and parsed to plain text.
 * @param {Object} labelParameters - (Optional) It's the object with array of original label tags parameters.
 * @param {String} parameterKey - (Optional) It's the key that correspond with each parameter input text.
 * @param {Function} urlHighlightHandler - (Optional) Callback to trigger when parameter is on focus, for highlight the url.
 * @return {React Component} A view for input field with icon and action on error.
 */
const CreationTracking = ({ type, placeholder, width, label, onTagCreated, onTagDeleted, disabled, suggestions = [], callback, linkText, textBelowSuggestions, parameterKey, arrayParameters, latestParameters, defaultValue, handleUrlChange, optionDropdownId, urlHighlightHandler }) => {
  const context = useContext(StructurePreviewContext);
  disabled = context ? context.disabled : disabled;
  // const [disabled, setContextDisabled] = useState(context.disabled);
  const { defaultClassName, optionalClassName, onBlurClassName, onFocusClassName, InputContainer } = inputProps[type];
  const [className, setClassName] = useState(defaultClassName);
  
  const [inputValue, setInputValue] = useState('');
  const [matchSuggestion, setMatchSuggestion] = useState([]);
  const [defaultLabelArray, setDefaultLabelArray] = useState([]);
  const latestDefaultLabelArray = useRef(defaultLabelArray);
  const [suggestionActive, setSuggestionActive] = useState(-1);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [previewTracking, setPreviewTracking] = useState('');
  const [labelId, setLabelId] = useState('');
  const [textArray, setTextArray] = useState([]);
  const latestTextArray = useRef(textArray);
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);

  /**
   * Setting className by pointer events.
   */
  const handleClick = () => {
    setClassName(toggleToClassName);
  }
  const handleBlur = () => {
    setClassName(onBlurClassName);
  }
  const handleFocus = () => {
    setClassName(onFocusClassName);
    urlHighlightHandler(parameterKey);
  }
  
  /**
   * Handle input field.
   */
  const handleChange = ({ target: { value }}) => {
    let regex;
    let matchSuggestion;
    const [flatValue, trackingValue] = value.split('{');

    if (trackingValue === undefined) {
      regex = value.trim() ? new RegExp(`^${value.toLowerCase()}`) : { test: () => null };
      matchSuggestion = suggestions.filter(suggestion => regex.test(suggestion.toLowerCase()));
    } else {
      regex = new RegExp(`^${trackingValue.toLowerCase()}`);
      matchSuggestion = trackingValue === '' ? suggestions : suggestions.filter(suggestion => regex.test(suggestion.toLowerCase()));
    }
    setShowSuggestion(!!matchSuggestion.length);
    setInputValue(value);
    setMatchSuggestion(matchSuggestion);
    setClassName(onFocusClassName);

    const parameterValue = concatUrlParam(value);
    const { customParam, } = context;
    const paramKey = parameterKey || customParam.get(optionDropdownId).paramName;

    // console.log('%c CreationTracking', 'background-color: red; color: white;', { value, inputValue, customParam: customParam.get(optionDropdownId) })

    handleUrlChange(paramKey, parameterValue, optionDropdownId);
  }

  /**
   * Update array of tags after one has removed
   */
  const deleteTagHandler = (tagId, tagText) => {
    const updateDefaultLabelArray = [];
    const updateTextArray = [];

    latestParameters.labelTag[parameterKey].forEach(tag => {
      if (tag.props.targetId !== tagId) {
        updateDefaultLabelArray.push(tag);
      }
    });
    
    latestParameters.plainText[parameterKey].forEach(text => {
      if (text.props.targetId !== tagId) {
        updateTextArray.push(text);
      }
    });

    onTagDeleted(null, parameterKey, updateDefaultLabelArray, updateTextArray);
  };

  /**
   * Input value handler for input field pushed into defaultLabelArray.
   */
  const handleInputChange = (id, value) => {
    const updateDefaultLabelArray = [];
    const updateTextArray = [];
    const { customParam, optionDropdownId } = context;
    const paramKey = parameterKey || customParam.get(optionDropdownId);

    latestParameters.labelTag[paramKey].forEach(labelTag => {
      if (labelTag.props.targetId == id) {
        const cloneInputField = React.cloneElement(labelTag, {
          defaultValue: value,
          style: value.length ? { display: 'block' } : { display: 'none' },
        });
        updateDefaultLabelArray.push(cloneInputField);
      } else {
        updateDefaultLabelArray.push(labelTag);
      }
    });
    
    latestParameters.plainText[paramKey].forEach(plainText => {
      if (plainText.props.targetId === id) {
        const trimValue = removeEmptySpace(value);
        const cloneElement = React.cloneElement(plainText, {
          text: value,
          children: trimValue,
        });
        updateTextArray.push(cloneElement);
      } else {
        updateTextArray.push(plainText);
      }
    });

    onTagCreated(null, paramKey, updateDefaultLabelArray, updateTextArray);
    handleUrlChange(paramKey, removeEmptySpace(value));
  };

  /**
   * Event handler in key down to move through suggestions list and create tag when Enter or Tab key are pressed
   */
  const handleKeyDown = (key) => {
    const { customParam, optionDropdownId } = context;
    const paramKey = parameterKey || customParam.get(optionDropdownId);
    const keyCode = key.keyCode.toString();
    if (keyCode.toString() === '219') {
      handleUrlChange(paramKey, inputValue, optionDropdownId);
      pushElement(inputValue, 'input-field');
    };
    if (inputValue.trim() && showSuggestion) {
      if (keyCode === '40') {
        const setIndex = suggestionActive >= (matchSuggestion.length - 1) ? 0 : (suggestionActive + 1);
        setSuggestionActive(setIndex);
      } else if (keyCode === '38') {
        const setIndex = suggestionActive <= 0 ? (matchSuggestion.length - 1) : (suggestionActive - 1);
        setSuggestionActive(setIndex);
      }

      if ((keyCode === '13') || (keyCode === '9')) {
        key.preventDefault();
        if (matchSuggestion[suggestionActive]) {
          pushElement(matchSuggestion[suggestionActive], 'label-tag');
        }
      }
    }
  };

  /**
   * Push new items into box. Can be DefaultLabel components or InputText that could be modified.
   */
  const pushElement = (value, type) => {
    const updateDefaultLabelArray = latestParameters.labelTag[parameterKey] ? [...latestParameters.labelTag[parameterKey]] : [];
    const trimValue = removeEmptySpace(value);
    const targetId = Math.random().toString();
    const labelId = Math.random().toString();
    setMatchSuggestion([]);
    setLabelId(labelId);

    if (type === 'input-field') {
      updateDefaultLabelArray.push(
        <InputText id={targetId} key={targetId} targetId={targetId} defaultValue={removeEmptySpace(inputValue)} onChange={handleInputChange} disabled={disabled} textAlign="center" />
      );
      setPreviewTracking('preview-tracking');
    } else if (type === 'label-tag'){
      const defaultLabelId = Math.random().toString();
      updateDefaultLabelArray.push(
        <DefaultLabel
          targetId={targetId}
          key={defaultLabelId}
          id={defaultLabelId}
          text={`{${value}}`}
          size="medium"
          margin="4px 3px"
          onClose={deleteTagHandler}
        />
      );
      setPreviewTracking('');
    }

    /**
     * It's for displaying the tags like plain text when input is freezed
     */
    const updateTextArray = latestParameters.plainText[parameterKey] ? [...latestParameters.plainText[parameterKey]] : [];
    const plainTextId = Math.random().toString();
    updateTextArray.push(
      <PlainText targetId={targetId} text={value} key={plainTextId} id={plainTextId}>{trimValue}</PlainText>
    );

    value.trim() && onTagCreated(value.trim(), parameterKey, updateDefaultLabelArray, updateTextArray);
    setInputValue('');
    setShowSuggestion(false);
    setMatchSuggestion([]);
    setSuggestionActive(-1);
  };

  /**
   * Set empty input value and remove preview styles
   */
  const closePreview = () => {
    setPreviewTracking('');
    setInputValue('');
  };

  const handleCallback = () => {
    callback();
    closePreview();
    setInputValue('');
  };

  /**
   * Concat custom param setted by input field to be displayed in url box.
   */
  const concatUrlParam = (customParam = '') => {
    let updateUrlParamValue = '';
    arrayParameters && arrayParameters.forEach(element => {
      const elementValue = element.props.text || element.props.defaultValue || element.props.children || '';
      updateUrlParamValue = updateUrlParamValue.concat(elementValue);
    });
    updateUrlParamValue = removeEmptySpace(updateUrlParamValue.concat(customParam));
    return updateUrlParamValue;
  };

  /**
   * Hook to handle click events on window
   */
  const eventHandler = () => setShowSuggestion(false);
  useEventListener('click', eventHandler);
  useEffect(() => {
    const targetId = Math.random().toString();
    setLabelId(targetId);
    if (defaultValue) {
      const defaultLabelId = Math.random().toString();
      const updateDefaultLabelArray = [];
      updateDefaultLabelArray.push(
        <DefaultLabel
          targetId={targetId}
          key={defaultLabelId}
          id={defaultLabelId}
          text={`${defaultValue}`}
          size="medium"
          margin="4px 3px"
          onClose={deleteTagHandler}
        />
      );

      const plainTextId = Math.random().toString();
      const updateTextArray = [];
      updateTextArray.push(
        <PlainText targetId={targetId} text={defaultValue} key={plainTextId} id={plainTextId}>{defaultValue}</PlainText>
      );
      defaultValue.trim() && onTagCreated(defaultValue, parameterKey, updateDefaultLabelArray, updateTextArray);
    }
  }, []);

  /**
   * Setting updated labels array for handle it in delete tag callback.
   */
  useEffect(() => {
    latestDefaultLabelArray.current = defaultLabelArray;
  }, [defaultLabelArray]);

  /**
   * Setting updated plain text array for handle it in delete tag callback.
   */
  useEffect(() => {
    latestTextArray.current = textArray;
  }, [textArray]);

  /**
   * Concat custom param setted by input field to be displayed in url box.
   */
  useEffect(() => {
    const { customParam } = context;
    const parameterValue = concatUrlParam(inputValue) || customParam?.get(optionDropdownId).paramValue;
    const paramKey = parameterKey || customParam.get(optionDropdownId).paramName;
    handleUrlChange(paramKey, parameterValue, optionDropdownId);

    // console.log('%c CreationTracking', 'background-color: red; color: white;', { paramKey, parameterValue, optionDropdownId,  })
  }, [arrayParameters]);

  /**
   * Context listener update props
   */
  useEffect(() => {
    const { customParam } = context;
    if (optionDropdownId) {
      const parameterValue = customParam.get(optionDropdownId).paramValue;
      setInputValue(parameterValue);
    };
  }, [disabled]);
  

  return (
    <LabelContainer>
      {label && <Label htmlFor={labelId}>{label}</Label>}
      <InputContainer
        onClick={disabled ? null : handleClick}
        className={bemDestruct(className, disabled)}
        disabled={disabled}
        width={width}
        htmlFor={labelId}
      >
        
        {arrayParameters && arrayParameters.map(item => item)}

        <PreviewContainer>
          <Input
            id={labelId}
            fontSize={size10}
            value={disabled ? removeEmptySpace(inputValue) : inputValue}
            disabled={disabled}
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
            className={previewTracking}
            onBlur={disabled ? null : handleBlur}
            onFocus={disabled ? null : handleFocus}
            onChange={disabled ? null : handleChange}
            size={inputValue.length ? inputValue.length + 3 : 1}
          />
          <XIcon props={{ onClick: closePreview, width: '6px', height: '6px', fill: gray.g07, cursor: 'pointer', display: previewTracking ? 'block' : 'none', position: 'relative', right: '20px', }} />
        </PreviewContainer>
      </InputContainer>

      <SuggestionsListContainer>
        <SuggestionsList className={showSuggestion ? 'list--expand' : 'list--collapse'}>
          {matchSuggestion.map((suggestion, index) => (
            <Text
              color={black}
              fontSize={size10}
              cursor="pointer"
              padding="5px 23px"
              key={`${suggestion}-${index}`}
              className={index === suggestionActive ? 'suggestion-active' : ''}
              onClick={() => pushElement(suggestion, 'label-tag')}
              onMouseOver={() => setSuggestionActive(index)}
            >{suggestion}</Text>
          ))}
          {textBelowSuggestions ?
            <Text color={gray.g4} fontSize={size10} margin="0 0 0 23px" display="inline">
              {textBelowSuggestions}
            </Text>
            : null
          }
          {linkText ?
            <Button label={linkText} type="link-default-left" onClick={handleCallback} />
            : null
          }
        </SuggestionsList>
      </SuggestionsListContainer>
    </LabelContainer>
  );
};

CreationTracking.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  label: PropTypes.string,
  onTagCreated: PropTypes.func,
  onTagDeleted: PropTypes.func,
  disabled: PropTypes.bool,
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  callback: PropTypes.func,
  linkText: PropTypes.string,
  textBelowSuggestions: PropTypes.string,
  parameterKey: PropTypes.string,
  arrayParameters: PropTypes.arrayOf(PropTypes.shape({})),
  latestParameters: PropTypes.arrayOf(PropTypes.shape({})),
  defaultValue: PropTypes.string,
  handleUrlChange: PropTypes.func,
};

CreationTracking.defaultProps = {
  placeholder: '',
  width: '433px',
  label: '',
  onTagCreated: () => null,
  onTagDeleted: () => null,
  disabled: false,
  callback: () => null,
  linkText: null,
  textBelowSuggestions: null,
  parameterKey: null,
  arrayParameters: [],
  latestParameters: [],
  defaultValue: '',
  handleUrlChange: () => null,
};

export default CreationTracking;
