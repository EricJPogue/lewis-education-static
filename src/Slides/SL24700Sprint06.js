import { xyz_n_1of6_lists, xyz_n_1of6, xyz_n_2of6 } from './SL00000Sprint00'
import { end } from '../Slides/SLSprint00'

import { list24700Sprint05 } from '../ActivityLists/AL24700Sprint05'
import { list24700Sprint06 } from '../ActivityLists/AL24700Sprint06'

// Sprint 6 Web & Distributed Development (WEB) global values.
const sprint = 6
const activityListPrevious = () => { return list24700Sprint05(sprint-1) }
const activityList = () => { return list24700Sprint06(sprint) }

export const web_6_1of6_lists = xyz_n_1of6_lists(sprint)
export const web_6_1of6 = () => { return xyz_n_1of6(sprint, web_6_1of6_lists.prework, activityListPrevious, web_6_1of6_lists.agenda, web_6_2of6_lists.prework, activityList) }


// Sprint 6 session 2 of 6: Wednesday
const web_6_2of6_lists = {
	'announcements':[ 
		'I have updated the sprint 6 activity list to include the two programming together tutorials' ],
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		'YouTube, Eric’s Trip to Google, The Social Dilemma, and Technology Business Models',
		`Discussion Board ${sprint} as a scrum team`,
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		'Review Friday’s Demo Schedule',
		'Lab & Programming Together' ]
}

export const web_6_2of6 = () => { return xyz_n_2of6(sprint, web_6_2of6_lists, web_6_3of6_lists.prework, activityList) }

const web_6_3of6_lists = {
	'announcements':[ 
		'John Deere job openings' ],
	'prework':[
		'Complete through activity 6 prior to next class', '',
		`Be prepared sprint ${sprint-1} Demos and Retrospectives` ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}
export const web_6_3of6 = () => { return [ end ] }
/*
	const metricsSubmissionPercentage = () => {
		if (getClass().section === '002') {
			return submissionPercentage([
				{ name: 'Discussion', due:27, submitted:25 },
				{ name: 'Quiz', due:27, submitted:26 },
				{ name: 'Lab', due:27, submitted:0 },
				{ name: 'Reflection', due: 27, submitted: 0 }
			])
		} else {
			return submissionPercentage([
				{ name: 'Discussion', due:26, submitted:26 },
				{ name: 'Quiz', due:26, submitted:26 },
				{ name: 'Lab', due:26, submitted:0 },
				{ name: 'Reflection', due: 26, submitted: 0 }
			])
		}
	}
*/

export const web_6_4of6 = () => { return [ end ] }
export const web_6_5of6 = () => { return [ end ] }
export const web_6_6of6 = () => { return [ end ] }