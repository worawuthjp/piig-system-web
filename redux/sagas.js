import { all } from "redux-saga/effects";
import counterSaga from "redux/counter/saga";
function* rootSaga() {
  yield all([...counterSaga]);
}

export default rootSaga;
