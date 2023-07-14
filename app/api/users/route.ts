import { NextResponse } from 'next/server';

const api_url = process.env.API_URL;
const path = process.env.API_PATH_USERS;
const nextFetchConfig: RequestInit = {
  next: {
    revalidate: 10,
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';
  const count = searchParams.get('count') || '6';

  const fetchURL = api_url + path + `?page=${page}&count=${count}`;

  try {
    const response = await fetch(fetchURL, nextFetchConfig);
    const data = await response.json();
    const { success, message, fails } = data;
    if (!success) {
      return NextResponse.json({ message, fails });
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      status: '500',
      message: error,
    });
  }
}
export async function POST(request: Request) {}
