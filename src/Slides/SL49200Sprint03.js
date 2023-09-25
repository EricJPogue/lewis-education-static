import { list49200Sprint02 } from '../ActivityLists/AL49200Sprint02'
import { list49200Sprint03 } from '../ActivityLists/AL49200Sprint03'

import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'

// Constants
const sprint = 3
const activityListPrevious = () => { return list49200Sprint02(sprint-1) }
const activityList = () => { return list49200Sprint03(sprint) }

// Session 1 of 1: Monday... even though this is a “Tuesday” class
export const ssc_3_1of1_PAaA = xyz_n_1of6_lists(sprint)
export const ssc_3_1of1 = () => { return xyz_n_1of6(sprint, ssc_3_1of1_PAaA.prework, activityListPrevious, ssc_3_1of1_PAaA.agenda, ssc_3_2of4_PAaA.prework, activityList) }

const ssc_3_2of4_PAaA = {
	'prework': [
		'Everything is due at the end of the sprint', '',
		'Don’t forget your class Demos' ],
	'announcements':[],
	'agenda':[]
}