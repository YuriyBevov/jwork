import React from 'react';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const IconTransport: React.FC<Props> = ({
  width = 16,
  height = 16,
  fill = '#9CA3AF',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.6133 3.33935C12.48 2.94602 12.1067 2.66602 11.6667 2.66602H4.33333C3.89333 2.66602 3.52667 2.94602 3.38667 3.33935L2 7.33268V12.666C2 13.0327 2.3 13.3327 2.66667 13.3327H3.33333C3.7 13.3327 4 13.0327 4 12.666V11.9993H12V12.666C12 13.0327 12.3 13.3327 12.6667 13.3327H13.3333C13.7 13.3327 14 13.0327 14 12.666V7.33268L12.6133 3.33935ZM4.56667 3.99935H11.4267L12.1467 6.07268H3.84667L4.56667 3.99935ZM12.6667 10.666H3.33333V7.33268H12.6667V10.666Z" />
      <path d="M5 9.99935C5.55228 9.99935 6 9.55163 6 8.99935C6 8.44706 5.55228 7.99935 5 7.99935C4.44772 7.99935 4 8.44706 4 8.99935C4 9.55163 4.44772 9.99935 5 9.99935Z" />
      <path d="M11 9.99935C11.5523 9.99935 12 9.55163 12 8.99935C12 8.44706 11.5523 7.99935 11 7.99935C10.4477 7.99935 10 8.44706 10 8.99935C10 9.55163 10.4477 9.99935 11 9.99935Z" />
    </svg>
  );
};
