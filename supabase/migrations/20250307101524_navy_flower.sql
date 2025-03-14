/*
  # Create test user

  1. Security
    - Creates a test user account with email and password
    - Email: test@exprofuel.com
    - Password: exprofuel2024
*/

-- Create a test user with a secure password
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at
)
VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'test@exprofuel.com',
  crypt('exprofuel2024', gen_salt('bf')),
  now(),
  now(),
  now()
)
ON CONFLICT (email) DO NOTHING;