import db from './db'
import { collection, getDocs } from 'firebase/firestore';

export default function makeUsersServerLib() {

  return Object.freeze({ list, create, update })

  async function list() {
    const querySnapshot = await getDocs(collection(db, 'users'))
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`)
    })
    // console.log(querySnapshot)
  }

  async function create({ }) {

  }

  async function update({ }) {

  }
}