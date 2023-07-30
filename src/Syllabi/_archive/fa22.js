// fa22.js is depreciated and should be removed.

import { getClassSection, _CPSC_20000, _CPSC_24500, _CPSC_24700, _CPSC_36000, _CPSC_44000, _CPSC_49200, _INSTRUCTOR } from '../../DataAndAPIs/Classes'
import { syllabus } from '../SyllabiShared'

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

// Syllabi for Fall 2022 classes:
export const fa22_cpsc_20000_002 = () => { return syllabus( _CPSC_20000, makeDefaultClassSection(), _INSTRUCTOR ) }
export const fa22_cpsc_20000_003 = () => { return syllabus( _CPSC_20000, makeDefaultClassSection(), _INSTRUCTOR ) }
export const fa22_cpsc_24700_001 = () => { return syllabus( _CPSC_24700, makeDefaultClassSection(), _INSTRUCTOR ) }
export const fa22_cpsc_44000_001 = () => { return syllabus( _CPSC_44000, makeDefaultClassSection(), _INSTRUCTOR ) }

// Supported courses that are not being offered currently. 
export const cpsc_24500 = () => { return syllabus( _CPSC_24500, makeDefaultClassSection(), _INSTRUCTOR ) }
export const cpsc_36000 = () => { return syllabus( _CPSC_36000, makeDefaultClassSection(), _INSTRUCTOR ) }
export const cpsc_49200 = () => { return syllabus( _CPSC_49200, makeDefaultClassSection(), _INSTRUCTOR ) }