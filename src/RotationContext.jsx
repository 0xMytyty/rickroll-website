import { createContext, useContext, useState } from "react";

const RotationContext = createContext();

export const RotationProvider = ({ children }) => {
  const [rotate, setRotate] = useState(false);

  return (
    <RotationContext.Provider value={{ rotate, setRotate }}>
      {children}
    </RotationContext.Provider>
  );
};

export const useRotation = () => {
  return useContext(RotationContext);
};
