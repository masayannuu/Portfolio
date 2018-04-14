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

export default class FireBaseClient {
  constructor () {
    firebase.initializeApp(config)
    this.db = firebase.firestore()
  }

  async find (document) {
    const snapshot = await this.db.collection(document).get()
    if (snapshot.empty) {
      return {}
    }
    snapshot.forEach(doc => console.log(`${doc.id} => ${Object.keys(doc.data())}`))
    return snapshot
  }
}
