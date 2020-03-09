import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LabelContainer, Input, Label, SuggestionsListContainer, SuggestionsList } from './styles';
import { getClassName, bemDestruct, useEventListener } from '../../utils';
import inputProps from './inputProps';
import { DefaultLabel } from '../Label';
import { Text } from '../UI/GenericElements/GenericElements.styles';
import { Button } from '../Button';
import { palette, fonts } from '../styles';
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
 * @return {React Component} A view for input field with icon and action on error.
 */
const CreationTagSuggestion = ({ type, placeholder, width, label, id, onTagCreated, onTagDeleted, disabled, suggestions = [], callback }) => {
  const { defaultClassName, optionalClassName, onBlurClassName, onFocusClassName, InputContainer } = inputProps[type];
  const [className, setClassName] = useState(defaultClassName);
  
  const [defaultLabelArray, setDefaultLabelArray] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [matchSuggestion, setMatchSuggestion] = useState([]);
  const [suggestionActive, setSuggestionActive] = useState(-1);
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
    const regex = value ? new RegExp(value.toLowerCase()) : { test: () => null };
    const matchSuggestion = suggestions.filter(suggestion => regex.test(suggestion.toLowerCase()));

    setInputValue(value);
    setMatchSuggestion(matchSuggestion);
    setClassName(onFocusClassName);
  }

  /**
   * Event handler in key down to move through suggestions list and create tag when Enter or Tab key are pressed
   */
  const handleKeyDown = (key) => {
    
    const keyCode = key.keyCode;
    if (inputValue.trim() && matchSuggestion.length) {
      if (keyCode === 40) {
        const setIndex = suggestionActive >= (matchSuggestion.length - 1) ? 0 : (suggestionActive + 1);
        setSuggestionActive(setIndex);
      } else if (keyCode === 38) {
        const setIndex = suggestionActive <= 0 ? (matchSuggestion.length - 1) : (suggestionActive - 1);
        setSuggestionActive(setIndex);
      }

      if ((key.keyCode === 13) || (key.keyCode === 9)) {
        key.preventDefault();
        if (matchSuggestion[suggestionActive]) {
          defaultLabelArray.push(`{${matchSuggestion[suggestionActive]}}`);
          setDefaultLabelArray(defaultLabelArray);
          onTagCreated && onTagCreated(matchSuggestion[suggestionActive]);
          setInputValue('');
          setMatchSuggestion([]);
          setSuggestionActive(-1);
        }
      }
    }
  };

  /**
   * Create label tag on click event in suggestions list
   */
  const handleClickSuggestion = (value) => {
    setInputValue(value);
    setMatchSuggestion([]);
    defaultLabelArray.push(`{${value}}`);
    onTagCreated && onTagCreated(value.trim());
    setInputValue('');
  };

  /**
   * Hook to handle click events on window
   */
  const eventHandler = () => setMatchSuggestion([]);
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
        {defaultLabelArray &&
          defaultLabelArray.map((text, index) => (
            <DefaultLabel
              key={index}
              id={index.toString()}
              text={text}
              size="medium"
              margin="5px"
              maxWidth={maxWidth}
              onClose={onTagDeleted}
            />
          ))
        }
        <Input
          id={labelId}
          width="auto"
          value={inputValue}
          disabled={disabled}
          maxLength={maxLength}
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          onBlur={disabled ? null : handleBlur}
          onFocus={disabled ? null : handleFocus}
          onChange={disabled ? null : handleChange}
          size={inputValue.length && inputValue.length + 20}
        />

      </InputContainer>
      <SuggestionsListContainer>
        <SuggestionsList className={matchSuggestion.length ? 'list--expand' : 'list--collapse'}>
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
          <Text color={gray.g4} fontSize={size10} padding="12px 0 0 23px" display="inline">
            or select from the 
          </Text>
          <Button label="Full list" type="link-default-left" onClick={callback} />
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
};

CreationTagSuggestion.defaultProps = {
  placeholder: '',
  width: '433px',
  label: '',
  onTagCreated: () => null,
  onTagDeleted: () => null,
  disabled: false,
  callback: () => null,
};

export default CreationTagSuggestion;
