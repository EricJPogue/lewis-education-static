import { getClass } from '../DataAndAPIs/Classes'

import { checklist } from './SLSprint00' // Shared slide decks.
import { preflightChecklist, instructorChecklist, submissionPercentage, end } from './SLSprint00' // Shared slides.
import { agendaSlide, orderedListSlide } from './SLSprint00' // Shared slide templates.
import { sprintDemosIntro, sprintDemos, demoAssignment  } from './SLSprint00'

export const sprint3Router = (route) => {
	const courseNumberPlusRoute = getClass().number + '-' + route
	switch(courseNumberPlusRoute) {
		case WEB_3_2of6_ROUTE: return web3_2of6()

		default: return checklist()
	}
}

const sprint = 3

// Web & Distributed Programming
const WEB_3_2of6_ROUTE = '24700-3-2'
const web3_2of6 = () => {
	const agenda = () => { 
		return agendaSlide([
			`Sprint ${sprint-1} Foreshadowing Demos`,
			`Sprint ${sprint-1} Retrospective` ])
	}
	const metricsSubmissionPercentagePrevious = () => {
		return submissionPercentage([
			{ name: 'Discussion 1', due:12, submitted:12 },
			{ name: 'Quiz 1', due:12, submitted:12 },
			{ name: 'Lab 1', due:12, submitted:11},
			{ name: 'Reflection 1', due: 12, submitted: 12 }
		])
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: `Discussion ${sprint-1}`, due:11, submitted:11 },
			{ name: `Quiz ${sprint-1}`, due:11, submitted:11 },
			{ name: `Lab ${sprint-1}`, due:11, submitted:11 },
			{ name: `Reflection ${sprint-1}`, due: 11, submitted: 11 }
		])
	}
	// Todo: Add pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			`Feedback from Sprint ${sprint-1} Assignments & Reflections`, [
			'Rockstar submission percentage!',
			'All assignments are graded and posted', 
			`You should be able to see your grades as well as correct Quiz ${sprint-1} answers` ])
	}

	return [ preflightChecklist, instructorChecklist, agenda, sprintDemosIntro, sprintDemos, demoAssignment, 
		metricsSubmissionPercentagePrevious, metricsSubmissionPercentage, retrospective, end ]
}

