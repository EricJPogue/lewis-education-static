import { al24700Sprint01 } from './AL24700Sprint01'
import { al24700Sprint02 } from './AL24700Sprint02'
import { al24700Sprint03 } from './AL24700Sprint03'
import { al24700Sprint04 } from './AL24700Sprint04'
import { al24700Sprint05 } from './AL24700Sprint05'
import { al24700Sprint06 } from './AL24700Sprint06'
import { al24700Sprint07 } from './AL24700Sprint07'
import { al24700Sprint08 } from './AL24700Sprint08'

export const al24700 = (sprint) => {
	switch(sprint) {
		case 1: return al24700Sprint01()
		case 2: return al24700Sprint02()
		case 3: return al24700Sprint03()
		case 4: return al24700Sprint04()
		case 5: return al24700Sprint05()
		case 6: return al24700Sprint06()
		case 7: return al24700Sprint07()
		case 8: return al24700Sprint08()

		default:
			console.log('Error: al24700 sprint '+sprint+' content not found.')
			return (null)
	}
}
