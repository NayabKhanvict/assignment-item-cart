import { ItemCardProps } from "../../types";
import styles from "./ItemCard.module.scss";
import leftArrow from "../../assets/png/left-arrows.png";
import rightArrow from "../../assets/png/right-arrow.png";
import Button from "../Button";
import Title from "../Title";
import { useLayoutContext } from "../../hooks";
import { useState } from "react";

type Props = {
  phoneCatalog: ItemCardProps[] | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metaData: any;
};

const ItemCard = ({ phoneCatalog, metaData }: Props) => {
  const { addToCart, removeFromCart, cartItems } = useLayoutContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentItem = phoneCatalog && phoneCatalog[currentIndex];
  if (!currentItem) return null;
  const { images, title, price } = currentItem;
  const isItemInCart = cartItems.some((item) => item.title === title);
  console.log("images", images[0].resourceURL);
  const handleButtonClick = () => {
    if (isItemInCart) {
      removeFromCart(title);
    } else {
      addToCart({ images, title, price });
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
          <img
            src={
              "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?t=st=1734715858~exp=1734719458~hmac=6d89753bd8b180d00f8d5078c701bfe1f7fdecb81a2280eee6bb0f5a2f64bc5d&w=900.jpg"
            }
            alt="mobile image"
          />
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
          Total Price:{" "}
          <span>
            {metaData.currency_symbol}
            {price}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ItemCard;
