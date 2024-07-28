'use client';

import { Tabs } from '@mantine/core';
import React, { ReactNode } from 'react';

export const TabUiList = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Tabs.List className={className}>
      {React.Children.map(children, (child: ReactNode, index: number) => (
        <Tabs.Tab value={index.toString()}>{child}</Tabs.Tab>
      ))}
    </Tabs.List>
  );
};
