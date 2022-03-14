import { URLCLASSID, SCHEDULE_TTR, SCHEDULE_ONLINE, CURRENTCALENDARID } from './ClientData'
import { classList } from './ClientData'
import { sprintCalendarSpring_2022_01_10_16, sprintCalendarFall_2021_08_30_16, sprintCalendarSpring_2021_01_18_16 } from './ClientData'

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

export const getCalendar = () => {
	// Todo: Consider updating calendar data so that it includes an array of calendars with a calendar ID.
	switch(getClass().calendarID) {
		case '2022-01-10-16': return sprintCalendarSpring_2022_01_10_16
		case '2021-08-30-16': return sprintCalendarFall_2021_08_30_16
		case '2021-01-18-16': return sprintCalendarSpring_2021_01_18_16
		default: console.log('Error: Calendar not found.')
	}
}

export const getCurrentSprintBase1 = () => { return getCurrentSprint() + 1}
const getCurrentSprint = () => {
	const maxSprint = 7
	let calendar = getCalendar()
	for (let sprint = 0; sprint < (maxSprint+1); sprint++) {
		// If the start date is in the past and the end date is in the future, then today is in the current sprint.
		if ((pastDate(calendar[sprint].start)) && (!pastDate(calendar[sprint].end))) {
			return sprint
		}
	}

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
		if (classList[i].calendarID === CURRENTCALENDARID)
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
			if (classList[i].calendarID !== CURRENTCALENDARID)
				// It is likely an error that someone is utilizing content from old classes.
				console.log('Warning: Class '+classList[i].classID+' not a current class.')
			return classList[i]
		}
	}

	console.log('Error: Class not found (class='+classID+').')
	return classList[0]
}




