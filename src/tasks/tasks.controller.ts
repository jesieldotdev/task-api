import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { CreateTaskUseCase } from './use-cases/create-tasks.use-case';
import { FindAllTasksUseCase } from './use-cases/find-all-tasks.use-case';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly findAllTasksUseCase: FindAllTasksUseCase,
  ) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.createTaskUseCase.execute(createTaskDto);
  }
  @Get()
  findAll() {
    return this.findAllTasksUseCase.execute();
  }
}
