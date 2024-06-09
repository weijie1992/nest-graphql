import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { UserSetting } from 'src/graphql/models/UserSetting';
import { UserSettingsResolver } from 'src/graphql/resolvers/UserSettingsResolver';
import { UserResolver } from './UserResolver';
import { UserService } from './UserService';
import { UserSettingService } from './UserSettingService';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  providers: [
    UserResolver,
    UserService,
    UserSettingService,
    UserSettingsResolver,
  ],
})
export class UsersModule {}
