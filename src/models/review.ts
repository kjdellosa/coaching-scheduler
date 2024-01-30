import z from 'zod'
import { Model } from './model'

export const reviewSchema = z.object({
  id: z.string(),
  coach_id: z.string(),
  booking_id: z.date(),
  score: z.number().min(1).max(5),
  notes: z.string().optional()
})

export class ReviewModel extends Model<Review> {
  constructor (review: Review) {
    super(reviewSchema, review)
  }
}
