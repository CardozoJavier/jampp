import getPosition from './getPosition';
/**
 * Children is parsed for setting initial className to each radio button
 */
const settingClassName = (children, currentId, defaultClassName) => {
  const inputsArray = children.map(({ props: { label, id, color } }, index) => {
    const className = currentId === id ? `${getPosition(children, index, defaultClassName)}__selected` : `${getPosition(children, index, defaultClassName)}`;
    return {
      label,
      id,
      color,
      className,
    };
  });
  return inputsArray;
}

export default settingClassName;
