import { PartialType } from '@nestjs/mapped-types';

class _UpdateTaskDTO {
  title: string;
  description: string;
  status: boolean;
  startDate: Date;
  endDate: Date;
  tags: string[];
}

export class UpdateTaskDto extends PartialType(_UpdateTaskDTO) {}
