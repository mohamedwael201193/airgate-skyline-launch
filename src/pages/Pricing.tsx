import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for testing and small projects",
      features: [
        "Up to 1,000 verifications/month",
        "Core widgets (VerifyModal, PerkButton)",
        "Basic rule engine (AND/OR logic)",
        "Community support",
        "Testnet access",
      ],
      cta: "Start Free",
      href: "/docs",
      variant: "outline" as const,
    },
    {
      name: "Pro",
      price: "$99",
      period: "/month",
      description: "For production apps and growing teams",
      features: [
        "Up to 50,000 verifications/month",
        "All widgets + PassportProgress",
        "Advanced rules (RLN, nested logic)",
        "Priority support",
        "Mainnet access",
        "Custom branding",
        "Analytics dashboard",
      ],
      cta: "Start Pro Trial",
      href: "/docs",
      variant: "default" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale applications",
      features: [
        "Unlimited verifications",
        "White-label solution",
        "Custom rule development",
        "Dedicated support engineer",
        "SLA guarantees",
        "On-premise deployment option",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      href: "/partners",
      variant: "outline" as const,
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
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="flex items-center gap-1 px-3 py-1 bg-gradient-primary text-primary-foreground text-xs font-semibold rounded-full shadow-primary">
                    <Zap className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card
                className={`p-8 h-full bg-gradient-card border-border/50 transition-all duration-300 ${
                  tier.popular
                    ? "border-primary/50 shadow-primary scale-105"
                    : "hover:border-primary/30"
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {tier.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.period && (
                      <span className="text-muted-foreground">{tier.period}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.variant}
                  asChild
                  className={`w-full ${tier.popular ? "shadow-primary" : ""}`}
                  size="lg"
                >
                  <Link to={tier.href}>{tier.cta}</Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What counts as a verification?",
                a: "Each credential check against a verifier program counts as one verification. For example, checking both KYC and work history credentials counts as 2 verifications.",
              },
              {
                q: "Can I upgrade or downgrade anytime?",
                a: "Yes! You can change your plan at any time. Upgrades take effect immediately, downgrades at the end of your billing period.",
              },
              {
                q: "Is there a setup fee?",
                a: "No setup fees, ever. You only pay for verifications above your plan's limit.",
              },
              {
                q: "What happens if I exceed my limit?",
                a: "We'll notify you before you hit your limit. Overages are billed at $0.002 per verification for Pro plans.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
