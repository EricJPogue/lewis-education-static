import { getCourseNumber } from '../data/ClientDataAPIs'

import { checklist } from './SLSprint00' // Shared slide decks.
import { preflightChecklist, instructorChecklist, activitiesReview, submissionPercentage, end } from './SLSprint00' // Shared slides.
import { agendaSlide, basicSlide, orderedListSlide, preworkSlide, preworkWithActivityList } from './SLSprint00' // Shared slide templates.
import { sprintDemosIntro, sprintDemos, demoAssignment, quiz  } from './SLSprint00'

import { list20000Sprint08 } from '../ActivityLists/AL20000Sprint08'
import { list24500Sprint08 } from '../ActivityLists/AL24500Sprint08'

export const sprint8Router = (route) => {
	const courseNumberPlusRoute = getCourseNumber() + '-' + route
	switch(courseNumberPlusRoute) {
		case ICS_8_1of6_ROUTE: return ics8_1of6()
		case ICS_8_2of6_ROUTE: return ics8_2of6()
		case OOP_8_1of6_ROUTE: return oop8_1of6()
		case OOP_8_2of6_ROUTE: return oop8_2of6()
		case SE_8_1of4_ROUTE: return se8_1of4()

		default: return checklist()
	}
}

// The global sprint number.
const sprint = 8

// Introduction to Computer Science
const ICS_8_1of6_ROUTE = '20000-8-1'
const ics8_1of6 = () => { return mwfSprint8Planning(sprint, icsPrework_8_2of6) }

const ICS_8_2of6_ROUTE = '20000-8-2'
const ics8_2of6 = () => {
	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			`Sprint ${sprint-1} Demos`,
			`Sprint ${sprint-1} Retrospective`,
			`Breakout for Sprint ${sprint-1} Retrospective`,
			'Prework for Next Class', 
			`Quiz ${sprint}` ])
	}
	const prework = () => { return icsPrework_8_2of6() }
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
			'Although I have largely overcome Reflection Riddles, my new Kryptonite is Reflection “random” graphical patterns :-)',
			'... Jarrod, please no more... and what does it mean?!?!',
			'Be sure to submit your Lab Demo assignments' ])
	}
	// Todo: Create and add slide for metrics.
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			`How does your team feel about sprint ${sprint-1} now that it is over`,
			`What could be done to make sprint ${sprint-1} or the class overall better`,
			'What improvements should I make for the class going forward' ])
	}
	const quiz8 = () => { return quiz(sprint) }

	return [ preflightChecklist, instructorChecklist, agenda, prework, 
		sprintDemosIntro, sprintDemos, demoAssignment, metricsSubmissionPercentage, retrospective, retrospectiveBreakout,
		icsPrework_8_3of6, quiz8, end ]
}

// Shared between ICS sessions:
const icsPrework_8_2of6 = () => {
	return preworkWithActivityList([
		'Complete through activity 4', '',
		'Be prepared for sprint 7 demos and retrospective',
		'Be prepared for quiz 8' ], 
		list20000Sprint08, sprint)
}

const icsPrework_8_3of6 = () => {
	return preworkWithActivityList([
		'Complete through activity 6',
		'Be actively working on activity 7', '',
		'Be prepared for Lab' ], 
		list20000Sprint08, sprint)
}

// Object-Oriented Programming
const OOP_8_1of6_ROUTE = '24500-8-1'
const oop8_1of6 = () => { return mwfSprint8Planning(sprint, oopPrework_8_2of6) }

const OOP_8_2of6_ROUTE = '24500-8-2'
const oop8_2of6 = () => { 
	const replaceSlideInDeck = (deck, slide) => {
		for (let i = 0; i < deck.length; i++) {
			if (deck[i].name === slide.name) {
				deck[i] = slide
				console.log('replacing slide: '+deck[i].name)
			}
		} 
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:18, submitted:17 },
			{ name: 'Quiz', due:18, submitted:18 },
			{ name: 'Lab', due:18, submitted:18},
			{ name: 'Reflection', due: 18, submitted: 18 }
		])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Excellent submission percentage',
			'All assignments are graded and posted', 
			'Although I have largely overcome Reflection Riddles, my new Kryptonite is Reflection “random” graphical patterns',
			'... okay, and apparently humorous scrum videos... please no more Austin :-) (',
			'Be sure to submit your Lab Demo assignments' ])
	}

	let deck = ics8_2of6()
	replaceSlideInDeck(deck, metricsSubmissionPercentage)
	replaceSlideInDeck(deck, retrospective)
	return deck
}

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
			'Prework for Next Class', ])
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
const SE_8_1of4_ROUTE = '44000-8-1'
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