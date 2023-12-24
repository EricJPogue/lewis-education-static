/*
import { getClassSection, _CPSC_20000, _CPSC_24500, _CPSC_24700, _CPSC_36000, _CPSC_44000, _CPSC_49200, _INSTRUCTOR } from '../DataAndAPIs/Classes'
import { getCalendarPlusByCalendarID } from '../DataAndAPIs/Calendars'

import { syllabus } from './SyllabiShared'

const fa23MakeDefaultClassSection = () => {	
	let defaultClassSection= {	}

	const classSection = getClassSection()
	defaultClassSection.section = classSection.section
	defaultClassSection.meetingTimes = `${classSection.schedule} ${classSection.time}`
	defaultClassSection.finalExam = classSection.finalExam
	defaultClassSection.meetingLocation = classSection.location // Todo: Change '.location' to '.meetingLocation'. 

	const calendar = getCalendarPlusByCalendarID(classSection.calendarID)
	defaultClassSection.description = calendar.description
	defaultClassSection.meetingDates = calendar.meetingDates

	return defaultClassSection
}

// Syllabi for Fall 2023 classes:
export const fa23_cpsc_20000_002 = () => { return syllabus( _CPSC_20000, fa23MakeDefaultClassSection(), _INSTRUCTOR) }
export const fa23_cpsc_20000_003 = () => { return syllabus( _CPSC_20000, fa23MakeDefaultClassSection(), _INSTRUCTOR) }
export const fa23_cpsc_24700_001 = () => { return syllabus( _CPSC_24700, fa23MakeDefaultClassSection(), _INSTRUCTOR) }
export const fa23_cpsc_44000_001 = () => { return syllabus( _CPSC_44000, fa23MakeDefaultClassSection(), _INSTRUCTOR) }
export const fa23_cpsc_49200_001 = () => { return syllabus( _CPSC_49200, fa23MakeDefaultClassSection(), _INSTRUCTOR) }

// Supported courses that are not being offered during the Fall 2023 semester. 
export const cpsc_24500 = () => { return syllabus( _CPSC_24500, fa23MakeDefaultClassSection(), _INSTRUCTOR) }
export const cpsc_36000 = () => { return syllabus( _CPSC_36000, fa23MakeDefaultClassSection(), _INSTRUCTOR) }
*/
