  /**
   * Function to remove html tags from the url
   */
  const sanitizeUrl = (url, tag) => {
    const firsTag = new RegExp(`<${tag}.+?>`);
    const secondTag = new RegExp(`</${tag}>`);
    const urlSanitized = url.replace(firsTag, '').replace(secondTag, '');

    return urlSanitized;
  };

  export default sanitizeUrl;
  