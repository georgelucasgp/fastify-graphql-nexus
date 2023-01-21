import { queryField } from 'nexus'

export const allRoles = queryField((t) => {
  t.nonNull.list.nonNull.field('allRoles', {
    type: 'Roles',
    resolve: (_parent, _args, context) => {
      return context.prisma.roles.findMany()
    },
  })
})
