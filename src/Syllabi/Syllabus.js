
import { getClassIDfromURL } from '../DataAndAPIs/Classes'

import { fa23_cpsc_20000_002, fa23_cpsc_20000_003, fa23_cpsc_24700_001, fa23_cpsc_44000_001, fa23_cpsc_49200_001, cpsc_24500, cpsc_36000 } from './fa23'

export const Syllabus = () => {
	const classID = getClassIDfromURL()

	switch(classID) {
		case 'fa23-cpsc-20000-002': return fa23_cpsc_20000_002()
		case 'fa23-cpsc-20000-003': return fa23_cpsc_20000_003()
		case 'fa23-cpsc-24700-001': return fa23_cpsc_24700_001()
		case 'fa23-cpsc-44000-001': return fa23_cpsc_44000_001()
		case 'fa23-cpsc-49000-001': return fa23_cpsc_49200_001()

		case 'cpsc-24500': return cpsc_24500()
		case 'cpsc-36000': return cpsc_36000()

		default: return null
	}


}