type Slot = import('zod').infer<typeof import('./slot')['slotSchema']>
type User = import('zod').infer<typeof import('./user')['userSchema']>
type Review = import('zod').infer<typeof import('./review')['reviewScema']>
type Booking = import('zod').infer<typeof import('./booking')['bookingSchema']>