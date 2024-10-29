import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5050; // Load port from .env or use default

app.listen(PORT, (): void => {
  console.log(`Server is running on port ${PORT}`);
});
