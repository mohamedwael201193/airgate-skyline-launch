import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Terminal, Book, Zap } from "lucide-react";

const Docs = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Get started with AirGate OS in under 5 minutes
          </p>
        </motion.div>

        <Tabs defaultValue="quickstart" className="space-y-8">
          <TabsList className="grid w-full max-w-lg grid-cols-3">
            <TabsTrigger value="quickstart">
              <Zap className="h-4 w-4 mr-2" />
              Quickstart
            </TabsTrigger>
            <TabsTrigger value="guides">
              <Book className="h-4 w-4 mr-2" />
              Guides
            </TabsTrigger>
            <TabsTrigger value="api">
              <Code className="h-4 w-4 mr-2" />
              API
            </TabsTrigger>
          </TabsList>

          {/* Quickstart */}
          <TabsContent value="quickstart" className="space-y-8">
            <Card className="p-8 bg-gradient-card border-border/50">
              <h2 className="text-2xl font-bold mb-6">Quick Start Guide</h2>

              <div className="space-y-8">
                {/* Step 1 */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
                      1
                    </span>
                    Install AIR Kit
                  </h3>
                  <pre className="p-4 bg-muted rounded-lg overflow-x-auto">
                    <code className="text-sm">npm install @mocanetwork/airkit</code>
                  </pre>
                </div>

                {/* Step 2 */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
                      2
                    </span>
                    Configure Environment
                  </h3>
                  <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
                    <code>{`VITE_AIR_PARTNER_ID=0b2c97d1-2c97-43cc-adce-617e6ab3327f
VITE_AIR_ENV=testnet
VITE_MOCA_CHAIN_ID=5151
VITE_MOCA_RPC_URL=https://devnet-rpc.mocachain.org
VITE_EXPLORER_BASE_URL=https://devnet-scan.mocachain.tech
VITE_PARTNER_TOKEN_URL=https://airgate-keys.vercel.app/api/partner-token

VITE_ISSUER_PROGRAM_IDS={"kyc":"c21s90g0pcu4m00C2599ez",...}
VITE_VERIFIER_PROGRAM_IDS={"defiJobKyc":"c21s9030ptsdv004534lxx",...}`}</code>
                  </pre>
                </div>

                {/* Step 3 */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
                      3
                    </span>
                    Wrap Your App
                  </h3>
                  <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
                    <code>{`import { AirGateProvider } from '@/air/AirGateProvider';

function App() {
  return (
    <AirGateProvider>
      <YourApp />
    </AirGateProvider>
  );
}`}</code>
                  </pre>
                </div>

                {/* Step 4 */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
                      4
                    </span>
                    Use Components
                  </h3>
                  <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
                    <code>{`import { PerkButton } from '@/components/airgate/PerkButton';

function MyPage() {
  return (
    <PerkButton
      title="Premium Feature"
      ruleName="defiJob"
      requirements={[
        { id: "defiJobKyc", name: "KYC", description: "Verified ID" },
        { id: "defiJobWork", name: "Work", description: "Work history" }
      ]}
      onUnlock={() => console.log("Access granted!")}
    />
  );
}`}</code>
                  </pre>
                </div>

                {/* Step 5 */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
                      5
                    </span>
                    Define Rules
                  </h3>
                  <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
                    <code>{`// src/air/rules.ts
export const rules = {
  defiJob: {
    all: [
      { type: "verifier", id: "defiJobKyc" },
      { type: "verifier", id: "defiJobWork" }
    ]
  },
  fanVip: {
    all: [{ type: "verifier", id: "fanVip" }],
    rln: { windowHours: 24, maxActions: 5 }
  }
};`}</code>
                  </pre>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <p className="text-sm text-accent font-medium">
                  🎉 That's it! You're ready to start gating access with credentials.
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Guides */}
          <TabsContent value="guides" className="space-y-6">
            {["Creating Custom Rules", "Building Credential Flows", "Rate Limiting with RLN", "Testing & Debugging"].map(
              (guide, index) => (
                <motion.div
                  key={guide}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{guide}</h3>
                        <p className="text-sm text-muted-foreground">
                          Learn how to {guide.toLowerCase()} in your application
                        </p>
                      </div>
                      <Terminal className="h-6 w-6 text-primary group-hover:translate-x-2 transition-transform" />
                    </div>
                  </Card>
                </motion.div>
              )
            )}
          </TabsContent>

          {/* API Reference */}
          <TabsContent value="api" className="space-y-6">
            <Card className="p-8 bg-gradient-card border-border/50">
              <h2 className="text-2xl font-bold mb-6">API Reference</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">useAirGate()</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    React hook for accessing AIR services
                  </p>
                  <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
                    <code>{`const {
  isConnected,      // boolean
  isLoading,        // boolean
  userAddress,      // string | null
  login,            // () => Promise<void>
  logout,           // () => void
  verifyCredential, // (programId: string) => Promise<boolean>
  checkRule         // (ruleName: string) => Promise<boolean>
} = useAirGate();`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">getVerifierId()</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Get verifier program ID from env config
                  </p>
                  <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
                    <code>{`import { getVerifierId } from '@/air/programs';

const programId = getVerifierId("defiJobKyc");
// Returns: "c21s9030ptsdv004534lxx"`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">airConfig</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Environment configuration object
                  </p>
                  <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
                    <code>{`import { airConfig } from '@/air/programs';

console.log(airConfig.partnerId);    // Partner ID
console.log(airConfig.env);          // "testnet"
console.log(airConfig.mocaChainId);  // "5151"`}</code>
                  </pre>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Docs;
