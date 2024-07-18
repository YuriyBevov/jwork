import React from 'react';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const IconWhatsapp: React.FC<Props> = ({
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
      <path d="M43.875 8.04394C39.1625 3.33144 32.7438 0.731445 26.1625 0.731445C12.35 0.731445 1.05625 11.944 1.05625 25.7565C1.05625 30.2252 2.19375 34.4502 4.3875 38.3502L0.8125 51.269L14.2188 47.8565C17.875 49.8064 22.0187 50.944 26.2437 50.944C39.975 50.8627 51.1875 39.6502 51.1875 25.7565C51.1875 19.094 48.5875 12.8377 43.875 8.04394ZM26.0812 46.6377C22.425 46.6377 18.6063 45.5815 15.4375 43.6315L14.625 43.144L6.74375 45.1752L8.9375 37.5377L8.45 36.7252C6.41875 33.394 5.28125 29.494 5.28125 25.594C5.28125 14.1377 14.5437 4.87519 26.0812 4.87519C31.6062 4.87519 36.8062 7.06894 40.7062 10.969C44.6063 14.869 46.8 20.1502 46.8 25.7565C46.9625 37.3752 37.5375 46.6377 26.0812 46.6377ZM37.5375 31.0377C36.8875 30.7127 33.8812 29.169 33.15 29.0877C32.5812 28.844 32.0937 28.7627 31.7687 29.4127C31.4437 30.0627 30.1438 31.3627 29.8188 31.8502C29.4938 32.1752 29.1688 32.3377 28.4375 31.9315C27.7875 31.6065 25.8375 31.0377 23.4 28.7627C21.5312 27.1377 20.2313 25.1065 19.9875 24.3752C19.6625 23.7252 19.9062 23.4815 20.3125 23.0752C20.6375 22.7502 20.9625 22.4252 21.2063 21.9377C21.5312 21.6127 21.5312 21.2877 21.8562 20.8815C22.1812 20.5565 21.9375 20.069 21.775 19.744C21.5312 19.419 20.3937 16.3315 19.825 15.0315C19.3375 13.7315 18.7688 13.9752 18.4438 13.9752C18.1188 13.9752 17.6312 13.9752 17.3062 13.9752C16.9812 13.9752 16.1687 14.0565 15.6812 14.7877C15.1125 15.4377 13.4875 16.9815 13.4875 20.069C13.4875 23.1565 15.6812 26.0002 16.0875 26.569C16.4125 26.894 20.5563 33.3127 26.7313 36.0752C28.1938 36.7252 29.3312 37.1315 30.3062 37.4565C31.7687 37.944 33.15 37.7815 34.2062 37.7002C35.425 37.6189 37.8625 36.2377 38.4312 34.694C38.9188 33.3127 38.9188 31.9315 38.7563 31.6877C38.5938 31.5252 38.1063 31.2815 37.5375 31.0377Z" />
    </svg>
  );
};
