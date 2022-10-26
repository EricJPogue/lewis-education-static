import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'

import { list44000Sprint04 } from '../ActivityLists/AL44000Sprint04'
import { list44000Sprint05 } from '../ActivityLists/AL44000Sprint05'

// Sprint 5 Software Engineering (SE) values.
const sprint = 5
const activityListPrevious = () => { return list44000Sprint04(sprint-1) }
const activityList = () => { return list44000Sprint05(sprint) }

// SE Sprint 5 session 1 of 6: Monday
export const se_5_1of6_lists = xyz_n_1of6_lists(sprint)
export const se_5_1of6 = () => { return xyz_n_1of6(sprint, se_5_1of6_lists.prework, activityListPrevious, se_5_1of6_lists.agenda, se_5_2of6_lists.prework, activityList) }



// SE Sprint 5 session 2 of 6: Wednesday
const se_5_2of6_lists = {
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
