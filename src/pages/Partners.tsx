import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Handshake, Mail } from "lucide-react";

const Partners = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Technology Partnership",
      description: "Integrate AirGate OS into your platform and offer privacy-first verification to your users",
    },
    {
      icon: Users,
      title: "Referral Program",
      description: "Earn revenue by referring clients to AirGate OS. Up to 20% commission on qualified deals",
    },
    {
      icon: Handshake,
      title: "Co-Marketing",
      description: "Joint case studies, webinars, and content marketing opportunities with our team",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            Partner <span className="gradient-text">With Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build the future of privacy-preserving Web3 together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300">
                  <Icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <Card className="p-12 bg-gradient-card border-border/50 max-w-2xl mx-auto text-center">
          <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8">
            Interested in partnering with AirGate OS? We'd love to hear from you.
          </p>
          <Button size="lg" className="shadow-primary">
            Contact Partnership Team
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Partners;
