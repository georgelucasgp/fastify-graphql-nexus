import { queryField } from 'nexus'
import { Permissions } from '../../../generated/nexus-prisma'

export const findAllPermissions = queryField((t) => {
  t.nonNull.list.nonNull.field('findAllPermissions', {
    type: Permissions.$name,
    resolve: (_parent, _args, context) => {
      return context.prisma.permissions.findMany()
    },
  })
})
