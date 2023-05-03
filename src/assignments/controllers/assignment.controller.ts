import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AssignmentService } from '../services/assignment.service';
import { Assignment } from '../assignment.entity';

@Controller('assignments')
export class AssignmentController {
  constructor(private readonly assignmentService: AssignmentService) {}

  @Get()
  async findAll(): Promise<Assignment[]> {
    return this.assignmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Assignment> {
    return this.assignmentService.findOne(id);
  }

  @Post()
  async create(@Body() assignment: Assignment): Promise<Assignment> {
    return this.assignmentService.create(assignment);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() assignment: Assignment): Promise<Assignment> {
    return this.assignmentService.update(id, assignment);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.assignmentService.delete(id);
  }
}
