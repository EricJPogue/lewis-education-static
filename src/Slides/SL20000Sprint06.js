import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'
import { xyz_n_2of6 } from './SL00000Sprint00'

import { end } from '../Slides/SLSprint00'

import { list20000Sprint05 } from '../ActivityLists/AL20000Sprint05'
import { list20000Sprint06 } from '../ActivityLists/AL20000Sprint06'

// Introduction to Computer Science (ICS) sprint 6 global values.
const sprint = 6
const activityListPrevious = () => { return list20000Sprint05(sprint-1) }
const activityList = () => { return list20000Sprint06(sprint) }

// Sprint 6 session 1 of 6: Monday
export const ics_6_1of6_lists = xyz_n_1of6_lists(sprint)
export const ics_6_1of6 = () => { return xyz_n_1of6(sprint, ics_6_1of6_lists.prework, activityListPrevious, ics_6_1of6_lists.agenda, ics_6_2of6_lists.prework, activityList) }

// Sprint 6 session 2 of 6: Wednesday
const ics_6_2of6_lists = {
	'announcements':[ 
		'Any announcements?' ],
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		'Review Friday’s Demo Schedule',
		'Lab & Programming Together' ]
}

export const ics_6_2of6 = () => { return xyz_n_2of6(sprint, ics_6_2of6_lists, ics_6_3of6_lists.prework, activityList) }
const ics_6_3of6_lists = {
	'announcements':[ 
		'Any announcements?' ],
	'prework':[
		'Complete through activity 7 prior to next class', '',
		`Be prepared sprint ${sprint-1} Demos and Retrospectives` ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}
export const ics_6_3of6 = () => { return [ end ] }

export const ics_6_4of6 = () => { return [ end ] }
export const ics_6_5of6 = () => { return [ end ] }
export const ics_6_6of6 = () => { return [ end ] }