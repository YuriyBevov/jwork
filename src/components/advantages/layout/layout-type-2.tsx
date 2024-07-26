import clsx from 'clsx';
import React from 'react';

export const LayoutAdvantagesType_2 = ({
  rootClassName,
  titleClassName,
  descriptionClassName,
  wrapperClassName,
  contentClassName,
  title,
  description,
  children,
}: {
  rootClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  wrapperClassName?: string;
  contentClassName?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
}) => {
  return (
    <section className={rootClassName}>
      <div className="container">
        <div className={wrapperClassName}>
          <div className={contentClassName}>
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
        </div>
      </div>
    </section>
  );
};
