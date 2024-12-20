import { useState } from "react";
import shoppingCart from "../../assets/png/shopping-cart.png";
import { useLayoutContext } from "../../hooks";
import styles from "./Header.module.scss";
import CartPreview from "../CartPreview";
const Header = () => {
  const [isCartPreview, setCartPreview] = useState(false);
  const { totalCartItems } = useLayoutContext();

  return (
    <div className={styles.headerWrapper}>
      <div
        className={styles.headerShoppingCartIcon}
        onClick={() => setCartPreview((prev) => !prev)}
      >
        {totalCartItems > 0 && (
          <span className={styles.cartItemCount}>{totalCartItems}</span>
        )}
        <img src={shoppingCart} alt="shopping cart" />
      </div>
      {isCartPreview && <CartPreview />}
    </div>
  );
};

export default Header;
