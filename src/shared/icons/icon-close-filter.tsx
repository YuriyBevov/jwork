import React from 'react';

export const IconCloseFilter = ({ fill }: { fill?: string }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="39" height="39" fill={fill} />
      <rect x="0.5" y="0.5" width="39" height="39" stroke="#5145CD" />
      <path
        d="M27 14.41L25.59 13L20 18.59L14.41 13L13 14.41L18.59 20L13 25.59L14.41 27L20 21.41L25.59 27L27 25.59L21.41 20L27 14.41Z"
        fill="#5145CD"
      />
    </svg>
  );
};
