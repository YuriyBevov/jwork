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
      <path d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8Z" />
      <path
        d="M13.1709 10.882L10.3609 4L7.99151 8.02364L5.62209 4L2.81208 10.8842H2V11.9186H6.23143V10.8842H5.6051L6.21444 9.17466L7.99151 12L9.76857 9.17466L10.3779 10.8842H9.75158V11.9186H14V10.8842L13.1709 10.882Z"
        fill="white"
      />
    </svg>
  );
};
