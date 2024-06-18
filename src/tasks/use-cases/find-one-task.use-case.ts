import { Inject, Injectable } from '@nestjs/common';
import { ITaskRepository } from '../tasks.repository';

@Injectable()
export class FindOneTaskUseCase {
  constructor(
    @Inject('ITaskRepository')
    private readonly taskRepo: ITaskRepository, //Repository em memoria
  ) {}

  async execute(id: string) {
    try {
      const task = await this.taskRepo.findById(id);
      this.taskRepo.findById(task.id);
      return task;
    } catch (error) {
      return error.message;
    }
  }
}
