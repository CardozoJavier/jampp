import React from 'react';
import { TrashIconContainer } from './styles';

export default ({ props }) => (
  <TrashIconContainer {...props}>
    <svg fill="none" height="16" viewBox="0 0 14 16" width="14" xmlns="http://www.w3.org/2000/svg">
      <g fill="#000">
        <path d="m1.21 5 .72 10.07c.04.52.47.93 1 .93h8.14c.52 0 .96-.41 1-.93l.72-10.07zm4.79 8c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1zm4 0c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1z"/>
        <path d="m13.28 2.55c-.17-.34-.52-.55-.9-.55h-3.38c0-1.1-.9-2-2-2s-2 .9-2 2h-3.38c-.38 0-.73.21-.9.55l-.72 1.45h14zm-7.28-.55c0-.55.45-1 1-1s1 .45 1 1z"/>
      </g>
    </svg>
  </TrashIconContainer>
);