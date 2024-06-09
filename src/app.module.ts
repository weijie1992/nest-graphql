import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './graphql/resolvers/UserResolver';
import { UserSettingsResolver } from './graphql/resolvers/UserSettingsResolver';

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
      entities: [],
      synchronize: process.env.NODE_ENV === 'development' ? true : false,
    }),
  ],
  controllers: [],
  providers: [UserResolver, UserSettingsResolver],
})
export class AppModule {}
