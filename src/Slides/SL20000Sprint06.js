import { getClassSection } from '../DataAndAPIs/ClassSections'

import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'
import { xyz_n_2of6, xyz_n_3of6, xyz_n_6of6 } from './SL00000Sprint00'
import { submissionPercentage, orderedListSlide, breakoutStandard } from './SLSprint00'
import { ics_7_1of6_PAaA } from './SL20000Sprint07'

import { tPrework } from './SLSprint00'
import { checklistAnnouncementsPreworkAndAgenda, tLab, completeDeck } from './SL00000Sprint00'


import { list20000Sprint05 } from '../ActivityLists/AL20000Sprint05'
import { list20000Sprint06 } from '../ActivityLists/AL20000Sprint06'

import { tQuiz } from './SLSprint00'

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
			'We will complete our scrum team Discussion Board breakout session on Wednesday',
			`We will have sprint ${sprint-1} Demos and Retrospective on Friday` ])
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
		'Registration for Sprint 2024 begins Monday, November 13th and continues through November 17',
		'Summer 2024 courses begins Tuesday, November 28th' ],
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
		'Complete through activity 8 prior to next class', '',
		`Be prepared sprint ${sprint-1} Demos and Retrospectives` ],
	'announcements':[ 
		'Registration starts next week' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}

export const ics_6_3of6 = () => {
	const metricsSubmissionPercentage = () => {
		if (getClassSection() === '002') {
			return submissionPercentage([
				{ name: 'Discussion', due:27, submitted:26 },
				{ name: 'Quiz', due:27, submitted:27 },
				{ name: 'Lab', due:27, submitted:25 },
				{ name: 'Reflection', due: 27, submitted: 25 }])
		}
		else {
			return submissionPercentage([
				{ name: 'Discussion', due:24, submitted:23 },
				{ name: 'Quiz', due:24, submitted:23 },
				{ name: 'Lab', due:24, submitted:23 },
				{ name: 'Reflection', due: 24, submitted: 23 }])
		}
	}
	const retrospective = () => {
		if (getClassSection() === '002') {
			return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'A little week on our submission percentage',
			'I still owe you two sets of treats',
			'Not all assignments are graded', 
			'Programming assignment was challenging', 
			'Very nice work!' ])
		} else {
			return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
				'A little week on our submission percentage',
				'Not all assignments are graded', 
				'Programming assignment was challenging', 
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
		'Sprint Progress Poll',
		'Artificial Intelligence Breakout',
		'Prework for Next Class',
		'Lab & Programming Together (as time allows)',
		`Quiz ${sprint}` ]
}
export const ics_6_4of6 = () => {
	const aIbreakout = () => { 
		return breakoutStandard( 
			'Breakout: Artificial Intelligence', 
			'In this breakout will discuss Artificial Intelligence (reading and lecture):', [
			'Thinking Machines',
			'Knowledge Representation and Data Quality',
			'Expert Systems',
			'Neural Networks',
			'Natural Language Processing',
			'Robotics' ])
	}
	const poll = () => { return tPrework('Sprint Progress Polling', ics_6_4of6_PAaA.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_6_5of6_PAaA.prework, sprint, activityList) }


	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_6_4of6_PAaA, sprint, activityList)
	return completeDeck(slideDeck, [poll, aIbreakout, preworkNext, tLab])
}

// Session 5 of 6: Wednesday
const ics_6_5of6_PAaA = {
	'prework':[
		'Complete through activity 13', '',
		'Be prepared for Lab',
		`Be prepared for Quiz ${sprint}` ],
	'announcements':[ 
		'Registration, registration, and more registration' ],
	'agenda':[
		'Lab',
		`Quiz ${sprint}` ]
}
export const ics_6_5of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_6_5of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', ics_6_5of6_PAaA.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_6_6of6_PAaA.prework, sprint, activityList) }
	const quiz = () => { return tQuiz(sprint) }

	return 	completeDeck(slideDeck, [ poll, tLab, /*programmingTogetherWithTurtleDraw,*/ preworkNext, quiz ])
}

// Session 6 of 6: Friday
const ics_6_6of6_PAaA = {
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[
		'Complete through activity 12', '',
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		'Sprint Progress Polling',
		'Lab & Programming Together' ]
}
export const ics_6_6of6 = () => { return xyz_n_6of6(sprint, ics_6_6of6_PAaA, ics_7_1of6_PAaA.prework, activityList) }