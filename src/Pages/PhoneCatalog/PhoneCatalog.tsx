import { useEffect, useState } from "react";
import { ItemCard, HomeLayout } from "../../Components";
import { ItemCardProps } from "../../types";
import styles from "./PhoneCatalog.module.scss";
import { fetchPhones } from "../../lib/axios/api";

const PhoneCatalog = () => {
  const [phones, setPhones] = useState<ItemCardProps[] | null>(null);
  const [metadata, setMetadata] = useState(null);
  // const phoneCatalog: ItemCardProps[] = [
  //   {
  //     image: "src/assets/png/mobile-image-4.png",
  //     title: "iPhone 15",
  //     price: "1299",
  //   },
  //   {
  //     image: "src/assets/png/mobile-image-2.png",
  //     title: "Samsung Galaxy Z Fold6",
  //     price: "899",
  //   },
  //   {
  //     image: "src/assets/png/mobile-image-3.png",
  //     title: "Realme 14x 5G",
  //     price: "999",
  //   },
  //   {
  //     image: "src/assets/png/mobile-image-1.png",
  //     title: "Google Pixel 9 Pro Fold",
  //     price: "1299",
  //   },
  // ];
  const fetchPhonesData = async () => {
    try {
      const data = await fetchPhones();
      setPhones(data.data.phones);
      setMetadata(data.metadata);
    } catch (err) {
      console.error(err);
    }
  };
  console.log("metadata", metadata);

  useEffect(() => {
    fetchPhonesData();
  }, []);

  return (
    <HomeLayout>
      <div className={styles.phoneCatalogWrapper}>
        <ItemCard phoneCatalog={phones} metaData={metadata} />
      </div>
    </HomeLayout>
  );
};

export default PhoneCatalog;
