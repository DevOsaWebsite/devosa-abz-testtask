import { NextResponse } from 'next/server';
import { url } from '../../(utils)/constants';

export async function GET() {
  try {
    const response = await fetch(url);

    if (response.ok && response.status === 200) {
      const data = await response.json();
      
      const { positions } = await data;
      return NextResponse.json({ positions });
    }
  } catch (message) {
    return NextResponse.json({
      success: false,
      message,
    });
  }
}
