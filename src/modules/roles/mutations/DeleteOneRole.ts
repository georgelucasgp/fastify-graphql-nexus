import { arg, mutationField, nonNull } from 'nexus'

export const deleteOneRole = mutationField('deleteOneRole', {
  type: 'Roles',
  args: {
    where: nonNull(
      arg({
        type: 'RoleWhereUniqueInput',
      }),
    ),
  },
  resolve: (_, args, context) => {
    return context.prisma.roles.delete({
      where: {
        id: args.where.id,
      },
    })
  },
})
