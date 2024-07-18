import React from 'react';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const IconGift: React.FC<Props> = ({
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
      <path d="M43.9561 11.7814H40.2186C41.1123 11.1314 41.8436 10.4001 42.1686 9.50637C42.6561 8.28762 42.6561 6.25637 40.1373 3.90012C37.4561 1.30012 35.0186 1.30012 33.4748 1.70637C29.9811 2.60012 27.6248 6.66262 26.3248 9.58762C25.0248 6.66262 22.6686 2.68137 19.1748 1.70637C17.6311 1.30012 15.1936 1.38137 12.5123 3.90012C9.99355 6.33762 10.0748 8.28762 10.4811 9.50637C10.8061 10.4001 11.5373 11.1314 12.4311 11.7814H8.04355C5.6873 11.7814 3.7373 13.7314 3.7373 16.0876V21.4501C3.7373 23.7251 5.60605 25.5939 7.88105 25.6751V45.5001C7.88105 48.2626 10.1561 50.6189 12.9998 50.6189H39.5686C42.3311 50.6189 44.6873 48.3439 44.6873 45.5001V25.5939C46.7186 25.2689 48.2623 23.4814 48.2623 21.3689V16.0064C48.2623 13.6501 46.3123 11.7814 43.9561 11.7814ZM34.3686 5.11887C34.4498 5.11887 34.6936 5.03762 34.9373 5.03762C35.5061 5.03762 36.3998 5.28137 37.6186 6.41887C38.5936 7.31262 38.8373 7.96262 38.7561 8.12512C38.3498 9.26262 34.2873 10.4814 29.6561 10.9689C30.7936 8.45012 32.4998 5.60637 34.3686 5.11887ZM14.9498 6.50012C16.1686 5.36262 17.0623 5.11887 17.6311 5.11887C17.8748 5.11887 18.0373 5.20012 18.1998 5.20012C20.0686 5.68762 21.8561 8.45012 22.9936 11.0501C18.3623 10.5626 14.2998 9.34387 13.8936 8.20637C13.8123 7.96262 14.0561 7.39387 14.9498 6.50012ZM7.39356 21.3689V16.0064C7.39356 15.6814 7.6373 15.3564 8.04355 15.3564H43.9561C44.2811 15.3564 44.6061 15.6001 44.6061 16.0064V21.3689C44.6061 21.6939 44.3623 22.0189 43.9561 22.0189H8.04355C7.71855 22.0189 7.39356 21.7751 7.39356 21.3689ZM39.5686 46.9626H12.9998C12.1873 46.9626 11.5373 46.3126 11.5373 45.5001V25.6751H40.9498V45.5001C41.0311 46.3126 40.3811 46.9626 39.5686 46.9626Z" />
    </svg>
  );
};