/**
 * Function to destructuring class composed in each necessary class for each component
 */
const bemDestruct =  (className = '', disabled) => {
  const [block, element, modifier, size, option] = className.split(/[ \t]|-|_/).filter(e => e);

  const disabledClassName = disabled ? `${element}--${modifier}__disabled` : '';

  return `
    ${block}
    ${element}
    ${block}-${size}
    ${element}--${modifier}
    ${element}--${modifier}__${option}
    ${disabledClassName}
    ${className}
  `;
};

export default bemDestruct;
