import { takeLatest, call, put, all } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../Firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");

    const snapshot = yield collectionRef.get();

    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);

    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
// collectionRef
//   .get()
//   .then((snapshot) => {
//     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
//     dispatch(fetchCollectionsSuccess(collectionMap));
//   })
//   .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
