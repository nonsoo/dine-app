import { FC } from "react";

import styles from "../styles/footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer_Title}>dine</p>
      <div className={styles.footer_Location}>
        <p className={styles.footer_Location_Text}>marthwaite, sedbergh</p>
        <p className={styles.footer_Location_Text}>cumbria</p>
        <p className={styles.footer_Location_Text}>+00 44 123 4567</p>
      </div>
      <div className={styles.footer_Time}>
        <p className={styles.footer_Time_Text}>open times</p>
        <p className={styles.footer_Time_Text}>mon - fri 09:00 am - 10 pm</p>
        <p className={styles.footer_Time_Text}>
          sat - sun: 09:00 am - 11:30 pm
        </p>
      </div>
    </footer>
  );
};

export default Footer;
