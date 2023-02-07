import { verifyToken } from './../../../helpers/jwt'
import { Context } from './../../../context'

export const isAuth = (context: Context) => {
  const authorization = context.request.headers.authorization
  if (!authorization) {
    throw new Error('Not authenticated')
  }
  try {
    const token = authorization.replace('Bearer ', '')
    const verifiedToken = verifyToken(token)
    return verifiedToken
  } catch (err) {
    throw new Error('Not authenticated')
  }
}
