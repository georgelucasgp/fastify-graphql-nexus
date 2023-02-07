import { queryField } from 'nexus'
import { Roles } from '../../../generated/nexus-prisma'
import { isAuth } from '../../auth/mutations/isAuth'

export const findAllRoles = queryField((t) => {
  t.nonNull.list.nonNull.field('findAllRoles', {
    type: Roles.$name,
    resolve: (parent, _, context) => {
      isAuth(context)
      return context.prisma.roles.findMany()
    },
  })
})
