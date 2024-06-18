import { PartialType } from '@nestjs/mapped-types';
import { TaskStatus } from '../entities/tasks.entity';

class _UpdateTaskDTO {
  title: string;
  status: boolean;
}

export class UpdateTaskDto extends PartialType(_UpdateTaskDTO) {}
