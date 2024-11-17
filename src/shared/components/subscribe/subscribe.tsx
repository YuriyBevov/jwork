import clsx from 'clsx';
import React from 'react';

import { FooterSubscribe } from '@/components/footer/types';
import { MainInput } from '@/shared/components/main-input';
import { SubmitBtn } from '@/shared/components/submit-btn';

import styles from './subscribe.module.scss';

export const Subscribe = ({
  title,
  data,
  className,
}: {
  title?: string;
  data?: FooterSubscribe;
  className?: string;
}) => {
  return (
    <div className={clsx(styles.root, className)}>
      {title && <span className={styles.root_title}>{data?.title}</span>}
      <span className={styles.root_text}>{data?.text}</span>
      <fieldset>
        <MainInput
          type="text"
          name="E-mail"
          placeholder="Введите Ваш e-mail"
          rounded={'lg'}
        />
        <SubmitBtn text="Подписаться" rounded={'lg'} outlined />
      </fieldset>

      <small className={styles.root_note}>{data?.note}</small>
    </div>
  );
};
