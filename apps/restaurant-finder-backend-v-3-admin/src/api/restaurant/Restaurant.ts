import { Reservation } from "../reservation/Reservation";
import { Review } from "../review/Review";

export type Restaurant = {
  address: string | null;
  createdAt: Date;
  cuisine?: Array<"Option1">;
  id: string;
  name: string | null;
  rating: number | null;
  reservations?: Array<Reservation>;
  reviews?: Array<Review>;
  updatedAt: Date;
};
