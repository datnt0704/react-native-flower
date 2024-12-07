const API_URL = process.env.EXPO_PUBLIC_FLOWERSTORE_OPENAPI_DEV_URL;

export async function login(email: string, password: string) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) {
    console.log(data);
    throw Error('Failed to login');
  }
  return data;
}