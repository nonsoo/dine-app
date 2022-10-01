import { FC } from "react";
import Image, { StaticImageData } from "next/image";

import styles from "../styles/comps/midsection.module.css";

interface Props {
  subHeader: string;
  description: string;
  imgTitle: StaticImageData;
  switched: boolean;
}

const midSection: FC<Props> = ({
  subHeader,
  description,
  imgTitle,
  switched,
}) => {
  return (
    <div className={styles.midSection}>
      <div className={`${styles.ImgCon} ${switched ? styles.switched : ""}`}>
        <Image src={imgTitle} alt="FarmImg" layout="fill" objectFit="cover" />
      </div>

      <div className={styles.midSection__Text}>
        <p className={styles.midSection__Text__SubHeader}>{subHeader}</p>
        <p className={styles.midSection__Text__Description}>{description}</p>
      </div>
    </div>
  );
};

export default midSection;
