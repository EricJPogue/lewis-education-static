import { xyz_n_1of6, xyz_n_1of6_lists } from './SL00000Sprint00'

import { xyz_n_3of6 } from './SL00000Sprint00'
import { submissionPercentage, orderedListSlide } from './SLSprint00'
import { tDiscussionBreakout } from './SLSprint00'
import { insertInto } from './SLSprintPlanning'

import { list44500Sprint05 } from '../ActivityLists/AL44500Sprint05'
import { list44500Sprint06 } from '../ActivityLists/AL44500Sprint06'

// Constants
const sprint = 5
const activityListPrevious = () => { return list44500Sprint05(sprint-1) }
const activityList = () => { return list44500Sprint06(sprint) }

export const af_6_2of6_PAaA = xyz_n_1of6_lists(sprint)
export const xyz_6_2of6SprintPlanning = () => {
	return orderedListSlide('Sprint Planning', `Sprint ${sprint} Expectations:`, [
		'Similar to previous sprints with Discussion, Quiz, Lab, and Reflection',
		'Having a holiday on Monday set us back a bit',
		'We will complete our scrum team Discussion Board breakout session on Friday',
		`We will also have sprint ${sprint-1} Demos and Retrospective on Friday`,
		'Recall that sprint 7 and 8 will be different' ])
}
export const af_6_2of6 = () => { return xyz_n_1of6(sprint, af_6_2of6_PAaA.prework, activityListPrevious, af_6_2of6_PAaA.agenda, af_6_3of6_PAaA.prework, activityList, xyz_6_2of6SprintPlanning) }

// Session 3 of 6: Friday
const  af_6_3of6_PAaA = {
	'prework':[
		'Complete through activity 3 prior to next class', '',
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

export const  af_6_3of6 = () => {
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
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const slideDeck =  xyz_n_3of6(sprint,  af_6_3of6_PAaA,  af_6_4of6_PAaA.prework, activityList, metricsSubmissionPercentage, retrospective)
	return insertInto(slideDeck, [discussionBreakout], 14)
}

const  af_6_4of6_PAaA = {
	'prework':[
		'Complete through activity 4'
	]

}