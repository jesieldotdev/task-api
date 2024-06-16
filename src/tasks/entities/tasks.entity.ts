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
  @Column({ type: 'simple-enum' })
  status: TaskStatus = TaskStatus.Incomplete;

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
