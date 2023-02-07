import { arg, mutationField, nonNull } from 'nexus'
import { Permissions } from '../../../generated/nexus-prisma'

export const createOnePermission = mutationField('createOnePermission', {
  type: Permissions.$name,
  args: {
    data: nonNull(
      arg({
        type: `${Permissions.$name}CreateInput`,
      }),
    ),
  },
  resolve: async (_, args, context) => {
    const permissionAlreadyExistName =
      await context.prisma.permissions.findUnique({
        where: {
          id: args.data.name,
        },
      })
    if (permissionAlreadyExistName)
      throw new Error(
        `Permission with name ${permissionAlreadyExistName.name} already exist`,
      )
    return context.prisma.permissions.create({
      data: args.data,
    })
  },
})
