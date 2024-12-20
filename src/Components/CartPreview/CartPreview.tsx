import { useLayoutContext } from "../../hooks";
import { useState, useRef, useEffect } from "react";
import styles from "./CartPreview.module.scss";

const CartPreview = () => {
  const { cartItems, removeFromCart } = useLayoutContext();
  const [isVisible, setIsVisible] = useState(true);
  const cartRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div ref={cartRef} className={styles.cartPreviewWrapper}>
      <h3 className={styles.cartTitle}>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p className={styles.emptyMessage}>Your cart is empty</p>
      ) : (
        <ul className={styles.cartItems}>
          {cartItems.map((item, index) => (
            <li key={index} className={styles.cartItem}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.cartImage}
              />
              <div className={styles.cartInfo}>
                <h4 className={styles.cartItemTitle}>{item.title}</h4>
                <p className={styles.cartPrice}>${item.price}</p>
              </div>
              <button
                className={styles.removeButton}
                onClick={() => removeFromCart(item.title)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPreview;
