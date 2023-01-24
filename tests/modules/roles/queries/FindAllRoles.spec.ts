// src/tests/integration.spec.ts
import request from 'supertest'
import { app } from '../../../../src/app'
import { gql } from 'mercurius-codegen'
describe(`Integration`, () => {
  beforeEach(async () => {
    await app.ready()
  })

  describe(`GraphQL`, () => {
    it(`should return a list of roles`, async () => {
      const query = gql`
        query findAllRoles {
          findAllRoles {
            id
            name
            createdAt
            updatedAt
          }
        }
      `
      // 4. Send the query to our server
      const response = await request(app.server)
        .post('/graphql')
        .send({ query })

      console.log(response.body)

      // 5. Assert that the response is what we expect
    })
  })
  /**
   * 3. GraphQL Query: add(...)
   */
})
