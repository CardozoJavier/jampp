/**
 * Utility function to determine if a type match with specific value
 * @param {String} regex - Is the regex value that will be match with type given
 * @param {String} type - Is the value of allowed component type
 * @return {Boolean} - If regex and type match
 */
const match = (regex, type) => (new RegExp(regex).test(type));

export default match;
