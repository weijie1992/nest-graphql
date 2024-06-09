import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './graphql/models/User';
import { UserSetting } from './graphql/models/UserSetting';
import { UserSettingsResolver } from './graphql/resolvers/UserSettingsResolver';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: 'testuser',
      database: 'graphql-tutorial',
      entities: [User, UserSetting],
      synchronize: process.env.NODE_ENV === 'production' ? false : true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [UserSettingsResolver],
})
export class AppModule {}
