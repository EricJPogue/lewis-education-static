import { xyz_n_1of6_lists, xyz_n_1of6, xyz_n_2of6 } from './SL00000Sprint00'

import { list24500Sprint05 } from '../ActivityLists/AL24500Sprint05'
import { list24500Sprint06 } from '../ActivityLists/AL24500Sprint06'

// Sprint 6 Object-Oriented Programming (OOP) global values.
const sprint = 6
const activityList = () => { return list24500Sprint06(sprint) }
const activityListPrevious = () => { return list24500Sprint05(sprint) }

export const oop_6_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const oop_6_1of6 = () => { return xyz_n_1of6(sprint, oop_6_1of6_PAaA.prework, activityListPrevious, oop_6_1of6_PAaA.agenda, oop_6_2of6_PAaA.prework, activityList) }

// Session 2 of 6: Wednesday
const oop_6_2of6_PAaA = {
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'announcements':[ 
		'Registration for Fall 2023 starts April 11' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const oop_6_2of6 = () => { return xyz_n_2of6(sprint, oop_6_2of6_PAaA, ics_6_3of6_PAaA.prework, activityList) }

// Session 3 of 6: Friday
const ics_6_3of6_PAaA = {
	'prework':[
		'Complete through activity 7 prior to next class', '',
		`Be prepared sprint ${sprint-1} Demos and Retrospectives` ],
	'announcements':[ 
		'John Deere job openings' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}