import React from 'react';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const IconPencil: React.FC<Props> = ({
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
      <path d="M42.0059 1.46289H38.0246C34.6121 1.46289 31.8496 4.22539 31.8496 7.63789V39.0004C31.8496 39.3254 31.9309 39.6504 32.0934 39.9754L37.7809 49.4004C38.2684 50.2129 39.0809 50.7004 40.0559 50.7004C41.0309 50.7004 41.8434 50.2129 42.3309 49.4004L48.0184 39.9754C48.1809 39.6504 48.2621 39.3254 48.2621 39.0004V7.63789C48.1809 4.22539 45.4184 1.46289 42.0059 1.46289ZM38.0246 5.03789H42.0059C43.3871 5.03789 44.5246 6.17539 44.5246 7.55664V9.75039H35.5059V7.63789C35.5059 6.25664 36.6434 5.03789 38.0246 5.03789ZM40.0559 45.9066L35.5059 38.4316V13.4879H44.5246V38.4316L40.0559 45.9066Z" />
      <path d="M19.1746 1.54395H8.85586C6.09336 1.54395 3.81836 3.81895 3.81836 6.58145V45.3377C3.81836 48.1002 6.09336 50.3752 8.85586 50.3752H19.1746C21.9371 50.3752 24.2121 48.1002 24.2121 45.3377V6.58145C24.2934 3.81895 22.0184 1.54395 19.1746 1.54395ZM20.6371 45.4189C20.6371 46.2314 19.9871 46.8814 19.1746 46.8814H8.85586C8.04336 46.8814 7.39336 46.2314 7.39336 45.4189V42.5752H13.0809C14.0559 42.5752 14.8684 41.7627 14.8684 40.7877C14.8684 39.8127 14.0559 39.0002 13.0809 39.0002H7.39336V34.9377H9.01836C9.99336 34.9377 10.8059 34.1252 10.8059 33.1502C10.8059 32.1752 9.99336 31.3627 9.01836 31.3627H7.39336V27.3814H13.0809C14.0559 27.3814 14.8684 26.5689 14.8684 25.5939C14.8684 24.6189 14.0559 23.8064 13.0809 23.8064H7.39336V19.8252H9.01836C9.99336 19.8252 10.8059 19.0127 10.8059 18.0377C10.8059 17.0627 9.99336 16.2502 9.01836 16.2502H7.39336V12.2689H13.0809C14.0559 12.2689 14.8684 11.4564 14.8684 10.4814C14.8684 9.50645 14.0559 8.69395 13.0809 8.69395H7.39336V6.58145C7.39336 5.76895 8.04336 5.11895 8.85586 5.11895H19.1746C19.9871 5.11895 20.6371 5.76895 20.6371 6.58145V45.4189Z" />
    </svg>
  );
};
