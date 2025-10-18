import { createContext, useContext, ReactNode, useState } from "react";
import { airConfig } from "./programs";

/**
 * AirGate Context Provider
 * Manages AIR Kit integration state and services
 */

interface AirGateContextType {
  isConnected: boolean;
  isLoading: boolean;
  userAddress: string | null;
  login: () => Promise<void>;
  logout: () => void;
  verifyCredential: (programId: string) => Promise<boolean>;
  checkRule: (ruleName: string) => Promise<boolean>;
}

const AirGateContext = createContext<AirGateContextType | undefined>(undefined);

export const useAirGate = () => {
  const context = useContext(AirGateContext);
  if (!context) {
    throw new Error("useAirGate must be used within AirGateProvider");
  }
  return context;
};

interface AirGateProviderProps {
  children: ReactNode;
}

export const AirGateProvider = ({ children }: AirGateProviderProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userAddress, setUserAddress] = useState<string | null>(null);

  const login = async () => {
    setIsLoading(true);
    try {
      // TODO: Integrate @mocanetwork/airkit here
      // TODO: Call service.login() for AIR Account
      console.log("AIR Config:", airConfig);
      
      // Simulate login for demo
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsConnected(true);
      setUserAddress("0x1234...5678");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    // TODO: Call service.logout()
    setIsConnected(false);
    setUserAddress(null);
  };

  const verifyCredential = async (programId: string): Promise<boolean> => {
    // TODO: Use service.verifyCredential() with program ID
    console.log("Verifying credential:", programId);
    
    // Simulate verification
    await new Promise((resolve) => setTimeout(resolve, 500));
    return Math.random() > 0.3; // Random result for demo
  };

  const checkRule = async (ruleName: string): Promise<boolean> => {
    // TODO: Implement rule checking with AIR Kit
    console.log("Checking rule:", ruleName);
    
    // Simulate rule check
    await new Promise((resolve) => setTimeout(resolve, 500));
    return Math.random() > 0.5; // Random result for demo
  };

  return (
    <AirGateContext.Provider
      value={{
        isConnected,
        isLoading,
        userAddress,
        login,
        logout,
        verifyCredential,
        checkRule,
      }}
    >
      {children}
    </AirGateContext.Provider>
  );
};
