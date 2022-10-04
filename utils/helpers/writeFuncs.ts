import { db } from "../config/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import { userReservation } from "../types/projectTypes";

export const createReservation = async (reservation: userReservation) => {
  const createRes = await addDoc(collection(db, "reservations"), {
    name: reservation.name,
    email: reservation.email,
    reservationDate: `${reservation.date.mm}/${reservation.date.dd}/${reservation.date.yy}`,
    reservationDime: `${reservation.time.hh}:${reservation.time.mm} ${reservation.time.hrType}`,
    numPeople: reservation.numPeople,
    timestamp: Timestamp.fromDate(new Date()),
  });

  return createRes;
};
