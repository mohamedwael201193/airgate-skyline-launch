import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lock, Unlock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import VerifyModal from "./VerifyModal";

interface PerkButtonProps {
  title: string;
  description: string;
  ruleName: string;
  requirements: Array<{
    id: string;
    name: string;
    description: string;
  }>;
  onUnlock?: () => void;
  className?: string;
  unlockText?: string;
}

const PerkButton = ({
  title,
  description,
  ruleName,
  requirements,
  onUnlock,
  className,
  unlockText = "Claim Perk",
}: PerkButtonProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  const handleSuccess = () => {
    setIsUnlocked(true);
    if (onUnlock) {
      onUnlock();
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "relative p-6 rounded-xl border transition-all duration-300",
          isUnlocked
            ? "bg-gradient-card border-accent/30 shadow-accent"
            : "bg-card border-border/50 hover:border-primary/30",
          className
        )}
      >
        {/* Unlock indicator */}
        {isUnlocked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-3 -right-3 p-2 bg-accent rounded-full shadow-accent"
          >
            <Sparkles className="h-4 w-4 text-accent-foreground" />
          </motion.div>
        )}

        <div className="space-y-4">
          {/* Header */}
          <div>
            <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
              {isUnlocked ? (
                <Unlock className="h-5 w-5 text-accent" />
              ) : (
                <Lock className="h-5 w-5 text-muted-foreground" />
              )}
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          {/* Requirements preview */}
          {!isUnlocked && (
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">
                Required credentials:
              </p>
              <div className="flex flex-wrap gap-2">
                {requirements.map((req) => (
                  <span
                    key={req.id}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {req.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action button */}
          <Button
            onClick={() => {
              if (isUnlocked && onUnlock) {
                onUnlock();
              } else {
                setShowVerifyModal(true);
              }
            }}
            variant={isUnlocked ? "default" : "outline"}
            className={cn(
              "w-full",
              isUnlocked && "shadow-accent bg-accent hover:bg-accent/90"
            )}
          >
            {isUnlocked ? unlockText : "Verify & Unlock"}
          </Button>
        </div>
      </motion.div>

      <VerifyModal
        open={showVerifyModal}
        onOpenChange={setShowVerifyModal}
        ruleName={ruleName}
        requirements={requirements}
        onSuccess={handleSuccess}
      />
    </>
  );
};

export default PerkButton;
