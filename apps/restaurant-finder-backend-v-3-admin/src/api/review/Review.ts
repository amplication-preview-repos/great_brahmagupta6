import { Restaurant } from "../restaurant/Restaurant";
import { User } from "../user/User";

export type Review = {
  comment: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  rating: number | null;
  restaurant?: Restaurant | null;
  updatedAt: Date;
  user?: User | null;
};
