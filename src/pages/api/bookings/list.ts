import makeBookingServerLib from '@/server-lib/slib.booking'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let response = null
  const service = makeBookingServerLib()

  switch (req.method) {
    case 'GET':
      response = await service.list(req.query)
      res.status(200).json(response.data)
      break
    default:
      res.status(404).send({ error: 'Not found' })
  }
}