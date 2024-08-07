// 'use client';
import clsx from 'clsx';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { MainInput } from '@/shared/components/main-input';
import { SubmitBtn } from '@/shared/components/submit-btn';

import styles from './offer-type-7.module.scss';
import { OfferData } from './types';

export const OfferType_7 = async () => {
  const data: OfferData = await getLocalData(
    'src/components/offer/offer-type-7/data.json',
  );

  return (
    <section className={styles.root}>
      <div className={clsx('container', styles.container)}>
        <div
          className={styles.root_wrapper}
          style={{
            backgroundImage: 'url(' + data.backgroundImagePath + ')',
          }}
        >
          <h2 className={clsx('base_title', styles.base_title)}>
            {data.title}
          </h2>

          <form
            id={data.form.id}
            action="#"
            method="POST"
            className={styles.offer_form}
          >
            <fieldset>
              {data.form.fields.map((field) => (
                <MainInput
                  key={field.id}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  id={field.id}
                  bordered
                  rounded={'xs'}
                />
              ))}
              <SubmitBtn text={data.form.submitBtn.text} rounded={'xs'} />
            </fieldset>
            <small>
              {data.form.policy.text}
              <a href={data.form.policy.linkUrl}>
                {' '}
                {data.form.policy.linkText}
              </a>
            </small>
          </form>
        </div>
      </div>
    </section>
  );
};
