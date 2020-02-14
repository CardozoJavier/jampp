import React, { useState, useEffect } from 'react';
import { CloneElementContainer } from './styles';
import { Button } from '../Button';

/**
 *  CloneElement component should be called with
 *  @param {Array} children - (Required) They're the structures to be cloned. Can be one React node or an array of React nodes.
 */
const CloneElement = ({ children, buttonText, buttonType, buttonIcon, removableFirst, iconRemove }) => {
  const elementCloned = React.cloneElement(children);
  const initialState = Array.isArray(children) ? [...children] : [children];
  const [structure, setStructure] = useState(initialState);

  /**
   * Modify 'id' prop from origin children element.
   */
  const settingUniqueStructureId = (clone) => (
    clone.map(child => (
      React.cloneElement(child, {
        id: Math.random().toString(),
        key: Math.random().toString(),
      })
    ))
  );

  /**
   * Add duplicated children structure to be rendered.
   */ 
  const handleAddStructure = () => {
    const key = Math.random().toString();
    const structuresArray = Array.isArray(structure) ? [...structure] : [structure];
    const newStructure = Array.isArray(initialState) ? [...initialState] : React.cloneElement(elementCloned, {
      key,
      id: key,
      className: 'trash-icon__visible',
      children: elementCloned.props.children ? settingUniqueStructureId(elementCloned.props.children) : null,
    });

    structuresArray.push(newStructure);
    setStructure(structuresArray);
  };

  useEffect(() => {
    /**
     * If the first element is not removable, the icon is deleted and component is re-rendered.
     */
    if (!removableFirst) {
      const childrenArray = Array.isArray(children) ? [...children] : [children];
      const structureUpdated = [];

      childrenArray.forEach(child => {
        const childCloned = Array.isArray(child.props.children) ? [...child.props.children] : [child.props.children];
        childCloned.forEach(nestedChild => {
          /**
           * Exclude remove icon in the first structure
           */
          if (nestedChild.props.role !== 'icon-to-remove-structure') {
            structureUpdated.push(nestedChild);
          };
        });
      });

      const childrenCloned = React.cloneElement(children, {
        children: structureUpdated,
      });
      
      setStructure(childrenCloned);
    }
  }, []);

  return (
    <CloneElementContainer>
      {structure}
      <Button onClick={handleAddStructure} label={buttonText} type={buttonType} icon={buttonIcon} />
    </CloneElementContainer>
  );
};

export default CloneElement;
