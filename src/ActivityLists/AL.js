import { al20000 } from './AL20000Index'
import { al24500 } from './AL24500Index'
import { al24700 } from './AL24700Index'
import { al36000 } from './AL36000Index'
import { al44000 } from './AL44000Index'
import { al44500 } from './AL44500Index'
import { al49200 } from './AL49200Index'

export const al = (courseNumber, sprint) => {
	switch(courseNumber) {
		case '20000': return al20000(sprint)
		case '24500': return al24500(sprint)
		case '24700': return al24700(sprint)
		case '36000': return al36000(sprint)
		case '44000': return al44000(sprint)
		case '44500': return al44500(sprint)		
		case '49200': return al49200(sprint)
		default: return null
	}
}