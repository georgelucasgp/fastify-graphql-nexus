import { inputObjectType, objectType } from 'nexus'
import { Roles } from '../../../generated/nexus-prisma'

export const role = objectType({
  name: Roles.$name,
  description: Roles.$description,
  definition(t) {
    t.field(Roles.id)
    t.field(Roles.name)
    t.field(Roles.description)
    t.field(Roles.createdAt)
    t.field(Roles.updatedAt)
  },
})

export const roleCreateInput = inputObjectType({
  name: `${Roles.$name}CreateInput`,
  definition(t) {
    t.field(Roles.name)
    t.field(Roles.description)
  },
})

export const roleUpdateInput = inputObjectType({
  name: `${Roles.$name}UpdateInput`,

  definition(t) {
    t.field(Roles.name)
    t.field(Roles.description)
  },
})

export const roleWhereUniqueInput = inputObjectType({
  name: `${Roles.$name}WhereUniqueInput`,
  definition(t) {
    t.field(Roles.id)
  },
})
