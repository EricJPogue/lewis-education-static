import { al36000Sprint01 } from './AL36000Sprint01'
import { al36000Sprint02 } from './AL36000Sprint02'
import { al36000Sprint03 } from './AL36000Sprint03'
import { al36000Sprint04 } from './AL36000Sprint04'
import { al36000Sprint05 } from './AL36000Sprint05'
import { al36000Sprint06 } from './AL36000Sprint06'
import { al36000Sprint07 } from './AL36000Sprint07'
import { al36000Sprint08 } from './AL36000Sprint08'

export const al36000 = (sprint) => {
	switch(sprint) {
		case 1: return al36000Sprint01()
		case 2: return al36000Sprint02()
		case 3: return al36000Sprint03()
		case 4: return al36000Sprint04()
		case 5: return al36000Sprint05()
		case 6: return al36000Sprint06()
		case 7: return al36000Sprint07()
		case 8: return al36000Sprint08()

		default:
			console.log('Error: al36000 sprint '+sprint+' content not found.')
			return (null)
	}
}
