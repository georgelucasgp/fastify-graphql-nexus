import { AuthMutation } from './modules/auth/mutations/index'
import { PermissionsQuery } from './modules/permissions/queries'
import { PermissionsMutation } from './modules/permissions/mutations'
import { makeSchema, connectionPlugin, asNexusMethod } from 'nexus'
import { DateTimeResolver } from 'graphql-scalars'
import { RolesQuery } from './modules/roles/queries'
import * as RoleTypes from './modules/roles/types'
import * as PermissionTypes from './modules/permissions/types'
import { RolesMutation } from './modules/roles/mutations'
import path from 'path'
import { UsersMutation } from './modules/users/mutations'
import { UsersQuery } from './modules/users/queries'
import * as UserTypes from './modules/users/types'
import * as AuthTypes from './modules/auth/types'

export const DateTime = asNexusMethod(DateTimeResolver, 'date')
//dúvida se é no singular ou plural o nome dos types
export const schema = makeSchema({
  types: [
    RolesMutation,
    RolesQuery,
    RoleTypes,
    PermissionsMutation,
    PermissionsQuery,
    PermissionTypes,
    UsersMutation,
    UsersQuery,
    UserTypes,
    AuthMutation,
    AuthTypes,
    DateTime,
  ],
  outputs: {
    schema: path.join(__dirname, 'generated/schema.gen.graphql'),
    typegen: path.join(__dirname, 'generated/nexusTypes.gen.ts'),
  },
  contextType: {
    module: path.join(__dirname, 'context.ts'),
    export: 'Context',
  },
  plugins: [connectionPlugin()],
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})
