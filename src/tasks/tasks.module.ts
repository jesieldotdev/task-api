import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/tasks.entity';
import { CreateTaskUseCase } from './use-cases/create-tasks.use-case';
import { FindAllTasksUseCase } from './use-cases/find-all-tasks.use-case';
import { TaskTypeOrmRepository } from './tasks.repository';
import { UpdateTaskUseCase } from './use-cases/update-task.use-case';
import { FindOneTaskUseCase } from './use-cases/find-one-task.use-case';
import { RemoveTaskUseCase } from './use-cases/remove-task.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [
    CreateTaskUseCase,
    FindAllTasksUseCase,
    FindOneTaskUseCase,
    TaskTypeOrmRepository,
    UpdateTaskUseCase,
    RemoveTaskUseCase,
    {
      provide: 'ITaskRepository',
      useExisting: TaskTypeOrmRepository,
    },
  ],
})
export class TaskModule {}
