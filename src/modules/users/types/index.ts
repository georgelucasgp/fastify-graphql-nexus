import { inputObjectType, objectType } from 'nexus'
import { Users } from '../../../generated/nexus-prisma'

export const user = objectType({
  name: Users.$name,
  description: Users.$description,
  definition(t) {
    t.field(Users.id)
    t.field(Users.name)
    t.field(Users.function)
    t.field(Users.cpf)
    t.field(Users.email)
    t.field(Users.password)
    t.field(Users.createdAt)
    t.field(Users.updatedAt)
    t.string('token')
  },
})

export const userCreateInput = inputObjectType({
  name: `${Users.$name}CreateInput`,
  definition(t) {
    t.field(Users.name)
    t.field(Users.function)
    t.field(Users.cpf)
    t.field(Users.email)
    t.field(Users.password)
  },
})

export const userUpdateInput = inputObjectType({
  name: `${Users.$name}UpdateInput`,
  definition(t) {
    t.field(Users.name)
    t.field(Users.function)
    t.field(Users.cpf)
    t.field(Users.email)
    t.field(Users.password)
  },
})

export const userWhereUniqueInput = inputObjectType({
  name: `${Users.$name}WhereUniqueInput`,
  definition(t) {
    t.field(Users.id)
  },
})
