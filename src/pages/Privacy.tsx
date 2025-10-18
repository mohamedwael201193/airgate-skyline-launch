import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 15, 2025</p>
        </motion.div>

        <Card className="p-8 bg-gradient-card border-border/50">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Our Commitment to Privacy</h2>
            <p className="text-muted-foreground mb-6">
              At AirGate OS, privacy isn't just a feature—it's our foundation. We built this platform
              specifically to enable credential verification without compromising user privacy.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-8">What We Collect</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Wallet addresses for authentication</li>
              <li>Verification events (encrypted, no PII)</li>
              <li>Usage analytics (anonymized)</li>
              <li>Developer API keys and configurations</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-8">What We DON'T Collect</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Personal identification documents</li>
              <li>Social security numbers or government IDs</li>
              <li>Banking or financial information</li>
              <li>Any user credential data (stored on-chain only)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-8">Zero-Knowledge Architecture</h3>
            <p className="text-muted-foreground mb-6">
              Our zero-knowledge proof system ensures that credentials can be verified without revealing
              the underlying data. Verifications happen on-chain with cryptographic proofs, not by
              sharing sensitive information.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-8">Data Retention</h3>
            <p className="text-muted-foreground mb-6">
              Verification events are retained for 90 days for audit purposes, then permanently deleted.
              All data is encrypted at rest and in transit using industry-standard protocols.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-8">Your Rights</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Request deletion of your data</li>
              <li>Export your verification history</li>
              <li>Opt out of analytics</li>
              <li>Revoke API access at any time</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-8">Contact Us</h3>
            <p className="text-muted-foreground">
              Questions about privacy? Email us at{" "}
              <a href="mailto:privacy@airgate.example" className="text-primary hover:underline">
                privacy@airgate.example
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
