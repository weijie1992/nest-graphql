import { Field, Int, ObjectType } from '@nestjs/graphql';
import { DateTransformer } from 'src/helper/date-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserSetting } from './UserSetting';

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  username: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  displayName?: string;

  @Column({ nullable: true, transformer: new DateTransformer() })
  @Column({ nullable: true })
  @Field({ nullable: true })
  birthDate?: Date;

  @OneToOne(() => UserSetting)
  @JoinColumn()
  @Field({ nullable: true })
  settings?: UserSetting;
}
