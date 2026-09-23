const requiredEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

export const LinkURL = requiredEnv('LINK_URL');

export const Account = [
  {
    username: requiredEnv('ORANGEHRM_USERNAME'),
    password: requiredEnv('ORANGEHRM_PASSWORD'),
  },
  {
    username: requiredEnv('ORANGEHRM_USERNAME1'),
    password: requiredEnv('ORANGEHRM_PASSWORD1'),
  },
];
