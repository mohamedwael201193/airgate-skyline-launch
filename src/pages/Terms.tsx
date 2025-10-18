import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 15, 2025</p>
        </motion.div>

        <Card className="p-8 bg-gradient-card border-border/50">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing AirGate OS, you agree to these Terms of Service and our Privacy Policy.
              If you disagree with any part of the terms, you may not access the service.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-8">Service Description</h3>
            <p className="text-muted-foreground mb-6">
              AirGate OS provides privacy-preserving credential verification infrastructure for Web3
              applications. We offer SDKs, APIs, and pre-built components for developers to integrate
              credential-based access control.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-8">Acceptable Use</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Use the service only for lawful purposes</li>
              <li>Do not attempt to bypass rate limits or security measures</li>
              <li>Do not abuse or overload our infrastructure</li>
              <li>Comply with all applicable regulations in your jurisdiction</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-8">Developer Responsibilities</h3>
            <p className="text-muted-foreground mb-6">
              As a developer using AirGate OS, you are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Securing your API keys and credentials</li>
              <li>Implementing proper error handling</li>
              <li>Complying with applicable privacy laws (GDPR, CCPA, etc.)</li>
              <li>Notifying users about credential verification in your app</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-8">Service Level</h3>
            <p className="text-muted-foreground mb-6">
              We strive for 99.9% uptime but do not guarantee uninterrupted service. Scheduled
              maintenance will be announced in advance. Enterprise customers receive SLA guarantees.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-8">Intellectual Property</h3>
            <p className="text-muted-foreground mb-6">
              AirGate OS and its components are proprietary. Our SDKs are open-source under MIT license.
              You retain all rights to your applications built with AirGate OS.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-8">Limitation of Liability</h3>
            <p className="text-muted-foreground mb-6">
              AirGate OS is provided "as is" without warranty. We are not liable for indirect damages,
              lost profits, or data loss arising from use of the service.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-8">Termination</h3>
            <p className="text-muted-foreground mb-6">
              We may suspend or terminate accounts that violate these terms. You may cancel your
              account at any time from your dashboard.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-8">Changes to Terms</h3>
            <p className="text-muted-foreground mb-6">
              We reserve the right to modify these terms. Users will be notified of significant changes
              via email. Continued use after changes constitutes acceptance.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-8">Contact</h3>
            <p className="text-muted-foreground">
              Questions? Email{" "}
              <a href="mailto:legal@airgate.example" className="text-primary hover:underline">
                legal@airgate.example
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
