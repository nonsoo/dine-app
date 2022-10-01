import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../../styles/comps/sampleHighlight.module.css";

interface Props {
  headerTitle: string;
  description: string;
  imgTitle: StaticImageData;
}

const sampleHighlight: FC<Props> = ({ headerTitle, description, imgTitle }) => {
  return (
    <div className={styles.sampleHighlight}>
      <div className={styles.ImgCon}>
        <Image src={imgTitle} alt="FarmImg" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.sampleHighlight_Text}>
        <p className={styles.sampleHighlight_Text_Header}>{headerTitle}</p>
        <p className={styles.sampleHighlight_Text_Description}>{description}</p>
      </div>
    </div>
  );
};

export default sampleHighlight;
