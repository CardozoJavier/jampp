export default (className, disabled) => {
  const [block, element, modifier, option] = className.split(/-|_/).filter(e => e);
  const blockDoubleDashElement = `${block}--${element}`;
  const disabledClassName = disabled ? `${blockDoubleDashElement}__disabled` : '';

  return `
    ${block}
    ${blockDoubleDashElement}
    ${blockDoubleDashElement}-${modifier}
    ${blockDoubleDashElement}__${option}
    ${disabledClassName}
    ${className}
  `;
};
