import { al44500Sprint01 } from './AL44500Sprint01'
import { al44500Sprint02 } from './AL44500Sprint02'

export const al44500 = (sprint) => {
	switch(sprint) {
		case 1: return al44500Sprint01()
		case 2: return al44500Sprint02()
		default: return null
	}
}