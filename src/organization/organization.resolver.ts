import { Query, Resolver } from '@nestjs/graphql'
import { PrismaService } from 'src/prisma/prisma.service'
import { Organization } from './organization'

@Resolver((of) => Organization)
export class OrganizationResolver {
  constructor(private prisma: PrismaService) {}

  @Query((returns) => [Organization])
  async organization() {
    return this.prisma.organizations.findMany()
  }
}
