import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Organization {
  @Field((type) => ID)
  id: number

  @Field()
  title: string

  @Field()
  bio?: string

  @Field()
  owner_user_id?: number

  @Field()
  created_at: string

  @Field()
  updated_at: string
}
