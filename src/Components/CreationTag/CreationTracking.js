import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { LabelContainer, Input, Label, SuggestionsListContainer, SuggestionsList, PreviewContainer, PlainText} from './styles';
import { getClassName, bemDestruct, useEventListener, removeEmptySpace } from '../../utils';
import inputProps from './inputProps';
import { DefaultLabel } from '../Label';
import { Text } from '../UI/GenericElements/GenericElements.styles';
import { Button } from '../Button';
import { palette, fonts } from '../styles';
import { XIcon } from '../UI/Icons';
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
 * @return {React Component} A view for input field with icon and action on error.
 */
const CreationTracking = ({ type, placeholder, width, label, onTagCreated, onTagDeleted, disabled, suggestions = [], callback, linkText, textBelowSuggestions, flatParameters, labelParameters, parameterKey, }) => {
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
  const [plainTextValue, setPlainTextValue] = useState('');
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const maxWidth = Number(width.split('px')[0]) - 53;

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

    setPlainTextValue(value);

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
    const updateTextArray = [];

    /**
     * The ref is used for accessing to latest tags added in input
     */
    latestDefaultLabelArray.current.forEach(tag => {
      const id = `${tag.props.id}__${tag.props.text}`;
      if (tagId !== id) {
        updateDefaultLabelArray.push(tag);
      }
    });

    latestTextArray.current.forEach(text => {
      const id = `${text.props.id}__{${text.props.text}}`;
      if (id !== tagId) {
        updateTextArray.push(text);
      }
    });

    setTextArray(updateTextArray);
    setDefaultLabelArray(updateDefaultLabelArray);
    onTagDeleted(null, parameterKey, updateDefaultLabelArray, updateTextArray);
  };

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
        const updateDefaultLabelArray = [...defaultLabelArray];

        if (matchSuggestion[suggestionActive]) {
          const id = Math.random().toString();
          updateDefaultLabelArray.push(
            <DefaultLabel
              key={id}
              id={id}
              text={`{${matchSuggestion[suggestionActive]}}`}
              size="medium"
              margin="4px"
              maxWidth={maxWidth}
              onClose={deleteTagHandler}
            />
          );

          const updateTextArray = [...textArray];
          const trimValue = removeEmptySpace(matchSuggestion[suggestionActive]);
          updateTextArray.push(
            <PlainText text={matchSuggestion[suggestionActive]} id={id} key={id}>{trimValue}</PlainText>
          );

          setDefaultLabelArray(updateDefaultLabelArray);
          onTagCreated(matchSuggestion[suggestionActive], parameterKey, updateDefaultLabelArray, updateTextArray);
          setTextArray(updateTextArray);
          setInputValue('');
          setMatchSuggestion([]);
          setSuggestionActive(-1);
          setShowSuggestion(false);
          setPreviewTracking('');
        }
      }
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    const updateDefaultLabelArray = [];
    const updateTextArray = [];
    setPlainTextValue(value);

    latestDefaultLabelArray.current.forEach(element => {
      if (element.props.id == id) {
        const cloneElement = React.cloneElement(element, {
          value,
          size: value.length + 2,
          style: value.length ? { display: 'block' } : { display: 'none' },
        });
        updateDefaultLabelArray.push(cloneElement);
      } else {
        updateDefaultLabelArray.push(element);
      }
    });

    latestTextArray.current.forEach(text => {
      const trimValue = removeEmptySpace(value);
      if (text.props.id === id) {
        const cloneElement = React.cloneElement(text, {
          children: trimValue,
        });
        updateTextArray.push(cloneElement);
      } else {
        updateTextArray.push(text);
      }
    });

    setDefaultLabelArray(updateDefaultLabelArray);
    setTextArray(updateTextArray);
    onTagDeleted(null, parameterKey, updateDefaultLabelArray, updateTextArray);
  };

  /**
   * Create label tag on click event in suggestions list
   */
  const handleClickSuggestion = (value, type) => {
    const updateDefaultLabelArray = [...defaultLabelArray];
    const trimValue = removeEmptySpace(value);
    const id = Math.random().toString();
    const labelId = Math.random().toString();
    setMatchSuggestion([]);
    setLabelId(labelId);

    if (type === 'flat') {
      updateDefaultLabelArray.push(
        <Input style={{ display: trimValue.length ? 'block' : 'none' }} size={value.length + 3} id={id} key={id} value={plainTextValue} disabled={disabled} placeholder="" fontSize={size10} width="auto" onChange={handleInputChange} />
      );
    } else {
      updateDefaultLabelArray.push(
        <DefaultLabel
          key={id}
          id={id}
          text={`{${value}}`}
          size="medium"
          margin="4px"
          maxWidth={maxWidth}
          onClose={deleteTagHandler}
        />
      );
    }

    /**
     * It's for displaying the tags like plain text when input is freezed
     */
    const updateTextArray = [...textArray];
    updateTextArray.push(
      <PlainText text={value} key={id} id={id}>{trimValue}</PlainText>
    );

    value ? onTagCreated(value.trim(), parameterKey, updateDefaultLabelArray, updateTextArray) : null;
    setDefaultLabelArray(updateDefaultLabelArray);
    setTextArray(updateTextArray);
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

  const handleCallback = () => {
    callback();
    closePreview();
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

  /**
   * Listening for freeze form event and disable the inputs.
   */
  useEffect(() => {
    if (disabled) {
      flatParameters[parameterKey] && setDefaultLabelArray(flatParameters[parameterKey]);
    } else {
      labelParameters[parameterKey] && setDefaultLabelArray(labelParameters[parameterKey]);
    };
  }, [disabled, flatParameters, labelParameters]);

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

  return (
    <LabelContainer id="test- label">
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
              onClick={() => handleClickSuggestion(suggestion)}
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
  flatParameters: PropTypes.shape({}),
  labelParameters: PropTypes.shape({}),
  parameterKey: PropTypes.string,
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
  flatParameters: {},
  labelParameters: {},
  parameterKey: null,
};

export default CreationTracking;
