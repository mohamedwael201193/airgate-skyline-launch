import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Zap, Lock, Code, Users, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import HeroOrbit from "@/components/home/HeroOrbit";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Privacy-First Verification",
      description: "Zero-knowledge proofs keep user data private while enabling credential verification",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second verification with optimized on-chain and off-chain hybrid architecture",
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Simple SDK with React components, hooks, and a powerful Rules DSL",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Built on Moca Network with military-grade encryption and audit trails",
    },
    {
      icon: Users,
      title: "User-Owned Identity",
      description: "Self-sovereign credentials that users control and can port anywhere",
    },
    {
      icon: Sparkles,
      title: "Flexible Rules Engine",
      description: "Combine multiple credentials with AND/OR logic and rate limiting",
    },
  ];

  const useCases = [
    {
      title: "DeFi Compliance",
      description: "Enable KYC-gated DeFi without storing user PII",
      gradient: "from-primary to-primary-glow",
    },
    {
      title: "Gated Communities",
      description: "Token-gated access with flexible credential rules",
      gradient: "from-accent to-accent-glow",
    },
    {
      title: "Loyalty Programs",
      description: "Verifiable achievements and tier-based rewards",
      gradient: "from-primary to-accent",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
                ✨ Privacy-first credential verification
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Build Trust,
                <br />
                <span className="gradient-text">Keep Privacy</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl">
                AirGate OS enables zero-knowledge credential verification for Web3 apps.
                Gate access, verify users, and maintain privacy—all with a few lines of code.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="shadow-primary">
                  <Link to="/docs">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/demos">View Demos</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>No backend needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>5-min integration</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Animated Orbit */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <HeroOrbit />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why AirGate Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why AirGate OS?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The missing layer between your app and user credentials
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-gradient-card border-border/50 hover:border-primary/30 hover:shadow-primary transition-all duration-300 group">
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Built for Modern Web3</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From DeFi to gaming, enable credential-based access control
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity rounded-xl" 
                     style={{ backgroundImage: `linear-gradient(to bottom right, var(--primary), var(--accent))` }} 
                />
                <Card className="relative p-8 h-full border-border/50 group-hover:border-primary/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                  <ArrowRight className="h-5 w-5 text-primary mt-4 group-hover:translate-x-2 transition-transform" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Build?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join developers building the next generation of privacy-first Web3 apps
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" asChild className="shadow-primary">
                <Link to="/docs">
                  Start Building <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
