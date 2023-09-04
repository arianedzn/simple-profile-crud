import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
    empFirstName: string;
    empLastName: string;
    empStreetAddress: string;
    empCity: string;
    empState: string;
    empZipCode: number;
    empAreaCode: number;
    empPhoneNumber: number;
    empBirthDate: string;
}
