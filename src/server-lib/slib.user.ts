import db from './db'
import { getDocs } from 'firebase/firestore';
import { _requestWrapper, buildQuery } from './utils';
import { NextApiRequest } from 'next';

export default function makeUserServerLib() {

  return Object.freeze({ list, create, update })

  async function list(params: NextApiRequest['query']) {
    return await _requestWrapper(async () => {
      const users: User[] = []

      const q = buildQuery(db, 'users', params)
      const querySnapshot = await getDocs(q)

      querySnapshot.forEach((doc) => {
        const data = doc.data()
        const user: User = {
          id: doc.id,
          name: data.name,
          email: data.email,
          phone_number: data.phone_number,
          user_type: data.user_type
        }
        users.push(user)
      })
      return users
    })
  }

  async function create({ }) {

  }

  async function update({ }) {

  }
}