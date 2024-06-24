import { ReservationCreateNestedManyWithoutUsersInput } from "./ReservationCreateNestedManyWithoutUsersInput";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  reservations?: ReservationCreateNestedManyWithoutUsersInput;
  reviews?: ReviewCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
