import z from 'zod'
import { Model } from './model'

enum EUserTypes {
  COACH = 'coach',
  STUDENT = 'student'
}

export const userSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  email: z.string().email(),
  phone_number: z.number(),
  user_type: z.nativeEnum(EUserTypes)
})

export class UserModel extends Model<User> {
  constructor (user: User) {
    super(userSchema, user)
  }
}
