import { arg, nonNull, queryField } from 'nexus'

export const findOnePermission = queryField('findOnePermission', {
  type: 'Permissions',
  args: {
    where: nonNull(
      arg({
        type: 'PermissionWhereUniqueInput',
      }),
    ),
  },
  resolve: (_, args, context) => {
    return context.prisma.permissions.findUnique({
      where: {
        id: args.where.id,
      },
    })
  },
})
