import { FC, useState } from "react";
import { userReservation } from "../../utils/types/projectTypes";

import styles from "../../styles/formRes.module.css";

const FormRes: FC = () => {
  const options = [
    {
      id: 1,
      option: "AM",
    },
    {
      id: 2,
      option: "PM",
    },
  ];

  const [reservation, setReservation] = useState<userReservation>({
    name: "",
    email: "",
    date: { mm: "", dd: "", yy: "" },
    time: { hh: "", mm: "", hrType: "AM" },
    numPeople: 1,
  });

  const onIncrement = () => {
    setReservation((prev) => {
      return { ...prev, numPeople: prev.numPeople + 1 };
    });
  };
  const onDecrement = () => {
    if (reservation.numPeople > 1) {
      setReservation((prev) => {
        return { ...prev, numPeople: prev.numPeople - 1 };
      });
    }
  };

  return (
    <form className={styles.ReservationForm}>
      <input
        type="text"
        className={styles.ReservationForm__Name}
        placeholder="Name"
        value={reservation.name}
        onChange={(e) =>
          setReservation({ ...reservation, name: e.target.value })
        }
        required
      />
      <input
        type="email"
        className={styles.ReservationForm__Email}
        placeholder="Email"
        value={reservation.email}
        onChange={(e) =>
          setReservation({ ...reservation, email: e.target.value })
        }
        required
      />
      <div className={styles.date}>
        <span className={styles.date__Title}>Pick a date</span>
        <input
          type="text"
          className={styles.date__DatePicker}
          placeholder="MM"
          maxLength={2}
          value={reservation.date.mm}
          onChange={(e) =>
            setReservation({
              ...reservation,
              date: { ...reservation.date, mm: e.target.value },
            })
          }
          required
        />
        <input
          type="text"
          className={styles.date__DatePicker}
          placeholder="DD"
          maxLength={2}
          value={reservation.date.dd}
          onChange={(e) =>
            setReservation({
              ...reservation,
              date: { ...reservation.date, dd: e.target.value },
            })
          }
          required
        />
        <input
          type="text"
          className={styles.date__DatePicker}
          placeholder="YYYY"
          maxLength={4}
          value={reservation.date.yy}
          onChange={(e) =>
            setReservation({
              ...reservation,
              date: { ...reservation.date, yy: e.target.value },
            })
          }
          required
        />
      </div>
      <div className={styles.time}>
        <span className={styles.time__Title}>Pick a time</span>
        <input
          type="text"
          className={styles.time__DatePicker}
          placeholder="00"
          maxLength={2}
          value={reservation.time.hh}
          onChange={(e) =>
            setReservation({
              ...reservation,
              time: { ...reservation.time, hh: e.target.value },
            })
          }
          required
        />
        <input
          type="text"
          className={styles.time__DatePicker}
          placeholder="00"
          maxLength={2}
          value={reservation.time.hh}
          onChange={(e) =>
            setReservation({
              ...reservation,
              time: { ...reservation.time, hh: e.target.value },
            })
          }
          required
        />
        <select
          className={styles.time__DatePicker}
          onChange={(e) =>
            setReservation({
              ...reservation,
              time: { ...reservation.time, hrType: e.target.value },
            })
          }
        >
          {options.map((option) => (
            <option key={option.id} value={option.option}>
              {option.option}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.numPeople}>
        <p className={styles.numPeople__Measure} onClick={() => onDecrement()}>
          -
        </p>
        <p className={styles.numPeople__Count}>
          {reservation.numPeople === 1
            ? `${reservation.numPeople} person`
            : `${reservation.numPeople} people`}
        </p>
        <p className={styles.numPeople__Measure} onClick={() => onIncrement()}>
          +
        </p>
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
