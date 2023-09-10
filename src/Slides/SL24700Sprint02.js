import { list24700Sprint01 } from '../ActivityLists/AL24700Sprint01'
import { list24700Sprint02 } from '../ActivityLists/AL24700Sprint02'

import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'
import { xyz_2_1of6_sprintPlanning } from './SL00000Sprint02'

//  Web & Distributed Programming (WEB) sprint 2 shared values.
const sprint = 2
const activityListPrevious = () => { return list24700Sprint01(sprint-1) }
const activityList = () => { return list24700Sprint02(sprint) }
	
// Session 1 of 6: Monday
export const web_2_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const web_2_1of6 = () => { return xyz_n_1of6(sprint, web_2_1of6_PAaA.prework, activityListPrevious, web_2_1of6_PAaA.agenda, web_2_2of6_PAaA.prework, activityList, xyz_2_1of6_sprintPlanning(sprint)) }

// Session 2 of 6: Wednesday
const web_2_2of6_PAaA = {
	'prework': [
		'Complete through activity 6 prior to next class', '',
		'Be prepared for Lab & Programming Together Wednesday',
		'Demos and retrospectives will be Friday' ],
	'announcements':[
		'Reducing procrastination is on the agenda',
		'Does everyone know where to find the class recordings?'],
	'agenda':[
		`Sprint ${sprint} Planning Questions & Answers`,
		`Discussion Board ${sprint} as a scrum team`,
		'Confirm Demos for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}