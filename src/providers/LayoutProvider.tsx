import { createContext, useState, ReactNode } from "react";
import { CartProps } from "../types";

export interface ILayoutContext {
  cartItems: CartProps[];
  totalCartItems: number;
  addToCart: (item: CartProps) => void;
  removeFromCart: (title: string) => void;
  clearCart: () => void;
  toggleCartVisibility: () => void;
  isCartVisible: boolean;
}

export const LayoutContext = createContext<ILayoutContext | undefined>(
  undefined
);

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartProps[]>([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (item: CartProps) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (title: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.title !== title)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };

  const totalCartItems = cartItems.length;

  const contextValue: ILayoutContext = {
    cartItems,
    totalCartItems,
    addToCart,
    removeFromCart,
    clearCart,
    toggleCartVisibility,
    isCartVisible,
  };

  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
