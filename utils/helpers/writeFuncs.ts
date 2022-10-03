import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

import { userReservation } from "../types/projectTypes";

export const createReservation = async (reservation: userReservation) => {
  const createRes = await addDoc(collection(db, "reservations"), {
    name: reservation.name,
    email: reservation.email,
    date: `${reservation.date.mm}/${reservation.date.dd}/${reservation.date.yy}`,
    time: `${reservation.time.hh}:${reservation.time.mm} ${reservation.time.hrType}`,
    numPeople: reservation.numPeople,
  });

  return createRes;
};
