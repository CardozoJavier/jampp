import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { LabelContainer, Input, Label, SuggestionsListContainer, SuggestionsList, PreviewContainer } from './styles';
import { getClassName, bemDestruct, useEventListener, removeEmptySpace } from '../../utils';
import inputProps from './inputProps';
import { DefaultLabel } from '../Label';
import { Text } from '../UI/GenericElements/GenericElements.styles';
import { Button } from '../Button';
import { palette, fonts } from '../styles';
import { XIcon } from '../UI/Icons';
import InputText from '../Structures/InputText';
const { gray, black } = palette;
const { size10 } = fonts;

/**
 * CreationTagSuggestion component should be called with
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
 * @param {String} defaultValue - (Optional) It's the default value for a tag to be displayed in render.
 * @return {React Component} A view for input field with icon and action on error.
 */
const CreationTagSuggestion = ({ type, placeholder, width, label, onTagCreated, onTagDeleted, disabled, suggestions = [], callback, linkText, textBelowSuggestions, defaultValue }) => {
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
  }
  
  /**
   * Handle input field value.
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
  }

  /**
   * Update array of tags after one has removed
   */
  const deleteTagHandler = (tagId, tagText) => {
    const updateDefaultLabelArray = [];

    latestDefaultLabelArray.current.forEach(tag => {
      if (tag.props.targetId !== tagId) {
        updateDefaultLabelArray.push(tag);
      }
    });
    setDefaultLabelArray(updateDefaultLabelArray);
    onTagDeleted(tagText);
  };

  /**
   * Input value handler for input field pushed into defaultLabelArray.
   */
  const handleInputChange = (id, value) => {
    const updateDefaultLabelArray = [];

    latestDefaultLabelArray.current.forEach(labelTag => {
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

    setDefaultLabelArray(updateDefaultLabelArray);
  };

  /**
   * Event handler in key down to move through suggestions list and create tag when Enter or Tab key are pressed
   */
  const handleKeyDown = (key) => {
    const keyCode = key.keyCode.toString();
    if (keyCode.toString() === '219') {
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
    const updateDefaultLabelArray = defaultLabelArray.length ? [...defaultLabelArray] : [];
    const targetId = Math.random().toString();
    const labelId = Math.random().toString();
    setMatchSuggestion([]);
    setLabelId(labelId);

    if (type === 'input-field') {
      updateDefaultLabelArray.push(
        <InputText id={targetId} key={targetId} targetId={targetId} defaultValue={removeEmptySpace(inputValue)} onChange={handleInputChange} disabled={disabled} />
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
      onTagCreated(value.trim());
    }

    setDefaultLabelArray(updateDefaultLabelArray)
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

  useEffect(() => {
    latestDefaultLabelArray.current = defaultLabelArray;
  }, [defaultLabelArray]);


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

      defaultValue.trim() && onTagCreated(defaultValue);
    }
  }, []);

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
        
        {defaultLabelArray && defaultLabelArray.map(item => item)}

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

CreationTagSuggestion.propTypes = {
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
  defaultValue: PropTypes.string,
};

CreationTagSuggestion.defaultProps = {
  placeholder: '',
  width: '433px',
  label: '',
  onTagCreated: () => null,
  onTagDeleted: () => null,
  disabled: false,
  callback: () => null,
  linkText: null,
  textBelowSuggestions: null,
  defaultValue: '',
  handleUrlChange: () => null,
};

export default CreationTagSuggestion;

