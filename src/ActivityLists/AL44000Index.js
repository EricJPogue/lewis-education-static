import { al44000Sprint01 } from './AL44000Sprint01'
import { al44000Sprint02 } from './AL44000Sprint02'
import { al44000Sprint03 } from './AL44000Sprint03'
import { al44000Sprint04 } from './AL44000Sprint04'
import { al44000Sprint05 } from './AL44000Sprint05'
import { al44000Sprint06 } from './AL44000Sprint06'
import { al44000Sprint07 } from './AL44000Sprint07'
import { al44000Sprint08 } from './AL44000Sprint08'

export const al44000 = (sprint) => {
	switch(sprint) {
		case 1: return al44000Sprint01()
		case 2: return al44000Sprint02()
		case 3: return al44000Sprint03()
		case 4: return al44000Sprint04()
		case 5: return al44000Sprint05()
		case 6: return al44000Sprint06()
		case 7: return al44000Sprint07()
		case 8: return al44000Sprint08()

		default:
			console.log('Error: AL44000 sprint '+sprint+' content not found.') 
			return (null)
	}
}