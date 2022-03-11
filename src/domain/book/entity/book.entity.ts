import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AuthorEntity } from '../../author/entity/author.entity';

@Entity()
export class BookEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  release_date: Date;

  @ManyToOne(() => AuthorEntity, (author) => author.books, {
    cascade: ['insert'],
    eager: true,
  })
  author: AuthorEntity;
}
