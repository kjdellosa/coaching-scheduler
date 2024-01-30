import makeUsersServerLib from '@/server-lib/slib.users'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let response = null
  const userService = makeUsersServerLib()

  switch (req.method) {
    case 'GET':
      response = userService.list()
      // res.status(response.status).json(response.data)
      break
    default:
      res.status(404).send({ error: 'Not found' })
  }
}