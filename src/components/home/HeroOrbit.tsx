import { motion } from "framer-motion";
import { Shield, CheckCircle, Lock } from "lucide-react";

const HeroOrbit = () => {
  const credentials = [
    { icon: Shield, color: "text-primary", label: "KYC" },
    { icon: CheckCircle, color: "text-accent", label: "Work" },
    { icon: Lock, color: "text-primary", label: "VIP" },
  ];

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Center core */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
          <Shield className="h-12 w-12 text-primary-foreground" />
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-glow-pulse" />
      </motion.div>

      {/* Orbit paths */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Inner orbit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute w-[300px] h-[300px] rounded-full border-2 border-primary/20 border-dashed"
        />
        {/* Outer orbit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute w-[400px] h-[400px] rounded-full border-2 border-accent/20 border-dashed"
        />
      </div>

      {/* Orbiting credentials */}
      {credentials.map((credential, index) => {
        const Icon = credential.icon;
        const isOuter = index === 2;
        
        return (
          <motion.div
            key={credential.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 + index * 0.2 }}
            className={isOuter ? "animate-orbit-reverse" : "animate-orbit"}
            style={{
              position: "absolute",
              animationDelay: `${index * 2}s`,
            }}
          >
            <div className="glass-strong rounded-full p-4 shadow-lg hover:shadow-primary transition-all duration-300 cursor-pointer group">
              <Icon className={`h-6 w-6 ${credential.color} group-hover:scale-110 transition-transform`} />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-medium px-2 py-1 bg-card border border-border rounded-md whitespace-nowrap">
                  {credential.label}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, (Math.random() - 0.5) * 200],
            y: [0, (Math.random() - 0.5) * 200],
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="absolute w-1 h-1 bg-primary rounded-full"
        />
      ))}
    </div>
  );
};

export default HeroOrbit;
