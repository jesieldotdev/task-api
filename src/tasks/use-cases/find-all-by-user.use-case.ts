import { Inject, Injectable } from '@nestjs/common';
import { ITaskRepository } from '../tasks.repository';

@Injectable()
export class FindAllTasksByAuthorUseCase {
  constructor(
    @Inject('ITaskRepository')
    private readonly taskRepo: ITaskRepository,
  ) {}

  async execute(email: string) {
    try {
      const task = await this.taskRepo.findAllByAuthor(email);
      this.taskRepo.findAllByAuthor(task.author);
      return task;
    } catch (error) {
      return error.message;
    }
  }
}
