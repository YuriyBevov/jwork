import React from 'react';

export const IconFilter = ({
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
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.34041 7.99967H22.6737L15.9937 16.3997L9.34041 7.99967ZM5.67374 7.47967C8.36707 10.933 13.3404 17.333 13.3404 17.333V25.333C13.3404 26.0663 13.9404 26.6663 14.6737 26.6663H17.3404C18.0737 26.6663 18.6737 26.0663 18.6737 25.333V17.333C18.6737 17.333 23.6337 10.933 26.3271 7.47967C27.0071 6.59967 26.3804 5.33301 25.2737 5.33301H6.72707C5.62041 5.33301 4.99374 6.59967 5.67374 7.47967Z"
        fill={fill}
      />
    </svg>
  );
};
