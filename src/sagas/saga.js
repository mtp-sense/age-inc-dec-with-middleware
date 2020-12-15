// import { delay } from "redux-saga"; for saga versions 0.x
import { takeLatest, put, delay } from "redux-saga/effects";


function* ageUpAsyn(){
    yield delay(4000);
    yield put({type:"AGEUP_ASYNC",value:1});
}


export function* watchAgeUp(){
    // yield takeEvery("AGEUP",ageUpAsyn);
    //To stop debounce functionality
    yield takeLatest("AGEUP",ageUpAsyn);
}