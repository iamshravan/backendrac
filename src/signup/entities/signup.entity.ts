import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rac_login')
export class Signup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type:'varchar',length: 255 })
  username: string;

  @Column({ type:'varchar',length: 255 })
  password: string;

  @Column({ type: 'datetime' })
  lastlogin: Date;  
}
