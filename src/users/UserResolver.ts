import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { User } from '../graphql/models/User';
import { UserSetting } from '../graphql/models/UserSetting';
import { CreateUserInput } from '../graphql/utils/CreateUserInput';
import { UserService } from './UserService';

export const incrementalId = 3;

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((u) => u.id === id);
  }

  @Query(() => [User])
  getUsers() {
    return this.userService.getUsers();
  }

  @ResolveField(() => UserSetting, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    console.log('user', user);
    return mockUserSettings.find((setting) => setting.userId === user.id);
  }

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput) {
    return this.userService.createUser(createUserData);
  }
}
