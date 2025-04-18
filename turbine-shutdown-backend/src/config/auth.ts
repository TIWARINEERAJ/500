interface AuthConfig {
  jwtSecret: string;
  jwtExpiration: string;
  passwordSaltRounds: number;
}

const authConfig: AuthConfig = {
  jwtSecret: process.env.JWT_SECRET || 'default-secret-key',
  jwtExpiration: process.env.JWT_EXPIRATION || '1h',
  passwordSaltRounds: parseInt(process.env.PASSWORD_SALT_ROUNDS || '10')
};

export default authConfig;
