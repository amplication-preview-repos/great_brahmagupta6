import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type RestaurantWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  rating?: FloatNullableFilter;
  reservations?: ReservationListRelationFilter;
  reviews?: ReviewListRelationFilter;
};
