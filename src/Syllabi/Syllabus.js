
import { getClassIDfromURL } from '../DataAndAPIs/Classes'

import { sp23_cpsc_20000_002, sp23_cpsc_25400_001, sp23_cpsc_44000_001, sp23_cpsc_49200_001, cpsc_36000 } from './sp23'

import { fa22_cpsc_20000_002, fa22_cpsc_20000_003, fa22_cpsc_24700_001, fa22_cpsc_44000_001 } from './fa22'

export const Syllabus = () => {
	const classID = getClassIDfromURL()
	switch(classID) {
		case 'sp23-cpsc-20000-002': return sp23_cpsc_20000_002()
		case 'sp23-cpsc-25400-001': return sp23_cpsc_25400_001()
		case 'sp23-cpsc-44000-001': return sp23_cpsc_44000_001()
		case 'sp23-cpsc-49200-001': return sp23_cpsc_49200_001()
		case 'sp23-cpsc-49200-004': return sp23_cpsc_49200_001()

		case 'cpsc-36000': return cpsc_36000()

		case 'fa22-cpsc-20000-002': return fa22_cpsc_20000_002()
		case 'fa22-cpsc-20000-003': return fa22_cpsc_20000_003()
		case 'fa22-cpsc-24700-001': return fa22_cpsc_24700_001()
		case 'fa22-cpsc-44000-001': return fa22_cpsc_44000_001()

		default: return null
	}
}