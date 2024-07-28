// 'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { MainInput } from '@/shared/components/main-input';
import { SubmitBtn } from '@/shared/components/submit-btn';

import styles from './offer-type-5.module.scss';
import { OfferData } from './types';

export const OfferType_5 = async () => {
  const data: OfferData = await getLocalData(
    'src/components/offer/offer-type-5/data.json',
  );

  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.root_wrapper}>
          <div className={styles.root_content}>
            <h2 className={clsx('base_title', styles.base_title)}>
              {data.title}
            </h2>
            <p className={clsx('base_text', styles.base_text)}>{data.text}</p>

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
                    bordered
                    id={field.id}
                  />
                ))}
                <SubmitBtn text={data.form.submitBtn.text} />
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
          <Image
            src={data.image.path}
            alt={data.image.alt}
            width={data.image.width}
            height={data.image.height}
          />
        </div>
      </div>
    </section>
  );
};
