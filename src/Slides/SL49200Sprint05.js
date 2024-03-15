import { ssc_n_1of1_lists, ssc_n_1of1 } from './SL00000Sprint00'

import { list49200Sprint04 } from '../ActivityLists/AL49200Sprint04'
import { list49200Sprint05 } from '../ActivityLists/AL49200Sprint05'

import { xyz_5_1of6SprintPlanning } from './SL20000Sprint05'

// Constants
const sprint = 5
const activityListPrevious = () => { return list49200Sprint04(sprint-1) }
const activityList = () => { return list49200Sprint05(sprint) }

// Session 1 of 1: Monday... even though this is a “Tuesday” class
export const ssc_5_1of1_PAaA = ssc_n_1of1_lists(sprint)
export const ssc_5_1of1 = () => { 
	return ssc_n_1of1(sprint, ssc_5_1of1_PAaA.prework, activityListPrevious, ssc_5_1of1_PAaA.agenda, ssc_5_2of4_PAaA.prework, activityList, xyz_5_1of6SprintPlanning) 
}

const ssc_5_2of4_PAaA = {
	'prework': [
		'Everything is due at the end of the sprint', '',
		'Don’t forget your class Demos' ],
	'announcements':[],
	'agenda':[]
}
