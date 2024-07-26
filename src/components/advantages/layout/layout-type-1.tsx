import clsx from 'clsx';
import React from 'react';

export const LayoutAdvantages = ({
  rootClassName,
  titleClassName,
  descriptionClassName,
  title,
  description,
  children,
}: {
  rootClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
}) => {
  return (
    <section className={rootClassName}>
      <div className="container">
        {title && (
          <h2 className={clsx('base_title', titleClassName)}>{title}</h2>
        )}
        {description && (
          <p className={clsx('base_text', descriptionClassName)}>
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};
