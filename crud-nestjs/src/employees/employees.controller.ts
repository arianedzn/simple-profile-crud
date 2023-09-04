import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from 'src/schemas/employee.schema';

@Controller('api/employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post('add')
  async create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    return this.employeesService.create(
      createEmployeeDto.empFirstName,
      createEmployeeDto.empLastName,
      createEmployeeDto.empStreetAddress,
      createEmployeeDto.empCity,
      createEmployeeDto.empCountry,
      createEmployeeDto.empZipCode,
      createEmployeeDto.empAreaCode,
      createEmployeeDto.empPhoneNumber,
      createEmployeeDto.empBirthDate
      );
  }

  @Get('all')
  async findAll(): Promise<Employee[]> {
    return this.employeesService.findAll();
  }

  @Get(':employeeId')
  async findOne(@Param('employeeId') employeeId: string): Promise<Employee> {
    return this.employeesService.findOne(employeeId);
  }

  @Patch(':employeeId')
  async updateEmployee(@Param('employeeId') employeeId: string, @Body() updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
      return this.employeesService.updateEmployee(employeeId, updateEmployeeDto);
  }

  // @Patch(':employeeId')
  // async update(@Param('employeeId') employeeId: number, @Body() updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
  //   return this.employeesService.update(employeeId, updateEmployeeDto);
  // }

  @Delete(':employeeId')
  async remove(@Param('employeeId') employeeId: string): Promise<Employee> {
    return this.employeesService.remove(employeeId);
  }
}