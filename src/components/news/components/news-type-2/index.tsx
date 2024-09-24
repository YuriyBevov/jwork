import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { AuthorBlock } from '@/shared/components/author-block/author-block';
import { Badge } from '@/shared/components/badge';
import { MainBtn } from '@/shared/components/main-btn';
import { Tab, TabContent, TabList } from '@/shared/components/tab';

import { NewsDTO } from '../../types';
import common from '../news.module.scss';
import custom from './news-type-2.module.scss';

export const NewsType_2 = async ({
  title,
  titleAlign,
}: {
  title?: string;
  titleAlign?: 'left' | 'center';
}) => {
  const data: NewsDTO = await getLocalData(
    'src/components/news/components/news-type-2/data.json',
  );

  return (
    <MainSectionLayout
      title={title ? title : data.title}
      description={data.description}
      align={titleAlign ? titleAlign : data.titleAlign}
    >
      <div className={clsx(common.root, custom.root)}>
        <Tab>
          <TabList className={custom.tabs}>
            {data.content.tabs.map((tab) => (
              <React.Fragment key={tab.id}>{tab.tag}</React.Fragment>
            ))}
          </TabList>
          <TabContent className={custom.tab_content}>
            {data.content.tabs.map((tab) => (
              <ul className={clsx(common.list, custom.list)} key={tab.id}>
                <React.Fragment>
                  {tab.content.list.map((item) => (
                    <li
                      className={clsx(common.list_item, custom.list_item)}
                      key={item.id}
                    >
                      <Link
                        href={item.detailPageUrl}
                        key={item.id}
                        className={clsx(
                          common.list_item_content,
                          custom.list_item_content,
                        )}
                      >
                        <Image
                          src={item.image.url}
                          alt={item.image.alt}
                          width={item.image.width}
                          height={item.image.height}
                        />
                        <div
                          className={clsx(
                            common.list_item_content_wrapper,
                            custom.list_item_content_wrapper,
                          )}
                        >
                          <Badge
                            text={item.badge.text}
                            outlined={true}
                            accent={true}
                          />

                          <span
                            className={clsx(
                              'base_subtitle',
                              common.base_subtitle,
                              custom.base_subtitle,
                            )}
                          >
                            {item.title}
                          </span>
                          <p
                            className={clsx(
                              'base_text',
                              common.base_text,
                              custom.base_text,
                            )}
                          >
                            {item.description}
                          </p>

                          <div
                            className={clsx(
                              common.list_item_content_footer,
                              custom.list_item_content_footer,
                            )}
                          >
                            <AuthorBlock
                              user={item.author.name}
                              avatar={item.author.image.url}
                              date={item.author.createFrom}
                              note={item.author.note}
                            />
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </React.Fragment>
              </ul>
            ))}
          </TabContent>
        </Tab>

        <MainBtn outlined={true} text="Больше новостей" />
      </div>
    </MainSectionLayout>
  );
};
