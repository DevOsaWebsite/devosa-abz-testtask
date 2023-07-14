export const api_url = process.env.API_URL;
export const path = process.env.API_PATH_POSITION;
export const token_path = process.env.API_PATH_TOKEN;
export const url = api_url + path;

export const token_url = api_url + token_path;

export const preFetchURL = api_url + path + `?page=1&count=6`;
