import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LabelContainer, Input, Label, SuggestionsListContainer, SuggestionsList, PreviewContainer, } from './styles';
import { getClassName, bemDestruct, useEventListener } from '../../utils';
import inputProps from './inputProps';
import { DefaultLabel } from '../Label';
import { Text } from '../UI/GenericElements/GenericElements.styles';
import { Button } from '../Button';
import { palette, fonts } from '../styles';
import { XIcon } from '../UI/Icons';
const { gray, black } = palette;
const { size10, size12 } = fonts;

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
 * @return {React Component} A view for input field with icon and action on error.
 */
const CreationTracking = ({ type, placeholder, width, label, onTagCreated, onTagDeleted, disabled, suggestions = [], callback, linkText, textBelowSuggestions }) => {
  const { defaultClassName, optionalClassName, onBlurClassName, onFocusClassName, InputContainer } = inputProps[type];
  const [className, setClassName] = useState(defaultClassName);
  
  const [inputValue, setInputValue] = useState('');
  const [matchSuggestion, setMatchSuggestion] = useState([]);
  const [defaultLabelArray, setDefaultLabelArray] = useState([]);
  const [suggestionActive, setSuggestionActive] = useState(-1);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [previewTracking, setPreviewTracking] = useState('');
  const [labelId, setLabelId] = useState('');
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const maxWidth = Number(width.split('px')[0]) - 53;
  const maxLength = Math.ceil(maxWidth * 11/100);
  
  const handleClick = () => {
    setClassName(toggleToClassName);
  }
  
  const handleBlur = () => {
    setClassName(onBlurClassName);
  }
  
  const handleFocus = () => {
    setClassName(onFocusClassName);
  }
  
  const handleChange = ({ target: { value }}) => {
    const [flatValue, trackingValue] = value.split('{');
    const regex = trackingValue ? new RegExp(trackingValue.toLowerCase()) : { test: () => null };
    const matchSuggestion = trackingValue === '' ? suggestions : suggestions.filter(suggestion => regex.test(suggestion.toLowerCase()));

    setShowSuggestion(!!matchSuggestion.length);
    setInputValue(value);
    setMatchSuggestion(matchSuggestion);
    setClassName(onFocusClassName);
  }

  /**
   * Event handler in key down to move through suggestions list and create tag when Enter or Tab key are pressed
   */
  const handleKeyDown = (key) => {
    const keyCode = key.keyCode.toString();
    if (keyCode.toString() === '219') {
      setShowSuggestion(true);
      handleClickSuggestion(inputValue, 'flat');
      setPreviewTracking('preview-tracking');
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
          const id = Math.random().toString();
          defaultLabelArray.push(
            <DefaultLabel
              key={id}
              id={id}
              text={`{${matchSuggestion[suggestionActive]}}`}
              size="medium"
              margin="5px"
              maxWidth={maxWidth}
              onClose={onTagDeleted}
            />
          );
          setDefaultLabelArray(defaultLabelArray);
          onTagCreated && onTagCreated(matchSuggestion[suggestionActive]);
          setInputValue('');
          setMatchSuggestion([]);
          setSuggestionActive(-1);
          setShowSuggestion(false);
          setPreviewTracking('');
        }
      }
    }
  };

  /**
   * Create label tag on click event in suggestions list
   */
  const handleClickSuggestion = (value, type) => {
    setMatchSuggestion([]);
    const id = Math.random().toString();
    if (type === 'flat') {
      defaultLabelArray.push(
        <Text fontSize={size12}>{value}</Text>
      );
    } else {
      defaultLabelArray.push(
        <DefaultLabel
          key={id}
          id={id}
          text={`{${value}}`}
          size="medium"
          margin="5px"
          maxWidth={maxWidth}
          onClose={onTagDeleted}
        />
      );
      onTagCreated && onTagCreated(value.trim());
    }
    setInputValue('');
    setShowSuggestion(false);
    setPreviewTracking('');
  };

  /**
   * Set empty input value and remove preview styles
   */
  const closePreview = () => {
    setPreviewTracking('');
    setInputValue('');
  };

  /**
   * Hook to handle click events on window
   */
  const eventHandler = () => setShowSuggestion(false);
  useEventListener('click', eventHandler);

  useEffect(() => {
    const id = Math.random().toString();
    setLabelId(id);
  }, []);

  return (
    <LabelContainer>
      {label && <Label htmlFor={labelId}>{label}</Label>}
      <InputContainer
        onClick={disabled ? null : handleClick}
        className={bemDestruct(className, disabled)}
        disabled={disabled}
        width={width}
      >
        {defaultLabelArray && defaultLabelArray.map(item => item)}
        <PreviewContainer>
            <Input
              id={labelId}
              value={inputValue}
              disabled={disabled}
              maxLength={maxLength}
              placeholder={placeholder}
              onKeyDown={handleKeyDown}
              className={previewTracking}
              onBlur={disabled ? null : handleBlur}
              onFocus={disabled ? null : handleFocus}
              onChange={disabled ? null : handleChange}
              size={inputValue.length ? inputValue.length + 3 : 5}
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
              onClick={() => handleClickSuggestion(suggestion)}
              onMouseOver={() => setSuggestionActive(index)}
            >{suggestion}</Text>
          ))}
          {textBelowSuggestions ?
            <Text color={gray.g4} fontSize={size10} padding="12px 0 0 23px" display="inline">
              {textBelowSuggestions}
            </Text>
            : null
          }
          {linkText ?
            <Button label={linkText} type="link-default-left" onClick={callback} />
            :null
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
};

export default CreationTracking;
