import { al20000Sprint01 } from './AL20000Sprint01'
import { al20000Sprint02 } from './AL20000Sprint02'
import { al20000Sprint03 } from './AL20000Sprint03'
import { al20000Sprint04 } from './AL20000Sprint04'
import { al20000Sprint05 } from './AL20000Sprint05'
import { al20000Sprint06 } from './AL20000Sprint06'
import { al20000Sprint07 } from './AL20000Sprint07'
import { al20000Sprint08 } from './AL20000Sprint08'

export const al20000 = (sprint) => {
	switch(sprint) {
		case 1: return al20000Sprint01()
		case 2: return al20000Sprint02()
		case 3: return al20000Sprint03()
		case 4: return al20000Sprint04()
		case 5: return al20000Sprint05()
		case 6: return al20000Sprint06()
		case 7: return al20000Sprint07()
		case 8: return al20000Sprint08()

		default:
			console.log('Error: AL20000 sprint '+sprint+' content not found.') 
			return (null)
	}
}