import { getCourseNumber } from '../data/ClientDataAPIs'
import { checklist } from './SLSprint00' // Shared slide decks.
import { preflightChecklist, instructorChecklist, submissionPercentage, end } from './SLSprint00' // Shared slides.
import { agendaSlide, orderedListSlide } from './SLSprint00' // Shared slide templates.
import { sprintDemosIntro, sprintDemos, demoAssignment  } from './SLSprint00'

export const sprint4Router = (route) => {
	const courseNumberPlusRoute = getCourseNumber() + '-' + route
	switch(courseNumberPlusRoute) {
		case WEB_4_2of6_ROUTE: return web4_2of6()

		default: return checklist()
	}
}

const sprint = 4


// Web & Distributed Programming
const WEB_4_2of6_ROUTE = '24700-4-2'
const web4_2of6 = () => {
	const agenda = () => { 
		return agendaSlide([
			`Sprint ${sprint-1} Foreshadowing Demos`,
			`Sprint ${sprint-1} Retrospective` ])
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: `Discussion ${sprint-1}`, due:10, submitted:10 },
			{ name: `Quiz ${sprint-1}`, due:10, submitted:10 },
			{ name: `Lab ${sprint-1}`, due:10, submitted:10 },
			{ name: `Reflection ${sprint-1}`, due: 10, submitted: 10 }
		])
	}
	// Todo: Add pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			`Feedback from Sprint ${sprint-1} Assignments & Reflections`, [
			'Rockstar submission percentage! Yet again!',
			'All assignments are graded and posted', 
			`You should be able to see your grades as well as correct Quiz ${sprint-1} answers`,
			'Sprint 3 was a little more challenging than I had intended',
			'I do have a philosophy of trying challenge everyone in the class... but not taking away too many points if you are not able to get the most challenging elements' ])
	}

	return [ preflightChecklist, instructorChecklist, agenda, sprintDemosIntro, sprintDemos, demoAssignment, 
		metricsSubmissionPercentage, retrospective, end ]
}

