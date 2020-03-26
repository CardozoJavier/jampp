import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CreateElementContainer } from './styles';
import { Button } from '../Button';
import { DivContainer } from '../UI/GenericElements/GenericElements.styles';

/**
 *  CreateElement component should be called with
 *  @param {Array} children - (Required) They're the structures to be cloned. Should be one React node.
 *  @param {String} buttonText - (Optional) The text to be displayed into button add structure. Default value is empty string.
 *  @param {String} buttonType - (Optional) The button type corresponding to class styles. Default value is link-default-left.
 *  @param {Node} buttonIcon - (Optional) The icon to be displayed into button. Default value is 'null'.
 *  @param {Boolean} removableFirst - (Optional) Is the flag to determine if the first structure is removable or not. Default value is true.
 *  @param {Object} buttonProps - (Optional) It's the props to be passed to structure container for modifying Add button styles.
 *  @param {Boolean} disabled - (Optional) If true, the add button is hide.
 */
const CreateElement = ({ children, buttonText, buttonType, buttonIcon, buttonProps, disabled, onStructureCreated, id }) => {
  const [structure, setStructure] = useState([]);

  /**
   * Add duplicated children structure to be rendered.
   */
  const handleAddStructure = () => {
    const structuresArray = !!structure.length ? [...structure] : [];
    const newStructure = React.cloneElement(children);

    structuresArray.push(newStructure);
    setStructure(structuresArray);
    onStructureCreated(id);
  };

  return (
    <CreateElementContainer {...buttonProps}>
      {structure}
      {disabled ?
        <DivContainer height='63px' />  
        :
        <DivContainer padding="24px">
          <Button onClick={handleAddStructure} label={buttonText} type={buttonType} icon={buttonIcon} />
        </DivContainer>
      }
    </CreateElementContainer>
  );
};

CreateElement.propTypes = {
  children: PropTypes.node.isRequired,
  buttonText: PropTypes.string,
  buttonType: PropTypes.string,
  buttonIcon: PropTypes.func,
  removableFirst: PropTypes.bool,
  buttonProps: PropTypes.shape({}),
  onStructureCreated: PropTypes.func,
};

CreateElement.defaultProps = {
  buttonText: '',
  buttonType: 'link-default-left',
  buttonIcon: null,
  removableFirst: true,
  buttonProps: {},
  onStructureCreated: () => null,
};

export default React.memo(CreateElement);
