import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  numberOfPeople?: SortOrder;
  restaurantId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
