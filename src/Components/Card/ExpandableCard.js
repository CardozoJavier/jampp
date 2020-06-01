import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ExpandableCardContainer, CardTitle, ExpandableCardDescription, ExpandableCardHeader, ChildrenContainer,
} from './styles';
import { DownChevronIcon, BoldAddIcon, TrashIcon } from '../UI/Icons';
import { getClassName } from '../../utils';
import { palette } from '../styles';
import { Button } from '../Button';
import { ModalContainerB, ModalRowContainer } from '../Modal/styles';
import { Modal } from '../Modal';

const { gray, black } = palette;

const expandableCardClassesName = {
  opennedClassName: 'expandable card--default__expand',
  closedClassName: 'expandable card--default__collapse',
};

/**
 * ExpandableCard component can be called with
 * @param {Node} children - (Optional)  It's the content to be displayed into Card.
 * @param {String} title - (Optional) It's title to be displayed in card.
 * @param {String} description - (Optional) It's description to be displayed in card below of title.
 * @param {String} width - (Optional) It's the width of the card container.
 * @param {String} padding - (Optional) It's the padding of the card container.
 * @return {React Component} A view for card with title and description.
 */
const ExpandableCard = ({
  children, title, description, width, padding, borderBottom, addStructure,
}) => {
  const childrenCloned = addStructure ? React.cloneElement(children) : null;
  const { opennedClassName, closedClassName } = expandableCardClassesName;

  const [className, setClassName] = useState(closedClassName);
  const [expand, setExpand] = useState(false);
  const [structure, setStructure] = useState([children]);
  const [modal, setModal] = useState(false);

  const toggleToClassName = getClassName(className, opennedClassName, closedClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
    setExpand(!expand);
  };

  /**
   * Show modal to confirm remove structure.
   */
  const displayModal = (key) => {
    setModal(renderModal(key));
  };

  /**
   * Modify 'id' prop from origin children element.
   */
  const settingUniqueStructureId = (clone) => (
    clone.props.children.map((child) => (
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
    const newStructure = React.cloneElement(childrenCloned, {
      key,
      id: key,
      className: 'trash-icon__visible',
      children: settingUniqueStructureId(childrenCloned),
    });

    // Add Trash icon in duplicated structures to allowing remove them.
    newStructure.props.children.unshift(
      <TrashIcon props={{
        width: '18px',
        height: '18px',
        fill: gray.g3,
        margin: '0 0 0 auto',
        cursor: 'pointer',
        onClick: () => displayModal(key),
        hover: black,
      }}
      />,
    );

    structuresArray.push(newStructure);
    setStructure(structuresArray);
  };

  /**
   * Remove from DOM the structure selected.
   */
  const handleRemove = (confirm, key) => {
    if (confirm === 'remove-structure') {
      const structureDeleted = structure.filter((struct) => key !== struct.key);
      setStructure(structureDeleted);
      setModal(null);
    } else {
      setModal(null);
    }
  };

  /**
   * Render modal to confirm remove structure.
   */
  const renderModal = (key) => (
    <ModalContainerB width="480px" position="absolute" top="50%" left="25%">
      <Modal title="Lorem ipsum dolor sit amet, consectetur adipiscing ?" icon={TrashIcon}>
        <ModalRowContainer>
          <Button label="No, cancel" type="secondary-gray-medium" onClick={() => handleRemove(null, key)} />
          <Button label="Yes, delete" type="secondary-red-medium" onClick={() => handleRemove('remove-structure', key)} />
        </ModalRowContainer>
      </Modal>
    </ModalContainerB>
  );

  return (
    <ExpandableCardContainer width={width} padding={padding} className={className}>
      {title
        && (
        <ExpandableCardHeader flexDirection={description ? 'column' : 'row'} borderBottom={borderBottom} onClick={handleClick}>
          <CardTitle>{ title }</CardTitle>
          {description && !expand && <ExpandableCardDescription>{ description }</ExpandableCardDescription>}
          <DownChevronIcon props={{
            width: '24px',
            height: '24px',
            className,
            cursor: 'pointer',
            fill: gray.g4,
          }}
          />
        </ExpandableCardHeader>
        )}
      <ChildrenContainer className={className}>
        {structure}
        {modal}
        {addStructure
          && <Button onClick={handleAddStructure} label="Add second tracking" type="duplicate-structure" icon={BoldAddIcon} />}
      </ChildrenContainer>
    </ExpandableCardContainer>
  );
};

ExpandableCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  borderBottom: PropTypes.string,
};

ExpandableCard.defaultProps = {
  children: null,
  title: '',
  description: '',
  width: '',
  padding: '',
  borderBottom: '',
};
/**
 * TODO:
 *  Resolver problema al eliminar las estructuras: con cada llamado a "handleRemove" se tiene la referencia al state desactualizada.
 */
export default ExpandableCard;
