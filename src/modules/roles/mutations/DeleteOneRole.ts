import { arg, mutationField, nonNull } from 'nexus'
import { Roles } from '../../../generated/nexus-prisma'

export const deleteOneRole = mutationField('deleteOneRole', {
  type: Roles.$name,
  args: {
    where: nonNull(
      arg({
        type: `${Roles.$name}WhereUniqueInput`,
      }),
    ),
  },
  resolve: async (_, args, context) => {
    const roleAlreadyExist = await context.prisma.roles.findUnique({
      where: {
        id: args.where.id,
      },
    })

    if (!roleAlreadyExist)
      throw new Error(`Role with id ${args.where.id} not exist`)

    return context.prisma.roles.delete({
      where: {
        id: args.where.id,
      },
    })
  },
})
