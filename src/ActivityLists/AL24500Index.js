import { al24500Sprint01 } from './AL24500Sprint01'
import { al24500Sprint02 } from './AL24500Sprint02'
import { al24500Sprint03 } from './AL24500Sprint03'
import { al24500Sprint04 } from './AL24500Sprint04'
import { al24500Sprint05 } from './AL24500Sprint05'
import { al24500Sprint06 } from './AL24500Sprint06'
import { al24500Sprint07 } from './AL24500Sprint07'
import { al24500Sprint08 } from './AL24500Sprint08'

export const al24500 = (sprint) => {
	switch(sprint) {
		case 1: return al24500Sprint01()
		case 2: return al24500Sprint02()
		case 3: return al24500Sprint03()
		case 4: return al24500Sprint04()
		case 5: return al24500Sprint05()
		case 6: return al24500Sprint06()
		case 7: return al24500Sprint07()
		case 8: return al24500Sprint08()

		default:
			console.log('Error: al24500 sprint '+sprint+' content not found.')
			return (null)
	}
}
