import { xyz_n_1of6_lists, xyz_n_1of6, xyz_n_2of6, xyz_n_3of6, xyz_n_4of6 } from './SL00000Sprint00'
import { submissionPercentage, orderedListSlide } from '../Slides/SLSprint00'

import { breakoutStandard } from '../Slides/SLSprint00'

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
export const web_6_3of6 = () => {
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:11, submitted:10 },
			{ name: 'Quiz', due:11, submitted:9 },
			{ name: 'Lab', due:11, submitted:9 },
			{ name: 'Reflection', due: 11, submitted: 9 }
		])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
		'Feedback from Assignments & Reflections', [
		'I am quite confused by the number of assignments that are not being submitted... any insights?',
		'All assignments are graded and posted', 
		'Nice work with Map Mania' ])
	}
	return xyz_n_3of6(sprint, web_6_3of6_lists, web_6_4of6_lists.prework, activityList, metricsSubmissionPercentage, retrospective)
}

const web_6_4of6_lists = {
	'announcements':[ 
		'Any announcements?' ],
	'prework':[
		'Complete through activity 11 prior to next class', '',
		'Be prepared for breakout PHP session' ],
	'agenda':[
		'PHP Breakout',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const web_6_4of6 = () => {
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: PHP', 
			'In this breakout session we will explore PHP:', [
				'History, popularity, and language characteristics',
				'HTML embedded JavaScript and PHP similarities and differences',
				'Testing PHP code locally',
				'Java, JavaScript, PHP, and C# .Net similarities and differences' ]
		)
	}

	return xyz_n_4of6(sprint, web_6_4of6_lists, web_6_5of6_lists.prework, activityList, breakout)
}


const web_6_5of6_lists = {
	'announcements':[ 
		'Any announcements?' ],
	'prework':[
		'Complete through activity 12 prior to next class', '',
		`Be prepared for Quiz ${sprint}` ],
	'agenda':[
		'Sprint Progress Polling',
		'Lab & Programming Together',
		`Quiz ${sprint}` ]
}
export const web_6_5of6 = () => { return [ end ] }
export const web_6_6of6 = () => { return [ end ] }