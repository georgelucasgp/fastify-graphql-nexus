import { queryField } from 'nexus'

export const allPermissions = queryField((t) => {
  t.nonNull.list.nonNull.field('allPermissions', {
    type: 'Permissions',
    resolve: (_parent, _args, context) => {
      return context.prisma.permissions.findMany()
    },
  })
})
