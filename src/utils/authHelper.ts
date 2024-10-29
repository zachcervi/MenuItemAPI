import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

export async function getAuthToken() {
  const { data } = await axios.post(`${process.env.AUTH0_DOMAIN}/oauth/token`, {
    client_id: process.env.AUTH0_CLIENT_ID,
    client_secret: process.env.AUTH0_CLIENT_SECRET,
    audience: process.env.AUTH0_AUDIENCE,
    grant_type: 'client_credentials',
  });
  console.log('DATA', data);

  return data.access_token;
}
