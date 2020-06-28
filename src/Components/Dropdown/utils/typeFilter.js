
/**
 * Utility function to determine if the filter match with word begins or not
 * @param {String} type - Is the type that determine if the filter is strict or not
 * @return {String} - A filter type
 */
const typeFilter = (type = 'strict-search') => {
  const filter = {
    search: '',
    'strict-search': '^',
  };
  return filter[type];
};

export default typeFilter;
