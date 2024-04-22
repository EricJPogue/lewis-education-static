import { xyz_n_1of6, xyz_n_1of6_lists } from './SL00000Sprint00'

import { orderedListSlide } from './SLSprint00'
import { checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'
import { tDiscussionBreakout, tPrework } from './SLSprint00'
import { bulletListSlide } from './SLSprint00'
import { completeDeck } from './SL00000Sprint00'
import { tLab } from './SL00000Sprint00'
import { submissionPercentage } from './SLSprint00'
import { xyz_n_3of6 } from './SL00000Sprint00'

import { list44500Sprint06 } from '../ActivityLists/AL44500Sprint06'
import { list44500Sprint07 } from '../ActivityLists/AL44500Sprint07'

// Todo: Update naming to reflect that fact that there are nine class sessions in sprint 7. Note that that will cause issues 
// with the “http://localhost:3000/?cpsc=sp24-cpsc-44500-001#/deck/7-4” URL routing method. 

// Constants
const sprint = 7
const activityListPrevious = () => { return list44500Sprint06(sprint-1) }
const activityList = () => { return list44500Sprint07(sprint) }

// Session 1 of 6: Monday
export const af_7_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const af_7_1of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning as a Class', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprints only in that it has a Discussion, Quiz, Lab, and Reflection',
			'We will be focused on our Class Projects',
			`Sprint ${sprint} is three weeks duration and has high expectation around effort`,
			'Our Final Exam will be in person on Wednesday, May 1st (your in person attendance required)',
			`Sprint ${sprint+1} is directly connected with sprint ${sprint} in that we will be presenting our Class Projects` ])
	}

	return xyz_n_1of6(sprint, af_7_1of6_PAaA.prework, activityListPrevious, af_7_1of6_PAaA.agenda, af_7_2of6_PAaA.prework, activityList, sprintPlanning) 
}

// Sprint 7 session 2 of 6: Wednesday
export const af_7_2of6_PAaA = {
	'prework':[
		'Complete through activity 4 prior to next class', '',
		'Be prepared for Discussion 6 as a team' ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}	
export const af_7_2of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(af_7_2of6_PAaA, sprint, activityList)
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', af_7_3of6_PAaA.prework, sprint, activityList) }
	const reviewDemoSchedule = () => {
		return bulletListSlide('Review Friday’s Demo Schedule', 
			'Let’s review Wednesday’s demo schedule while recalling that demos are an important part of scrum and that they:', [
			'Occur at the beginning of each 	new sprint ',
			'Are an opportunity to show what was completed in the previous sprint',
			'Are an **easy** and hopefully rewarding experience to show off your work',
			'Provide a chance to see how others solved a problem and to see some of the challenges they faces' ]
		)
	}

	return completeDeck(slideDeck, [ discussionBreakout, preworkNext, reviewDemoSchedule, tLab ])
}

// Session 3 of 6: Friday
const af_7_3of6_PAaA = {
	'prework':[
		`Be prepared sprint ${sprint-1} Demos` ],
	'announcements':[ ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		'Lab' ]
}

export const  af_7_3of6 = () => {
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:4, submitted:4 },
			{ name: 'Quiz', due:4, submitted:4 },
			{ name: 'Lab', due:4, submitted:4 },
			{ name: 'Reflection', due:4, submitted:4 }])
	}
	const retrospective = () => {
			return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
				'As always thank you for getting everything submitted',
				'Not all assignments are graded', 
				'Very nice work!' ])
	}
	return xyz_n_3of6(sprint,  af_7_3of6_PAaA,  af_7_4of9_PAaA.prework, activityList, metricsSubmissionPercentage, retrospective)
}

// Session 4 of 9: Monday
const  af_7_4of9_PAaA = {
	'prework':[ 'Complete through activity 6' ],
	'announcements':[ 
		'Any announcements' ],
	'agenda':[
		'Finalize Class Product presentation time',
		'YouTube, Eric’s Trip to Google, The Social Dilemma, Technology Business Models, and your Eyes',
		'Is is possible for me to use YouTube and “protect” students',
		'Lab' ]
}
export const af_7_4of9 = () =>  
{
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(af_7_4of9_PAaA, sprint, activityList)
	const isItPossibleTo = () => {
		return orderedListSlide('YouTube',
			'YouTube', [
				'Is is possible for me to use YouTube and at the same time “protect” student’s focus?' ])
}
	return completeDeck(slideDeck, [ isItPossibleTo, tLab ])
}