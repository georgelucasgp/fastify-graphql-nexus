// src/tests/integration.spec.ts
import request from 'supertest'
import { app } from '../../../../src/app'
import { gql } from 'mercurius-codegen'

jest.mock('../../../../src/redis', () => ({
  redis: {
    get: jest.fn().mockResolvedValue(null),
    set: jest.fn().mockResolvedValue(null),
  },
}))

beforeAll(async () => {
  await app.ready()
})

describe(`GraphQL`, () => {
  it(`should return a list of roles`, async () => {
    const query = gql`
      query findAllRoles {
        findAllRoles {
          id
          description
          name
          createdAt
          updatedAt
        }
      }
    `
    const response = await request(app.server)
      .post('/graphql')
      .send({ query })
      .expect(200)
    const data = response.body.data.findAllRoles[0]

    expect(data).toHaveProperty('id')
    expect(data).toBeTruthy()
  })
})
