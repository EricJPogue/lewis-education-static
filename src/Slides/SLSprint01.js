import { getCourseNumber } from '../data/ClientDataAPIs'

import { checklist } from './SLSprint00' // Shared slide decks.
import { preflightChecklist, instructorChecklist, submissionPercentage, end } from './SLSprint00' // Shared slides.
import { agendaSlide, orderedListSlide } from './SLSprint00' // Shared slide templates.
import { sprintDemosIntro, sprintDemos, demoAssignment  } from './SLSprint00'

export const sprint1Router = (route) => {
	const courseNumberPlusRoute = getCourseNumber() + '-' + route
	switch(courseNumberPlusRoute) {
		case WEB_8_2of6_ROUTE: return web8_2of6()

		default: return checklist()
	}
}

const sprint = 2

// Web & Distributed Programming
const WEB_8_2of6_ROUTE = '24700-1-2'
const web8_2of6 = () => {
	const agenda = () => { 
		return agendaSlide([
			`Sprint ${sprint-1} Demos`,
			`Sprint ${sprint-1} Retrospective` ])
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:20, submitted:17 },
			{ name: 'Quiz', due:20, submitted:20 },
			{ name: 'Lab', due:20, submitted:19},
			{ name: 'Reflection', due: 20, submitted: 18 }
		])
	}
	// Todo: Add pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Solid if not great submission percentage',
			'All assignments are graded and posted', 
			'Although I have largely overcome riddles, my new Kryptonite is Reflection graphical patterns :-)',
			'... Jarrod, please no more... and what does it mean?!?!',
			'Be sure to submit your Lab Demo assignments' ])
	}

	return [ preflightChecklist, instructorChecklist, agenda, sprintDemosIntro, sprintDemos, demoAssignment, 
		metricsSubmissionPercentage, retrospective, end ]
}

