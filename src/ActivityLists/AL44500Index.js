import { al44500Sprint01 } from './AL44500Sprint01'
import { al44500Sprint02 } from './AL44500Sprint02'
import { al44500Sprint03 } from './AL44500Sprint03'
import { al44500Sprint04 } from './AL44500Sprint04'
import { al44500Sprint05 } from './AL44500Sprint05'
import { al44500Sprint06 } from './AL44500Sprint06'
import { al44500Sprint07 } from './AL44500Sprint07'
import { al44500Sprint08 } from './AL44500Sprint08'

export const al44500 = (sprint) => {
	switch(sprint) {
		case 1: return al44500Sprint01()
		case 2: return al44500Sprint02()
		case 3: return al44500Sprint03()
		case 4: return al44500Sprint04()
		case 5: return al44500Sprint05()
		case 6: return al44500Sprint06()
		case 7: return al44500Sprint07()
		case 8: return al44500Sprint08()
		default: return null
	}
}