import React from 'react';

export const IconInstagram = ({
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
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13 0.242188H5C2.23858 0.242188 0 2.48077 0 5.24219V13.2422C0 16.0036 2.23858 18.2422 5 18.2422H13C15.7614 18.2422 18 16.0036 18 13.2422V5.24219C18 2.48077 15.7614 0.242188 13 0.242188ZM16.25 13.2422C16.2445 15.0348 14.7926 16.4867 13 16.4922H5C3.20735 16.4867 1.75549 15.0348 1.75 13.2422V5.24219C1.75549 3.44954 3.20735 1.99768 5 1.99219H13C14.7926 1.99768 16.2445 3.44954 16.25 5.24219V13.2422ZM13.75 5.49219C14.3023 5.49219 14.75 5.04447 14.75 4.49219C14.75 3.93991 14.3023 3.49219 13.75 3.49219C13.1977 3.49219 12.75 3.93991 12.75 4.49219C12.75 5.04447 13.1977 5.49219 13.75 5.49219ZM9 4.74219C6.51472 4.74219 4.5 6.75691 4.5 9.24219C4.5 11.7275 6.51472 13.7422 9 13.7422C11.4853 13.7422 13.5 11.7275 13.5 9.24219C13.5027 8.04789 13.0294 6.90176 12.1849 6.05727C11.3404 5.21278 10.1943 4.73953 9 4.74219ZM6.25 9.24219C6.25 10.761 7.4812 11.9922 9 11.9922C10.5188 11.9922 11.75 10.761 11.75 9.24219C11.75 7.72339 10.5188 6.49219 9 6.49219C7.4812 6.49219 6.25 7.72339 6.25 9.24219Z"
      />
    </svg>
  );
};
