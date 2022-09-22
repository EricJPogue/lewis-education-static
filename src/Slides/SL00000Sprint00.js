
import { preflightChecklist, instructorChecklist, basicSlide, end } from './SLSprint00'
import { agendaSlide, orderedListSlide, bulletListSlide, basicSlideWithLogo, tPreworkWithLogo, tPrework } from './SLSprint00'

export const makeSlideDeck = (slides) => { return [ preflightChecklist, instructorChecklist ].concat(slides).concat(end) }

export const xyz_n_1of6 = (sprint, preworkList, activityListPrevious, agendaList, preworkListNext, activityList) => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', preworkList, sprint-1, activityListPrevious) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ['Let’s stay 100% focused on sprint planning today']) }
	const agenda = () => { return agendaSlide(agendaList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', preworkListNext, sprint, activityList) }

	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
			`We will have sprint ${sprint-1} Demos and Retrospective on Wednesday`,
			'We will complete our scrum team Discussion Board breakout session on Friday'
		])
	}
	const activitiesReview = () => {
		return basicSlide('Activity List and Assignments Review', [
			'Let’s open our Blackboard shell and review the activity list and assignments together.' ])
	}
	const planningBreakout = () => {
		return orderedListSlide('Sprint Planning Scrum Team Breakout', 'As a scrum team:', [
			`Review sprint ${sprint} activity list & assignments in detail`,
			'Discuss and identify questions/concerns',
			'Scrum master report out by sharing scrum team’s top 2 or 3 questions/concerns' ])
	}
	const reviewDemoSchedule = () => {
		return bulletListSlide('Review Wednesday’s Demo Schedule', 
			'Let’s review Wednesday’s demo schedule while recalling that demos are an important part of scrum and that they:', [
			'Occur at the beginning of each new sprint ',
			'Are an opportunity to show what was completed in the previous sprint',
			'Are an **easy** and hopefully rewarding experience to show off your work',
			'Provide a chance to see how others solved a problem and to see some of the challenges they faces' ])
	}

	return makeSlideDeck([ prework, announcements, agenda, sprintPlanning, activitiesReview, planningBreakout, reviewDemoSchedule, preworkNext ])
}
