import { Inject, Injectable } from '@nestjs/common';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { ITaskRepository } from '../tasks.repository';
import { TaskStatus } from '../entities/tasks.entity';

@Injectable()
export class UpdateTaskUseCase {
  constructor(
    @Inject('ITaskRepository')
    private readonly taskRepo: ITaskRepository, //Repository em memoria
  ) {}

  async execute(id: string, updateTaskDto: UpdateTaskDto) {
    try {
      const task = await this.taskRepo.findById(id);
      updateTaskDto.title && (task.title = updateTaskDto.title);
      task.status = updateTaskDto.status
        ? TaskStatus.Completed
        : TaskStatus.Incomplete;

      this.taskRepo.update(task);
      return task;
    } catch (error) {
      return error.message;
    }
  }
}
