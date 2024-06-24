import { ReservationCreateNestedManyWithoutRestaurantsInput } from "./ReservationCreateNestedManyWithoutRestaurantsInput";
import { ReviewCreateNestedManyWithoutRestaurantsInput } from "./ReviewCreateNestedManyWithoutRestaurantsInput";

export type RestaurantCreateInput = {
  address?: string | null;
  cuisine?: Array<"Option1">;
  name?: string | null;
  rating?: number | null;
  reservations?: ReservationCreateNestedManyWithoutRestaurantsInput;
  reviews?: ReviewCreateNestedManyWithoutRestaurantsInput;
};
