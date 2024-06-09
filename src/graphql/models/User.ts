import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserSetting } from './UserSetting';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  username: string;

  @Field({ nullable: true })
  displayName?: string;

  @Field({ nullable: true })
  settings?: UserSetting;
}
