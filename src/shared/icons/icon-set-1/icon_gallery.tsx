import React from 'react';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const IconGallery: React.FC<Props> = ({
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
      <path d="M18.768 33.3129C21.5305 33.3129 23.8055 31.0379 23.8055 28.3566C23.8055 25.5941 21.5305 23.4004 18.768 23.4004C16.0055 23.4004 13.7305 25.6754 13.7305 28.3566C13.8117 31.1191 16.0055 33.3129 18.768 33.3129ZM18.768 26.9754C19.4992 26.9754 20.1492 27.5441 20.1492 28.2754C20.1492 29.0066 19.5805 29.5754 18.768 29.5754C18.0367 29.5754 17.3867 29.0066 17.3867 28.2754C17.468 27.6254 18.0367 26.9754 18.768 26.9754Z" />
      <path d="M39.975 17.3871C42.7375 17.3871 45.0125 15.1121 45.0125 12.4309C45.0125 9.74961 42.7375 7.47461 39.975 7.47461C37.2125 7.47461 34.9375 9.66836 34.9375 12.4309C34.9375 15.1934 37.2125 17.3871 39.975 17.3871ZM39.975 11.1309C40.7063 11.1309 41.3563 11.6996 41.3563 12.4309C41.3563 13.1621 40.7875 13.7309 39.975 13.7309C39.1625 13.7309 38.5937 13.1621 38.5937 12.4309C38.5937 11.6996 39.2438 11.1309 39.975 11.1309Z" />
      <path d="M51.4309 5.85C51.4309 3.0875 49.0746 0.8125 46.3121 0.8125H27.2184C24.4559 0.8125 22.1809 3.0875 22.1809 5.93125V17.55H6.09336C3.33086 17.55 0.974609 19.825 0.974609 22.6687V46.2313C0.974609 48.9125 3.24961 51.1875 6.09336 51.1875H25.1871C27.9496 51.1875 30.3059 48.9125 30.3059 46.0688V34.5312H46.3121C49.0746 34.5312 51.4309 32.2563 51.4309 29.4125V5.85ZM27.2184 4.46875H46.3121C47.1246 4.46875 47.7746 5.11875 47.7746 5.93125V24.7812L41.3559 20.3125C40.6246 19.825 39.5684 19.9062 38.9996 20.5562L35.4246 24.375L29.9809 20.3125C29.8184 20.2313 29.6559 20.15 29.5746 20.0688C28.7621 18.6875 27.3809 17.7938 25.8371 17.55V5.85C25.7559 5.11875 26.4059 4.46875 27.2184 4.46875ZM6.09336 21.125H25.1871C25.9996 21.125 26.6496 21.775 26.6496 22.5875V39L21.9371 35.6688C21.2059 35.1813 20.1496 35.2625 19.5809 35.9125L15.9246 39.8125L10.4809 35.75C9.83086 35.2625 8.85586 35.2625 8.20586 35.8312L4.63086 38.8375V22.5875C4.63086 21.775 5.28086 21.125 6.09336 21.125ZM25.9184 47.3687L18.8496 42.0063L21.0434 39.5688L26.5684 43.3875V46.0688C26.5684 46.6375 26.3246 47.125 25.9184 47.3687ZM4.63086 46.15V43.6313L9.42461 39.5688L20.0684 47.6125H6.09336C5.28086 47.5312 4.63086 46.8812 4.63086 46.15ZM30.2246 25.025L37.9434 30.875H30.2246V25.025ZM46.3121 30.875H44.0371L38.3496 26.5688L40.5434 24.1313L47.6934 29.1688V29.4125C47.7746 30.225 47.1246 30.875 46.3121 30.875Z" />
    </svg>
  );
};
