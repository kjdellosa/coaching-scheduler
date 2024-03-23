import db from './db'
import { getDocs, doc, updateDoc } from 'firebase/firestore';
import { _requestWrapper, buildQuery } from './utils';
import { NextApiRequest } from 'next';
import { bookingConverter } from '@/models/booking';

export default function makeBookingServerLib() {

  return Object.freeze({ list, create, update })

  async function list(params: NextApiRequest['query']) {
    return await _requestWrapper(async () => {
      const bookings: Booking[] = []

      const q = buildQuery(db, 'bookings', params).withConverter(bookingConverter)
      const querySnapshot = await getDocs(q)

      querySnapshot.forEach((doc) => {
        const data: Booking = doc.data()
        bookings.push(data)
      })
      return bookings
    })
  }

  async function create({ }) {

  }

  async function update(id: string, req: NextApiRequest) {
    return await _requestWrapper(async () => {
      const updatedData: Partial<Booking> = req.body
      const bookingRef = doc(db, 'bookings', id).withConverter(bookingConverter)
      await updateDoc(bookingRef, updatedData)
    })
  }
}