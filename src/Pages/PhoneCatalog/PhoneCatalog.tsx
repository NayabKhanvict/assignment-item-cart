import { ItemCard, HomeLayout } from "../../Components";
import { ItemCardProps } from "../../types";
import styles from "./PhoneCatalog.module.scss";

const PhoneCatalog = () => {
  const phoneCatalog: ItemCardProps[] = [
    {
      image: "src/assets/png/mobile-image-4.png",
      title: "iPhone 15",
      price: "1299",
    },
    {
      image: "src/assets/png/mobile-image-2.png",
      title: "Samsung Galaxy Z Fold6",
      price: "899",
    },
    {
      image: "src/assets/png/mobile-image-3.png",
      title: "Realme 14x 5G",
      price: "999",
    },
    {
      image: "src/assets/png/mobile-image-1.png",
      title: "Google Pixel 9 Pro Fold",
      price: "1299",
    },
  ];
  return (
    <HomeLayout>
      <div className={styles.phoneCatalogWrapper}>
        <ItemCard phoneCatalog={phoneCatalog} />
      </div>
    </HomeLayout>
  );
};

export default PhoneCatalog;
