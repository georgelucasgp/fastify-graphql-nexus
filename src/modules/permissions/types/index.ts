import { inputObjectType, objectType } from 'nexus'
import { Permissions } from '../../../generated/nexus-prisma'

const Permission = objectType({
  name: Permissions.$name,
  definition(t) {
    t.field(Permissions.id)
    t.field(Permissions.name)
    t.field(Permissions.createdAt)
    t.field(Permissions.updatedAt)
  },
})

const PermissionCreateInput = inputObjectType({
  name: 'PermissionCreateInput',
  definition(t) {
    t.nonNull.string('name')
  },
})

export { Permission, PermissionCreateInput }
