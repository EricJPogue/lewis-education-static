
import { getClassIDfromURL } from '../DataAndAPIs/Classes'
import { fa22_cpsc_20000_002, fa22_cpsc_20000_003, fa22_cpsc_24700_001 } from './fa22'

export const Syllabus = () => {
	const classID = getClassIDfromURL()
	switch(classID) {
		case 'fa22-cpsc-20000-002': return fa22_cpsc_20000_002()
		case 'fa22-cpsc-20000-003': return fa22_cpsc_20000_003()
		case 'fa22-cpsc-24700-001': return fa22_cpsc_24700_001()
		default: return null
	}
}