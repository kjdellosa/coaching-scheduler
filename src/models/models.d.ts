/// <reference types="firebase/firestore" />

type Slot = import('zod').infer<typeof import('./slot')['slotSchema']>
type User = import('zod').infer<typeof import('./user')['userSchema']>
type Review = import('zod').infer<typeof import('./review')['reviewScema']>
type Booking = import('zod').infer<typeof import('./booking')['bookingSchema']>

interface RemoteBooking {
  id: string,
  student_id: string,
  slot_id: string,
  booking_time: Timestamp,
  is_completed: boolean
}

interface RemoteSlot {
  coach_id: string,
  start_time: Timestamp,
  end_time: Timestamp,
  is_booked: boolean
}