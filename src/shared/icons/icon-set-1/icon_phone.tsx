import React from 'react';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export const IconPhone: React.FC<Props> = ({
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
      <path d="M48.9124 44.8504L47.4499 30.1441C47.2062 27.4629 44.9312 25.4316 42.2499 25.4316H9.74993C7.06868 25.4316 4.87493 27.4629 4.54993 30.1441L3.08743 44.8504C2.92493 46.3129 3.41243 47.7754 4.38743 48.8316C5.36243 49.8879 6.74369 50.5379 8.20618 50.5379H43.6312C45.0937 50.5379 46.4749 49.8879 47.4499 48.8316C48.5874 47.7754 48.9937 46.3129 48.9124 44.8504ZM44.8499 46.3941C44.5249 46.7191 44.1187 46.8816 43.7124 46.8816H8.28743C7.88118 46.8816 7.47493 46.7191 7.14993 46.3941C6.82493 46.0691 6.74368 45.6629 6.74368 45.1754L8.20618 30.4691C8.28744 29.6566 8.93743 29.0879 9.74993 29.0879H42.2499C43.0624 29.0879 43.7124 29.6566 43.7937 30.4691L45.2562 45.1754C45.2562 45.6629 45.1749 46.0691 44.8499 46.3941Z" />
      <path d="M26 31.9316C22.6688 31.9316 19.9062 34.6941 19.9062 38.0254C19.9062 41.4379 22.6688 44.1191 26 44.1191C29.4125 44.1191 32.0938 41.3566 32.0938 38.0254C32.0938 34.6941 29.4125 31.9316 26 31.9316ZM26 40.4629C24.6188 40.4629 23.5625 39.3254 23.5625 38.0254C23.5625 36.6441 24.7 35.5879 26 35.5879C27.3812 35.5879 28.4375 36.7254 28.4375 38.0254C28.4375 39.4066 27.3812 40.4629 26 40.4629Z" />
      <path d="M4.95645 16.7379C5.11895 20.3129 8.20645 22.1816 10.3189 22.1816H16.0064H16.0877C18.6877 22.0191 21.2877 20.3129 21.2877 16.7379V15.1941C24.0502 15.1941 29.3314 15.1941 32.0127 15.1941V16.7379C32.0127 20.3129 34.6127 22.0191 37.2127 22.1816H42.9814C45.1752 22.1816 48.1814 20.3129 48.3439 16.7379C48.3439 16.4941 48.3439 13.5691 48.3439 13.4066C48.3439 13.3254 48.3439 13.2441 48.3439 13.1629C48.1002 10.8066 47.2877 8.85664 45.8252 7.31289L45.7439 7.23164C43.6314 5.28164 41.1939 4.22539 39.3252 3.57539C33.8002 1.46289 26.8939 1.46289 26.5689 1.46289C21.6939 1.54414 18.6064 1.95039 13.8939 3.57539C11.9439 4.30664 9.50645 5.36289 7.39395 7.23164L7.3127 7.31289C5.8502 8.85664 5.0377 10.8066 4.79395 13.1629C4.79395 13.2441 4.79395 13.3254 4.79395 13.4066C4.8752 13.5691 4.95645 16.4129 4.95645 16.7379ZM9.99395 9.91289C11.6189 8.45039 13.5689 7.63789 15.1939 6.98789C19.4189 5.44414 22.1002 5.20039 26.6502 5.03789C27.0564 5.03789 33.2314 5.11914 38.1064 6.98789C39.8127 7.63789 41.7627 8.45039 43.3064 9.91289C44.1189 10.8066 44.6064 12.0254 44.7689 13.4066C44.7689 13.6504 44.7689 16.3316 44.7689 16.5754C44.6877 18.2816 43.0627 18.5254 43.0627 18.5254H37.4564C36.6439 18.4441 35.7502 18.1191 35.7502 16.7379V13.4066C35.7502 12.5941 35.2627 11.8629 34.4502 11.7004C33.8814 11.3754 19.5002 11.3754 18.9314 11.6191C18.2002 11.8629 17.6314 12.5941 17.6314 13.3254V16.7379C17.6314 18.1191 16.7377 18.4441 15.9252 18.5254H10.3189C10.3189 18.5254 8.69395 18.2816 8.6127 16.6566C8.6127 16.4129 8.6127 15.5191 8.6127 14.7066C8.6127 14.1379 8.6127 13.7316 8.6127 13.4879C8.69395 11.9441 9.18145 10.8066 9.99395 9.91289Z" />
    </svg>
  );
};