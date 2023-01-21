import { arg, mutationField, nonNull } from 'nexus'

export const createOneRole = mutationField('createOneRole', {
  type: 'Roles',
  args: {
    data: nonNull(
      arg({
        type: 'RoleCreateInput',
      }),
    ),
  },
  resolve: (_, args, context) => {
    return context.prisma.roles.create({
      data: {
        name: args.data.name,
      },
    })
  },
})
