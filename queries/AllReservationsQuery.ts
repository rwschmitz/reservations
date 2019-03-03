import { Query } from 'react-apollo';

type Reservations = {
  reservations: {
    id: string;
    name: string;
    hotelName: string;
    arrivalDate: string;
    depatureDate: string;
    length: number;
  };
};

/**
 * AllReservationsQuery queries the DB for all currently booked reservations.
 */

export class AllReservationsQuery extends Query<Reservations> {}
