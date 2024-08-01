import { Suspense } from 'react';

import { Navbar } from '@widgets/Navbar';

export const Page: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='app_container'>
      <Suspense>{children}</Suspense>
      <Navbar />
    </div>
  );
};
