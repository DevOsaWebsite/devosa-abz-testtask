import React from 'react';
import { MyThemeProvider } from './MyThemeProvider';
interface Providers {
  children: React.ReactNode;
}

export const Providers: React.FC<Providers> = props => {
  const { children } = props;
  return <MyThemeProvider>{children}</MyThemeProvider>;
};
