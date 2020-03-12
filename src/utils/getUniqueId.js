/**
 * Generate an unique ID base of millisecond throw by Date object.
 */
const getUniqueId = () => (new Date().valueOf() + Math.random()).toString();

export default getUniqueId;
