import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field((type) => ID)
  id: string

  @Field()
  title: string

  @Field({ nullable: true })
  age: number
}