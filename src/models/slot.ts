import z from 'zod'
import { Model } from './model'

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
