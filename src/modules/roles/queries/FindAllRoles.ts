import { queryField } from 'nexus'

export const findAllRoles = queryField((t) => {
  t.nonNull.list.nonNull.field('findAllRoles', {
    type: 'Roles',
    resolve: (parent, _, context) => {
      return context.prisma.roles.findMany()
    },
  })
})
