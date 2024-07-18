import React from 'react';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const IconInvestment: React.FC<Props> = ({
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
      <path d="M26.1623 36.6436C27.0561 36.6436 27.7873 35.9123 27.7873 35.0186V34.2061H28.3561C31.0373 34.2061 33.3123 32.0123 33.3123 29.3311C33.3123 26.6498 31.1186 24.4561 28.3561 24.4561H24.1311C23.2373 24.4561 22.4248 23.7248 22.4248 22.8311C22.4248 21.9373 23.1561 21.2061 24.1311 21.2061H30.8748C31.7686 21.2061 32.4998 20.4748 32.4998 19.5811C32.4998 18.6873 31.7686 17.9561 30.8748 17.9561H27.7873V17.1436C27.7873 16.2498 27.0561 15.5186 26.1623 15.5186C25.2686 15.5186 24.5373 16.2498 24.5373 17.1436V17.9561H24.1311C21.4498 17.9561 19.1748 20.1498 19.1748 22.8311C19.1748 25.5123 21.3686 27.7061 24.1311 27.7061H28.3561C29.2498 27.7061 30.0623 28.4373 30.0623 29.3311C30.0623 30.2248 29.3311 30.9561 28.3561 30.9561H21.3686C20.4748 30.9561 19.7436 31.6873 19.7436 32.5811C19.7436 33.4748 20.4748 34.2061 21.3686 34.2061H24.4561V35.0186C24.5373 35.9123 25.2686 36.6436 26.1623 36.6436Z" />
      <path d="M6.82482 25.7561C7.23107 25.7561 7.55607 25.5936 7.79982 25.4311L13.5686 20.8811C14.2998 20.3123 14.3811 19.3373 13.8123 18.6061C13.2436 17.8748 12.2686 17.7936 11.5373 18.3623L8.61232 20.7186C10.6436 12.4311 18.0373 6.6623 26.4873 6.6623C35.0186 6.6623 42.4123 12.4311 44.5248 20.7186C44.7686 21.6123 45.6623 22.0998 46.4748 21.8561C47.3686 21.6123 47.8561 20.7186 47.6123 19.9061C45.1748 10.1561 36.3998 3.33105 26.4061 3.33105C16.4936 3.33105 7.88107 9.99356 5.36232 19.5811L3.57482 17.0623C3.00607 16.3311 2.03107 16.1686 1.29982 16.7373C0.56857 17.3061 0.40607 18.2811 0.97482 19.0123L5.52482 25.1061C5.76857 25.4311 6.17482 25.6748 6.58107 25.7561C6.66232 25.7561 6.74357 25.7561 6.82482 25.7561Z" />
      <path d="M51.1876 36.4003L48.0188 29.494C47.8563 29.0878 47.5313 28.7628 47.0438 28.6003C46.6376 28.4378 46.1501 28.519 45.7438 28.6815L39.1626 31.9315C38.3501 32.3378 38.0251 33.3128 38.4313 34.1253C38.8376 34.9378 39.8126 35.2628 40.6251 34.8565L43.8751 33.3128C41.1126 40.544 34.2876 45.3378 26.4876 45.3378C18.4438 45.3378 11.4563 40.219 8.93757 32.5815C8.69382 31.769 7.71882 31.2815 6.90632 31.5253C6.09382 31.769 5.60632 32.744 5.85007 33.5565C8.77507 42.494 17.0626 48.5065 26.4876 48.5065C35.5063 48.5065 43.5501 42.9815 46.8001 34.6128L48.1813 37.7003C48.4251 38.269 49.0751 38.6753 49.6438 38.6753C49.8876 38.6753 50.1313 38.594 50.2938 38.5128C51.2688 38.1878 51.5938 37.2128 51.1876 36.4003Z" />
    </svg>
  );
};
