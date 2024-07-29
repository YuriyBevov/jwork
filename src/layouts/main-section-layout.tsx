import clsx from 'clsx';
import React from 'react';

import styles from './main-section-layout.module.scss';

export const MainSectionLayout = ({
  modifier,
  container,
  title,
  description,
  children,
  align,
}: {
  modifier?: string;
  container?: 'fluid';
  title?: string;
  description?: string;
  children: React.ReactNode;
  align?: 'center';
}) => {
  return (
    <section
      className={clsx(
        'main-section',
        modifier,
        align === 'center' ? 'align_center' : null,
      )}
    >
      <div
        className={clsx(
          container === 'fluid' ? 'container-fluid' : 'container',
          align === 'center' ? styles.align_center : null,
        )}
      >
        {title && (
          <h2 className={clsx('main-section__title', 'base_title')}>{title}</h2>
        )}
        {description && (
          <p className={clsx('main-section__text', 'base_text')}>
            {description}
          </p>
        )}

        {children && <div className="main-section__content">{children}</div>}
      </div>
    </section>
  );
};
