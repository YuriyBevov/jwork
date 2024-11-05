import React from 'react';

export const IconSmallArrow = ({
  width,
  height,
  fill,
}: {
  width?: number;
  height?: number;
  fill?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12.5947 7.125"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="Vector"
        d="M6.69 6.95C6.47 7.17 6.11 7.17 5.89 6.95L0.16 1.22C-0.06 1 -0.06 0.64 0.16 0.42L0.42 0.16C0.64 -0.06 1 -0.06 1.22 0.16L6.29 5.23L11.36 0.16C11.58 -0.06 11.94 -0.06 12.16 0.16L12.42 0.42C12.64 0.64 12.64 1 12.42 1.22L6.69 6.95Z"
      />
    </svg>
  );
};
