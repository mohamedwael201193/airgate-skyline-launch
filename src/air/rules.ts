/**
 * AIR Rules DSL Examples
 * Define credential verification rules for different use cases
 */

export interface RuleCondition {
  type: "verifier" | "issuer";
  id: string;
}

export interface RateLimitConfig {
  windowHours: number;
  maxActions: number;
}

export interface Rule {
  all?: RuleCondition[];
  any?: RuleCondition[];
  rln?: RateLimitConfig;
}

export const rules: Record<string, Rule> = {
  // DeFi Job Board: Requires both KYC and work history credentials
  defiJob: {
    all: [
      { type: "verifier", id: "defiJobKyc" },
      { type: "verifier", id: "defiJobWork" },
    ],
  },

  // Fan VIP Challenge: Requires fan credential with rate limiting
  fanVip: {
    all: [{ type: "verifier", id: "fanVip" }],
    rln: { windowHours: 24, maxActions: 5 },
  },

  // Trader Tiers: Requires trader credential
  traderTier: {
    all: [{ type: "verifier", id: "traderTier" }],
  },

  // Example: Any verified user (KYC OR Work history)
  anyVerified: {
    any: [
      { type: "verifier", id: "defiJobKyc" },
      { type: "verifier", id: "defiJobWork" },
    ],
  },
};

// Helper to get human-readable rule description
export const getRuleDescription = (ruleKey: string): string => {
  const descriptions: Record<string, string> = {
    defiJob: "Requires KYC verification and work history credentials",
    fanVip: "Requires fan credential (max 5 actions per 24 hours)",
    traderTier: "Requires trader tier credential",
    anyVerified: "Requires either KYC or work history verification",
  };
  return descriptions[ruleKey] || "Custom rule";
};
