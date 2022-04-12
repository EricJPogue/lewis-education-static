import { defaultDeck, checklist, CHECKLIST_ROUTE } from './SLSprint00' // Shared slide decks.
import { preflightChecklist, instructorChecklist, activitiesReview, submissionPercentage, end } from './SLSprint00' // Shared slides.
import { agendaSlide, basicSlide, orderedListSlide, preworkSlide, preworkWithActivityList } from './SLSprint00' // Shared slide templates.
import { syllabus } from './syllabus'

import { list20000Sprint07 } from '../ActivityLists/AL20000Sprint07'
import { list24500Sprint07 } from '../ActivityLists/AL24500Sprint07'
// import { list44000Sprint07 } from '../ActivityLists/AL44000Sprint07'

export const sprint7Router = (route) => {
	switch(route) {
		case CHECKLIST_ROUTE: return checklist()

		case ICS_7_1of6_ROUTE: return ics7_1of6()
		case OOP_7_1of6_ROUTE: return oop7_1of6()
		case SE_7_1of4_ROUTE: return se7_1of4()

		case 'syllabus': return syllabus()

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

// Software Engineering
const SE_7_1of4_ROUTE = 'se7-1of4'
const se7_1of4 = () => {
	const sprint = 7

	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			`Sprint ${sprint-1} Retrospective - Class`,
			`Sprint ${sprint-1} Scrum Team Retrospective plus Backlog Grooming Review - Breakout`,
			`Sprint ${sprint} Planning - Class`,
			'Review Backlog Grooming',
			`Breakout on Sprint ${sprint} Planning`,
			`Sprint ${sprint} Planning - Scrum Team`,
			'Prework for Next Class' ])
	}
	const retrospective = () => {
		return basicSlide(`Sprint Retrospective - Class`, [
			`Today’s sprint ${sprint-1} retrospective will be abbreviated to make additional time for Sprint ${sprint} planning.` ])
	}

	const metrics = () => {
		return basicSlide(`Sprint ${sprint-1} Metrics`, [
			`Let’s take a minute and review our Sprint ${sprint-1} Submission Percentage class metric.` ])
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:21, submitted:21 },
			{ name: 'Quiz', due:21, submitted:21 },
			{ name: 'Lab', due:21, submitted:20},
			{ name: 'Reflection', due: 21, submitted: 20 }
		])
	}
	const classRetrospective = () => {
		return orderedListSlide('Class Retrospective',
			`Feedback from Sprint ${sprint-1} Assignments & Reflections`, [
			'Solid submission percentage',
			'All assignments are graded and posted including Sprint (Lab) Demos', 
			`Remember that if you are not able to participate in our Friday team Discussion, you still need to
				make your initial post by Sunday and respond back to two of your classmates’ posts`,
			'Recall definition of "done" requirements',
			'Recall stories are "done" or "not done"',
			'Recall say/do ratio is a percentage of stories "done" divided by stories committed' ])
	}
	const reviewBacklogGrooming = () => {
		return basicSlide('Scrum Team Retrospective plus Backlog Grooming Review - Breakout', [
			`Complete your scrum team sprint ${sprint} retrospective plus your team Backlog Groom review.`]) 
	}
	const sprintPlanning = () => {
		return orderedListSlide(`Sprint Planning`, `Sprint ${sprint} Changes:`, [
			'Similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
			`We will try to complete Sprint ${sprint} Planning and Discussion ${sprint} today`,
			'Easter break and no classes Thursday through Monday will make the sprint a bit challenging'
		])
	}
	const sprint6Planning = () => {
		return basicSlide(`Sprint ${sprint}  Planning`, [
			`Complete sprint ${sprint} planning including final team and individual sprint ${sprint} backlog commitments.`,
			'And Discussion 7']) 
	}

	return [ preflightChecklist, instructorChecklist, agenda, prework_7_1of6, retrospective, metrics, metricsSubmissionPercentage, classRetrospective,
		reviewBacklogGrooming, sprintPlanning, activitiesReview, preworkSE7_3of4, sprint6Planning, end ]
}

const preworkSE7_3of4 = () => {
	return basicSlide('Prework', [
		'Complete through activity 8', '',
		'Be prepared Breakout on Design Patterns',
		'Be prepared for Quiz 7' ])
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


