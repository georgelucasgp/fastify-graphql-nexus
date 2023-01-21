import { arg, mutationField, nonNull } from 'nexus'

export const updateOneRole = mutationField('updateOneRole', {
  type: 'Roles',
  args: {
    data: nonNull(
      arg({
        type: 'RoleUpdateInput',
      }),
    ),
    where: nonNull(
      arg({
        type: 'RoleWhereUniqueInput',
      }),
    ),
  },
  resolve: (_, args, context) => {
    return context.prisma.roles.update({
      where: {
        id: args.where.id,
      },
      data: {
        name: args.data.name,
      },
    })
  },
})
