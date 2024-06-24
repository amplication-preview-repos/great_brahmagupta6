import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReservationWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  numberOfPeople?: IntNullableFilter;
  restaurant?: RestaurantWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
