import { ReservationUpdateManyWithoutUsersInput } from "./ReservationUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  reservations?: ReservationUpdateManyWithoutUsersInput;
  reviews?: ReviewUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
