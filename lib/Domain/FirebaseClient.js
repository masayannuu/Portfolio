import firebase from 'firebase'
import 'firebase/firestore'

// Browser key (auto created by Google Service)
// This key restricts websites that can be used
const config = {
  apiKey: process.env.FIRESTORE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.FIRESTORE_DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID
}

/**
 * class FirebaseClient
 */
export default class FireBaseClient {
  constructor () {
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
    this.db = firebase.firestore()
  }

  /**
   * get all documents
   * @param {string} collection_name search name
   * @return {array}
   */
  async find (collection_name) {
    try {
      const snapshot = await this.db.collection(collection_name).get()
      if (snapshot.empty) {
        return []
      }
      const contents = this.transformData(snapshot)
      const promises = contents.map(this.setReference)
      return await Promise.all(promises)
    } catch (e) {
      console.error(e)
      return []
    }
  }

  /**
   * form data
   * @param {firebase.firestore.DocumentSnapshot} snapshot
   * @return {array}
   */
  transformData (snapshot) {
    const document_datas = []
    snapshot.forEach(doc => {
      document_datas.push(doc.data())
    })
    document_datas.sort((a, b) => a.display_order - b.display_order)
    return document_datas
  }

  /**
   * set tag information from reference
   * @param {firebase.firestore.DocumentSnapshot} documents
   * @param {string} reference_key
   */
  async setReference (document) {
    const reference_key = 'information_tags'
    try {
      const additonal_object = document[reference_key]
      if (typeof additonal_object === 'undefined') {
        return document
      }
      const reference = await additonal_object.get()
      if (typeof reference === 'undefined') {
        document[reference_key] = {}
      }
      document[reference_key] = reference.data()
      return document
    } catch (e) {
      console.error(e)
      return document
    }
  }
}
