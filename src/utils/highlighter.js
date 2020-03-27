import React from 'react';
import ReactDOMServer from 'react-dom/server';
/**
 * Function utility for highlight a string and render it into react element
 *  @param {String} string - (Required) It's the string to be highlighted
 *  @param {String} color - (Required) It'll the color of the string 
 */
const highlighter = (string, color) => {
  return ReactDOMServer.renderToString(<span style={{ color }}>{string}</span>);
};

export default highlighter;
