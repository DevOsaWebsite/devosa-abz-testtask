import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const api_url = process.env.API_URL;
  const path = process.env.API_PATH_POSITION;
  const url = api_url + path;
  try {
    const response = await fetch(url);
    console.log(response);

    if (response.ok && response.status === 200) {
      const data = await response.json();
      const { positions } = await data;
      if (response.ok && response.status === 200) return NextResponse.json({ positions });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: `${error}`,
    });
  }
}
