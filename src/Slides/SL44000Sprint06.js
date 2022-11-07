import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'

import { end } from './SLSprint00'

import { list44000Sprint05 } from '../ActivityLists/AL44000Sprint05'
import { list44000Sprint06 } from '../ActivityLists/AL44000Sprint06'

// Sprint 6 Software Engineering (SE) global values.
const sprint = 6
const activityListPrevious = () => { return list44000Sprint05(sprint-1) }
const activityList = () => { return list44000Sprint06(sprint) }


// SE Sprint 6 session 1 of 6: Monday
export const se_6_1of6_lists = xyz_n_1of6_lists(sprint)
export const se_6_1of6 = () => { return xyz_n_1of6(sprint, se_6_1of6_lists.prework, activityListPrevious, se_6_1of6_lists.agenda, se_6_2of6_lists.prework, activityList) }

// SE Sprint 6 session 2 of 6: Wednesday
const se_6_2of6_lists = {
	'announcements':[ 
		'Friday, November 4 is the last day to withdraw from Fall 16-week classes with a grade of “W”',
		'Any other announcements?' ],
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}` ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Confirm no Demos Schedule for Next Class',
		'Prework for Next Class',
		'Review Friday’s Demo Schedule',
		'Lab & Programming Together' ]
}

export const se_6_2of6 = () => { return [ end ] }
export const se_6_3of6 = () => { return [ end ] }
export const se_6_4of6 = () => { return [ end ] }
export const se_6_5of6 = () => { return [ end ] }
export const se_6_6of6 = () => { return [ end ] }