import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { ITaskRepository } from '../tasks.repository';
import { CreateTaskDto } from '../dto/create-task.dto';
import { Task, TaskStatus } from '../entities/tasks.entity';

@Injectable()
export class CreateTaskUseCase {
  constructor(
    @Inject('ITaskRepository')
    private readonly taskRepo: ITaskRepository, //Repository em memoria
  ) {}

  async execute(input: CreateTaskDto) {
    const task = new Task(input);

    if (input.status) {
      task.status = TaskStatus.Completed;
    }
    if (input.createdAt) {
      task.createdAt = input.createdAt;
    }
    // project.started_at = new Date();
    // return this.serviceRepo.save(service);
    await this.taskRepo.create(task);
    return task;
  }
}
