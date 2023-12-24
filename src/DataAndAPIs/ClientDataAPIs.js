import { getCalendarByCalendarID } from './Calendars'
import { getClassCalendar, getClassByClassID } from './Classes'
import { pastDate } from '../CalendarAndSchedule/SprintDates'

// Exported APIs
export const getCurrentSprintBase1 = () => { return getCurrentSprintByCalendar(getClassCalendar())+1}

export const getCurrentSprintByCalendar = (calendar) => {
	const minSprint = 0 
	const maxSprint = 7

	// Start date of the first sprint is in the future so return minSprint (likely sprint 0).
	if (!pastDate(calendar[0].start)) {
		return minSprint
	}

	for (let sprint = 0; sprint <= (maxSprint); sprint++) {
		// Start date of the sprint is in the past and the end date is in the future so this is the current sprint.
		if ((pastDate(calendar[sprint].start)) && (!pastDate(calendar[sprint].end))) {
			return sprint
		}
	}

	// All dates are in the past so return maxSprint (likely sprint 7)
	return maxSprint 
}

export const getCurrentSprintByClassID = (classID) => {
	const classDetails = getClassByClassID(classID)
	const calendar = getCalendarByCalendarID(classDetails.calendarID)
	const currentSprint = getCurrentSprintByCalendar(calendar)
	return currentSprint + 1
}



