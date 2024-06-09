import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { User } from '../models/User';
import { UserSetting } from '../models/UserSetting';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((u) => u.id === id);
  }

  @Query(() => [User])
  getUsers() {
    return mockUsers;
  }

  @ResolveField(() => UserSetting, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    console.log('user', user);
    return mockUserSettings.find((setting) => setting.userId === user.id);
  }
}
