import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Loader2, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAirGate } from "@/air/AirGateProvider";
import { getVerifierId } from "@/air/programs";

interface VerifyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ruleName: string;
  requirements: Array<{
    id: string;
    name: string;
    description: string;
  }>;
  onSuccess?: () => void;
}

const VerifyModal = ({
  open,
  onOpenChange,
  ruleName,
  requirements,
  onSuccess,
}: VerifyModalProps) => {
  const { verifyCredential, isConnected, login } = useAirGate();
  const [verifying, setVerifying] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});

  const handleVerify = async () => {
    if (!isConnected) {
      await login();
      return;
    }

    setVerifying(true);
    const newResults: Record<string, boolean> = {};

    // TODO: Integrate actual verification with AIR Kit
    for (const req of requirements) {
      const programId = getVerifierId(req.id);
      const verified = await verifyCredential(programId);
      newResults[req.id] = verified;
    }

    setResults(newResults);
    setVerifying(false);

    const allPassed = Object.values(newResults).every((v) => v);
    if (allPassed && onSuccess) {
      setTimeout(() => {
        onSuccess();
        onOpenChange(false);
      }, 1500);
    }
  };

  const allVerified = requirements.every((req) => results[req.id] === true);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Verify Credentials
          </DialogTitle>
          <DialogDescription>
            Complete the following verifications to unlock access
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-4">
          <AnimatePresence mode="wait">
            {requirements.map((req, index) => {
              const status = results[req.id];
              return (
                <motion.div
                  key={req.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-gradient-card border border-border/50"
                >
                  <div className="mt-0.5">
                    {status === undefined ? (
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30" />
                    ) : status ? (
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-sm">{req.name}</h4>
                      {status !== undefined && (
                        <Badge variant={status ? "default" : "destructive"} className="text-xs">
                          {status ? "Verified" : "Failed"}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{req.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {allVerified && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 bg-accent/10 border border-accent/20 rounded-lg"
          >
            <p className="text-sm text-center font-medium text-accent">
              ✨ All credentials verified! Access granted.
            </p>
          </motion.div>
        )}

        <Button
          onClick={handleVerify}
          disabled={verifying}
          className="w-full"
          size="lg"
        >
          {verifying ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Verifying...
            </>
          ) : !isConnected ? (
            "Connect Wallet"
          ) : allVerified ? (
            "Continue"
          ) : (
            "Verify Credentials"
          )}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default VerifyModal;
