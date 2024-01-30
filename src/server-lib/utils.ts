import { FirebaseError } from 'firebase/app'
import { DocumentData, Firestore, Query, collection, query, where } from 'firebase/firestore'
import { NextApiRequest } from 'next'

export async function _requestWrapper(callback: Function) {
  let response = {
    status: 200,
    data: {}
  }

  try {
    const callbackResponse = await callback()
    response.data = callbackResponse
  } catch (error) {
    // TODO: Firebase status errors?
    if (error instanceof FirebaseError) {
      console.error(`Firebase error: ${error.message}`)
    } else {
      console.error(`Unknown error: ${error}`)
    }
    response.status = 500
  }
  return response
}


export function buildQuery(db: Firestore, collectionName: string, params: NextApiRequest['query']) {
  let q: Query<DocumentData> = collection(db, collectionName)
  for (const key in params) {
    q = query(q, where(key, '==', params[key]))
  }
  return q
} 