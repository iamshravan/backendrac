// employee.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('rac_employee') // The name of your database table
@Unique(['user_id']) // Ensures user_id is unique in the table
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  user_id: string;

  @Column({ type: 'int', nullable: true })
  city_id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  number: string;

  @Column({ type: 'enum', enum: ['general', 'corporate'], nullable: true })
  user_type: 'general' | 'corporate';

  @Column({ type: 'enum', enum: ['male', 'female', 'other'], nullable: true })
  gender: 'male' | 'female' | 'other';

  @Column({ type: 'varchar', length: 255 })
  password: string;
}
