import { queryField } from 'nexus'
import { Users } from '../../../generated/nexus-prisma'

export const findAllUsers = queryField((t) => {
  t.nonNull.list.nonNull.field('findAllUsers', {
    type: Users.$name,
    resolve: (parent, _, context) => {
      return context.prisma.users.findMany()
    },
  })
})
