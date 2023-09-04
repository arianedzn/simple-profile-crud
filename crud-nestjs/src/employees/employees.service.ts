import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from 'src/schemas/employee.schema';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
    ) {}

  // async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    // const createdEmployee = this.employeeModel.create(createEmployeeDto);
    // return createdEmployee;
    async create(
      empFirstName: string,
      empLastName: string,
      empStreetAddress: string,
      empCity: string,
      empCountry: string,
      empZipCode: number,
      empAreaCode: number,
      empPhoneNumber: number,
      empBirthDate: string
    ): Promise<Employee> {
      return this.employeeModel.create({
        employeeId: uuidv4(),
        empFirstName,
        empLastName,
        empStreetAddress,
        empCity,
        empCountry,
        empZipCode,
        empAreaCode,
        empPhoneNumber,
        empBirthDate
      })
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find({});
  }

  async findOne(employeeId: string): Promise<Employee> {
    return this.employeeModel.findOne({ employeeId })
  }

  async updateEmployee(employeeId: string, employeeUpdates: UpdateEmployeeDto): Promise<Employee> {
    return this.employeeModel.findOneAndUpdate({ employeeId }, employeeUpdates);
}
  // async update(employeeId: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
  //   return this.employeeModel.update({ employeeId }, updateEmployeeDto);
  // }

  async remove(employeeId: string): Promise<Employee> {
    return this.employeeModel.remove({ employeeId })
  }
}
