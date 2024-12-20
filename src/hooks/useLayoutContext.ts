import { useContext } from "react";
import { LayoutContext, ILayoutContext } from "../providers/LayoutProvider";

const useLayoutContext = (): ILayoutContext => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  }
  return context;
};

export default useLayoutContext;
