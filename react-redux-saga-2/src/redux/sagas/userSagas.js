import { put, takeEvery, call, all, race } from 'redux-saga/effects'
import { FIND_EMPLOYEE_SAGA, FIND_CUSTOMER, FIND_CUSTOMER_SAGA, FIND_EMPLOYEE } from '../types'

export function* findEmployeeSaga() {
	const url = 'https://randomuser.me/api/'
	const setHeaders = { headers: { 'Content-Type': 'application/json' } }
	let res = yield fetch(url, { setHeaders })
	res = yield res.json()
	console.log(res)
	let employee = res.results[0]
	yield put({ type: FIND_EMPLOYEE, payload: employee })
}

export function* watchFindEmployeeSaga() {
	yield takeEvery(FIND_EMPLOYEE_SAGA, findEmployeeSaga)
}
