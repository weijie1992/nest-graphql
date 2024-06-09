import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';

@Resolver()
export class UserSettingsResolver {
  @Mutation(() => UserSetting)
  createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: CreateUserSettingsInput,
  ) {
    console.log(
      '🚀 ~ UserSettingsResolver ~ createUserSettingsData:',
      createUserSettingsData,
    );
    mockUserSettings.push(createUserSettingsData);
    return createUserSettingsData;
  }
}
