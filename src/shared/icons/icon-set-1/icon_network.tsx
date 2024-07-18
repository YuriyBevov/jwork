import React from 'react';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const IconNetwork: React.FC<Props> = ({
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
      <path d="M25.9189 14.9502C29.3314 14.9502 32.0127 12.1877 32.0127 8.85644C32.0127 5.5252 29.2502 2.7627 25.9189 2.7627C22.5877 2.7627 19.8252 5.5252 19.8252 8.85644C19.8252 12.1877 22.5064 14.9502 25.9189 14.9502ZM25.9189 6.3377C27.3002 6.3377 28.3564 7.4752 28.3564 8.7752C28.3564 10.0752 27.2189 11.2127 25.9189 11.2127C24.6189 11.2127 23.4814 10.0752 23.4814 8.7752C23.4814 7.4752 24.5377 6.3377 25.9189 6.3377Z" />
      <path d="M19.1756 23.1566C20.8819 21.2879 23.4006 20.1504 26.0006 20.1504C28.6006 20.1504 31.1194 21.2066 32.8256 23.1566C33.1506 23.5629 33.6381 23.7254 34.2069 23.7254C34.6131 23.7254 35.1006 23.5629 35.4256 23.2379C36.1569 22.5879 36.2381 21.3691 35.5069 20.6379C33.0694 18.0379 29.5756 16.4941 26.0006 16.4941C22.4256 16.4941 18.9319 18.0379 16.4944 20.6379C15.8444 21.3691 15.8444 22.5066 16.5756 23.2379C17.3069 23.9691 18.4444 23.8879 19.1756 23.1566Z" />
      <path d="M10.8875 40.7061C14.3 40.7061 16.9812 37.9436 16.9812 34.6123C16.9812 31.1998 14.2187 28.5186 10.8875 28.5186C7.55624 28.5186 4.79374 31.2811 4.79374 34.6123C4.71249 38.0248 7.47499 40.7061 10.8875 40.7061ZM10.8875 32.0936C12.2687 32.0936 13.325 33.2311 13.325 34.5311C13.325 35.9123 12.1875 36.9686 10.8875 36.9686C9.58749 36.9686 8.44999 35.8311 8.44999 34.5311C8.36874 33.2311 9.50624 32.0936 10.8875 32.0936Z" />
      <path d="M10.6442 42.0879C7.0692 42.0879 3.57545 43.6316 1.13795 46.2316C0.487948 46.9629 0.487948 48.1004 1.2192 48.8316C1.95045 49.5629 3.08795 49.4816 3.8192 48.7504C5.52545 46.8816 8.0442 45.7441 10.6442 45.7441C13.2442 45.7441 15.7629 46.8004 17.4692 48.7504C17.7942 49.1566 18.2817 49.3191 18.8504 49.3191C19.2567 49.3191 19.7442 49.1566 20.0692 48.8316C20.8004 48.1816 20.8817 46.9629 20.1504 46.2316C17.7129 43.6316 14.2192 42.0879 10.6442 42.0879Z" />
      <path d="M40.9502 40.7061C44.3627 40.7061 47.0439 37.9436 47.0439 34.6123C47.0439 31.1998 44.2814 28.5186 40.9502 28.5186C37.5377 28.5186 34.8564 31.2811 34.8564 34.6123C34.8564 38.0248 37.6189 40.7061 40.9502 40.7061ZM40.9502 32.0936C42.3314 32.0936 43.3877 33.2311 43.3877 34.5311C43.3877 35.9123 42.2502 36.9686 40.9502 36.9686C39.5689 36.9686 38.5127 35.8311 38.5127 34.5311C38.5127 33.2311 39.6502 32.0936 40.9502 32.0936Z" />
      <path d="M50.9444 46.3127C48.5069 43.7127 45.0131 42.1689 41.4381 42.1689C37.8631 42.1689 34.3694 43.7127 31.9319 46.3127C31.2819 47.0439 31.2819 48.1814 32.0131 48.9127C32.7444 49.5627 33.8819 49.5627 34.6131 48.8314C36.3194 46.9627 38.8381 45.8252 41.4381 45.8252C44.0381 45.8252 46.5569 46.8814 48.2631 48.8314C48.5881 49.2377 49.0756 49.4002 49.6444 49.4002C50.0506 49.4002 50.5381 49.2377 50.8631 48.9127C51.5131 48.1814 51.5944 47.0439 50.9444 46.3127Z" />
      <path d="M31.8504 33.2318C32.2567 32.3381 31.8504 31.2006 30.9567 30.7943L27.7879 29.3318V26.0006C27.7879 25.0256 26.9754 24.1318 26.0004 24.1318C25.0254 24.1318 24.1317 24.9443 24.1317 26.0006V29.2506L20.8817 30.7943C19.9879 31.2006 19.5817 32.3381 19.9879 33.2318C20.3942 34.1256 21.5317 34.5318 22.4254 34.1256L25.8379 32.5006L29.4942 34.1256C29.7379 34.2068 29.9817 34.2881 30.2254 34.2881C30.8754 34.2881 31.5254 33.8818 31.8504 33.2318Z" />
    </svg>
  );
};
