import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'
import { tNoRegularClassToday } from './SL00000Sprint00'
import { orderedListSlide } from './SLSprint00'
import { checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'
import { tQuiz, tPrework } from './SLSprint00'
import { tLab, completeDeck } from './SL00000Sprint00'


import { tUnderConstruction } from './SL00000Sprint00'


import { list24700Sprint07 } from '../ActivityLists/AL24700Sprint07'
import { list24700Sprint08 } from '../ActivityLists/AL24700Sprint08'

// Web & Distributed Programming (web) sprint 8 global values.
const sprint = 8
const activityListPrevious = () => { return list24700Sprint07(sprint-1) }
const activityList = () => { return list24700Sprint08(sprint) }

// Sprint 8 session 1 of 6: Monday
export const web_8_1of6_lists = xyz_n_1of6_lists(sprint)
export const web_8_1of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', `Sprint ${sprint} Expectations:`, [
			`We will be focused on final projects throughout the sprint ${sprint}`,
			'No regular class sessions during finals week',
			'You will submit Quiz 8, Lab 8, Reflection 8, and Final Project Presentation assignments',
			'Discussion 8 is a request to complete your course evaluation and is not graded',
			'Quiz 8 will be in class on Wednesday',
			`We will have our sprint ${sprint-1} Demos and Retrospective Friday`,
			'Final project presentations will be during our final exam time next week' ])
	}

	return xyz_n_1of6(sprint, web_8_1of6_lists.prework, activityListPrevious, web_8_1of6_lists.agenda, web_8_2of6_lists.prework, activityList, sprintPlanning()) 
}

// Sprint 8 session 2 of 6: Wednesday
const web_8_2of6_lists = {
	'announcements':[ 
		'This is the last week of regular classes', 
		'Be certain you have your final exam time marked on your calendar' ],
	'prework':[
		'Complete through activity 4 prior to next class', '',
		`Be prepared for Quiz ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		'Lab & Programming Together',
		`Quiz ${sprint}` ]
}
export const web_8_2of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_8_2of6_lists, sprint, activityList)
	const quiz = () => { return tQuiz(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', web_8_3of6_lists.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ tLab, preworkNext, quiz ]) 
}

// Sprint 8 session 3 of 6: Friday
const web_8_3of6_lists = {
	'announcements':[ 
		'Today is our last regular class session',
		'Be certain you have your final exam time marked on your calendar' ],
	'prework':[
		'Complete through activity 4 prior to next class', '',
		`Be prepared for sprint ${sprint-1} Demos & Retrospectives`,
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		'Lab & Programming Together' ]
}
export const web_8_3of6 = () => { return [ tUnderConstruction ] }

// Sprint 8 session 4 of 6: Monday
export const web_8_4of6 = () => { return [ tNoRegularClassToday ] }

// Sprint 8 session 5 of 6: Wednesday
export const web_8_5of6 = () => { return [ tNoRegularClassToday ] }

// Sprint 8 session 6 of 6: Friday
export const web_8_6of6 = () => { return [ tNoRegularClassToday ] }