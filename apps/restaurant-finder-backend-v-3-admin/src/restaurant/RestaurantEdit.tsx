import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectArrayInput,
  NumberInput,
  ReferenceArrayInput,
} from "react-admin";

import { ReservationTitle } from "../reservation/ReservationTitle";
import { ReviewTitle } from "../review/ReviewTitle";

export const RestaurantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <SelectArrayInput
          label="cuisine"
          source="cuisine"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="name" source="name" />
        <NumberInput label="rating" source="rating" />
        <ReferenceArrayInput
          source="reservations"
          reference="Reservation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="reviews"
          reference="Review"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReviewTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
