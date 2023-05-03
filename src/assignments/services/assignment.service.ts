import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Assignment } from '../assignment.entity';

@Injectable()
export class AssignmentService {
  constructor(
    @InjectRepository(Assignment)
    private readonly assignmentRepository: Repository<Assignment>,
  ) {}

  async findAll(): Promise<Assignment[]> {
    return this.assignmentRepository.find();
  }

  async findOne(id: number): Promise<Assignment> {
    return this.assignmentRepository.findOneBy({ id: id });
  }

  async create(assignment: Assignment): Promise<Assignment> {
    return this.assignmentRepository.save(assignment);
  }

  async update(id: number, assignment: Assignment): Promise<Assignment> {
    await this.assignmentRepository.update(id, assignment);
    return this.assignmentRepository.findOneBy({ id: id });
  }

  async delete(id: number): Promise<void> {
    await this.assignmentRepository.delete(id);
  }
}
