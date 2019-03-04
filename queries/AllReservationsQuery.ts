import { Query } from 'react-apollo';

type Reservation = {
  id: string;
  name: string;
  hotelName: string;
  arrivalDate: string;
  depatureDate: string;
  length: number;
};

type Reservations = {
  reservations: Reservation[];
};

export { Reservation, Reservations };

/**
 * AllReservationsQuery queries the DB for all currently booked reservations.
 */

export class AllReservationsQuery extends Query<Reservations> {}
