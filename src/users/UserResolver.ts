import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
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
    return this.userService.getUsersById(id);
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
