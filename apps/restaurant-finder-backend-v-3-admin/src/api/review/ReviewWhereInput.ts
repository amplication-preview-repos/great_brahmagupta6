import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  rating?: FloatNullableFilter;
  restaurant?: RestaurantWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
