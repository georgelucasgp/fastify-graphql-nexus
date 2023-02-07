import { inputObjectType, objectType } from 'nexus'
import { Users } from '../../../generated/nexus-prisma'

export const authentication = objectType({
  name: 'Authentication',
  definition(t) {
    t.field('user', { type: 'Users' })
    t.string('token')
  },
})

export const authenticationInput = inputObjectType({
  name: 'AuthenticationInput',
  definition(t) {
    t.field(Users.email)
    t.field(Users.password)
  },
})
