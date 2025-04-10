// /src/api/fetchGymList.ts

import { GymListResponse } from '@/types/gym';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchGymList = async (): Promise<GymListResponse> => {
  const res = await fetch(`${API_BASE_URL}/gym/search`, {
    credentials: 'include',
  });

  if (!res.ok) throw new Error('헬스장 목록 조회 실패');

  const data: GymListResponse = await res.json();

  return data;
};
