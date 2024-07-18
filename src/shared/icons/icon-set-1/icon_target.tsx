import React from 'react';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const IconTarget: React.FC<Props> = ({
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
      <path d="M48.7496 24.2121H43.9559C43.1434 15.4371 36.3184 8.36836 27.7871 7.47461V3.24961C27.7871 2.27461 26.9746 1.38086 25.9184 1.38086C24.9434 1.38086 24.0496 2.19336 24.0496 3.24961V7.47461C15.5184 8.36836 8.69336 15.3559 7.88086 24.2121H3.24961C2.27461 24.2121 1.38086 25.0246 1.38086 26.0809C1.38086 27.0559 2.19336 27.9496 3.24961 27.9496H8.04336C8.85586 36.7246 15.6809 43.7934 24.2121 44.6871V48.7496C24.2121 49.7246 25.0246 50.6184 26.0809 50.6184C27.0559 50.6184 27.9496 49.8059 27.9496 48.7496V44.5246C36.4809 43.6309 43.3059 36.6434 44.1184 27.7871H48.7496C49.7246 27.7871 50.6184 26.9746 50.6184 25.9184C50.6184 25.0246 49.7246 24.2121 48.7496 24.2121ZM40.2996 24.2121H35.2621C34.5309 20.3121 31.6059 17.2246 27.7871 16.4934V11.2121C34.3684 12.0246 39.4871 17.3871 40.2996 24.2121ZM25.9996 32.0934C22.7496 32.0934 20.1496 29.3309 20.1496 25.9996C20.1496 22.6684 22.7496 19.9871 25.9184 19.9059C29.0871 19.9059 31.6871 22.6684 31.6871 25.9996C31.7684 29.3309 29.1684 32.0121 25.9996 32.0934ZM24.2121 11.1309V16.4121C20.4746 17.1434 17.4684 20.2309 16.7371 24.1309H11.6996C12.5121 17.3871 17.6309 12.0246 24.2121 11.1309ZM11.6996 27.8684H16.7371C17.4684 31.7684 20.3934 34.8559 24.2121 35.5871V40.8684C17.6309 39.9746 12.5121 34.6121 11.6996 27.8684ZM27.8684 40.8684V35.5871C31.6059 34.8559 34.6121 31.7684 35.3434 27.8684H40.3809C39.4871 34.6121 34.3684 39.9746 27.8684 40.8684Z" />
    </svg>
  );
};
