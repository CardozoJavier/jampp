import React, { useContext } from 'react';
import StructurePreviewContext from './Context';

const Consumer = ({ children, constructor }) => {
  const context = useContext(StructurePreviewContext);
  const childrenCloned = React.cloneElement(children, {
    ...constructor(context, children.props),
  });
  return childrenCloned;
};

export default Consumer;
