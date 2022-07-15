import { _CPSC_20000, _CPSC_24700, _INSTRUCTOR } from './SyllabiData'
import { syllabus } from './SyllabiShared'

const _CPSC_SECTION_DEFAULT_FALL_22 = {
	officeHours:'Thursday 2:30 to 4 PM CT by appointment',
	appointmentRequests:'Appointments can be requested via email',
	description:'Fall 2022'
}

// Syllabi for Fall 2022 classes:
export const fa22_cpsc_20000_002 = () => {
	let cpsc_20000_002 = _CPSC_SECTION_DEFAULT_FALL_22
	cpsc_20000_002.section = '002'
	return syllabus(_CPSC_20000, cpsc_20000_002, _INSTRUCTOR)
}

export const fa22_cpsc_20000_003 = () => {
	let cpsc_20000_003 = _CPSC_SECTION_DEFAULT_FALL_22
	cpsc_20000_003.section = '003'
	return syllabus(_CPSC_20000, cpsc_20000_003, _INSTRUCTOR)
}

export const fa22_cpsc_24700_001 = () => {
	let cpsc_24700_003 = _CPSC_SECTION_DEFAULT_FALL_22
	cpsc_24700_003.section = '001'
	return syllabus(_CPSC_24700, cpsc_24700_003, _INSTRUCTOR)
}





