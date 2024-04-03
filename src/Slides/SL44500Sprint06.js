import { xyz_n_1of6, xyz_n_1of6_lists } from './SL00000Sprint00'

import { orderedListSlide } from './SLSprint00' 

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
const af_6_3of6_PAaA = {
	'prework':[
		'Complete through activity 8 prior to next class', '',
		`Be prepared sprint ${sprint-1} Demos and Retrospectives`,
		'Be prepared for Discussion 6 as a team' ],
	'announcements':[ 
		'Registration starts next week' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}