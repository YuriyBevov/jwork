import React from 'react';

export const IconBurger = ({ fill }: { fill?: string }) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 36H42V32H6V36ZM6 26H42V22H6V26ZM6 12V16H42V12H6Z"
        fill={fill}
      />
    </svg>
  );
};
