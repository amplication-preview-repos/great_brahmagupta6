import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  restaurantId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
