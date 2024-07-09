export class CreateTaskDto {
  title: string;
  description: string;
  status: boolean;
  tags: string[];
  author: string;
  createdAt: Date;
  startDate: Date;
  endDate: Date;
}
