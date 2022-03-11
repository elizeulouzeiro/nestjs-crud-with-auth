import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BookEntity } from '../../book/entity/book.entity';

@Entity()
export class AuthorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => BookEntity, (book) => book.author, {
    cascade: ['remove'],
  })
  books: BookEntity[];
}
