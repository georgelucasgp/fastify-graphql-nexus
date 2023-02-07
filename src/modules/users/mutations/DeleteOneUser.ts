import { arg, mutationField, nonNull } from 'nexus'
import { Users } from '../../../generated/nexus-prisma'

export const deleteOneUser = mutationField('deleteOneUser', {
  type: Users.$name,
  args: {
    where: nonNull(
      arg({
        type: `${Users.$name}WhereUniqueInput`,
      }),
    ),
  },
  resolve: (_, args, context) => {
    return context.prisma.users.delete({
      where: {
        id: args.where.id,
      },
    })
  },
})
