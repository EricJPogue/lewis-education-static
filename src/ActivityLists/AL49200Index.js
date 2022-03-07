import { al49200Sprint01 } from './AL49200Sprint01'
import { al49200Sprint02 } from './AL49200Sprint02'
import { al49200Sprint03 } from './AL49200Sprint03'
import { al49200Sprint04 } from './AL49200Sprint04'
import { al49200Sprint05 } from './AL49200Sprint05'

export const al49200 = (sprint) => {
	switch(sprint) {
		case 1: return al49200Sprint01()
		case 2: return al49200Sprint02()
		case 3: return al49200Sprint03()
		case 4: return al49200Sprint04()
		case 5: return al49200Sprint05()
		case 6: return null
		case 7: return null
		case 8: return null

		default:
			console.log('Error: AL44000 sprint '+sprint+' content not found.') 
			return (null)
	}
}