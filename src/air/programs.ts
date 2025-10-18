/**
 * AIR Program ID helpers
 * Reads issuer and verifier program IDs from environment variables
 */

const parse = (key: string): Record<string, string> => {
  try {
    return JSON.parse(import.meta.env[key] || "{}");
  } catch {
    return {};
  }
};

export const issuers = parse("VITE_ISSUER_PROGRAM_IDS");
export const verifiers = parse("VITE_VERIFIER_PROGRAM_IDS");

export const getIssuerId = (k: string): string => issuers[k] || "";
export const getVerifierId = (k: string): string => verifiers[k] || "";

// Environment configuration
export const airConfig = {
  partnerId: import.meta.env.VITE_AIR_PARTNER_ID || "",
  env: import.meta.env.VITE_AIR_ENV || "testnet",
  mocaChainId: import.meta.env.VITE_MOCA_CHAIN_ID || "5151",
  mocaRpcUrl: import.meta.env.VITE_MOCA_RPC_URL || "",
  explorerBaseUrl: import.meta.env.VITE_EXPLORER_BASE_URL || "",
  partnerTokenUrl: import.meta.env.VITE_PARTNER_TOKEN_URL || "",
};
