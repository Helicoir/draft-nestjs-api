import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field((type) => ID)
  id: number

  @Field()
  name: string

  @Field()
  role: 'USER' | 'ADMIN'

  @Field()
  email: string

  @Field()
  created_at: string

  @Field()
  updated_at: string
}
