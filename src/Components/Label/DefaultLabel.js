import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DefaultLabelContainer, DefaultLabelText } from './styles';
import { XIcon, IconGenerator } from '../UI/Icons';
import { bemDestruct } from '../../utils';

/**
 * DefaultLabel component should be called with
 * @param {String} text - (Required) Text to be display inside label.
 * @param {String} size - (Optional) Define label size, it can be small or medium. Small is default.
 * @param {String} id - (Required) It's an unique ID to identifier each tag.
 * @param {Function} onClose - (Optional) Callback to trigger on onClick event on X icon.
 */
const DefaultLabel = ({ text, size, onClose, id, ...props }) => {
  const [className, setClassName] = useState(`label label--default-${size}`);
  const tagId = `${id}__${text}`;

  const deleteHandler = () => {
    onClose && onClose(tagId, text);
    const element = document.getElementById(tagId);
    element.style.display = 'none';
  };

  return (
    <DefaultLabelContainer id={tagId} className={bemDestruct(className)} {...props}>
      <DefaultLabelText {...props}>{ text }</DefaultLabelText>
      <IconGenerator
        renderIcon={XIcon}
        props={{
          className: `icon label--default-${size}__right`,
          onClick: deleteHandler,
          display: '',
          margin: '0 0 0 5px',
        }}
      />
    </DefaultLabelContainer>
  );
};

DefaultLabel.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

DefaultLabel.defaultProps = {
  size: 'small',
  onClose: () => null,
};

export default DefaultLabel;
