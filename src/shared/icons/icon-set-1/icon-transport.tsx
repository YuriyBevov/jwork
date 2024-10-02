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
      <path d="M10.6133 1.33935C10.48 0.946016 10.1067 0.666016 9.66667 0.666016H2.33333C1.89333 0.666016 1.52667 0.946016 1.38667 1.33935L0 5.33268V10.666C0 11.0327 0.3 11.3327 0.666667 11.3327H1.33333C1.7 11.3327 2 11.0327 2 10.666V9.99935H10V10.666C10 11.0327 10.3 11.3327 10.6667 11.3327H11.3333C11.7 11.3327 12 11.0327 12 10.666V5.33268L10.6133 1.33935ZM2.56667 1.99935H9.42667L10.1467 4.07268H1.84667L2.56667 1.99935ZM10.6667 8.66602H1.33333V5.33268H10.6667V8.66602Z" />
      <path d="M3 7.99935C3.55228 7.99935 4 7.55163 4 6.99935C4 6.44706 3.55228 5.99935 3 5.99935C2.44772 5.99935 2 6.44706 2 6.99935C2 7.55163 2.44772 7.99935 3 7.99935Z" />
      <path d="M9 7.99935C9.55229 7.99935 10 7.55163 10 6.99935C10 6.44706 9.55229 5.99935 9 5.99935C8.44772 5.99935 8 6.44706 8 6.99935C8 7.55163 8.44772 7.99935 9 7.99935Z" />
    </svg>
  );
};
