import { Inject, Injectable } from '@nestjs/common';
import { ITaskRepository } from '../tasks.repository';

@Injectable()
export class FindAllTasksUseCase {
  constructor(
    @Inject('ITaskRepository')
    private readonly taskRepo: ITaskRepository,
  ) {}

  async execute() {
    return this.taskRepo.findAll();
  }
}
