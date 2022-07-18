import { _CPSC_20000, _CPSC_24500, _CPSC_24700, _CPSC_36000, _CPSC_44000, _CPSC_49200, _INSTRUCTOR } from './SyllabiData'
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

export const fa22_cpsc_44000_001 = () => {
	let cpsc_44000_001 = _CPSC_SECTION_DEFAULT_FALL_22
	cpsc_44000_001.section = '001'
	return syllabus(_CPSC_44000, cpsc_44000_001, _INSTRUCTOR)
}

// Supported courses that are not being offered currently. 
export const cpsc_24500 = () => {
	let cpsc_24500 = _CPSC_SECTION_DEFAULT_FALL_22
	cpsc_24500.section = 'XXX'
	return syllabus(_CPSC_24500, cpsc_24500, _INSTRUCTOR)
}

export const cpsc_36000 = () => {
	let cpsc_36000 = _CPSC_SECTION_DEFAULT_FALL_22
	cpsc_36000.section = 'XXX'
	return syllabus(_CPSC_36000, cpsc_36000, _INSTRUCTOR)
}

export const cpsc_49200 = () => {
	let cpsc_49200 = _CPSC_SECTION_DEFAULT_FALL_22
	cpsc_49200.section = 'XXX'
	return syllabus(_CPSC_49200, cpsc_49200, _INSTRUCTOR)
}