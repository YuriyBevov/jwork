import React from 'react';

export const IconChevronDown = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
  fill?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.3977 15.6634C12.178 15.8831 11.8219 15.8831 11.6022 15.6634L5.86739 9.92853C5.64772 9.70886 5.64772 9.35276 5.86739 9.13308L6.13256 8.86788C6.35222 8.64821 6.70838 8.64821 6.92805 8.86788L12 13.9398L17.0719 8.86788C17.2916 8.64821 17.6477 8.64821 17.8674 8.86788L18.1326 9.13308C18.3522 9.35276 18.3522 9.70886 18.1326 9.92853L12.3977 15.6634Z" />
    </svg>
  );
};
