import z from 'zod'
import { Model } from './model'
import { Timestamp } from 'firebase/firestore'

export const slotSchema = z.object({
  id: z.string(),
  coach_id: z.string(),
  start_time: z.date(),
  end_time: z.date(),
  is_booked: z.boolean()
})

export class SlotModel extends Model<Slot> {
  constructor (slot: Slot) {
    super(slotSchema, slot)
  }
}

export const slotConverter = {
  toFirestore: (slot: Slot) => {
    return {
      id: slot.id,
      coach_id: slot.coach_id,
      start_time: Timestamp.fromDate(slot.start_time),
      end_time: Timestamp.fromDate(slot.end_time),
      is_booked: slot.is_booked
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