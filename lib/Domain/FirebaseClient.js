import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyAiEqkE3mRHy0OH1F9RL9_BeBuoFoikk_k',
  authDomain: 'portfolio-91d59.firebaseapp.com',
  databaseURL: 'https://portfolio-91d59.firebaseio.com',
  projectId: 'portfolio-91d59',
  storageBucket: 'portfolio-91d59.appspot.com',
  messagingSenderId: '365735011095'
}

/**
 * class FirebaseClient
 */
export default class FireBaseClient {
  constructor () {
    firebase.initializeApp(config)
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
      return this.transformData(snapshot)
    } catch (e) {
      console.error(e)
      return []
    }
  }

  /**
   * form data
   * @param {firebase.firestore.DocumentSnapshot} snapshot
   * @return {firebase.firestore.DocumentSnapshot}
   */
  transformData (snapshot) {
    const document_datas = []
    snapshot.forEach(doc => {
      let doc_data = doc.data()
      doc_data = this.setReference(doc_data, 'information_tags')
      document_datas.push(doc_data)
    })
    return document_datas
  }

  /**
   *
   * @param {firebase.firestore.DocumentSnapshot} documents
   * @param {string} reference_key
   */
  setReference (documents, reference_key) {
    try {
      Object.keys(documents).forEach(async key => {
        const additonal_object = documents[key][reference_key]
        if (typeof additonal_object === 'undefined') {
          return
        }
        const reference = await additonal_object.get()

        if (typeof reference === 'undefined') {
          documents[key][reference_key] = {}
        }
        documents[key][reference_key] = reference.data()[key]
      })
      return documents
    } catch (e) {
      console.error(e)
      return documents
    }
  }
}
