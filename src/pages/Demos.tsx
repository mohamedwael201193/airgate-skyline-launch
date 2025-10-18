import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import PerkButton from "@/components/airgate/PerkButton";
import PassportProgress from "@/components/airgate/PassportProgress";
import { Briefcase, Star, TrendingUp } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Demos = () => {
  const [defiCredentials, setDefiCredentials] = useState<Array<{ id: string; name: string; status: "verified" | "pending" | "failed" }>>([
    { id: "kyc", name: "KYC Verified", status: "pending" },
    { id: "work", name: "Work History", status: "pending" },
  ]);

  const [fanCredentials] = useState([
    { id: "fan", name: "Fan Club Member", status: "verified" as const },
    { id: "attendance", name: "Event Attendance", status: "verified" as const },
    { id: "engagement", name: "Community Engagement", status: "pending" as const },
  ]);

  const [traderCredentials] = useState([
    { id: "volume", name: "Trading Volume $10k+", status: "verified" as const },
    { id: "history", name: "6 Month History", status: "verified" as const },
    { id: "tier", name: "Tier 3 Status", status: "pending" as const },
  ]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            Interactive <span className="gradient-text">Demos</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See AirGate OS in action with real-world use cases
          </p>
        </motion.div>

        {/* Demo Tabs */}
        <Tabs defaultValue="defi" className="space-y-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
            <TabsTrigger value="defi" className="gap-2">
              <Briefcase className="h-4 w-4" />
              DeFi Jobs
            </TabsTrigger>
            <TabsTrigger value="fan" className="gap-2">
              <Star className="h-4 w-4" />
              Fan VIP
            </TabsTrigger>
            <TabsTrigger value="trader" className="gap-2">
              <TrendingUp className="h-4 w-4" />
              Trader Tiers
            </TabsTrigger>
          </TabsList>

          {/* DeFi Job Board Demo */}
          <TabsContent value="defi" className="space-y-8">
            <Card className="p-8 bg-gradient-card border-border/50 max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">DeFi Job Board</h2>
                <p className="text-muted-foreground">
                  Access exclusive Web3 job postings by verifying your KYC and work history credentials.
                  No need to share actual documents—just prove you have them.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left: Progress */}
                <div>
                  <PassportProgress credentials={defiCredentials} />
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border/50">
                    <h3 className="font-semibold mb-2 text-sm">How it works:</h3>
                    <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                      <li>Connect your wallet</li>
                      <li>Verify KYC credential</li>
                      <li>Verify work history credential</li>
                      <li>Access premium job postings</li>
                    </ol>
                  </div>
                </div>

                {/* Right: Perk */}
                <div>
                  <PerkButton
                    title="Premium Job Access"
                    description="View high-paying DeFi positions from top protocols"
                    ruleName="defiJob"
                    requirements={[
                      {
                        id: "defiJobKyc",
                        name: "KYC Verified",
                        description: "Government ID verification",
                      },
                      {
                        id: "defiJobWork",
                        name: "Work History",
                        description: "Professional experience credentials",
                      },
                    ]}
                    onUnlock={() => {
                      toast.success("Access granted! Redirecting to premium jobs...");
                      setDefiCredentials([
                        { id: "kyc", name: "KYC Verified", status: "verified" },
                        { id: "work", name: "Work History", status: "verified" },
                      ]);
                    }}
                    unlockText="Browse Premium Jobs"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Fan VIP Demo */}
          <TabsContent value="fan" className="space-y-8">
            <Card className="p-8 bg-gradient-card border-border/50 max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Fan VIP Challenge</h2>
                <p className="text-muted-foreground">
                  Exclusive challenges for verified fans with built-in rate limiting.
                  Complete daily tasks without spam, powered by RLN (Rate Limiting Nullifier).
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left: Progress */}
                <div>
                  <PassportProgress credentials={fanCredentials} />
                  
                  <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/30">
                    <h3 className="font-semibold mb-2 text-sm text-accent">Rate Limiting</h3>
                    <p className="text-sm text-muted-foreground">
                      Max 5 challenge completions per 24 hours. Prevents spam while maintaining privacy.
                    </p>
                  </div>
                </div>

                {/* Right: Perk */}
                <div>
                  <PerkButton
                    title="Daily Fan Challenge"
                    description="Earn exclusive rewards and climb the leaderboard"
                    ruleName="fanVip"
                    requirements={[
                      {
                        id: "fanVip",
                        name: "Fan VIP",
                        description: "Verified fan club membership",
                      },
                    ]}
                    onUnlock={() => {
                      toast.success("Challenge unlocked! Complete before midnight.");
                    }}
                    unlockText="Start Challenge"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Trader Tiers Demo */}
          <TabsContent value="trader" className="space-y-8">
            <Card className="p-8 bg-gradient-card border-border/50 max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Trader Tier System</h2>
                <p className="text-muted-foreground">
                  Unlock lower fees and exclusive features based on verified trading volume and history.
                  Privacy-preserving proof of trader credentials.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left: Progress */}
                <div>
                  <PassportProgress credentials={traderCredentials} />
                  
                  <div className="mt-6 space-y-3">
                    <div className="p-3 bg-muted/50 rounded-lg border border-border/50">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Current Fee</span>
                        <span className="text-sm text-muted-foreground">0.30%</span>
                      </div>
                    </div>
                    <div className="p-3 bg-accent/10 rounded-lg border border-accent/30">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-accent">Tier 3 Fee</span>
                        <span className="text-sm text-accent">0.10%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Perk */}
                <div>
                  <PerkButton
                    title="Tier 3 Upgrade"
                    description="Unlock 0.10% trading fees and pro features"
                    ruleName="traderTier"
                    requirements={[
                      {
                        id: "traderTier",
                        name: "Trader Tier 3",
                        description: "Verified trading volume and history",
                      },
                    ]}
                    onUnlock={() => {
                      toast.success("Tier 3 unlocked! Enjoy reduced fees.");
                    }}
                    unlockText="Activate Tier 3"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Demos;
