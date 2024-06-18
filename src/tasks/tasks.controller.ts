import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { CreateTaskUseCase } from './use-cases/create-tasks.use-case';
import { FindAllTasksUseCase } from './use-cases/find-all-tasks.use-case';
import { UpdateTaskDto } from './dto/update-task.dto';
import { UpdateTaskUseCase } from './use-cases/update-task.use-case';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly findAllTasksUseCase: FindAllTasksUseCase,
    private readonly updateTaskUseCase: UpdateTaskUseCase,
  ) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.createTaskUseCase.execute(createTaskDto);
  }
  @Get()
  findAll() {
    return this.findAllTasksUseCase.execute();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.updateTaskUseCase.execute(id, updateTaskDto);
  }
}
