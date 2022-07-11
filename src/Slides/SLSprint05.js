import { getClass } from '../data/Classes'
import { preworkSlide, progressPolling, quiz, basicSlideWithTitle  } from './SLSprint00'

import { breakoutIntroducingPython6Through9 } from './Breakout'
import { al20000Sprint05 } from '../ActivityLists/AL20000Sprint05'
import { al24500Sprint05 } from '../ActivityLists/AL24500Sprint05'
import { al44000Sprint05 } from '../ActivityLists/AL44000Sprint05'

import { preflightChecklist, instructorChecklist, submissionPercentage, agendaSlide, orderedListSlide, 
	sprintDemosIntro, sprintDemos, demoAssignment, end } from './SLSprint00' // Shared slides.

export const sprint5Router = (route) => {
	const courseNumberPlusRoute = getClass().number + '-' + route
	switch(courseNumberPlusRoute) {
		case WEB_5_2of6_ROUTE: return web5_2of6()
		default: return null
	}
}

const sprint = 5

// Web & Distributed Programming
const WEB_5_2of6_ROUTE = '24700-5-2'
const web5_2of6 = () => {
	const agenda = () => { 
		return agendaSlide([
			`Sprint ${sprint-1} Foreshadowing Demos`,
			`Sprint ${sprint-1} Retrospective` ])
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: `Discussion ${sprint-1}`, due:10, submitted:8 },
			{ name: `Quiz ${sprint-1}`, due:10, submitted:10 },
			{ name: `Lab ${sprint-1}`, due:10, submitted:10 },
			{ name: `Reflection ${sprint-1}`, due: 10, submitted: 9 }
		])
	}
	// Todo: Add pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			`Feedback from Sprint ${sprint-1} Assignments & Reflections`, [
			'Very good submission percentage',
			'All assignments are graded and posted', 
			`You should be able to see your grades as well as correct Quiz ${sprint-1} answers`,
			'Reminder that I do have a philosophy of trying challenge everyone in the class... but not taking away too many points if you are not able to get the most challenging elements' ])
	}

	return [ preflightChecklist, instructorChecklist, agenda, sprintDemosIntro, sprintDemos, demoAssignment, 
		metricsSubmissionPercentage, retrospective, end ]
}

// Introduction to Computer Science Sprint 5 Session 5 of 6
export const SD20000_5_5_of_6_ROUTE = '20000-5-5-of-6'
export const sd20000Sprint5_5of6 = () => {
	const agenda5of6 = () => {
		return agendaSlide([
			'Prework',
			'Sprint Progress Polling',
			'Breakout on Loops, Tuples, Lists, Dictionaries, Sets, and Functions',
			'Prework for Next Class',
			'Quiz 5' ])
	}
	const breakout = () => { return breakoutIntroducingPython6Through9() }
	const quiz5 = () => { return quiz(5) }
	return { sprint: 5, startingSlide: 2,
		slideFunctionList: [ preflightChecklist, instructorChecklist, 
			agenda5of6, preworkICS5of6, progressPolling, breakout, preworkICS6of6, quiz5, end ]
	}
}

const preworkICS5of6 = () => {
	return preworkSlide([
		'Complete through activity 10', '',
		'Be prepared for Quiz 5'])
}

// Introduction to Computer Science Sprint 5 Session 6 of 6
export const SD20000_5_6_of_6_ROUTE = '20000-5-6-of-6'
export const sd20000Sprint5_6of6 = () => {
	const agenda = () => {
		return agendaSlide([
			'Prework',
			'Sprint Progress Polling',
			'Lab',
			'Prework for Next Class' ])
	}
	const lab = () => { 
		return basicSlideWithTitle( 'Lab', [
			'Final Project Proposals',
			'Continue Programming Together with TurtleDraw',
			'Review Lab 5 assignment' ]) 
	}
	return { sprint: 5, startingSlide: 2,
		slideFunctionList: [ preflightChecklist, instructorChecklist, 
			agenda, preworkICS6of6, al20000Sprint05, progressPolling, lab, preworkICS7of6, end ]
	}
}

const preworkICS6of6 = () => {
	return preworkSlide([
		'Complete through activity 11', '',
		'Be prepared for Lab'])
}

const preworkICS7of6 = () => {
	return preworkSlide([
		'All Sprint 5 Assignments due Sunday!', '',
		'Be prepared for Sprint 6 Planning on Monday' ])
}

