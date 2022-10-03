import type { NextPage } from "next";
import HeadMeta from "../Components/HeadComp/HeadMeta";
import FormComp from "../Components/reservation/form";

import styles from "../styles/Reservation.module.css";

const Reservation: NextPage = () => {
  return (
    <>
      <HeadMeta title="Reservation | dine" description="Reservation page" />

      <header className={styles.header}>
        <p className={styles.header_Title}>dine</p>
        <p className={styles.header_Sub_Title}>Reservations</p>
        <p className={styles.header_Description}>
          You can not wait to book. If you have any special requirements, please
          feel free to contact us. We will be happy to accommodate you
        </p>
      </header>

      <main className={styles.FormContainer}>
        <FormComp />
      </main>
    </>
  );
};

export default Reservation;
