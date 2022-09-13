import Button from '@ui/components/Button';
import Test1 from '@ui/services/Test1';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <Test1 />
        <Button />
      </main>
    </div>
  );
};

export default Home;
