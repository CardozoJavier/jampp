/**
 * Function to toggle classes for functional components
 */
const getClassName = (className, defaultClassName, optionalClassName) => {
  let toggleToClassName;
  if (optionalClassName) {
    toggleToClassName = className === defaultClassName ? optionalClassName : defaultClassName;
    return toggleToClassName;
  } else {
    return className;
  }
};

export default getClassName;
