import { _CPSC_20000, _CPSC_24500, _CPSC_24700, _CPSC_36000, _CPSC_49200, _CPSC_44500 } from "./Classes"
import { _CALENDAR_SPRING_2024_01_15_16 } from "./Calendars"
import { _INSTRUCTOR_ERIC_POGUE } from "./Instructors"

export const getClassSectionByID = (classSectionID) => {
	for (let i = 0; i < _CLASS_SECTION_LIST.length; i++) {
		if (_CLASS_SECTION_LIST[i].id === classSectionID)
			return _CLASS_SECTION_LIST[i]
	}

	console.log(`Error: Class Section ID “${classSectionID}” not found.`)
	return null
}

const _SP24_CPSC_20000_002 = {
	'id':'sp24-cpsc-20000-002', 
	'section':'002',
	'crn':'11319',
	'meetingTimes':'MWF 1-1:50 pm',
	'finalExam':'Wednesday, May 8 from 1:30 to 3:30 PM CT',
	'meetingLocation':'Arts and Sciences (AS) 104A and Friday remote via Zoom',

	'course':_CPSC_20000,
	'instructor':_INSTRUCTOR_ERIC_POGUE,
	'calendar':_CALENDAR_SPRING_2024_01_15_16
}

const _SP24_CPSC_44000_001 = {
	'id':'sp24-cpsc-44000-001',
	'section':'001',
	'crn':'11382',
	'meetingTimes':'MWF 9-9:50 am',
	'finalExam':'Wednesday, May 8 from 10:30 am to 12:30 pm CT',
	'meetingLocation':'Arts and Sciences (AS) 104A and Friday remote via Zoom',

	'course':_CPSC_44500,
	'instructor':_INSTRUCTOR_ERIC_POGUE,
	'calendar':_CALENDAR_SPRING_2024_01_15_16
}

const _SP24_CPSC_44500_001 = {
	'id':'sp24-cpsc-44500-001',
	'section':'001',
	'crn':'11383',
	'meetingTimes':'MWF 9-9:50 am',
	'finalExam':'Wednesday, May 8 from 10:30 am to 12:30 pm CT',
	'meetingLocation':'Arts and Sciences (AS) 104A and Friday remote via Zoom',

	'course':_CPSC_44500,
	'instructor':_INSTRUCTOR_ERIC_POGUE,
	'calendar':_CALENDAR_SPRING_2024_01_15_16
}

const _SP24_CPSC_49200_002 = {
	'id':'sp24-cpsc-9200-002',
	'section':'002',
	'crn':'11391',
	'meetingTimes':'T 11 am to 12:15 pm',
	'finalExam':'Wednesday, May 8 from 10:30 am to 12:30 pm CT',
	'meetingLocation':'Arts and Sciences (AS) 104A and Friday remote via Zoom',

	'course':_CPSC_49200,
	'instructor':_INSTRUCTOR_ERIC_POGUE,
	'calendar':_CALENDAR_SPRING_2024_01_15_16
}

const _XXXX_CPSC_24500 = {
	'course':_CPSC_24500,
	'instructor':_INSTRUCTOR_ERIC_POGUE,
	'calendar':_CALENDAR_SPRING_2024_01_15_16
}

const _XXXX_CPSC_24700 = {
	'course':_CPSC_24700,
	'instructor':_INSTRUCTOR_ERIC_POGUE,
	'calendar':_CALENDAR_SPRING_2024_01_15_16
}

const _XXXX_CPSC_36000 = {
	'course':_CPSC_36000,
	'instructor':_INSTRUCTOR_ERIC_POGUE,
	'calendar':_CALENDAR_SPRING_2024_01_15_16
}

const _CLASS_SECTION_LIST = [
	_SP24_CPSC_20000_002,
	_SP24_CPSC_44000_001,
	_SP24_CPSC_44500_001,
	_SP24_CPSC_49200_002,
	_XXXX_CPSC_24500,
	_XXXX_CPSC_24700,
	_XXXX_CPSC_36000
]