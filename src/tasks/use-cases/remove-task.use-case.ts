import { Inject, Injectable } from '@nestjs/common';
import { ITaskRepository } from '../tasks.repository';

@Injectable()
export class RemoveTaskUseCase {
  constructor(
    @Inject('ITaskRepository')
    private readonly taskRepo: ITaskRepository, //Repository em memoria
  ) {}

  async execute(id: string) {
    try {
      return await this.taskRepo.remove(id);
    } catch (error) {
      return error.message;
    }
  }
}