-- User table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL
);

-- Document table
CREATE TABLE IF NOT EXISTS documents (
  id SERIAL PRIMARY KEY,
  filename VARCHAR(255),
  originalname VARCHAR(255),
  uploaded_by INTEGER REFERENCES users(id),
  status VARCHAR(50),
  created_at TIMESTAMP
);
