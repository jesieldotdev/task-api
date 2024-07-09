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

    if (input.tags) {
      task.tags = input.tags;
    }

    if (input.status) {
      task.status = TaskStatus.Incomplete;
    }
    if (input.author) {
      task.author = input.author;
    }
    if (input.startDate) {
      task.startDate = input.startDate;
    }
    if (input.endDate) {
      task.endDate = input.endDate;
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
