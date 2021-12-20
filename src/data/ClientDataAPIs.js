import { URLCLASSID } from './ClientData'
import { classList } from './ClientData'
import { sprintCalendarSpring_2022_01_10_16, sprintCalendarFall_2021_08_30_16, sprintCalendarSpring_2021_01_18_16 } from './ClientData'

// Exported APIs

// Todo: Move next two function to official format and then update Calendar data to array of Calendars with CalendarIDs.
export const tuesdayThursdayClass = () => {
	let cpsc = getClassIDfromURL()
	switch(cpsc) {
		case '36000-spring-2021-001': return true;
		case '44000-spring-2021-001': return true;
		default: return false;
	}
}

export const finalExamDateAndTime = () => {
	let classReference = getClassIDfromURL()
	switch(classReference) {
		case '20000-fall-2021-002': return 'Monday, December 13 from 10:30 AM to 12:30 AM CT'
		case '20000-fall-2021-003': return 'Friday, December 17 from 10:30 AM to 12:30 AM CT'
		case '24700-fall-2021-001': return 'Friday, December 17 from 4 PM to 6 PM CT'
		case '44000-fall-2021-001': return 'Monday, December 13 from 4 PM to 6 PM CT'
		default: return null
	}
}


// Official 
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
	switch(getClass().calendarID) {
		case '2022-01-10-16': return sprintCalendarSpring_2022_01_10_16
		case '2021-08-30-16': return sprintCalendarFall_2021_08_30_16
		case '2021-01-18-16': return sprintCalendarSpring_2021_01_18_16
		default: console.log('Error: Calendar not found.')
	}
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

// Helper Functions
const getClass = () => {
	let classID = getClassIDfromURL()
	for (let i = 0; i < classList.length; i++) {
		if (classList[i].classID === classID) {
			return classList[i]
		}
	}

	console.log('Error: Class not found.')
	return null
}




