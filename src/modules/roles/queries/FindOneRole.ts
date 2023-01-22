import { arg, nonNull, queryField } from 'nexus'

export const findOneRole = queryField('findOneRole', {
  type: 'Roles',
  args: {
    where: nonNull(
      arg({
        type: 'RoleWhereUniqueInput',
      }),
    ),
  },
  resolve: (_, args, context) => {
    return context.prisma.roles.findUnique({
      where: {
        id: args.where.id,
      },
    })
  },
})
