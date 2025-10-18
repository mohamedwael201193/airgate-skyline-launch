import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Blocks, Palette, Zap } from "lucide-react";

const Product = () => {
  const widgets = [
    {
      name: "VerifyModal",
      description: "Pre-built modal for credential verification flow",
      code: `<VerifyModal
  open={showModal}
  onOpenChange={setShowModal}
  ruleName="defiJob"
  requirements={[
    { id: "kyc", name: "KYC Verified" },
    { id: "work", name: "Work History" }
  ]}
  onSuccess={() => console.log("Verified!")}
/>`,
    },
    {
      name: "PassportProgress",
      description: "Visual progress indicator for credential collection",
      code: `<PassportProgress
  credentials={[
    { id: "kyc", name: "KYC", status: "verified" },
    { id: "work", name: "Work", status: "pending" },
    { id: "fan", name: "Fan VIP", status: "failed" }
  ]}
/>`,
    },
    {
      name: "PerkButton",
      description: "Unlockable button gated by credential rules",
      code: `<PerkButton
  title="Premium Access"
  description="Unlock premium features"
  ruleName="traderTier"
  requirements={[
    { id: "traderTier", name: "Trader Tier 3+" }
  ]}
  onUnlock={() => navigate("/premium")}
/>`,
    },
  ];

  const ruleExamples = [
    {
      name: "All Required",
      description: "All conditions must be met",
      code: `{
  all: [
    { type: "verifier", id: "kyc" },
    { type: "verifier", id: "work" }
  ]
}`,
    },
    {
      name: "Any Match",
      description: "At least one condition must be met",
      code: `{
  any: [
    { type: "verifier", id: "kyc" },
    { type: "verifier", id: "social" }
  ]
}`,
    },
    {
      name: "Rate Limited",
      description: "Limit actions with RLN",
      code: `{
  all: [{ type: "verifier", id: "fanVip" }],
  rln: {
    windowHours: 24,
    maxActions: 5
  }
}`,
    },
  ];

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
            Product <span className="gradient-text">Overview</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to add credential verification to your app
          </p>
        </motion.div>

        {/* Product Tabs */}
        <Tabs defaultValue="widgets" className="space-y-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
            <TabsTrigger value="widgets" className="gap-2">
              <Palette className="h-4 w-4" />
              Widgets
            </TabsTrigger>
            <TabsTrigger value="rules" className="gap-2">
              <Blocks className="h-4 w-4" />
              Rules DSL
            </TabsTrigger>
            <TabsTrigger value="builder" className="gap-2">
              <Zap className="h-4 w-4" />
              Builder
            </TabsTrigger>
          </TabsList>

          {/* Widgets Tab */}
          <TabsContent value="widgets" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Pre-built Components</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Drop-in React components that handle credential verification UX
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {widgets.map((widget, index) => (
                <motion.div
                  key={widget.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300">
                    <div className="mb-4">
                      <Code className="h-8 w-8 text-primary mb-3" />
                      <h3 className="text-lg font-semibold mb-2">{widget.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {widget.description}
                      </p>
                    </div>
                    <pre className="p-3 bg-muted rounded-lg overflow-x-auto text-xs">
                      <code>{widget.code}</code>
                    </pre>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Rules DSL Tab */}
          <TabsContent value="rules" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Rules Engine</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Define flexible verification logic with simple JSON rules
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {ruleExamples.map((example, index) => (
                <motion.div
                  key={example.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-gradient-card border-border/50">
                    <h3 className="text-lg font-semibold mb-2">{example.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {example.description}
                    </p>
                    <pre className="p-3 bg-muted rounded-lg overflow-x-auto text-xs">
                      <code>{example.code}</code>
                    </pre>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Rule Features */}
            <Card className="p-8 bg-gradient-card border-border/50 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Rule Operators</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Logic Operators</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <code className="text-foreground">all</code> - All conditions required (AND)</li>
                    <li>• <code className="text-foreground">any</code> - At least one condition (OR)</li>
                    <li>• <code className="text-foreground">not</code> - Negate a condition</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-accent">Advanced Features</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <code className="text-foreground">rln</code> - Rate limiting with RLN</li>
                    <li>• <code className="text-foreground">nested</code> - Combine rules</li>
                    <li>• <code className="text-foreground">custom</code> - Plugin system</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Builder Tab */}
          <TabsContent value="builder" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Visual Builder</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Coming soon: No-code rule builder and credential designer
              </p>
            </div>

            <Card className="p-12 bg-gradient-card border-border/50 max-w-4xl mx-auto text-center">
              <Zap className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Visual Rule Builder</h3>
              <p className="text-muted-foreground mb-6">
                Drag-and-drop interface for creating complex verification rules without code.
                Define credentials, set up logic, and generate ready-to-use configurations.
              </p>
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent">
                Coming Q2 2025
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Product;
