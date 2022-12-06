import { getClassSection, _CPSC_20000, _CPSC_24500, _CPSC_24700, _CPSC_36000, _CPSC_44000, _CPSC_49200, _INSTRUCTOR } from '../DataAndAPIs/Classes'
import { getCalendarPlusByCalendarID } from '../DataAndAPIs/Calendars'

import { syllabus } from './SyllabiShared'

const makeDefaultClassSection = () => {
	let defaultClassSection= {
		officeHours:'Thursday 1:30 to 3 PM CT by appointment',
		appointmentRequests:'Appointments can be requested via email',
		description:'Fall 2022',
		meetingDates:'Monday, August 29th through Friday, December 16', // Todo: Consider moving meetingDates to Calendar.
		meetingLocation:'Arts and Sciences AS 104A' // The meetingLocation value may need to be overridden.
	}

	const classSection = getClassSection()
	defaultClassSection.section = classSection.section
	defaultClassSection.meetingTimes = `${classSection.schedule} ${classSection.time}`
	defaultClassSection.finalExam = classSection.finalExam
	return defaultClassSection
}

const sp23MakeDefaultClassSection = () => {
	let defaultClassSection= {
		officeHours:'Thursday 10 to 11:30 AM CT by appointment', // Todo: Consider adding 'officeHours' to calendar.
		appointmentRequests:'Appointments can be requested via email', // Todo: Consider moving 'appointmentRequests' to syllabus. 
	}

	const classSection = getClassSection()
	defaultClassSection.section = classSection.section
	defaultClassSection.meetingTimes = `${classSection.schedule} ${classSection.time}`
	defaultClassSection.finalExam = classSection.finalExam
	defaultClassSection.meetingLocation = classSection.location

	const calendar = getCalendarPlusByCalendarID(classSection.calendarID)
	defaultClassSection.description = calendar.description
	defaultClassSection.meetingDates = calendar.meetingDates

	return defaultClassSection
}

// Syllabi for Spring 2023 classes:
export const sp22_cpsc_20000_002 = () => { return syllabus(_CPSC_20000, sp23MakeDefaultClassSection(), _INSTRUCTOR) }

// Syllabi for Fall 2022 classes:
export const fa22_cpsc_20000_002 = () => { return syllabus(_CPSC_20000, makeDefaultClassSection(), _INSTRUCTOR) }
export const fa22_cpsc_20000_003 = () => { return syllabus(_CPSC_20000, makeDefaultClassSection(), _INSTRUCTOR) }
export const fa22_cpsc_24700_001 = () => { return syllabus(_CPSC_24700, makeDefaultClassSection(), _INSTRUCTOR) }
export const fa22_cpsc_44000_001 = () => { return syllabus(_CPSC_44000, makeDefaultClassSection(), _INSTRUCTOR) }

// Supported courses that are not being offered currently. 
export const cpsc_24500 = () => { return syllabus(_CPSC_24500, makeDefaultClassSection(), _INSTRUCTOR) }
export const cpsc_36000 = () => { return syllabus(_CPSC_36000, makeDefaultClassSection(), _INSTRUCTOR) }
export const cpsc_49200 = () => { return syllabus(_CPSC_49200, makeDefaultClassSection(), _INSTRUCTOR) }