
import { getClassIDfromURL } from '../DataAndAPIs/Classes'
import { fa22_cpsc_20000_002, fa22_cpsc_20000_003, fa22_cpsc_24700_001, fa22_cpsc_44000_001 } from './fa22'
import { cpsc_24500, cpsc_36000, cpsc_49200 } from './fa22'

export const Syllabus = () => {
	const classID = getClassIDfromURL()
	switch(classID) {
		case 'fa22-cpsc-20000-002': return fa22_cpsc_20000_002()
		case 'fa22-cpsc-20000-003': return fa22_cpsc_20000_003()
		case 'fa22-cpsc-24700-001': return fa22_cpsc_24700_001()
		case 'fa22-cpsc-44000-001': return fa22_cpsc_44000_001()

		case 'cpsc-24500': return cpsc_24500()
		case 'cpsc-36000': return cpsc_36000()
		case 'cpsc-49200': return cpsc_49200()
		default: return null
	}
}