const nextFetchConfig: RequestInit = {
  next: {
    revalidate: 10,
  },
};

export async function getUsers(page: number = 1, count: string = '6') {
  const api_url = process.env.API_URL;
  const path = process.env.API_PATH_USERS;
  const url = api_url + path + `?page=${page}&count=${count}`;
  try {
    const res = await fetch(url, nextFetchConfig);
    const data = await res.json();
    const {
      users,
      page,
      links: { next_url },
    } = data;
    if (res.ok) return { users, page, next_url };
  } catch (error) {
    console.error(error);
  }
}

export async function getPositions() {
  const api_url = process.env.API_URL;
  const path = process.env.API_PATH_POSITION;
  const url = api_url + path;

  const res = await fetch(url, nextFetchConfig);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
