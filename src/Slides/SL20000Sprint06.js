import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'
import { xyz_n_3of6, xyz_n_6of6 } from './SL00000Sprint00'
import { submissionPercentage, orderedListSlide, breakoutStandard } from './SLSprint00'
import { ics_7_1of6_PAaA } from './SL20000Sprint07'

import { tPrework } from './SLSprint00'
import { checklistAnnouncementsPreworkAndAgenda, tLab, completeDeck } from './SL00000Sprint00'


import { list20000Sprint05 } from '../ActivityLists/AL20000Sprint05'
import { list20000Sprint06 } from '../ActivityLists/AL20000Sprint06'

import { tQuiz } from './SLSprint00'
import { tDiscussionBreakout } from './SLSprint00'
import { insertInto } from './SLSprintPlanning'

// Todo:
//		'YouTube, Eric’s Trip to Google, The Social Dilemma, and Technology Business Models',
// theSocialDilemma, 

/*
const programmingTogetherWithTurtleDraw = () => {
	return bulletListSlide('Lab & Programming Together', 
		'How can we best make progress on TurtleDraw?', [
		'Review the differences between TurtleDraw Lite and TurtleDraw',
		'Implementing a README.md and LICENSE file in GitHub', 
		'Added TurtleDraw.py file', 
		'Pushed the updated files to GitHub',
		'Start working on TurtleDraw' ])
}

, programmingTogetherWithTurtleDraw
*/

/*programmingTogetherWithTurtleDraw,*/
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

export const ics_6_2of6_PAaA = xyz_n_1of6_lists(sprint)
export const xyz_6_2of6SprintPlanning = () => {
	return orderedListSlide('Sprint Planning', `Sprint ${sprint} Expectations:`, [
		'Similar to previous sprints with Discussion, Quiz, Lab, and Reflection',
		'Having a holiday on Monday set us back a bit',
		'We will complete our scrum team Discussion Board breakout session on Friday',
		`We will also have sprint ${sprint-1} Demos and Retrospective on Friday`,
		'Recall that sprint 7 and 8 will be different' ])
}
export const ics_6_2of6 = () => { return xyz_n_1of6(sprint, ics_6_2of6_PAaA.prework, activityListPrevious, ics_6_2of6_PAaA.agenda, ics_6_3of6_PAaA.prework, activityList, xyz_6_2of6SprintPlanning) }

// Session 3 of 6: Friday
const ics_6_3of6_PAaA = {
	'prework':[
		'Complete through activity 8 prior to next class', '',
		`Be prepared sprint ${sprint-1} Demos and Retrospectives`,
		'Be prepared for Discussion 6 as a team' ],
	'announcements':[ 
		'Registration starts next week' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Skipping or Breakout for Sprint ${sprint-1} Retrospective`,
		`Discussion 6`,
		'Prework for Next Class' ]
}

export const ics_6_3of6 = () => {
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:15, submitted:14 },
			{ name: 'Quiz', due:15, submitted:14 },
			{ name: 'Lab', due:15, submitted:13 },
			{ name: 'Reflection', due:15, submitted:14 }])
	}
	const retrospective = () => {
			return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
				'A little week on our submission percentage',
				'Not all assignments are graded', 
				'Programming assignment was challenging', 
				'Very nice work!' ])
	}
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const slideDeck =  xyz_n_3of6(sprint, ics_6_3of6_PAaA, ics_6_4of6_PAaA.prework, activityList, metricsSubmissionPercentage, retrospective)
	
	return insertInto(slideDeck, [discussionBreakout], 14)
}

// Session 4 of 6: Monday
const ics_6_4of6_PAaA = {
	'prework':[
		'Complete through activity 11 prior to next class', '',
		'Be prepared for Artificial Intelligence breakout' ],
	'announcements':[ 
		`Registration starts this week` ],
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
		'Complete through activity 14', '',
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