'use client';

import { Tabs } from '@mantine/core';
import React from 'react';

export const TabUi = ({ children }: { children: React.ReactNode }) => {
  return <Tabs defaultValue="0">{children}</Tabs>;
};
