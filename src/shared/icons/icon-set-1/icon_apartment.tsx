import React from 'react';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const IconApartment: React.FC<Props> = ({
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
      <path d="M45.4996 1.46289H27.2184C24.4559 1.46289 22.1809 3.73789 22.1809 6.58164V9.75039H6.49961C3.73711 9.75039 1.38086 12.0254 1.38086 14.8691V45.5004C1.38086 48.2629 3.65586 50.6191 6.49961 50.6191H45.4996C48.2621 50.6191 50.6184 48.3441 50.6184 45.5004V6.50039C50.6184 3.73789 48.2621 1.46289 45.4996 1.46289ZM22.0996 46.9629H6.49961C5.68711 46.9629 5.03711 46.3129 5.03711 45.5004V14.7879C5.03711 13.9754 5.68711 13.3254 6.49961 13.3254H22.0996V46.9629ZM46.9621 45.5004C46.9621 46.3129 46.3121 46.9629 45.4996 46.9629H25.7559V6.50039C25.7559 5.68789 26.4059 5.03789 27.1371 5.03789H45.4996C46.3121 5.03789 46.9621 5.68789 46.9621 6.50039V45.5004Z" />
      <path d="M11.3746 22.8313H15.9246C16.8996 22.8313 17.7934 22.0187 17.7934 20.9625C17.7934 19.9062 16.9809 19.0938 15.9246 19.0938H11.3746C10.3996 19.0938 9.50586 19.9062 9.50586 20.9625C9.50586 22.0187 10.3996 22.8313 11.3746 22.8313Z" />
      <path d="M11.3746 31.9318H15.9246C16.8996 31.9318 17.7934 31.1193 17.7934 30.0631C17.7934 29.0068 16.9809 28.1943 15.9246 28.1943H11.3746C10.3996 28.1943 9.50586 29.0068 9.50586 30.0631C9.50586 31.1193 10.3996 31.9318 11.3746 31.9318Z" />
      <path d="M11.2936 41.1125H15.8436C16.8186 41.1125 17.7123 40.3 17.7123 39.2437C17.7123 38.1875 16.8998 37.375 15.8436 37.375H11.2936C10.3186 37.375 9.4248 38.1875 9.4248 39.2437C9.4248 40.3 10.3186 41.1125 11.2936 41.1125Z" />
      <path d="M38.6746 11.9443H34.1246C33.1496 11.9443 32.2559 12.7568 32.2559 13.8131C32.2559 14.8693 33.0684 15.6818 34.1246 15.6818H38.6746C39.6496 15.6818 40.5434 14.8693 40.5434 13.8131C40.5434 12.7568 39.6496 11.9443 38.6746 11.9443Z" />
      <path d="M38.6746 23.6445H34.1246C33.1496 23.6445 32.2559 24.457 32.2559 25.5133C32.2559 26.4883 33.0684 27.382 34.1246 27.382H38.6746C39.6496 27.382 40.5434 26.5695 40.5434 25.5133C40.4621 24.457 39.6496 23.6445 38.6746 23.6445Z" />
      <path d="M38.5936 35.3438H34.0436C33.0686 35.3438 32.1748 36.1562 32.1748 37.2125C32.1748 38.2687 32.9873 39.0812 34.0436 39.0812H38.5936C39.5686 39.0812 40.4623 38.2687 40.4623 37.2125C40.4623 36.1562 39.5686 35.3438 38.5936 35.3438Z" />
    </svg>
  );
};