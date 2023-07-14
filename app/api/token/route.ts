import { NextResponse } from 'next/server';
import { token_url } from '../(utils)/constants';

export const GET = async () => {
  try {
    const response = await fetch(token_url);
    if (response.ok && response.status === 200) {
      const { token }: { token: string } = await response.json();
      return NextResponse.json(token);
    }
  } catch (message) {
    return NextResponse.json({ status: 'error', message });
  }
};
