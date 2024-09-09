import React from 'react';

export const IconArrow = ({
  width,
  height,
  fill,
  rect_fill,
}: {
  width?: number;
  height?: number;
  fill?: string;
  rect_fill?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <rect fill={rect_fill} fillOpacity="0.7" />
      <path
        fill={fill}
        d="M27.7049 19.41L26.2949 18L20.2949 24L26.2949 30L27.7049 28.59L23.1249 24L27.7049 19.41Z"
      />
    </svg>
  );
};
