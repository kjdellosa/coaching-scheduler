import db from './db'
import { getDocs } from 'firebase/firestore';
import { _requestWrapper, buildQuery } from './utils';
import { NextApiRequest } from 'next';

export default function makeBookingServerLib() {

  return Object.freeze({ list, create, update })

  async function list(params: NextApiRequest['query']) {
    return await _requestWrapper(async () => {
      const bookings: Booking[] = []

      const q = buildQuery(db, 'bookings', params)
      const querySnapshot = await getDocs(q)

      querySnapshot.forEach((doc) => {
        const data = doc.data()
        const slot: Booking = {
          id: doc.id,
          student_id: data.student_id,
          slot_id: data.slot_id,
          booking_time: data.booking_time.toDate(),
          is_completed: data.is_completed,
        }
        bookings.push(slot)
      })
      return bookings
    })
  }

  async function create({ }) {

  }

  async function update({ }) {

  }
}