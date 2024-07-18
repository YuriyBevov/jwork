import React from 'react';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const IconDelivery: React.FC<Props> = ({
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
      <path d="M47.2631 8.9375H21.8725C20.8317 8.9375 19.8335 9.35096 19.0975 10.0869C18.3616 10.8229 17.9481 11.8211 17.9481 12.8619V13.2194H6.97937C6.58049 13.2213 6.18998 13.334 5.85141 13.5449C5.51283 13.7558 5.23949 14.0566 5.06187 14.4138L1.04 22.62C0.893497 22.9128 0.815691 23.2351 0.8125 23.5625V36.2781C0.8125 36.7091 0.983705 37.1224 1.28845 37.4272C1.5932 37.7319 2.00652 37.9031 2.4375 37.9031H4.63937C4.88697 39.3464 5.63682 40.6557 6.75639 41.5995C7.87595 42.5434 9.29315 43.0611 10.7575 43.0611C12.2218 43.0611 13.639 42.5434 14.7586 41.5995C15.8782 40.6557 16.628 39.3464 16.8756 37.9031H33.9381C34.1857 39.3464 34.9356 40.6557 36.0551 41.5995C37.1747 42.5434 38.5919 43.0611 40.0562 43.0611C41.5206 43.0611 42.9378 42.5434 44.0574 41.5995C45.1769 40.6557 45.9268 39.3464 46.1744 37.9031H48.9937C49.5686 37.9032 50.1205 37.6777 50.5308 37.275C50.941 36.8724 51.1769 36.3248 51.1875 35.75V12.8781C51.1896 12.3614 51.0897 11.8493 50.8935 11.3713C50.6972 10.8933 50.4085 10.4588 50.0438 10.0927C49.6792 9.72653 49.2459 9.43601 48.7687 9.23777C48.2915 9.03954 47.7799 8.9375 47.2631 8.9375ZM7.67812 16.4856H17.9481V21.8075H5.06187L7.67812 16.4856ZM10.7575 39.8125C10.1687 39.8141 9.5926 39.6409 9.10232 39.3147C8.61205 38.9886 8.22964 38.5242 8.00355 37.9805C7.77747 37.4368 7.7179 36.8382 7.83238 36.2606C7.94686 35.683 8.23025 35.1524 8.64663 34.736C9.063 34.3196 9.59362 34.0362 10.1712 33.9218C10.7488 33.8073 11.3474 33.8668 11.8911 34.0929C12.4349 34.319 12.8992 34.7014 13.2253 35.1917C13.5515 35.682 13.7247 36.258 13.7231 36.8469C13.721 37.6327 13.4078 38.3858 12.8521 38.9415C12.2964 39.4972 11.5434 39.8104 10.7575 39.8125ZM10.7575 30.6231C9.48915 30.6258 8.25199 31.0165 7.2121 31.7427C6.17221 32.4689 5.37936 33.4958 4.94 34.6856H4.0625V25.0575H17.9481V34.6531H16.575C16.133 33.4663 15.339 32.4429 14.2993 31.7198C13.2597 30.9966 12.0239 30.6084 10.7575 30.6069V30.6231ZM40.0481 39.8125C39.4593 39.8141 38.8832 39.6409 38.3929 39.3147C37.9027 38.9886 37.5203 38.5242 37.2942 37.9805C37.0681 37.4368 37.0085 36.8382 37.123 36.2606C37.2375 35.683 37.5209 35.1524 37.9373 34.736C38.3536 34.3196 38.8842 34.0362 39.4618 33.9218C40.0395 33.8073 40.6381 33.8668 41.1818 34.0929C41.7255 34.319 42.1898 34.7014 42.516 35.1917C42.8421 35.682 43.0154 36.258 43.0137 36.8469C43.0116 37.6327 42.6985 38.3858 42.1428 38.9415C41.5871 39.4972 40.834 39.8104 40.0481 39.8125ZM47.9375 34.6531H45.8656C45.4254 33.4638 44.6315 32.4378 43.5908 31.7133C42.55 30.9887 41.3122 30.6003 40.0441 30.6003C38.7759 30.6003 37.5382 30.9887 36.4974 31.7133C35.4566 32.4378 34.6627 33.4638 34.2225 34.6531H21.2225V12.8781C21.2246 12.6999 21.2963 12.5296 21.4224 12.4036C21.5484 12.2776 21.7187 12.2059 21.8969 12.2038H47.2631C47.4413 12.2059 47.6116 12.2776 47.7376 12.4036C47.8637 12.5296 47.9354 12.6999 47.9375 12.8781V34.6531Z" />
    </svg>
  );
};
