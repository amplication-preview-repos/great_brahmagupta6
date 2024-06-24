import { Restaurant } from "../restaurant/Restaurant";
import { User } from "../user/User";

export type Reservation = {
  createdAt: Date;
  date: Date | null;
  id: string;
  numberOfPeople: number | null;
  restaurant?: Restaurant | null;
  updatedAt: Date;
  user?: User | null;
};
