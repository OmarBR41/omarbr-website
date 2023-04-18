import React from 'react';

import { Footer, Header } from '@/components/layout';

interface MainProps {
  children?: any;
}

export const Main = ({ children }: MainProps) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

Main.defaultProps = {
  children: <div />,
};
