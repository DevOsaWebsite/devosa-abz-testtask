import { url } from './constants';

const fetchURL = url + `?page=1&count=6`;

const getPrefetchUsers = async () => {
  const res = await fetch(
    'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1%count=6',
    {
      method: 'GET',
    }
  );
  const data = await res.json();

  return data;
};

export default getPrefetchUsers;
