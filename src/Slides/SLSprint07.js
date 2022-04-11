import { defaultDeck, checklist, CHECKLIST_ROUTE } from './SLSprint00' // Shared slide decks.
import { preflightChecklist, instructorChecklist, activitiesReview, end } from './SLSprint00' // Shared slides.
import { agendaSlide, orderedListSlide, preworkSlide, preworkWithActivityList } from './SLSprint00' // Shared slide templates.

import { list20000Sprint07 } from '../ActivityLists/AL20000Sprint07'
import { list24500Sprint07 } from '../ActivityLists/AL24500Sprint07'

export const sprint7Router = (route) => {
	switch(route) {
		case CHECKLIST_ROUTE: return checklist()

		case ICS_7_1of6_ROUTE: return ics7_1of6()
		case OOP_7_1of6_ROUTE: return oop7_1of6()

		default: return defaultDeck()
	}
}

// Introduction to Computer Science
const ICS_7_1of6_ROUTE = 'ics7-1of6'
const ics7_1of6 = () => { return mwf_7_1of6(icsPrework_7_2of6) }

// Shared between ICS sessions:
const icsPrework_7_2of6 = () => {
	return preworkWithActivityList([
		'Complete through activity 4', '',
		'Be prepared for sprint 6 demos',
		'Be prepared for Discussion 7' ], 
		list20000Sprint07)
}

// Object-Oriented Programming
const OOP_7_1of6_ROUTE = 'oop7-1of6'
const oop7_1of6 = () => { return mwf_7_1of6(oopPrework_7_2of6) }

// Shared between OOP sessions:
const oopPrework_7_2of6 = () => {
	return preworkWithActivityList([
		'Complete through activity 4', '',
		'Be prepared for sprint 6 demos',
		'Be prepared for Discussion 7' ], 
		list24500Sprint07)
}

// Shared between classes:
const mwf_7_1of6 = (prework_7_2of6) => {
	const sprint = 7
	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			`Sprint ${sprint} Planning`,
			`Breakout on Sprint ${sprint} Planning`,
			'Review Demo Schedule',
			'Prework for Next Class' ])
	}
	const sprintPlanning = () => {
		return orderedListSlide(`Sprint Planning`, `Sprint ${sprint} Changes:`, [
			'Similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
			`Also similar with sprint ${sprint} demos on Wednesday`,
			'Easter break and no classes Thursday through Monday will make the sprint a bit challenging'
		])
	}
	const activitiesBreakout = () => {
		return orderedListSlide('Scrum Team Planning Review', 'As a scrum team:', [
			`Review sprint ${sprint} activity list & assignments in detail`,
			'Discuss and identify questions/concerns',
			'Scrum master share your team’s top 2 questions/concerns during report out' ])
	}
	return [ preflightChecklist, instructorChecklist,
		agenda, prework_7_1of6, sprintPlanning, activitiesReview, activitiesBreakout, prework_7_2of6, end ]
}

const prework_7_1of6 = () => {
	return preworkSlide([
		'All Sprint 6 Assignments due Sunday!', '',
		'** Be prepared for in-person Sprint 7 Planning on Monday' 
	])
}


