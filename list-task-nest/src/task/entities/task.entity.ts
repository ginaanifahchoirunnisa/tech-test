import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity("task")
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 120, name: 'tasklist_name' })
  tasklist_name: string;

  @Column({ type: 'varchar', length: 255, name: 'task_desc' })
  task_desc: string;

  @CreateDateColumn({ type: 'date', name: 'created_date' })
  created_date: Date;

  @UpdateDateColumn({ type: 'date', name: 'updated_date' })
  updated_date: Date;

  @Column({ type: 'timestamp', name: 'deadline' })
  deadline: Date;

  @Column({ type: 'int', name: 'task_status' })
  task_status: number;
}
