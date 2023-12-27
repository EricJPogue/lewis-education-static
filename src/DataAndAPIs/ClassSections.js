import { _CPSC_20000, _CPSC_24500, _CPSC_24700, _CPSC_36000, _CPSC_44000, _CPSC_44500, _CPSC_49200, URLCLASSID } from "./Classes"
import { _CALENDAR_SPRING_2024_01_15_16 } from "./Calendars"
import { _INSTRUCTOR_ERIC_POGUE } from "./Instructors"

export const getClassTitle = () => {
	return getCurrentClassSection().course.name
}

export const getClassNumber = () => {
	return getCurrentClassSection().course.number.toString()
}

export const getClassCalendar = () => { 
	return getCurrentClassSection().calendar.sprintDates
}

export const getFinalExamDateAndTime = () => {
	return getCurrentClassSection().finalExam
}

export const getIsScheduleT = () => {
	return (getCurrentClassSection().meetingDays === _T)
}

export const getIsScheduleTTr = () => {
	return (getCurrentClassSection().meetingDay === _TTR)
}

export const getIsScheduleOnline = () => {
	return (getCurrentClassSection().meetingDay === _ASYNCHRONOUS)
}

export const getClassSectionID = () => {
	return getCurrentClassSection().course.id
}

export const getClassSection = () => {
	return getCurrentClassSection().section
}

export const getModuleDescription = (moduleIndex) => {
	return getCurrentClassSection().course.modules[moduleIndex]
}

// To promote encapsulation use 'getAllClassSections()' and 'getClassSectionByID()' sparingly. 
export const getAllClassSections = () => {
	return _CLASS_SECTION_LIST
}

export const getClassSectionByID = (classSectionID) => {
	for (let i = 0; i < _CLASS_SECTION_LIST.length; i++) {
		if (_CLASS_SECTION_LIST[i].id === classSectionID)
			return _CLASS_SECTION_LIST[i]
	}

	console.log(`Error: Class Section ID “${classSectionID}” not found.`)
	return null
}

const getClassSectionIDfromURL = () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const cpscParam = urlParams.get(URLCLASSID)
	if (cpscParam === null) {
		return ''
	}
	return cpscParam
}

const _MWF = 'MWF'
const _T = 'T'
const _TTR = 'TTh'
const _ASYNCHRONOUS = 'Asynchronous' 
const _SEMESTER_PREFIX = 'sp24'

const getCurrentClassSection = () => {
	return getClassSectionByID(getClassSectionIDfromURL())
}

// Confirmed.
const _SP24_CPSC_20000_002 = {
	'id':'sp24-cpsc-20000-002', 
	'section':'002',

	'crn':'11319',
	'meetingDays':_MWF,
	'meetingTimes':'1-1:50 pm',
	'finalExam':'Wednesday, May 8 from 1:30 to 3:30 PM CT',
	'meetingLocation':'Arts and Sciences (AS) 104A and Friday remote via Zoom',

	'course':_CPSC_20000,
	'instructor':_INSTRUCTOR_ERIC_POGUE,
	'calendar':_CALENDAR_SPRING_2024_01_15_16
}

// Confirmed.
const _SP24_CPSC_44000_001 = {
	'id':'sp24-cpsc-44000-001',
	'section':'001',
	'crn':'11382',
	'meetingDays':_MWF,
	'meetingTimes':'11-11:50 am',
	'finalExam':'Wednesday, May 8 from 10:30 am to 12:30 pm CT',
	'meetingLocation':'Arts and Sciences (AS) 104A and Friday remote via Zoom',

	'course':_CPSC_44000,
	'instructor':_INSTRUCTOR_ERIC_POGUE,
	'calendar':_CALENDAR_SPRING_2024_01_15_16
}

// Confirmed.
const _SP24_CPSC_44500_001 = {
	'id':'sp24-cpsc-44500-001',
	'section':'001',
	'crn':'11383',
	'meetingDays':_MWF,
	'meetingTimes':'9-9:50 am',
	'finalExam':'Wednesday, May 8 from 10:30 am to 12:30 pm CT',
	'meetingLocation':'Arts and Sciences (AS) 101S',

	'course':_CPSC_44500,
	'instructor':_INSTRUCTOR_ERIC_POGUE,
	'calendar':_CALENDAR_SPRING_2024_01_15_16
}

const _SP24_CPSC_49200_002 = {
	'id':'sp24-cpsc-49200-002',
	'section':'002',
	'crn':'11391',
	'meetingDays':_T,
	'meetingTimes':'11 am-12:15 pm',
	'finalExam':'Tuesday, May 7 from 10:30 am to 12:30 pm CT',
	'meetingLocation':'Arts and Sciences (AS) 140S',

	'course':_CPSC_49200,
	'instructor':_INSTRUCTOR_ERIC_POGUE,
	'calendar':_CALENDAR_SPRING_2024_01_15_16
}

const _XXXX_CPSC_24500 = {
	'id':`${_SEMESTER_PREFIX}-${_CPSC_24500.id}`,

	'course':_CPSC_24500,
	'instructor':_INSTRUCTOR_ERIC_POGUE,
	'calendar':_CALENDAR_SPRING_2024_01_15_16
}

const _XXXX_CPSC_24700 = {
	'id':`${_SEMESTER_PREFIX}-${_CPSC_24700.id}`,

	'course':_CPSC_24700,
	'instructor':_INSTRUCTOR_ERIC_POGUE,
	'calendar':_CALENDAR_SPRING_2024_01_15_16
}

const _XXXX_CPSC_36000 = {
	'id':`${_SEMESTER_PREFIX}-${_CPSC_36000.id}`,

	'course':_CPSC_36000,
	'instructor':_INSTRUCTOR_ERIC_POGUE,
	'calendar':_CALENDAR_SPRING_2024_01_15_16
}

const _CLASS_SECTION_LIST = [
	_SP24_CPSC_20000_002,
	_XXXX_CPSC_24500,
	_XXXX_CPSC_24700,
	_XXXX_CPSC_36000,
	_SP24_CPSC_44000_001,
	_SP24_CPSC_44500_001,
	_SP24_CPSC_49200_002
]