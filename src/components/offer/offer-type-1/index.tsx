// 'use client';
import clsx from 'clsx';
// import Image from 'next/image';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { MainInput } from '@/shared/ui/main-input';
import { SubmitBtn } from '@/shared/ui/submit-btn';

import styles from './offer-type-1.module.scss';
import { OfferData } from './types';

export const OfferType_1 = async () => {
  const data: OfferData = await getLocalData(
    'src/components/offer/offer-type-1/data.json',
  );

  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.root_wrapper}>
          <h2 className={clsx('base_title', styles.base_title)}>
            {data.title}
          </h2>
          <p className={clsx('base_text', styles.base_text)}>{data.text}</p>

          <form action="#" method="POST" className={styles.offer_form}>
            <fieldset>
              <MainInput text="Ваше имя" rounded={'lg'} />
              <MainInput text="Ваш телефон" rounded={'lg'} />
              <MainInput text="Е-mail" rounded={'lg'} />
              <SubmitBtn rounded={'lg'} text="Отправить" />
            </fieldset>
            <small>
              Нажимая кнопку “Подписаться” вы соглашаетесь с
              <a href="#"> политикой конфиденциальности</a>
            </small>
          </form>
        </div>
      </div>
    </section>
  );
};
