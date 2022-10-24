import { xyz_n_1of6, xyz_n_1of6_lists } from './SL00000Sprint00'

import { list20000Sprint04 } from '../ActivityLists/AL20000Sprint04'
import { list20000Sprint05 } from '../ActivityLists/AL20000Sprint05'

// Sprint 5 Introduction to Computer Science (ICS) global values.
const sprint = 5
const activityListPrevious = () => { return list20000Sprint04(sprint-1) }
const activityList = () => { return list20000Sprint05(sprint) }

// Sprint 5 session 1 of 6: Monday
export const ics_5_1of6_lists = xyz_n_1of6_lists(sprint)
export const ics_5_1of6 = () => { return xyz_n_1of6(sprint, ics_5_1of6_lists.prework, activityListPrevious, ics_5_1of6_lists.agenda, ics_5_2of6_lists.prework, activityList) }

// Sprint 5 session 2 of 6: Wednesday
const ics_5_2of6_lists = {
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

/*
	const reviewDemoSchedule = () => {
		return bulletListSlide('Review Friday’s Demo Schedule', 
			'Let’s review Wednesday’s demo schedule while recalling that demos are an important part of scrum and that they:', [
			'Occur at the beginning of each new sprint ',
			'Are an opportunity to show what was completed in the previous sprint',
			'Are an **easy** and hopefully rewarding experience to show off your work',
			'Provide a chance to see how others solved a problem and to see some of the challenges they faces' ]
		)
	}
*/