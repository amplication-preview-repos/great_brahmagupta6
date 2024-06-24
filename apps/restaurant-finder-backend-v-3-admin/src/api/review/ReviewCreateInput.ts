import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  date?: Date | null;
  rating?: number | null;
  restaurant?: RestaurantWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
