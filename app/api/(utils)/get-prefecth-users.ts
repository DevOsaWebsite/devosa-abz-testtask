const api_url = process.env.API_URL;
const path = process.env.API_PATH_USERS;
const preFetchURL = api_url + path + `?page=1&count=6`;

const getPrefetchUsers = async () => {
  const res = await fetch(preFetchURL);
  return await res.json();
};

export default getPrefetchUsers;
