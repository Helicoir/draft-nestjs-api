import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserService } from './user/user.service'
import { UserController } from './user/user.controller'
import { UserModule } from './user/user.module'

import { GraphQLModule } from '@nestjs/graphql'
import { PrismaService } from './prisma/prisma.service';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.graphql',
    }),
    UserModule,
    OrganizationModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, PrismaService],
})
export class AppModule {}
