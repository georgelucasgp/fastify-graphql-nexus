import { inputObjectType, objectType } from 'nexus'
import { Roles } from '../../../generated/nexus-prisma'

export const Role = objectType({
  name: Roles.$name,
  description: 'Type representing a role teste',
  definition(t) {
    t.field(Roles.id)
    t.field(Roles.name)
    t.field(Roles.createdAt)
    t.field(Roles.updatedAt)
  },
})

export const RoleCreateInput = inputObjectType({
  name: 'RoleCreateInput',
  definition(t) {
    t.field(Roles.name)
  },
})

export const RoleUpdateInput = inputObjectType({
  name: 'RoleUpdateInput',
  definition(t) {
    t.field(Roles.name)
  },
})

export const RoleWhereUniqueInput = inputObjectType({
  name: 'RoleWhereUniqueInput',
  definition(t) {
    t.field(Roles.id)
  },
})

export const RoleWhereUniqueInputTeste = inputObjectType({
  name: 'RoleWhereUniqueInputTeste',
  definition(t) {
    t.field(Roles.name)
  },
})
