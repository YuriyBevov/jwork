import React from 'react';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const IconWarning: React.FC<Props> = ({
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
      <path d="M49.156 33.5561L31.7685 9.9123C30.3872 8.04355 28.2747 6.9873 25.9997 6.9873C23.6435 6.9873 21.531 8.04355 20.231 9.9123L2.84348 33.5561C1.21848 35.7498 0.974732 38.5936 2.19348 41.0311C3.41223 43.4686 5.84973 45.0123 8.61223 45.0123H43.3872C46.1497 45.0123 48.5872 43.4686 49.806 41.0311C51.0247 38.6748 50.781 35.7498 49.156 33.5561ZM46.556 39.4061C45.906 40.6248 44.7685 41.3561 43.3872 41.3561H8.61223C7.23098 41.3561 6.09348 40.6248 5.44348 39.4061C4.87473 38.1873 4.95598 36.8061 5.76848 35.7498L23.156 12.1061C23.806 11.2123 24.8622 10.6436 25.9997 10.6436C27.1372 10.6436 28.1935 11.1311 28.8435 12.1061L46.231 35.7498C47.0435 36.8061 47.1247 38.1873 46.556 39.4061Z" />
      <path d="M25.9996 18.6875C25.0246 18.6875 24.1309 19.5 24.1309 20.5562V29.4125C24.1309 30.3875 24.9434 31.2812 25.9996 31.2812C27.0559 31.2812 27.8684 30.4688 27.8684 29.4125V20.475C27.8684 19.5 26.9746 18.6875 25.9996 18.6875Z" />
      <path d="M25.9996 33.1494C25.0246 33.1494 24.1309 33.9619 24.1309 35.0182V35.4244C24.1309 36.3994 24.9434 37.2932 25.9996 37.2932C27.0559 37.2932 27.8684 36.4807 27.8684 35.4244V34.9369C27.8684 33.9619 26.9746 33.1494 25.9996 33.1494Z" />
    </svg>
  );
};
