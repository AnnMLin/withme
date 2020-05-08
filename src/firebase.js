import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "w1th-me.firebaseapp.com",
  databaseURL: "https://w1th-me.firebaseio.com",
  projectId: "w1th-me",
  storageBucket: "w1th-me.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

firebase.initializeApp(config)

const db = firebase.firestore()
db.settings({
  timestampsInSnapshots: true
})

export default db