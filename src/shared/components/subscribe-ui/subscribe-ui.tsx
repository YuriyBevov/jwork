import clsx from 'clsx';
import React from 'react';

import { FooterSubscribe } from '@/components/footer/types';
import { MainInput } from '@/shared/ui/main-input';
import { SubmitBtn } from '@/shared/ui/submit-btn';

import styles from './subscribe-ui.module.scss';

export const SubscribeUi = ({
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
          id="subscribe"
          rounded={'lg'}
        />
        <SubmitBtn text="Подписаться" rounded={'lg'} outlined />
      </fieldset>

      <small className={styles.root_note}>{data?.note}</small>
    </div>
  );
};
