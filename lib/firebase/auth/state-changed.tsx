import {
  NextOrObserver,
  Unsubscribe,
  User,
  onAuthStateChanged as firebaseOnAuthStateChanged,
} from "firebase/auth"
import { auth } from "../config"

export function onAuthStateChanged(
  nextOrObserver: NextOrObserver<User>,
): Unsubscribe {
  return firebaseOnAuthStateChanged(auth, nextOrObserver)
}
