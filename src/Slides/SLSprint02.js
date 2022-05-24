import { getCourseNumber } from '../data/ClientDataAPIs'
import { checklist } from './SLSprint00' // Shared slide decks.
import { preflightChecklist, instructorChecklist, submissionPercentage, end } from './SLSprint00' // Shared slides.
import { basicSlideWithTitleLink, agendaSlide, orderedListSlide } from './SLSprint00' // Shared slide templates.
import { sprintDemosIntro, sprintDemos, demoAssignment  } from './SLSprint00'

export const sprint2Router = (route) => {
	const courseNumberPlusRoute = getCourseNumber() + '-' + route
	console.log(courseNumberPlusRoute)
	switch(courseNumberPlusRoute) {
		case WEB_8_2of6_ROUTE: return web8_2of6()

		default: return checklist()
	}
}

const sprint = 2

// Web & Distributed Programming
const WEB_8_2of6_ROUTE = '24700-2-2'
const web8_2of6 = () => {
	const agenda = () => { 
		return agendaSlide([
			`Sprint ${sprint-1} Demos`,
			`Sprint ${sprint-1} Retrospective` ])
	}
	const metricsIntroductionWithLink = () => {
		return basicSlideWithTitleLink('Rule #9 (Metrics)', 'https://bobparsons.com/16-rules/', [ '',
			'“Measure Everything of Significance. Anything that is measured and watched, improves.',
			'I swear this is true. Anything that is measured and watched, improves.”', '',
			'- Bob Parsons'
		])
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:12, submitted:12 },
			{ name: 'Quiz', due:12, submitted:12 },
			{ name: 'Lab', due:12, submitted:11},
			{ name: 'Reflection', due: 12, submitted: 12 }
		])
	}
	// Todo: Add pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			`Feedback from Sprint ${sprint-1} Assignments & Reflections`, [
			'Rockstar submission percentage!',
			'All assignments are graded and posted', 
			'You should be able to see your grades as well as correct answers to Quiz 1 questions', 
			'Sorry about Lab 1 Question 2 about scrum teams... I should have removed that question for an online class' ])
	}

	// BugBug: Something is wrong with metricsIntroductionWithLink as we have a warning in developer tools.
	return [ preflightChecklist, instructorChecklist, agenda, sprintDemosIntro, sprintDemos, demoAssignment, 
		metricsIntroductionWithLink,  metricsSubmissionPercentage, retrospective, end ]
}

