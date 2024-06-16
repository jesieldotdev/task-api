import { Inject, Injectable } from '@nestjs/common';
import { ITaskRepository } from '../tasks.repository';

@Injectable()
export class FindAllTasksUseCase {
  constructor(
    @Inject('ITaskRepository')
    private readonly taskRepo: ITaskRepository, //Repository em memoria
  ) {}

  async execute() {
    return this.taskRepo.findAll();
  }
}
