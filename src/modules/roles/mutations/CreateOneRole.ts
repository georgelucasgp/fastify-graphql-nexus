import { arg, mutationField, nonNull } from 'nexus'
import { Roles } from '../../../generated/nexus-prisma'

export const createOneRole = mutationField('createOneRole', {
  type: Roles.$name,
  args: {
    data: nonNull(
      arg({
        type: `${Roles.$name}CreateInput`,
      }),
    ),
  },
  resolve: async (_, args, context) => {
    const roleAlreadyExistName = await context.prisma.roles.findUnique({
      where: {
        name: args.data.name,
      },
    })
    if (roleAlreadyExistName)
      throw new Error(
        `Role with name ${roleAlreadyExistName.name} already exist`,
      )
    return context.prisma.roles.create({
      data: args.data,
    })
  },
})
