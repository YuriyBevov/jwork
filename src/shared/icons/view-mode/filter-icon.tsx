import React from 'react';

export const FilterIcon = ({
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
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <path
        fill={fill}
        d="M4.33943 2.99967H17.6728L10.9928 11.3997L4.33943 2.99967ZM0.672763 2.47967C3.3661 5.93301 8.33943 12.333 8.33943 12.333V20.333C8.33943 21.0663 8.93943 21.6663 9.67276 21.6663H12.3394C13.0728 21.6663 13.6728 21.0663 13.6728 20.333V12.333C13.6728 12.333 18.6328 5.93301 21.3261 2.47967C22.0061 1.59967 21.3794 0.333008 20.2728 0.333008H1.7261C0.61943 0.333008 -0.0072365 1.59967 0.672763 2.47967Z"
      />
    </svg>
  );
};
