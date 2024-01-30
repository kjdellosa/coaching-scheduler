import z from 'zod'

export class Model<T> {
  private readonly schema: z.ZodSchema<T>
  private readonly object: T

  constructor (schema: z.ZodSchema<T>, object: T) {
    this.schema = schema
    this.object = object

    this.validate()
  }

  validate() {
    const { schema, object } = this
    schema.parse(object)
  }

  toJSON() {
    return this.object
  }
}
