import React from 'react';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const IconMetro: React.FC<Props> = ({
  width = 20,
  height = 14,
  fill = '#FF0013',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.7621 10.6421L12.5557 0L9 6.21844L5.45906 0L1.23785 10.6421H0V12.2548H6.36645V10.6421H5.41477L6.33691 7.98891L9 12.368L11.6631 7.98891L12.5852 10.6421H11.6336V12.2548H18V10.6421H16.7621Z" />
    </svg>
  );
};
