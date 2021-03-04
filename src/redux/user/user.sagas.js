import { takeLatest, call, put, all } from "redux-saga/effects";

import userActionTypes from "./user.types";

import {
  createUserProfileDocument,
  auth,
  googleProvider,
} from "../../Firebase/firebase.utils";

export function* signInWithGoogle() {
  try {
    const userRef = yield auth.signInWithGoogle(googleProvider);
    console.log(userRef);
  } catch (error) {}

  // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);
  //     userRef.onSnapshot((snapShot) => {
  //       setCurrentUser({
  //         id: snapShot.id,
  //         ...snapShot.data(),
  //       });
  //     });
  //   } else {
  //     setCurrentUser(userAuth);
  //   }
  // });
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
