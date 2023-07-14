export const getToken = async () => {
  try {
    const response_token = await fetch('/api/token');
    const { token } = await response_token.json();
    console.log(token);
  } catch (error) {}
};
