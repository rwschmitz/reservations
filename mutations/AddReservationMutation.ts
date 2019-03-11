import { Mutation } from 'react-apollo';

type createReservation = {
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
};

/**
 * AddReservationMutation posts to the DB with the user's reservation.
 */
export class AddReservationMutation extends Mutation<createReservation> {}
