import { FC } from "react";

import styles from "../../styles/formRes.module.css";

const FormRes: FC = () => {
  return (
    <form className={styles.ReservationForm}>
      <input
        type="text"
        className={styles.ReservationForm__Name}
        placeholder="Name"
        required
      />
      <input
        type="email"
        className={styles.ReservationForm__Email}
        placeholder="Email"
        required
      />
      <div className={styles.date}>
        <span className={styles.date__Title}>Pick a date</span>
        <input
          type="text"
          className={styles.date__DatePicker}
          placeholder="MM"
          required
        />
        <input
          type="text"
          className={styles.date__DatePicker}
          placeholder="DD"
          required
        />
        <input
          type="text"
          className={styles.date__DatePicker}
          placeholder="YYYY"
          required
        />
      </div>
      <div className={styles.time}>
        <span className={styles.time__Title}>Pick a time</span>
        <input
          type="text"
          className={styles.time__DatePicker}
          placeholder="00"
          required
        />
        <input
          type="text"
          className={styles.time__DatePicker}
          placeholder="00"
          required
        />
      </div>
      <div className={styles.numPeople}>
        <p className={styles.numPeople__Measure}>-</p>
        <p className={styles.numPeople__Count}>2 People</p>
        <p className={styles.numPeople__Measure}>+</p>
      </div>

      <input
        type="submit"
        value="Book Reservation"
        className={styles.ReservationForm__submit}
      />
    </form>
  );
};

export default FormRes;
