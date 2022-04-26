import { getCourseNumber } from '../data/ClientDataAPIs'

import { checklist } from './SLSprint00' // Shared slide decks.
import { preflightChecklist, instructorChecklist, activitiesReview, submissionPercentage, end } from './SLSprint00' // Shared slides.
import { agendaSlide, basicSlide, orderedListSlide, preworkSlide, preworkWithActivityList } from './SLSprint00' // Shared slide templates.

import { list20000Sprint08 } from '../ActivityLists/AL20000Sprint08'
import { list24500Sprint08 } from '../ActivityLists/AL24500Sprint08'

export const sprint8Router = (route) => {
	const courseNumberPlusRoute = getCourseNumber() + '-' + route
	switch(courseNumberPlusRoute) {
		case ICS_8_1of6_ROUTE: return ics8_1of6()
		case OOP_8_1of6_ROUTE: return oop8_1of6()
		case SE_8_1of4_ROUTE: return se8_1of4()

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

// Software Engineering
const SE_8_1of4_ROUTE = '44000-8-1of4'
const se8_1of4 = () => {
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
	const prework = () => { return preworkSE8_1of4(sprint) }
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
			{ name: 'Discussion', due:22, submitted:22 },
			{ name: 'Quiz', due:22, submitted:22 },
			{ name: 'Lab', due:22, submitted:20},
			{ name: 'Reflection', due: 22, submitted: 21 }
		])
	}
	const classRetrospective = () => {
		return orderedListSlide('Class Retrospective',
			`Feedback from Sprint ${sprint-1} Assignments & Reflections`, [
			'Solid submission percentage',
			'Two missing Labs does not feel good at this point in the semester', 
			'All assignments are graded and posted including Sprint (Lab) Demos', 
			'Recall say/do ratio is a percentage of stories "done" divided by stories committed' ])
	}
	const reviewBacklogGrooming = () => {
		return basicSlide('Scrum Team Retrospective plus Backlog Grooming Review - Breakout', [
			`Complete your scrum team sprint ${sprint-1} retrospective plus your team Backlog Groom review.`,
			'Note that you should complete your team Review/Demos separately.' ]) 
	}
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', `Sprint ${sprint} is substantially different from previous sprints in that:`, [
			`Next week is finals week so there are no regular class sessions during our second week of sprint ${sprint}`,
			'All assignments are due Thursday next week with no late assignments accepted',
			`Your first sincere attempt at Quiz ${sprint} is due in class on Thursday`,
			`There will be no Discussion ${sprint}`,
			`Your final project presentation assignment is due at least 2 hours before your scheduled presentation time`,
			'No backlog grooming for next sprint'
		])
	}
	const teamSprintPlanning = () => {
		return basicSlide(`Sprint ${sprint} Planning`, [
			`Complete sprint ${sprint} planning including final team and individual sprint ${sprint} backlog commitments`,
			'And complete your Final Project Presentation assignment']) 
	}
	const preworkForNextClass = () => { return preworkSE8_2of4(sprint) }

	return [ preflightChecklist, instructorChecklist, agenda, prework, retrospective, metrics, metricsSubmissionPercentage, classRetrospective,
		reviewBacklogGrooming, sprintPlanning, activitiesReview, preworkForNextClass, preworkSE8_2of4, teamSprintPlanning, end ]
}

const preworkSE8_1of4 = (sprint) => {
	return basicSlide('Prework', [
		`All Sprint ${sprint-1} Assignments due Sunday!`, '',
		`** Be prepared for in-person Sprint ${sprint} Planning on Tuesday` ])
}

const preworkSE8_2of4 = (sprint) => {
	return preworkWithActivityList([
		'Complete through activity 5', '',
		'Be prepared for Quiz 8',
		'Be prepared for Lab' ], 
		list20000Sprint08, sprint)
}