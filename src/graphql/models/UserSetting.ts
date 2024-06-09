import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_settings' })
@ObjectType()
export class UserSetting {
  @PrimaryColumn() //does not need to auto generate
  @Field(() => Int)
  userId: number;

  @Column()
  @Field({ defaultValue: false })
  receiveNotifications: boolean;

  @Column()
  @Field({ defaultValue: false })
  receiveEmails: boolean;
}
