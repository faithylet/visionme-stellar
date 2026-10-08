import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  PORT\: parseInt(process.env.PORT ?? '3000', 10),
  DATABASE_URL: process.env.DATABASE_URL ?? '',
  SOROBAN_RPC_URL: process.env.SOROBAN_RPC_URL ?? 'https://soroban-testnet.stellar.org',
  NETWORK_PASSPHRASE: process.env.NETWORK_PASSTHRASE ?? 'Test SDE Network ; Sordoban 2024',
  SBT_CONTRACT_ID: process.env.SBT_CONTRACT_ID ?? '',
  SBT_ADMIN_SECRET_KEY: process.env.SBT_ADMIN_SECRET_KEY ?? '',
} as const;
