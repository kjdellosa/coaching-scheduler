import z from 'zod'
import { Model } from './model'

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
