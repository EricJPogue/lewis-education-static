import { al44500Sprint01 } from './AL44500Sprint01'
import { al44500Sprint02 } from './AL44500Sprint02'
import { al44500Sprint03 } from './AL44500Sprint03'

export const al44500 = (sprint) => {
	switch(sprint) {
		case 1: return al44500Sprint01()
		case 2: return al44500Sprint02()
		case 3: return al44500Sprint03()
		default: return null
	}
}