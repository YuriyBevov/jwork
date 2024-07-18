import React from 'react';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const IconStatsUp: React.FC<Props> = ({
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
      <path d="M48.7504 46.9621H5.11914V3.24961C5.11914 2.27461 4.30664 1.38086 3.25039 1.38086C2.19414 1.38086 1.46289 2.27461 1.46289 3.24961V47.2059C1.46289 49.0746 3.00664 50.6184 4.87539 50.6184H48.7504C49.7254 50.6184 50.6191 49.8059 50.6191 48.7496C50.6191 47.6934 49.7254 46.9621 48.7504 46.9621Z" />
      <path d="M47.9375 17.9561H38.4312C37.4562 17.9561 36.5625 18.7686 36.5625 19.8248C36.5625 20.8811 37.375 21.6936 38.4312 21.6936H43.9562L39.65 25.4311H29.0063C28.4375 25.4311 27.8688 25.6748 27.5438 26.1623L21.775 33.7186H13.2437C12.2687 33.7186 11.375 34.5311 11.375 35.5873C11.375 36.6436 12.1875 37.4561 13.2437 37.4561H22.6687C23.2375 37.4561 23.8063 37.2123 24.1313 36.7248L29.9 29.1686H40.3813C40.7875 29.1686 41.275 29.0061 41.6 28.6811L46.9625 23.9686V30.2248C46.9625 31.1998 47.775 32.0936 48.8312 32.0936C49.8875 32.0936 50.7 31.2811 50.7 30.2248V20.5561C50.6188 19.1748 49.4 17.9561 47.9375 17.9561Z" />
    </svg>
  );
};