import { ReservationUpdateManyWithoutRestaurantsInput } from "./ReservationUpdateManyWithoutRestaurantsInput";
import { ReviewUpdateManyWithoutRestaurantsInput } from "./ReviewUpdateManyWithoutRestaurantsInput";

export type RestaurantUpdateInput = {
  address?: string | null;
  cuisine?: Array<"Option1">;
  name?: string | null;
  rating?: number | null;
  reservations?: ReservationUpdateManyWithoutRestaurantsInput;
  reviews?: ReviewUpdateManyWithoutRestaurantsInput;
};
