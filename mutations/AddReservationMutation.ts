import { Mutation } from 'react-apollo';

type createReservation = {
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
};

/**
 * AddReservationMutation queries the DB for all currently booked reservations.
 */
export class AddReservationMutation extends Mutation<createReservation> {}
