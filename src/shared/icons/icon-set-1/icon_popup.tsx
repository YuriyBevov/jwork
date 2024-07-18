import React from 'react';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const IconPopup: React.FC<Props> = ({
  width = 52,
  height = 52,
  fill = 'var(--primary)',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 52 52"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M45.5004 4.0625H6.50039C3.73789 4.0625 1.46289 6.3375 1.46289 9.1V35.75C1.46289 38.5125 3.73789 40.7875 6.50039 40.7875H18.3629L23.9691 47.6125C24.4566 48.425 25.1879 48.75 26.0004 48.75C26.8129 48.75 27.5441 48.425 28.0316 47.775L33.6379 40.95H45.5004C48.2629 40.95 50.5379 38.675 50.5379 35.9125V9.18125C50.5379 6.3375 48.2629 4.0625 45.5004 4.0625ZM46.9629 35.8312C46.9629 36.6437 46.3129 37.2938 45.5004 37.2938H33.5566C32.6629 37.2938 31.7691 37.6187 31.1191 38.2687C31.0379 38.35 31.0379 38.35 30.9566 38.4312L26.0004 44.525L21.0441 38.4312C20.9629 38.35 20.9629 38.35 20.8816 38.2687C20.2316 37.6187 19.4191 37.2938 18.4441 37.2938H6.50039C5.68789 37.2938 5.03789 36.6437 5.03789 35.8312V9.18125C5.03789 8.36875 5.68789 7.71875 6.50039 7.71875H45.5004C46.3129 7.71875 46.9629 8.36875 46.9629 9.18125V35.8312Z" />
      <path d="M13.975 16.0066H36.3188C37.2938 16.0066 38.1063 15.1941 38.1063 14.2191C38.1063 13.2441 37.2938 12.4316 36.3188 12.4316H13.975C13 12.4316 12.1875 13.2441 12.1875 14.2191C12.1875 15.1941 13 16.0066 13.975 16.0066Z" />
      <path d="M13.975 24.3748H30.1437C31.1187 24.3748 31.9312 23.5623 31.9312 22.5873C31.9312 21.6123 31.1187 20.7998 30.1437 20.7998H13.975C13 20.7998 12.1875 21.6123 12.1875 22.5873C12.1875 23.5623 13 24.3748 13.975 24.3748Z" />
      <path d="M38.4312 29.0059H13.975C13 29.0059 12.1875 29.8184 12.1875 30.7934C12.1875 31.7684 13 32.5809 13.975 32.5809H38.4312C39.4062 32.5809 40.2188 31.7684 40.2188 30.7934C40.2188 29.8184 39.4062 29.0059 38.4312 29.0059Z" />
    </svg>
  );
};