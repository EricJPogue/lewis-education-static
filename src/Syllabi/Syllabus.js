
import { getClassIDfromURL } from '../DataAndAPIs/Classes'
import { fa22_cpsc_20000_002, fa22_cpsc_20000_003, fa22_cpsc_24700_001, fa22_cpsc_44000_001 } from './fa22'
import { cpsc_24500 } from './fa22'

export const Syllabus = () => {
	const classID = getClassIDfromURL()
	console.log('Syllabus ID='+classID)
	switch(classID) {
		case 'fa22-cpsc-20000-002': return fa22_cpsc_20000_002()
		case 'fa22-cpsc-20000-003': return fa22_cpsc_20000_003()
		case 'fa22-cpsc-24700-001': return fa22_cpsc_24700_001()
		case 'fa22-cpsc-44000-001': return fa22_cpsc_44000_001()

		case 'cpsc-24500': return cpsc_24500()
		default: return null
	}
}