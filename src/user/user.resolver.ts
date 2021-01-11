import { Query, Resolver } from '@nestjs/graphql'
import { PrismaService } from 'src/prisma/prisma.service'
import { User } from './user'

@Resolver((of) => User)
export class UserResolver {
  constructor(private prisma: PrismaService) {}
  
  @Query((returns) => [User])
  async users() {
    return this.prisma.user.findMany()
  }
}
