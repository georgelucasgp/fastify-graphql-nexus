import { arg, mutationField, nonNull } from 'nexus'

export const createPermission = mutationField('createPermission', {
  type: 'Permissions',
  args: {
    data: nonNull(
      arg({
        type: 'PermissionCreateInput',
      }),
    ),
  },
  resolve: (_, args, context) => {
    return context.prisma.permissions.create({
      data: {
        name: args.data.name,
      },
    })
  },
})
