import {
  NextOrObserver,
  Unsubscribe,
  User,
  onAuthStateChanged as firebaseOnAuthStateChanged,
  getAuth
} from "firebase/auth"
import firebase_app from "../config"

const auth = getAuth(firebase_app)

export function onAuthStateChanged(
  nextOrObserver: NextOrObserver<User>,
): Unsubscribe {
  return firebaseOnAuthStateChanged(auth, nextOrObserver)
}
