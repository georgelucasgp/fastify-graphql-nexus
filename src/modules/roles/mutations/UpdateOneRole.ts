import { arg, mutationField, nonNull } from 'nexus'
import { Roles } from '../../../generated/nexus-prisma'

export const updateOneRole = mutationField('updateOneRole', {
  type: Roles.$name,
  args: {
    data: nonNull(
      arg({
        type: `${Roles.$name}UpdateInput`,
      }),
    ),
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

    const roleAlreadyExistName = await context.prisma.roles.findUnique({
      where: {
        name: args.data.name,
      },
    })

    if (roleAlreadyExistName?.id !== roleAlreadyExist.id)
      throw new Error(
        `Role with name ${roleAlreadyExistName?.name} already exist`,
      )

    return context.prisma.roles.update({
      where: {
        id: args.where.id,
      },
      data: args.data,
    })
  },
})
