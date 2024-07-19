import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/tasks.entity';
export interface ITaskRepository {
  create(task: Task): Promise<void>;
  update(task: Task): Promise<void>;
  remove(id: string): Promise<void>;
  findAll(): Promise<Task[]>;
  findById(id: string): Promise<Task>;
  findAllByAuthor(email: string): Promise<Task>;
}

@Injectable()
export class TaskTypeOrmRepository implements ITaskRepository {
  constructor(
    @InjectRepository(Task)
    private typeOrmRepo: Repository<Task>,
  ) {}

  async create(task: Task): Promise<void> {
    await this.typeOrmRepo.save(task);
  }

  async update(task: Task): Promise<void> {
    await this.typeOrmRepo.update(task.id, task);
  }
  async remove(id: string): Promise<void> {
    await this.typeOrmRepo.delete(id);
  }

  findAll(): Promise<Task[]> {
    return this.typeOrmRepo.find();
  }
  async findById(id: string): Promise<Task> {
    // const objectId = new ObjectId(id);sss
    return await this.typeOrmRepo.findOneOrFail({ where: { id: id } });
  }

  async findAllByAuthor(email: string): Promise<any> {
    // const objectId = new ObjectId(id);
    return await this.typeOrmRepo.find({ where: { author: email } });
  }
}
