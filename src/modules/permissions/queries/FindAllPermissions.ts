import { queryField } from 'nexus'

export const findAllPermissions = queryField((t) => {
  t.nonNull.list.nonNull.field('findAllPermissions', {
    type: 'Permissions',
    resolve: (_parent, _args, context) => {
      return context.prisma.permissions.findMany()
    },
  })
})
