import { FIND_CUSTOMER, FIND_EMPLOYEE_SAGA } from '../types'

export const findEmployee = () => {
	return { type: FIND_EMPLOYEE_SAGA }
}

export const findCustomer = () => async (dispatch) => {
	const url = 'https://randomuser.me/api/'
	const setHeaders = { headers: { 'Content-Type': 'application/json' } }
	let res = await fetch(url, { setHeaders })
	res = await res.json()
	console.log(res)
	let customer = res.results[0]
	dispatch({ type: FIND_CUSTOMER, payload: customer })
}
