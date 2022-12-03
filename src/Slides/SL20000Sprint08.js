
import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'
import { tUnderConstruction, tNoRegularClassToday } from './SL00000Sprint00'

import { orderedListSlide } from './SLSprint00'

import { list20000Sprint07 } from '../ActivityLists/AL20000Sprint07'
import { list20000Sprint08 } from '../ActivityLists/AL20000Sprint08'

// Introduction to Computer Science (ICS) sprint 8 global values.
const sprint = 8
const activityListPrevious = () => { return list20000Sprint07(sprint-1) }
const activityList = () => { return list20000Sprint08(sprint) }

// Sprint 8 session 1 of 6: Monday
export const ics_8_1of6_lists = xyz_n_1of6_lists(sprint)
export const ics_8_1of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', `Sprint ${sprint} Expectations:`, [
			'Sprint 8 is different in many ways',
			`We will be focused on final projects throughout the sprint ${sprint}`,
			'No regular class sessions during finals week',
			'You will submit Quiz 8, Lab 8, Reflection 8, and Final Project Presentation assignments',
			'Discussion 8 is a request to complete your course evaluation and is not graded',
			'Quiz 8 will be in class on Wednesday',
			`We will have our sprint ${sprint-1} Demos and Retrospective Friday`,
			'Final project presentations will be during our final exam time next week' ])
	}

	return xyz_n_1of6(sprint, ics_8_1of6_lists.prework, activityListPrevious, ics_8_1of6_lists.agenda, ics_8_2of6_lists.prework, activityList, sprintPlanning()) 
}

// Sprint 8 session 2 of 6: Wednesday
const ics_8_2of6_lists = {
	'announcements':[ 
		'This is the last week of regular classes' ],
	'prework':[
		'Complete through activity 4 prior to next class', '',
		`Be prepared for Quiz ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const ics_8_2of6 = () => { return [ tUnderConstruction ] }

// Sprint 8 session 3 of 6: Friday
export const ics_8_3of6 = () => { return [ tUnderConstruction ] }

// Sprint 8 session 4 of 6: Monday
export const ics_8_4of6 = () => { return [ tNoRegularClassToday ] }

// Sprint 8 session 5 of 6: Wednesday
export const ics_8_5of6 = () => { return [ tNoRegularClassToday ] }

// Sprint 8 session 6 of 6: Friday
export const ics_8_6of6 = () => { return [ tNoRegularClassToday ] }