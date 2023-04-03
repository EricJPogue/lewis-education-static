import { getClass } from '../DataAndAPIs/Classes'

import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'
import { xyz_n_2of6, xyz_n_3of6, xyz_n_5of6, xyz_n_6of6 } from './SL00000Sprint00'
import { submissionPercentage, orderedListSlide, breakoutStandard } from './SLSprint00'
import { tQuiz } from './SLSprint00'
import { ics_7_1of6_PAaA } from './SL20000Sprint07'

import { tPrework } from './SLSprint00'
import { checklistAnnouncementsPreworkAndAgenda, tLab, completeDeck } from './SL00000Sprint00'


import { list20000Sprint05 } from '../ActivityLists/AL20000Sprint05'
import { list20000Sprint06 } from '../ActivityLists/AL20000Sprint06'

// Introduction to Computer Science (ICS) sprint 6 global values.
const sprint = 6
const activityListPrevious = () => { return list20000Sprint05(sprint-1) }
const activityList = () => { return list20000Sprint06(sprint) }

// Sprint 6 session 1 of 6: Monday
export const ics_6_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const ics_6_1of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning as a Class', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprints with Discussion, Quiz, Lab, and Reflection',
			'The Easter Holiday Recess will cause us a a few scheduling challenges',
			'We will complete our scrum team Discussion Board breakout session on Wednesday',
			'Demos and Retrospectives Friday',
			`We will have sprint ${sprint-1} Demos and Retrospective on Friday`,
			'You will have until the end of the day Monday, April 10th to submit assignments' ])
	}

	return xyz_n_1of6(sprint, ics_6_1of6_PAaA.prework, activityListPrevious, ics_6_1of6_PAaA.agenda, ics_6_2of6_PAaA.prework, activityList, sprintPlanning) 
}

// Session 2 of 6: Wednesday
const ics_6_2of6_PAaA = {
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'announcements':[ 
		'Registration for Fall 2023 starts April 11' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const ics_6_2of6 = () => { return xyz_n_2of6(sprint, ics_6_2of6_PAaA, ics_6_3of6_PAaA.prework, activityList) }

// Session 3 of 6: Friday
const ics_6_3of6_PAaA = {
	'prework':[
		'Complete through activity 7 prior to next class', '',
		`Be prepared sprint ${sprint-1} Demos and Retrospectives` ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}

export const ics_6_3of6 = () => {
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:13, submitted:13 },
			{ name: 'Quiz', due:13, submitted:13 },
			{ name: 'Lab', due:13, submitted:12 },
			{ name: 'Reflection', due: 13, submitted: 13 }])
	}
	const retrospective = () => {
		if (getClass().section === '002') {
			return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Solid submission percentage... well done.',
			'Not all assignments are graded', 
			'Multiple Reflection comments about successfully getting started earlier', 
			'Very nice work!' ])
		} else {
			return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Wonderful submission percentage... very well done!',
			'Assignments are graded and posted', 
			'Multiple Reflection comments about successfully getting started earlier', 
			'Very nice work!' ])
		}
	}
	return xyz_n_3of6(sprint, ics_6_3of6_PAaA, ics_6_4of6_PAaA.prework, activityList, metricsSubmissionPercentage, retrospective)
}

// Session 4 of 6: Monday
const ics_6_4of6_PAaA = {
	'prework':[
		'Complete through activity 10 prior to next class', '',
		'Be prepared for World Wide Web breakout' ],
	'announcements':[ 
		`All sprint ${sprint} assignments due “Sunday”! ... grace period until Tuesday morning at 6 AM`,
		'Sprint 7 Planning will be next Wednesday' ],
	'agenda':[
		'World Wide Web Breakout',
		'Prework for Next Class',
		'Lab & Programming Together (as time allows)',
		`Quiz ${sprint}` ]
}
export const ics_6_4of6 = () => {
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: The World Wide Web', 
			'In this breakout session we will explore The World Wide Web:', [
				'The Internet vs. The World Wide Web plus HTML, CSS, and Javascript',
				'HTTP, SSL, HTTPs, and DNS',
				'Java Applets, Java Servlets, and Java Server Pages',
				'XML, DTDs, and JSON',
				'Search Engines, Social Networks, Cookies, Web Analytics, and Web 3.0',
				'Where does ChatGPT fit into this?' ]
		)
	}
	const poll = () => { return tPrework('Sprint Progress Polling', ics_6_4of6_PAaA.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_6_5of6_PAaA.prework, sprint, activityList) }
	const quiz = () => { return tQuiz(sprint) }

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_6_4of6_PAaA, sprint, activityList)
	return completeDeck(slideDeck, [poll, breakout, preworkNext, tLab, quiz])
}

// Session 5 of 6: Wednesday
const ics_6_5of6_PAaA = {
	'prework':[
		'Complete through activity 11', '',
		'Be prepared for Programming Together with Matchmaker for the Web',
		`Be prepared for Quiz ${sprint}` ],
	'announcements':[ 
		'Any announcements or questions?' ],
	'agenda':[
		'Sprint Progress Polling',
		'Lab & Programming Together with Matchmaker for the Web',
		`Quiz ${sprint}` ]
}
export const ics_6_5of6 = () => { return xyz_n_5of6(sprint, ics_6_5of6_PAaA, ics_6_6of6_PAaA.prework, activityList) }

// Session 6 of 6: Friday
const ics_6_6of6_PAaA = {
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[
		'Complete through activity 12', '',
		'Be prepared for Programming Together with Matchmaker for the Web' ],
	'agenda':[
		'Sprint Progress Polling',
		'Lab & Programming Together with Matchmaker for the Web and Final Project Proposals' ]
}
export const ics_6_6of6 = () => { return xyz_n_6of6(sprint, ics_6_6of6_PAaA, ics_7_1of6_PAaA.prework, activityList) }