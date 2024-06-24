import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

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
  author: string;
  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.Incomplete })
  status: TaskStatus;
  @Column({ type: 'timestamp', nullable: true })
  createdAt: Date;

  constructor(
    props: {
      title: string;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id ?? crypto.randomUUID();
  }
}
