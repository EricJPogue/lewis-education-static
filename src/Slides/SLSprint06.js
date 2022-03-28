import { agendaSlide, end } from './SLSprint00'
import { preflightChecklist, instructorChecklist, prework, orderedListSlide, basicSlide } from './SLSprint00'

export const sprint6Router = (route) => {
	switch(route) {
		case ICS_6_1of6_ROUTE: return ics6_1of6()
		case OOP_6_1of6_ROUTE: return oop6_1of6()
		default: return null
	}
}

// Session 1 of 6
const ICS_6_1of6_ROUTE = 'ics6-1of6'
const ics6_1of6 = () => {
	const agenda = () => {
		return agendaSlide([
			'Prework',
			'Sprint 6 Planning',
			'Breakout on Sprint 6 Planning',
			'Review Demo Schedule for Wednesday',
			'Prework for Next Class' ])
	}
	const prework_5_7of6 = () => {
		return prework([
			'All Sprint 5 Assignments due Sunday!', '',
			'Be prepared for Sprint 6 Planning on Monday' ])
	}
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', 'Sprint 6 Changes:', [
			'Very similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
			'Also very similar with sprint 5 demos on Wednesday and Discussion on Friday' ])
	}
	const activitiesReview = () => {
		return basicSlide('Review Activity List and Assignments', [
			'Please open Blackboard and review our activity list and assignments together.' ])
	}
	const activitiesBreakout = () => {
		return orderedListSlide('Scrum Team Planning Review', 'As a scrum team:', [
			'Review sprint 6 activities & assignments in detail',
			'Discuss and identify questions/concerns',
			'Scrum master share your team’s top 2 questions/concerns during report out' ])
	}
	return [ preflightChecklist, instructorChecklist, agenda, prework_5_7of6, sprintPlanning, activitiesReview, activitiesBreakout, end ]
}

const OOP_6_1of6_ROUTE = 'oop6-1of6'
const oop6_1of6 = () => { return ics6_1of6() }

