import jwt from 'jsonwebtoken'
import config from './config'

export const createToken = (id: string) => {
  const token = jwt.sign({ id }, config.jwt.JWT_SECRET, {
    expiresIn: config.jwt.expiresIn,
  })
  return token
}

export const verifyToken = (token: string) => {
  const verifiedToken = jwt.verify(token, config.jwt.JWT_SECRET)
  return verifiedToken
}
