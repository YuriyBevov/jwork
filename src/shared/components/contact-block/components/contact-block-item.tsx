import React from 'react';

export const ContactBlockItem = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) => {
  return (
    <>
      {type === 'tel' && children && <a href={`tel:${children}`}>{children}</a>}
      {type === 'email' && children && (
        <a href={`mailto:${children}`}>{children}</a>
      )}
      {type === 'text' && children && <>{children}</>}
    </>
  );
};
