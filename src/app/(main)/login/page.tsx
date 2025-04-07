'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import LoginTemplate from '@/components/templates/LoginTemplate';

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('auth');

    if (auth) {
      const parsed = JSON.parse(auth);

      if (parsed.isLoggedIn) {
        router.replace('/mypage');
      }
    }
  }, [router]);

  return (
    <div className="flex flex-col py-[120px]">
      <LoginTemplate />
    </div>
  );
};

export default LoginPage;