// Object-Oriented Programming Sprint 5 Session 5 of 6 for 
export const SD24500_5_5_of_6_ROUTE = '24500-5-5-of-6'
export const sd24500Sprint5_5of6 = () => {
	const agenda5of6 = () => {
		return agendaSlide([
			'Prework',
			'Sprint Progress Polling',
			'Lab',
			'Prework for Next Class',
			'Quiz 5' ])
	}
	const lab = () => { 
		return basicSlideWithTitle('Lab', [
			'Continue Programming Together of Node.js including JSON review',
			'Review SwissArmyKnife lite and Help system requirements',
			'Review Lab 5 assignment' ]) 
	}
	const quiz5 = () => { return quiz(5) }
	return { sprint: 5, startingSlide: 2,
		slideFunctionList: [ preflightChecklist, instructorChecklist, 
			agenda5of6, preworkOOP5of6, al24500Sprint05, progressPolling, lab, preworkOOP6of6, quiz5, end ]
	}
}

const preworkOOP5of6 = () => {
	return preworkSlide([
		'Complete through activity 13', '',
		'Be prepared for Quiz 5'])
}


// Object-Oriented Programming Sprint 5 Session 6 of 6
export const SD24500_5_6_of_6_ROUTE = '24500-5-6-of-6'
export const sd24500Sprint5_6of6 = () => {
	const agenda = () => {
		return agendaSlide([
			'Prework',
			'Sprint Progress Polling',
			'Lab',
			'Prework for Next Class' ])
	}
	const lab = () => { 
		return basicSlideWithTitle('Lab', [
			'Continue Programming Together of Node.js including JSON review',
			'More SwissArmyKnife lite',
			'Review Lab 5 assignment' ]) 
	}

	console.log(SD24500_5_6_of_6_ROUTE)
	return { sprint: 5, startingSlide: 2,
		slideFunctionList: [ preflightChecklist, instructorChecklist, 
			agenda, preworkOOP6of6, al24500Sprint05, progressPolling, lab, preworkOOP7of6, end ]
	}
}

const preworkOOP6of6 = () => {
	return preworkSlide([
		'Complete through activity 14', '',
		'Be prepared for Lab'])
}

const preworkOOP7of6 = () => {
	return preworkSlide([
		'All Sprint 5 Assignments due Sunday!', '',
		'Be prepared for Sprint 6 Planning on Monday' ])
}

// Software Engineering Sprint 5 Session 4 of 4
export const SD44000_5_4_of_4_ROUTE = '44000-5-4-of-4'
export const sd44000Sprint5_4of4 = () => {
	const agenda4of4 = () => {
		return agendaSlide([
			'Prework',
			'Sprint 6 Planning Expectations', 
			'Backlog Grooming in Preparation for Tuesday’s Sprint 6 Sprint Planning',
			'Lab... as time allows',
			'Prework for Next Class' ])
	}
	const planningExpectations = () => { return basicSlideWithTitle('Sprint 6 Planning Expectations', [
			'Review Blackboard Announcement from this morning.' ]) 
	}
	const lab = () => { return basicSlideWithTitle('Lab', [
			'Continue working in scrum teams on Sprint 5 assignments' ]) 
	}
	const backlogGrooming = () => {
		return basicSlideWithTitle('Backlog Grooming', [
			'Backlog Grooming in Preparation for Tuesday’s Sprint 6 Sprint Planning', '',
			'** Goal: Each team member needs to provide Product Owner at least two valid user stories prior to class on Tuesday' ]) 
	}
	return { sprint: 5, startingSlide: 2,
		slideFunctionList: [ preflightChecklist, instructorChecklist, 
			agenda4of4, preworkSE4of4, al44000Sprint05, planningExpectations, backlogGrooming, lab, preworkSE5of4, end ]
	}
}

const preworkSE4of4 = () => {
	return basicSlideWithTitle('Prework for Today', [
		'Complete through activity 11 and working on 12', '',
		'Be prepared for Sprint 6 Backlog Grooming',
		'Be prepared for Breakout Session on Software Metrics', 
		'Be prepared for Lab' ])
}

const preworkSE5of4 = () => {
	return basicSlideWithTitle('Prework for Today', [
		'All Sprint 5 Assignments due Sunday!', '',
		'** Be prepared for in-person Sprint 6 Planning on Tuesday' ])
}