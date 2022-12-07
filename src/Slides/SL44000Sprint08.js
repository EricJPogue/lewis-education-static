import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'
import { tNoRegularClassToday } from './SL00000Sprint00'
import { orderedListSlide } from './SLSprint00'
import { checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'
import { tQuiz, tPrework } from './SLSprint00'
import { tLab, completeDeck } from './SL00000Sprint00'

import { tUnderConstruction } from './SL00000Sprint00'

import { list44000Sprint07 } from '../ActivityLists/AL44000Sprint07'
import { list44000Sprint08 } from '../ActivityLists/AL44000Sprint08'

// Software Engineering (SE) sprint 8 global values.
const sprint = 8
const activityListPrevious = () => { return list44000Sprint07(sprint-1) }
const activityList = () => { return list44000Sprint08(sprint) }

// Sprint 8 session 1 of 6: Monday
export const se_8_1of6_lists = xyz_n_1of6_lists(sprint)
export const se_8_1of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', `Sprint ${sprint} Expectations:`, [
			'No regular class sessions during finals week',
			'You will submit Quiz 8, Lab 8, Reflection 8, and Final Project Presentation assignments',
			'Discussion 8 is a request to complete your course evaluation and is not graded',
			'Quiz 8 will be in class on Wednesday',
			`We will have our sprint ${sprint-1} Demos and Retrospective Friday`,
			'Final project presentations will be during our final exam time next week' ])
	}

	return xyz_n_1of6(sprint, se_8_1of6_lists.prework, activityListPrevious, se_8_1of6_lists.agenda, se_8_2of6_lists.prework, activityList, sprintPlanning()) 
}

// Sprint 8 session 2 of 6: Wednesday
const se_8_2of6_lists = {
	'announcements':[ 
		'This is the last week of regular classes', 
		'Be certain you have your final exam time marked on your calendar ' ],
	'prework':[
		'Complete through activity 4 prior to next class', '',
		`Be prepared for Quiz ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		'Complete Sprint Planning',
		'Lab & Programming Together',
		`Quiz ${sprint}` ]
}
export const se_8_2of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_8_2of6_lists, sprint, activityList)
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', `Complete sprint ${sprint} planning including:`, [
			`Final review of sprint ${sprint} backlog`,
			'Commitment',
			'Celebration' ])
	}
	const quiz = () => { return tQuiz(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_8_3of6_lists.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ sprintPlanning, tLab, preworkNext, quiz ]) 
}

// Sprint 8 session 3 of 6: Friday
const se_8_3of6_lists = {
	'announcements':[ 
		'This is the last week of regular classes' ],
	'prework':[
		'Complete through activity 7 prior to next class', '',
		'Be prepared for Demos & Retrospectives',
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		'Lab & Programming Together',
		`Quiz ${sprint} as a scrum team` ]
}
export const se_8_3of6 = () => { return [ tUnderConstruction ] }

// Sprint 8 session 4 of 6: Monday
export const se_8_4of6 = () => { return [ tNoRegularClassToday ] }

// Sprint 8 session 5 of 6: Wednesday
export const se_8_5of6 = () => { return [ tNoRegularClassToday ] }

// Sprint 8 session 6 of 6: Friday
export const se_8_6of6 = () => { return [ tNoRegularClassToday ] }