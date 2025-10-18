import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";

const Careers = () => {
  const positions = [
    {
      title: "Senior Protocol Engineer",
      location: "Remote",
      type: "Full-time",
      department: "Engineering",
      description: "Build the core verification protocol and zero-knowledge proof systems",
    },
    {
      title: "Developer Relations Lead",
      location: "Remote / San Francisco",
      type: "Full-time",
      department: "Developer Experience",
      description: "Grow our developer community and create world-class documentation",
    },
    {
      title: "Product Designer",
      location: "Remote",
      type: "Full-time",
      department: "Design",
      description: "Design beautiful, intuitive interfaces for Web3 credential verification",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            Join <span className="gradient-text">Our Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us build the privacy layer for Web3
          </p>
        </motion.div>

        <div className="space-y-6">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="outline">{position.department}</Badge>
                      <Badge variant="secondary">{position.type}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {position.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" className="group-hover:border-primary/50">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="mt-16 p-12 bg-gradient-card border-border/50 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't see a fit?</h2>
          <p className="text-muted-foreground mb-8">
            We're always looking for talented people. Send us your resume and tell us how you can help.
          </p>
          <Button size="lg" variant="outline">
            Send General Application
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Careers;
