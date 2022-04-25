import { getCourseNumber } from '../data/ClientDataAPIs'

import { checklist } from './SLSprint00' // Shared slide decks.

import { preflightChecklist, instructorChecklist, activitiesReview, end } from './SLSprint00' // Shared slides.
import { agendaSlide, orderedListSlide, preworkSlide, preworkWithActivityList } from './SLSprint00' // Shared slide templates.

import { list20000Sprint08 } from '../ActivityLists/AL20000Sprint08'
import { list24500Sprint08 } from '../ActivityLists/AL24500Sprint08'

export const sprint8Router = (route) => {
	const courseNumberPlusRoute = getCourseNumber() + '-' + route
	switch(courseNumberPlusRoute) {
		case ICS_8_1of6_ROUTE: return ics8_1of6()

		case OOP_8_1of6_ROUTE: return oop8_1of6()

		default: return checklist()
	}
}

const sprint = 8

// Introduction to Computer Science
const ICS_8_1of6_ROUTE = '20000-8-1of6'
const ics8_1of6 = () => { return mwfSprint8Planning(sprint, icsPrework_8_2of6) }

// Shared between ICS sessions:
const icsPrework_8_2of6 = () => {
	return preworkWithActivityList([
		'Complete through activity 4', '',
		'Be prepared for sprint 7 demos and retrospective',
		'Be prepared for quiz 8' ], 
		list20000Sprint08, sprint)
}

// Object-Oriented Programming
const OOP_8_1of6_ROUTE = '24500-8-1of6'
const oop8_1of6 = () => { return mwfSprint8Planning(sprint, oopPrework_8_2of6) }

// Shared between ICS sessions:
const oopPrework_8_2of6 = () => {
	return preworkWithActivityList([
		'Complete through activity 4', '',
		'Be prepared for sprint 7 demos and retrospective',
		'Be prepared for quiz 8' ], 
		list24500Sprint08, sprint)
}

export const mwfSprint8Planning = (sprint, prework_2of6) => {
	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			`Sprint ${sprint} Planning`,
			`Breakout on Sprint ${sprint} Planning`,
			'Review Demo Schedule',
			'Prework for Next Class' ])
	}
	const prework_1of6 = () => {
		return preworkSlide([
			`All Sprint ${sprint-1} Assignments due Sunday!`, '',
			`Be prepared for Sprint ${sprint} Planning on Monday`
		])
	}
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', `Sprint ${sprint} is substantially different from previous sprints in that:`, [
			`Next week is finals week so there are no regular class sessions during our second week of sprint ${sprint}`,
			'All assignments are due Thursday next week with no late assignments accepted',
			`Your first sincere attempt at Quiz ${sprint} is due in class on Wednesday`,
			`There will be no Discussion ${sprint}`,
			`Your final project presentation assignment is due at least 2 hours before your scheduled presentation time`
		])
	}
	
	const activitiesBreakout = () => {
		return orderedListSlide('Scrum Team Planning Review', 'As a scrum team:', [
			`Review sprint ${sprint} activity list & assignments in detail`,
			'Discuss and identify questions/concerns',
			'Scrum master share your team’s top 2 questions/concerns during report out' ])
	}
	return [ preflightChecklist, instructorChecklist,
		agenda, prework_1of6, sprintPlanning, activitiesReview, activitiesBreakout, prework_2of6, end ]
}