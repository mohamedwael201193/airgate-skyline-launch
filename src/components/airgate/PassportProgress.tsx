import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Credential {
  id: string;
  name: string;
  status: "verified" | "pending" | "failed";
}

interface PassportProgressProps {
  credentials: Credential[];
  className?: string;
}

const PassportProgress = ({ credentials, className }: PassportProgressProps) => {
  const verified = credentials.filter((c) => c.status === "verified").length;
  const total = credentials.length;
  const progress = (verified / total) * 100;

  const getStatusColor = () => {
    if (progress === 100) return "bg-accent";
    if (progress >= 50) return "bg-yellow-500";
    return "bg-destructive";
  };

  const getStatusText = () => {
    if (progress === 100) return "Complete";
    if (progress >= 50) return "In Progress";
    return "Not Started";
  };

  const getStatusBadgeColor = () => {
    if (progress === 100) return "bg-accent/20 text-accent border-accent/30";
    if (progress >= 50) return "bg-yellow-500/20 text-yellow-600 border-yellow-500/30";
    return "bg-destructive/20 text-destructive border-destructive/30";
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-sm">Credential Passport</h3>
        <span
          className={cn(
            "text-xs px-2 py-1 rounded-full border font-medium",
            getStatusBadgeColor()
          )}
        >
          {getStatusText()}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>
            {verified} of {total} verified
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn("h-full transition-colors", getStatusColor())}
          />
        </div>
      </div>

      {/* Credential List */}
      <div className="space-y-2">
        {credentials.map((credential, index) => (
          <motion.div
            key={credential.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-2 text-sm"
          >
            <div
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                credential.status === "verified" && "bg-accent",
                credential.status === "pending" && "bg-yellow-500",
                credential.status === "failed" && "bg-destructive"
              )}
            />
            <span
              className={cn(
                "text-xs",
                credential.status === "verified" && "text-foreground",
                credential.status === "pending" && "text-muted-foreground",
                credential.status === "failed" && "text-destructive"
              )}
            >
              {credential.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PassportProgress;
