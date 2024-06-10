import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UserSetting } from 'src/graphql/models/UserSetting';
import { User } from '../graphql/models/User';
import { CreateUserInput } from '../graphql/utils/CreateUserInput';
import { UserService } from './UserService';
import { UserSettingService } from './UserSettingService';

export const incrementalId = 3;

@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private userSettingsService: UserSettingService,
  ) {}

  @Query(() => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUsersById(id);
  }

  @Query(() => [User])
  getUsers() {
    return this.userService.getUsers();
  }

  @Query(() => User, { nullable: true })
  getUserByBirthDate(@Args('birthDate', { type: () => Date }) birthDate: Date) {
    return this.userService.getUserByBirthDate(birthDate);
  }

  @ResolveField(() => UserSetting, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    return this.userSettingsService.getUserSettingById(user.id);
  }

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput) {
    return this.userService.createUser(createUserData);
  }
}
