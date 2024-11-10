import React from 'react';

export const IconArrow = ({
  width,
  height,
  fill,
}: {
  width?: number;
  height?: number;
  fill?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M4.23 6.355L7.06 9.18C7.10648 9.22686 7.16178 9.26406 7.22271 9.28945C7.28364 9.31483 7.34899 9.3279 7.415 9.3279C7.48101 9.3279 7.54636 9.31483 7.60729 9.28945C7.66822 9.26406 7.72352 9.22686 7.77 9.18C7.86313 9.08632 7.9154 8.95959 7.9154 8.8275C7.9154 8.69541 7.86313 8.56868 7.77 8.475L5.295 5.975L7.77 3.5C7.86313 3.40632 7.9154 3.27959 7.9154 3.1475C7.9154 3.01541 7.86313 2.88868 7.77 2.795C7.72369 2.74776 7.66847 2.71017 7.60753 2.68442C7.5466 2.65867 7.48115 2.64528 7.415 2.645C7.34885 2.64528 7.28341 2.65867 7.22247 2.68442C7.16153 2.71017 7.10631 2.74776 7.06 2.795L4.23 5.62C4.17925 5.66682 4.13874 5.72365 4.11104 5.7869C4.08334 5.85015 4.06903 5.91845 4.06903 5.9875C4.06903 6.05655 4.08334 6.12485 4.11104 6.1881C4.13874 6.25135 4.17925 6.30818 4.23 6.355V6.355Z"
        fill={fill}
      />
    </svg>
  );
};
