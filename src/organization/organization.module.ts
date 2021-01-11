import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrganizationResolver } from './organization.resolver';

@Module({
  providers: [OrganizationResolver, PrismaService]
})
export class OrganizationModule {}
