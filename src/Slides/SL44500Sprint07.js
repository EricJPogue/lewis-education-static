import { xyz_n_1of6, xyz_n_1of6_lists } from './SL00000Sprint00'

import { orderedListSlide } from './SLSprint00'

import { list44500Sprint06 } from '../ActivityLists/AL44500Sprint06'
import { list44500Sprint07 } from '../ActivityLists/AL44500Sprint07'


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

// Session 2 of 6: Wednesday
export const af_7_2of6_PAaA = {
	'prework':[
		'Complete through activity 4 prior to next class', '',
		'Be prepared for Discussion 6 as a team' ],
	'announcements':[ 
		'' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		'Lab' ]
}