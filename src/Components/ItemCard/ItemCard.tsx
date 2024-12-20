import { ItemCardProps } from "../../types";
import styles from "./ItemCard.module.scss";
import leftArrow from "../../assets/png/left-arrows.png";
import rightArrow from "../../assets/png/right-arrow.png";
import Button from "../Button";
import Title from "../Title";
import { useLayoutContext } from "../../hooks";
import { useState } from "react";

type Props = {
  phoneCatalog: ItemCardProps[];
};

const ItemCard = ({ phoneCatalog }: Props) => {
  const { addToCart, removeFromCart, cartItems } = useLayoutContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentItem = phoneCatalog[currentIndex];
  const { image, title, price } = currentItem;

  const isItemInCart = cartItems.some((item) => item.title === title);

  const handleButtonClick = () => {
    if (isItemInCart) {
      removeFromCart(title);
    } else {
      addToCart({ image, title, price });
    }
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % phoneCatalog.length);
  };

  const handlePreviousClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + phoneCatalog.length) % phoneCatalog.length
    );
  };

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cartImageGallery}>
        <div
          className={styles.cartLeftArrow}
          onClick={handlePreviousClick}
          role="button"
          tabIndex={0}
        >
          <img src={leftArrow} alt="left arrow" />
        </div>
        <div className={styles.cartMobileImage}>
          <img src={image} alt="mobile image" />
        </div>
        <div
          className={styles.cartRightArrow}
          onClick={handleNextClick}
          role="button"
          tabIndex={0}
        >
          <img src={rightArrow} alt="right arrow" />
        </div>
      </div>
      <div className={styles.cartInfo}>
        <Title weight="semibold">{title}</Title>
        <div className={styles.cartButtons}>
          <Button size="medium" onClick={handleButtonClick}>
            {isItemInCart ? "Remove from Cart" : "Add to Cart"}
          </Button>
        </div>
        <span className={styles.cartPrice}>
          Total Price: <span>${price}</span>
        </span>
      </div>
    </div>
  );
};

export default ItemCard;
