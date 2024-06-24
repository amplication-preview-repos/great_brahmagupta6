import { Reservation } from "../reservation/Reservation";
import { Review } from "../review/Review";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  reservations?: Array<Reservation>;
  reviews?: Array<Review>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
