import { inputObjectType, objectType } from 'nexus'
import { Roles } from '../../../generated/nexus-prisma'

const Role = objectType({
  name: Roles.$name,
  definition(t) {
    t.field(Roles.id)
    t.field(Roles.name)
    t.field(Roles.createdAt)
    t.field(Roles.updatedAt)
  },
})

const RoleCreateInput = inputObjectType({
  name: 'RoleCreateInput',
  definition(t) {
    t.field(Roles.name)
  },
})

export { Role, RoleCreateInput }
