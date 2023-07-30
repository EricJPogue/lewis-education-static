import { getClassSection, _CPSC_20000, _CPSC_24500, _CPSC_36000, _CPSC_44000, _CPSC_49200, _INSTRUCTOR } from '../../DataAndAPIs/Classes'
import { getCalendarPlusByCalendarID } from '../../DataAndAPIs/Calendars'

import { syllabus } from '../SyllabiShared'

const sp23MakeDefaultClassSection = () => {	
	let defaultClassSection = {}

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

// Syllabi for Spring 2023 classes:
export const sp23_cpsc_20000_002 = () => { return syllabus( _CPSC_20000, sp23MakeDefaultClassSection(), _INSTRUCTOR) }
export const sp23_cpsc_25400_001 = () => { return syllabus( _CPSC_24500, sp23MakeDefaultClassSection(), _INSTRUCTOR) }
export const sp23_cpsc_44000_001 = () => { return syllabus( _CPSC_44000, sp23MakeDefaultClassSection(), _INSTRUCTOR) }
export const sp23_cpsc_49200_001 = () => { return syllabus( _CPSC_49200, sp23MakeDefaultClassSection(), _INSTRUCTOR) }
export const sp23_cpsc_49200_004 = () => { return syllabus( _CPSC_49200, sp23MakeDefaultClassSection(), _INSTRUCTOR) }

// Supported courses that are not being offered currently. 
export const cpsc_36000 = () => { return syllabus( _CPSC_36000, sp23MakeDefaultClassSection(), _INSTRUCTOR ) }