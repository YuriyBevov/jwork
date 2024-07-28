'use client';

import { Tabs } from '@mantine/core';
import React, { ReactNode } from 'react';

export const TabUiContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <>
      {React.Children.map(children, (child: ReactNode, index: number) => (
        <Tabs.Panel className={className} value={index.toString()}>
          {child}
        </Tabs.Panel>
      ))}
    </>
  );
};
