import { getCalendarByCalendarID, _FALL_2022_08_29_16, _CURRENT_CALENDAR } from "./Calendars"

export const getIsScheduleTTr = () => {
	return (getClass().schedule === _TTR)
}

export const getIsScheduleOnline = () => {
	return (getClass().schedule === _ASYNCHRONOUS)
}

export const getFinalExamDateAndTime = () => {
	const course = getClass()
	if (course === null) {
		return ''
	}
	return course.finalExam
}

export const getClasses = () => {
	const classes = []
	for (let i = 0; i < classList.length; i++) {
		classes.push(classList[i])
	}
	return classes
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

export const getClassCalendar = () => { return getCalendarByCalendarID(getClass().calendarID) }

export const getClass = () => {
	const classID = getClassIDfromURL()
	if (classID  === '') {
		return null
	}
	return getClassByClassID(classID)
}

export const getClassByClassID = (classID) => {
	for (let i = 0; i < classList.length; i++) {
		if (classList[i].classID === classID) {
			return classList[i]
		}
	}

	console.log('Error: Class not found (class= “'+classID+'”).')
	return classList[0]
}

// Application Constants
export const URLCLASSID = 'cpsc'
export const _MWF = 'MWF'
export const _TTR = 'TTh'
export const _ASYNCHRONOUS = 'Asynchronous' 

export const classList = [
	{ 'classID':'fa22-cpsc-20000-002', 'title':'Introduction to Computer Science', 'number':'20000', 'calendarID':_FALL_2022_08_29_16, 'schedule':_MWF, 'time':'10-10:50 AM', 'finalExam':'Monday, December 13 from 10:30 AM to 12:30 PM CT', 'syllabusURL':'https://pithub.blob.core.windows.net/nvm4zqwm/lnt2ybs1-syllabus-cpsc-20000-002.pdf' },
	{ 'classID':'fa22-cpsc-20000-003', 'title':'Introduction to Computer Science', 'number':'20000', 'calendarID':_FALL_2022_08_29_16, 'schedule':_MWF, 'time':'11-11:50 AM', 'finalExam':'Friday, December 17 from 10:30 AM to 12:30 PM CT', 'syllabusURL':'https://pithub.blob.core.windows.net/nvm4zqwm/lonr2vt9-syllabus-cpsc-20000-003.pdf' },
	{ 'classID':'fa22-cpsc-44000-001', 'title':'Software Engineering', 'number':'44000', 'calendarID':_FALL_2022_08_29_16, 'schedule':_MWF, 'time':'2-2:50 PM', 'finalExam':'Monday, December 13 from 4 PM to 6 PM CT', 'syllabusURL':'https://pithub.blob.core.windows.net/nvm4zqwm/zj5cvkl3-syllabus-cpsc-44000-001.pdf' },
	{ 'classID':'fa22-cpsc-24700-001', 'title':'Web and Distributed Programming', 'number':'24700', 'calendarID':_FALL_2022_08_29_16, 'schedule':_MWF, 'time':'3-3:50 PM', 'finalExam':'Friday, December 16 from 4 PM to 6 PM CT', 'syllabusURL':'https://www.espn.com' },
	{ 'classID':'cpsc-24500', 'title':'Object-Oriented Programming', 'number':'24500', 'calendarID':_CURRENT_CALENDAR, 'schedule':'', 'time':'', 'finalExam':'', 'syllabusURL':'https://pithub.blob.core.windows.net/nvm4zqwm/cuq8toxa-sp22-cpsc-24500-001.pdf' },
	{ 'classID':'cpsc-36000', 'title':'Applied Programming Languages', 'number':'36000', 'calendarID':_CURRENT_CALENDAR, 'schedule':'', 'finalExam':'', 'syllabusURL':'https://botb.blob.core.windows.net/nvm4zqwm/se3c5q62-syllabus-cpsc-36000-001.pdf' },
	{ 'classID':'cpsc-49200', 'title':'Software Systems Capstone', 'number':'49200', 'calendarID':_CURRENT_CALENDAR, 'schedule':'', 'time':'', 'finalExam':'', 'syllabusURL':'https://pithub.blob.core.windows.net/nvm4zqwm/cuq8toxa-sp22-cpsc-49200-001.pdf' }
]