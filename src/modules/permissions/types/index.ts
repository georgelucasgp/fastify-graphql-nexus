import { inputObjectType, objectType } from 'nexus'
import { Permissions } from '../../../generated/nexus-prisma'

export const permission = objectType({
  name: Permissions.$name,
  description: Permissions.$description,
  definition(t) {
    t.field(Permissions.id)
    t.field(Permissions.name)
    t.field(Permissions.description)
    t.field(Permissions.createdAt)
    t.field(Permissions.updatedAt)
  },
})

export const permissionCreateInput = inputObjectType({
  name: `${Permissions.$name}CreateInput`,
  definition(t) {
    t.field(Permissions.name)
    t.field(Permissions.description)
  },
})

export const permissionUpdateInput = inputObjectType({
  name: `${Permissions.$name}UpdateInput`,
  definition(t) {
    t.field(Permissions.name)
    t.field(Permissions.description)
  },
})

export const permissionWhereUniqueInput = inputObjectType({
  name: `${Permissions.$name}WhereUniqueInput`,

  definition(t) {
    t.field(Permissions.id)
  },
})
