export interface userReservation {
  name: string;
  email: string;
  date: {
    mm: string;
    dd: string;
    yy: string;
  };
  time: { hh: string; mm: string; hrType: string };
  numPeople: number;
}
