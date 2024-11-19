import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import { HeroDTO, HeroItem } from '@/components/hero/types';
import { IconPin } from '@/shared/icons/icon-set-1/icon_pin';
import {
  AutocompleteUi,
  MultiSelectUi,
  PriceRangeDropdownUi,
  SelectUi,
} from '@/shared/ui';

import { ButtonUi } from '../../button';
import styles from './select-tab-type-7.module.scss';

const selectItem = (item: HeroItem) => {
  switch (item.type) {
    case 'select':
      return <SelectUi radius="lg" item={item} />;
    case 'multi_select':
      return (
        <MultiSelectUi
          radius="lg"
          classNameInput={styles.multi_input}
          item={item}
        />
      );
    case 'search':
      return <AutocompleteUi radius="lg" item={item} />;
    case 'price_range':
      return <PriceRangeDropdownUi radius="lg" item={item} />;
    default:
      return null;
  }
};

export const SelectTabType_7 = ({
  data,
  className,
}: {
  data: HeroDTO;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(data.tabs[0].title);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    if (option !== selectedOption) {
      setSelectedOption(option);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        !(event.target as Element).closest(`.${styles.options}`) &&
        !(event.target as Element).closest(`.${styles.select_button}`)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <section className={clsx(styles.root, className)}>
      <div className={styles.wrapper}>
        <button className={styles.select_button} onClick={handleToggle}>
          <span>{selectedOption}</span>
          <svg
            data-combobox-chevron="true"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {isOpen && (
          <ul className={styles.options}>
            {data.tabs.map((option) => (
              <li key={option.id}>
                <span
                  onClick={() => handleOptionClick(option.title)}
                  className={
                    option.title === selectedOption ? styles.active : ''
                  }
                >
                  {option.title}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.content}>
        {data.tabs
          .filter((tab) => tab.title === selectedOption)
          .map((tab) => (
            <React.Fragment key={tab.id}>
              {tab.items.map((item) => (
                <React.Fragment key={item.id}>
                  {selectItem(item)}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
      </div>
      <div className={styles.buttons}>
        <ButtonUi
          icon={<IconPin fill="#1a57db" width={16} height={20} />}
          radius="xs"
          outline
          height="lg"
          style={{ backgroundColor: '#fff' }}
          className={styles.button}
        >
          На карте
        </ButtonUi>
        <ButtonUi radius="xs" height="lg" className={styles.button}>
          Искать
        </ButtonUi>
      </div>
    </section>
  );
};
