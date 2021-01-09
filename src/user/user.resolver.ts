import { Query, Resolver } from '@nestjs/graphql'
import { User } from './user'

const UserTable = [
  { id: 1, title: 'john', age: 20 },
  { id: 2, title: 'taro', age: 20 },
  { id: 3, title: 'smith', age: 20 },
]

@Resolver('user')
export class UserResolver {
  @Query((returns) => [User])
  async User() {
    return UserTable
  }
}
