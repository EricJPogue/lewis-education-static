import { list44500Sprint02 } from '../ActivityLists/AL44500Sprint02'
import { list44500Sprint03 } from '../ActivityLists/AL44500Sprint03'

import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'

// Constants
const sprint = 3
const activityList = () => { return list44500Sprint03(sprint) }
const activityListPrevious = () => { return list44500Sprint02(sprint-1) }

// Session 1 of 6: Monday
export const af_3_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const af_3_1of6 = () => { return xyz_n_1of6(sprint, af_3_1of6_PAaA.prework, activityListPrevious, af_3_1of6_PAaA.agenda, af_3_2of6_PAaA.prework, activityList) }

const af_3_2of6_PAaA = {
	'prework': [
		'Complete through activity 5 prior to next class', '',
		'Be prepared for Discussion 3',
		'Be prepared for Lab & Programming Together Wednesday',
		'Demos and retrospectives will be Friday' ],
	'announcements':[
		'Any questions or announcements' ],
	'agenda':[
		`Sprint ${sprint} Planning Questions & Answers`,
		`Discussion Board ${sprint} as a scrum team`,
		'Confirm Demos for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}