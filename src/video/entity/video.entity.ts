import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/*
The Entity decorator is to create the Database schema 
for all classes decorated with it, 
and Repository can be retrieved and used for it.

엔티티에게는 언제나 식별자가 필요하다!
*/

// id, title, description, url, source, createdAt, updatedAt, deletedAt, thumbnail
@Entity()
export class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @Column()
  source: string;

  @Column()
  thumbnail: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;
}
