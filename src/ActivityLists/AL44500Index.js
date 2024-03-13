import { al44500Sprint01 } from './AL44500Sprint01'
import { al44500Sprint02 } from './AL44500Sprint02'
import { al44500Sprint03 } from './AL44500Sprint03'
import { al44500Sprint04 } from './AL44500Sprint04'
import { al44500Sprint05 } from './AL44500Sprint05'

export const al44500 = (sprint) => {
	switch(sprint) {
		case 1: return al44500Sprint01()
		case 2: return al44500Sprint02()
		case 3: return al44500Sprint03()
		case 4: return al44500Sprint04()
		case 5: return al44500Sprint05()
		default: return null
	}
}