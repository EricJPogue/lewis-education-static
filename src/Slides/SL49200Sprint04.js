import { ssc_n_1of1_lists, ssc_n_1of1 } from './SL00000Sprint00'

import { orderedListSlide } from './SLSprint00'

import { list49200Sprint03 } from '../ActivityLists/AL49200Sprint03'
import { list49200Sprint04 } from '../ActivityLists/AL49200Sprint04'

// Constants
const sprint = 4
const activityListPrevious = () => { return list49200Sprint03(sprint-1) }
const activityList = () => { return list49200Sprint04(sprint) }

// Session 1 of 1: Monday... even though this is a “Tuesday” class
export const ssc_4_1of1_PAaA = ssc_n_1of1_lists(sprint)
export const ssc_4_1of1 = () => { 
	const substituteSprintPlanning = () => {
		return orderedListSlide('Planning', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprints with Discussion, Quiz (Writing Assignment), Lab, and Reflection',
			'Except it’s not really a writing assignment :-)',
			'Different in that we have Spring Break the week of March 11 causing the sprint to expand to 3 weeks duration ' ])
	}
	return ssc_n_1of1(sprint, ssc_4_1of1_PAaA.prework, activityListPrevious, ssc_4_1of1_PAaA.agenda, ssc_4_2of4_PAaA.prework, activityList, substituteSprintPlanning) 
}

const ssc_4_2of4_PAaA = {
	'prework': [
		'Everything is due at the end of the sprint', '',
		'Don’t forget your class Demos' ],
	'announcements':[],
	'agenda':[]
}



