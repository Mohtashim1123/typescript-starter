import { Entity, Column, PrimaryGeneratedColumn, EntitySchema, EntitySchemaEmbeddedColumnOptions } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({unique: true})
  email: string;

  @Column()
  creatPassword: string;
}
