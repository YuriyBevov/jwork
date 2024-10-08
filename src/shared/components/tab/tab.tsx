'use client';

import { Tabs } from '@mantine/core';
import React from 'react';

export const Tab = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Tabs className={className} defaultValue="0">
      {children}
    </Tabs>
  );
};
