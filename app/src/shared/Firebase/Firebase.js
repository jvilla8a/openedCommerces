import firebase from "firebase";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";

import { FIREBASE_CONFIG } from "../../app.constants";

export default !firebase.apps.length
  ? firebase.initializeApp(FIREBASE_CONFIG)
  : firebase.app();
