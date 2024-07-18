import React from 'react';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const IconProtection: React.FC<Props> = ({
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
      <path d="M43.5504 6.09375L27.0566 1.54375C26.4066 1.38125 25.6754 1.38125 25.0254 1.54375L8.45039 6.09375C6.74414 6.58125 5.52539 8.125 5.52539 9.9125V21.9375C5.52539 34.5312 13.0004 45.6625 24.5379 50.2938C25.0254 50.4563 25.5129 50.6187 26.0004 50.6187C26.4879 50.6187 26.9754 50.5375 27.4629 50.2938C39.0004 45.6625 46.4754 34.45 46.4754 21.8562V9.9125C46.4754 8.125 45.2566 6.58125 43.5504 6.09375ZM42.8191 21.8562C42.8191 32.7437 36.0754 42.8188 26.1629 46.8813C26.0816 46.8813 26.0004 46.8813 25.9191 46.8813C15.7629 42.8188 9.18164 32.9875 9.18164 21.9375V9.9125C9.18164 9.83125 9.26289 9.66875 9.34414 9.66875L25.9191 5.11875H26.0004C26.0004 5.11875 26.0004 5.11875 26.0816 5.11875L42.6566 9.66875C42.7379 9.66875 42.8191 9.83125 42.8191 9.9125V21.8562Z" />
      <path d="M35.1818 18.3626L23.9693 27.7876L18.9318 23.5626C18.1193 22.9126 16.9818 22.9939 16.3318 23.8064C15.6818 24.6189 15.763 25.7564 16.5755 26.4064L22.7505 31.6064C23.0755 31.9314 23.4818 32.0126 23.888 32.0126C24.2943 32.0126 24.7005 31.8501 25.0255 31.6064L37.538 21.1251C38.3505 20.4751 38.4318 19.3376 37.7818 18.5251C37.1318 17.7939 35.913 17.7126 35.1818 18.3626Z" />
    </svg>
  );
};
