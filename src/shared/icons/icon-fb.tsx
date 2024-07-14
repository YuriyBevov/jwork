import React from 'react';

export const IconFacebook = ({
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
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        d="M20 10.3033C20 4.7467 15.5229 0.242188 10 0.242188C4.47715 0.242188 0 4.7467 0 10.3033C0 15.325 3.65684 19.4874 8.4375 20.2422V13.2116H5.89844V10.3033H8.4375V8.08671C8.4375 5.56515 9.9305 4.17231 12.2146 4.17231C13.3088 4.17231 14.4531 4.36882 14.4531 4.36882V6.8448H13.1922C11.95 6.8448 11.5625 7.62041 11.5625 8.41609V10.3033H14.3359L13.8926 13.2116H11.5625V20.2422C16.3432 19.4874 20 15.3252 20 10.3033Z"
      />
    </svg>
  );
};
