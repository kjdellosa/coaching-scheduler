import db from './db'
import { getDocs } from 'firebase/firestore';
import { _requestWrapper, buildQuery } from './utils';
import { NextApiRequest } from 'next';

export default function makeSlotServerLib() {

  return Object.freeze({ list, create, update })

  async function list(params: NextApiRequest['query']) {
    return await _requestWrapper(async () => {
      const slots: Slot[] = []

      const q = buildQuery(db, 'slots', params)
      const querySnapshot = await getDocs(q)

      querySnapshot.forEach((doc) => {
        const data = doc.data()
        const slot: Slot = {
          id: doc.id,
          coach_id: data.coach_id,
          start_time: data.start_time.toDate(),
          end_time: data.end_time.toDate(),
          is_booked: data.is_booked,
        }
        slots.push(slot)
      })
      return slots
    })
  }

  async function create({ }) {

  }

  async function update({ }) {

  }
}