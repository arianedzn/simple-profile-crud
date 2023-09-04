import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type EmployeeDocument = HydratedDocument<Employee>;

@Schema()
export class Employee {
  @Prop()
  employeeId: string;

  @Prop()
  empFirstName: string;                 

  @Prop()
  empLastName: string;

  @Prop()
  empStreetAddress: string;

  @Prop()
  empCity: string;

  @Prop()
  empCountry: string;

  @Prop()
  empZipCode: number;

  @Prop()
  empAreaCode: number;

  @Prop()
  empPhoneNumber: number;

  @Prop()
  empBirthDate: string;

}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);