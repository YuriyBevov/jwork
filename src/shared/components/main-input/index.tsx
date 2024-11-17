'use client';

import clsx from 'clsx';
import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import styles from './main-input.module.scss';

type Props = {
  bordered?: boolean;
  rounded?: 'xs' | 'lg';
  placeholder?: string;
  type?: string;
  name?: string;
};

export const MainInput: React.FC<Props> = ({
  rounded,
  bordered,
  placeholder,
  name,
  type = 'text',
}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <>
      <InputMask
        mask={type === 'tel' ? '+7 (999) 999-99-99' : ''}
        type={type}
        name={name}
        value={phoneNumber}
        className={clsx(
          bordered ? styles.bordered : null,
          rounded === 'xs'
            ? styles.rounded_xs
            : rounded === 'lg'
              ? styles.rounded_lg
              : null,
          styles.root,
        )}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPhoneNumber(event.target.value)
        }
        placeholder={placeholder}
      />
    </>
  );
};
