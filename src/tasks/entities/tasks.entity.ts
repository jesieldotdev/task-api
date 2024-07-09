import { Column, Entity, PrimaryColumn } from 'typeorm';

export enum TaskStatus {
  Completed = 'completed',

  Incomplete = 'incomplete',
}

@Entity()
export class Task {
  @PrimaryColumn()
  id: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  author: string;
  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.Incomplete })
  status: TaskStatus;
  @Column({ type: 'timestamp', nullable: true })
  createdAt: Date;
  @Column({ type: 'timestamp', nullable: true })
  startDate: Date;
  @Column({ type: 'timestamp', nullable: true })
  endDate: Date;
  @Column('text', { array: true })
  tags: string[];

  constructor(
    props: {
      title: string;
      description: string;
      author: string;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id ?? crypto.randomUUID();
  }
}
