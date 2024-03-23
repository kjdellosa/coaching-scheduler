import z from 'zod'
import { Model } from './model'
import { Timestamp } from 'firebase/firestore'

export const bookingSchema = z.object({
  id: z.string(),
  student_id: z.string(),
  slot_id: z.string(),
  booking_time: z.date(),
  is_completed: z.boolean()
})

export class BookingModel extends Model<Booking> {
  constructor (booking: Booking) {
    super(bookingSchema, booking)
  }
}

// TODO: Decouple request/response model from firebase
export const bookingConverter = {
  toFirestore: (booking: Booking) => {
    return {
      id: booking.id,
      student_id: booking.student_id,
      slot_id: booking.slot_id,
      booking_time: Timestamp.fromDate(booking.booking_time),
      is_completed: booking.is_completed
    }
  },
  fromFirestore: (snapshot: any, options: any) => {
    const data = snapshot.data(options)
    return {
      id: data.id,
      student_id: data.student_id,
      slot_id: data.slot_id,
      booking_time: data.booking_time.toDate(),
      is_completed: data.is_completed
    }
  }
}