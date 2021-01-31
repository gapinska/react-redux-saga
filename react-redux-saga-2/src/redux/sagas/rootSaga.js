import { watchAddToCartSaga, watchRemoveFromCartSaga } from './cartSagas'
import { watchFindCustomerSaga, watchFindEmployeeSaga } from './userSagas'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
	yield all([ watchAddToCartSaga(), watchRemoveFromCartSaga(), watchFindEmployeeSaga(), watchFindCustomerSaga() ])
}
