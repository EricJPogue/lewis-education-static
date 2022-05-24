import { URLCLASSID, SCHEDULE_TTR, SCHEDULE_ONLINE, CURRENT_CALENDAR_ID_INDEX, CALENDAR_LIST } from './ClientData'
import { classList } from './ClientData'
import { pastDate } from '../SprintDates'

// Exported APIs
export const getCourseTitle = () => { 
	return getClass().title
}

export const getCourseNumber = () => { 
	return parseInt(getClass().number)
}

export const getSyllabusURL = () => {
	return getClass().syllabusURL
}

export const getCurrentSprintBase1 = () => { return getCurrentSprintByCalendar(getCalendar())+1}
const getCurrentSprintByCalendar = (calendar) => {
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

export const getIsScheduleTTr = () => {
	return (getClass().schedule === SCHEDULE_TTR)
}

export const getIsScheduleOnline = () => {
	return (getClass().schedule === SCHEDULE_ONLINE)
}

export const getFinalExamDateAndTime = () => {
	return getClass().finalExam
}

export const getClassIDfromURL = () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const cpscParam = urlParams.get(URLCLASSID)
	if (cpscParam === null) {
		return ''
	}
	return cpscParam
}

export const getCurrentClasses = () => {
	const currentClasses = []
	for (let i = 0; i < classList.length; i++) {
		if ((classList[i].calendarID === CALENDAR_LIST[CURRENT_CALENDAR_ID_INDEX].calendarID))
			currentClasses.push(classList[i])
	}
	return currentClasses
}

export const getAllClasses = () => {
	const currentClasses = []
	for (let i = 0; i < classList.length; i++) {
		currentClasses.push(classList[i])
	}
	return currentClasses
}

const getClass = () => {
	let classID = getClassIDfromURL()
	for (let i = 0; i < classList.length; i++) {
		if (classList[i].classID === classID) {
			if (classList[i].calendarID !== CALENDAR_LIST[CURRENT_CALENDAR_ID_INDEX].calendarID) {
				// It is likely an error that someone is utilizing content from old classes.
				console.log('Warning: Class '+classList[i].classID+' not a current class.')
			}
			return classList[i]
		}
	}

	// This may or may not be an error. 
	console.log('Warning: Class not found (class='+classID+').')
	return classList[0]
}

// Experimental
// Todo: Assuming the functions below work effectively, integrate them with the ones above. 
export const getCurrentSprintByClassID = (classID) => {
	let classDetails = getClassByClassID(classID)
	let calendar = getCalendarByCalendarID(classDetails.calendarID)
	let currentSprint = getCurrentSprintByCalendar(calendar)
	return currentSprint + 1
}

const getClassByClassID = (classID) => {
	for (let i = 0; i < classList.length; i++) {
		if (classList[i].classID === classID) {
			if (classList[i].calendarID !== CALENDAR_LIST[CURRENT_CALENDAR_ID_INDEX].calendarID)
				// It is likely an error that someone is utilizing content from old classes.
				console.log('Warning: Class '+classList[i].classID+' not a current class.')
			return classList[i]
		}
	}

	console.log('Error: Class not found (class= '+classID+').')
	return classList[0]
}

export const getCalendar = () => { return getCalendarByCalendarID(getClass().calendarID) }
const getCalendarByCalendarID = (calendarID) => {
	for (let i = 0; i < CALENDAR_LIST.length; i++) {
		if (CALENDAR_LIST[i].calendarID === calendarID)
			return CALENDAR_LIST[i].calendar
	}

	console.log(`Warning: Calendar ID “${calendarID}” not found returning current calendar as default.`)
	return CALENDAR_LIST[CURRENT_CALENDAR_ID_INDEX].calendar
}

