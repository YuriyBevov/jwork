// 'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { MainInput } from '@/shared/components/main-input';
import { SubmitBtn } from '@/shared/components/submit-btn';

import { OfferData } from '../../types';
import common from '../offer.module.scss';
import custom from './offer-type-5.module.scss';

export const OfferType_5 = async () => {
  const data: OfferData = await getLocalData(
    'src/components/offer/components/offer-type-5/data.json',
  );

  return (
    <MainSectionLayout align={data.titleAlign}>
      <div className={clsx(common.root, custom.root)}>
        <div className={custom.root_wrapper}>
          <div className={custom.root_content}>
            <h2 className={clsx('base_title', custom.base_title)}>
              {data.title}
            </h2>
            <p className={clsx('base_text', custom.base_text)}>
              {data.description}
            </p>

            <form
              id={data.content.form.id}
              action="#"
              method="POST"
              className={custom.offer_form}
            >
              <fieldset>
                {data.content.form.fields.map((field) => (
                  <MainInput
                    key={field.id}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    bordered
                    id={field.id}
                  />
                ))}
                <SubmitBtn text={data.content.form.submitBtn.text} />
              </fieldset>
              <small>
                {data.content.form.policy.text}
                <a href={data.content.form.policy.linkUrl}>
                  {' '}
                  {data.content.form.policy.linkText}
                </a>
              </small>
            </form>
          </div>
          <Image
            src={data.image.url}
            alt={data.image.alt}
            width={data.image.width}
            height={data.image.height}
          />
        </div>
      </div>
    </MainSectionLayout>
  );
};
