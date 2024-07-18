import React from 'react';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const IconInvest: React.FC<Props> = ({
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
      <path d="M28.5191 9.66836H24.1316C23.3191 9.66836 22.6691 9.09961 22.6691 8.36836C22.6691 7.63711 23.3191 7.06836 24.1316 7.06836H30.6316C31.6066 7.06836 32.5004 6.25586 32.5004 5.19961C32.5004 4.14336 31.6879 3.33086 30.6316 3.33086H28.7629V3.24961C28.7629 2.27461 27.9504 1.38086 26.8941 1.38086C25.9191 1.38086 25.0254 2.19336 25.0254 3.24961V3.33086H24.0504C21.2066 3.33086 18.9316 5.60586 18.9316 8.28711C18.9316 10.9684 21.2066 13.2434 24.0504 13.2434H28.4379C29.2504 13.2434 29.9004 13.8121 29.9004 14.5434C29.9004 15.2746 29.2504 15.8434 28.4379 15.8434H21.1254C20.1504 15.8434 19.2566 16.6559 19.2566 17.7121C19.2566 18.7684 20.0691 19.5809 21.1254 19.5809H25.1066V19.6621C25.1066 20.6371 25.9191 21.5309 26.9754 21.5309C27.9504 21.5309 28.8441 20.7184 28.8441 19.6621V19.5809C31.5254 19.4996 33.7191 17.3059 33.7191 14.6246C33.6379 11.8621 31.3629 9.66836 28.5191 9.66836Z" />
      <path d="M11.2127 28.6807H7.88145C6.0127 28.6807 4.3877 30.2244 4.3877 32.1744V47.1244C4.3877 48.9932 5.93145 50.6182 7.88145 50.6182H11.2127C13.0814 50.6182 14.7064 49.0744 14.7064 47.1244V32.1744C14.6252 30.2244 13.0814 28.6807 11.2127 28.6807ZM10.9689 46.9619H8.04394V32.3369H10.9689V46.9619Z" />
      <path d="M27.7068 24.0498H24.3756C22.5068 24.0498 20.8818 25.5936 20.8818 27.4623V47.1248C20.8818 48.9936 22.4256 50.6186 24.3756 50.6186H27.7068C29.5756 50.6186 31.2006 49.0748 31.2006 47.1248V27.5436C31.1193 25.5936 29.5756 24.0498 27.7068 24.0498ZM27.4631 46.9623H24.5381V27.7061H27.4631V46.9623Z" />
      <path d="M44.1189 28.6807H40.7877C38.9189 28.6807 37.2939 30.2244 37.2939 32.1744V47.1244C37.2939 48.9932 38.8377 50.6182 40.7877 50.6182H44.1189C45.9877 50.6182 47.6127 49.0744 47.6127 47.1244V32.1744C47.6127 30.2244 46.0689 28.6807 44.1189 28.6807ZM43.9564 46.9619H41.0314V32.3369H43.9564V46.9619Z" />
    </svg>
  );
};
