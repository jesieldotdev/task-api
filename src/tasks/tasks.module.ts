import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/tasks.entity';
import { CreateTaskUseCase } from './use-cases/create-tasks.use-case';
import { FindAllTasksUseCase } from './use-cases/find-all-tasks.use-case';
import { TaskTypeOrmRepository } from './tasks.repository';
import { UpdateTaskUseCase } from './use-cases/update-task.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [
    CreateTaskUseCase,
    FindAllTasksUseCase,
    TaskTypeOrmRepository,
    UpdateTaskUseCase,
    {
      provide: 'ITaskRepository',
      useExisting: TaskTypeOrmRepository,
    },
  ],
})
export class TaskModule {}
