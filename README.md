# AirGate OS

Privacy-first credential verification for Web3 applications. Built with AIR Kit on Moca Network.

## 🚀 Features

- **Zero-Knowledge Verification** - Verify credentials without exposing user data
- **Pre-built Components** - Drop-in React widgets for credential flows
- **Flexible Rules DSL** - Define complex verification logic with simple JSON
- **Rate Limiting (RLN)** - Privacy-preserving action limits
- **Beautiful UI** - Glassmorphism design with animated credential orbits

## 📦 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Framer Motion
- **State**: Zustand
- **UI Components**: shadcn/ui
- **Backend**: AIR Kit (Moca Network)

## 🏗️ Project Structure

```
src/
├── air/                    # AIR Kit integration
│   ├── AirGateProvider.tsx # Context provider
│   ├── programs.ts         # Program ID helpers
│   └── rules.ts            # Verification rules
├── components/
│   ├── airgate/           # AirGate-specific components
│   │   ├── VerifyModal.tsx
│   │   ├── PassportProgress.tsx
│   │   └── PerkButton.tsx
│   ├── home/              # Home page components
│   │   └── HeroOrbit.tsx
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   └── ui/                # shadcn components
├── pages/                 # Route pages
│   ├── Home.tsx
│   ├── Product.tsx
│   ├── Demos.tsx
│   ├── Docs.tsx
│   ├── Pricing.tsx
│   ├── Partners.tsx
│   ├── Blog.tsx
│   ├── Careers.tsx
│   ├── Privacy.tsx
│   └── Terms.tsx
└── App.tsx               # App router
```

## 🛠️ Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env.local
   ```
   
   The `.env.example` includes all required AirGate configuration:
   - Partner ID
   - Moca Network RPC endpoints
   - Issuer/Verifier program IDs

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Design System

The design uses a custom color palette built around Electric Indigo (`#5B3DF5`) and Mint (`#00E3A2`):

- **Primary**: Electric Indigo - Main brand color
- **Accent**: Mint - Call-to-action highlights
- **Glassmorphism**: Frosted glass effects throughout
- **Animations**: Credential orbits, float, glow pulse

All design tokens are defined in `src/index.css` using HSL color space for consistency.

## 📝 Key Components

### VerifyModal
Pre-built modal for credential verification flow with status indicators.

```tsx
<VerifyModal
  open={showModal}
  onOpenChange={setShowModal}
  ruleName="defiJob"
  requirements={[
    { id: "defiJobKyc", name: "KYC", description: "Identity verification" },
    { id: "defiJobWork", name: "Work", description: "Work history" }
  ]}
  onSuccess={() => console.log("Verified!")}
/>
```

### PassportProgress
Visual progress indicator showing credential collection status.

```tsx
<PassportProgress
  credentials={[
    { id: "kyc", name: "KYC", status: "verified" },
    { id: "work", name: "Work", status: "pending" }
  ]}
/>
```

### PerkButton
Unlockable button gated by credential verification rules.

```tsx
<PerkButton
  title="Premium Access"
  ruleName="traderTier"
  requirements={[
    { id: "traderTier", name: "Tier 3+", description: "Verified trader" }
  ]}
  onUnlock={() => navigate("/premium")}
/>
```

## 🔐 Rules Engine

Define verification logic in `src/air/rules.ts`:

```typescript
export const rules = {
  // Require ALL credentials
  defiJob: {
    all: [
      { type: "verifier", id: "defiJobKyc" },
      { type: "verifier", id: "defiJobWork" }
    ]
  },
  
  // With rate limiting
  fanVip: {
    all: [{ type: "verifier", id: "fanVip" }],
    rln: { windowHours: 24, maxActions: 5 }
  },
  
  // Require ANY credential
  anyVerified: {
    any: [
      { type: "verifier", id: "kyc" },
      { type: "verifier", id: "work" }
    ]
  }
};
```

## 🔌 Integration Guide

### 1. Wrap your app
```tsx
import { AirGateProvider } from '@/air/AirGateProvider';

function App() {
  return (
    <AirGateProvider>
      <YourApp />
    </AirGateProvider>
  );
}
```

### 2. Use the hook
```tsx
import { useAirGate } from '@/air/AirGateProvider';

function MyComponent() {
  const { isConnected, login, verifyCredential } = useAirGate();
  
  const handleVerify = async () => {
    if (!isConnected) await login();
    const verified = await verifyCredential("c21s9030ptsdv004534lxx");
    console.log("Verified:", verified);
  };
}
```

### 3. Add components
Drop in pre-built widgets or build custom flows with the `useAirGate()` hook.

## 🚧 TODO: AIR Kit Integration

Current implementation includes placeholders for AIR Kit integration:

```typescript
// TODO: Integrate @mocanetwork/airkit
// TODO: Call service.login() for AIR Account
// TODO: Use service.verifyCredential() with program ID
```

To complete integration:
1. Install `@mocanetwork/airkit`
2. Replace placeholder functions in `AirGateProvider.tsx`
3. Connect to actual Moca Network testnet
4. Test credential issuance and verification

## 📚 Pages

- **Home** - Hero with animated orbits, features, use cases
- **Product** - Component showcase, Rules DSL docs, builder preview
- **Demos** - Interactive demos for DeFi Jobs, Fan VIP, Trader Tiers
- **Docs** - Quickstart guide, API reference, guides
- **Pricing** - Free/Pro/Enterprise tiers
- **Partners** - Partnership opportunities
- **Blog** - Latest updates and technical posts
- **Careers** - Open positions
- **Privacy** - Privacy policy
- **Terms** - Terms of service

## 🎯 Environment Variables

All configuration is handled via environment variables (see `.env.example`):

- `VITE_AIR_PARTNER_ID` - Your AirGate partner ID
- `VITE_AIR_ENV` - Environment (testnet/mainnet)
- `VITE_MOCA_CHAIN_ID` - Moca Network chain ID
- `VITE_MOCA_RPC_URL` - RPC endpoint
- `VITE_EXPLORER_BASE_URL` - Block explorer URL
- `VITE_ISSUER_PROGRAM_IDS` - JSON map of issuer programs
- `VITE_VERIFIER_PROGRAM_IDS` - JSON map of verifier programs
- `VITE_PARTNER_TOKEN_URL` - Partner token API endpoint

## 📄 License

MIT

## 🤝 Contributing

Contributions welcome! Please open an issue or PR.

## 📧 Contact

- Website: [airgate.example](https://airgate.example)
- Email: hello@airgate.example
- Twitter: [@airgate_os](https://twitter.com/airgate_os)
