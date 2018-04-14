import FirebaseClient from '../../../lib/Domain/FirebaseClient'

const client = new FirebaseClient()

describe(FirebaseClient.name, () => {
  it('constructor', () => {
    expect(client).toBeInstanceOf(FirebaseClient)
    expect(client).toHaveProperty('db')
  })

  describe('find', () => {
    it('return snapshot', async () => {
      expect.assertions(1)
      const data = await client.find('work_contents')
      expect(data).toBeDefined()
    })
  })
})
