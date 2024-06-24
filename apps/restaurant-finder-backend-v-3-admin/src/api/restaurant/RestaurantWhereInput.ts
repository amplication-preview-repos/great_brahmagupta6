import { StringFilter } from "../../util/StringFilter";

export type RestaurantWhereInput = {
  address?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  phone?: StringFilter;
  zipCode?: StringFilter;
};
