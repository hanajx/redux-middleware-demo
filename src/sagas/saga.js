import {takeLatest, takeEvery, put, delay} from 'redux-saga/effects';

function* ageUpAsync() {
    yield delay(4000); 
    // put does the same thing as dispatch
    yield put({type: "AGE_UP_ASYNC", value: 1});
}

// a generator function
export function* watchAgeUp() {
    // obeserve every single action that's get dispatched
    // when catched this action, need to call another function
    // yield takeEvery("AGE_UP", ageUpAsync);// takeEvery => every time there's event dispatch AGE_UP will run this
    yield takeLatest("AGE_UP", ageUpAsync);// only run the latest click
}
// once you catch an action, don't dispatch the same action again, otherwise will be infinity loop