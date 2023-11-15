import { xyz_n_1of6_lists, xyz_n_1of6, xyz_n_2of6, xyz_n_3of6, xyz_n_4of6, xyz_n_5of6, xyz_n_6of6 } from './SL00000Sprint00'
import { submissionPercentage, orderedListSlide, breakoutStandard } from '../Slides/SLSprint00'

import { web_7_1of6_lists } from './SL24700Sprint07'

import { list24700Sprint05 } from '../ActivityLists/AL24700Sprint05'
import { list24700Sprint06 } from '../ActivityLists/AL24700Sprint06'

// Sprint 6 Web & Distributed Development (WEB) global values.
const sprint = 6
const activityListPrevious = () => { return list24700Sprint05(sprint-1) }
const activityList = () => { return list24700Sprint06(sprint) }

// Sprint 6 session 1 of 6: Monday
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
		'Registration is next week' ],
	'prework':[
		'Complete through activity 6 prior to next class', '',
		`Be prepared sprint ${sprint-1} Demos and Retrospectives` ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		'Discussion 6... Instead of Breakout',
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}
export const web_6_3of6 = () => {
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:10, submitted:10 },
			{ name: 'Quiz', due:10, submitted:9 },
			{ name: 'Lab', due:10, submitted:9 },
			{ name: 'Reflection', due:10, submitted:9 }
		])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
		'Feedback from Assignments & Reflections', [
		'Okay submission percentage',
		'Grades are posted... let me know if you have any questions', 
		'Nice work with Map Mania' ])
	}
	return xyz_n_3of6(sprint, web_6_3of6_lists, web_6_4of6_lists.prework, activityList, metricsSubmissionPercentage, retrospective)
}

const web_6_4of6_lists = {
	'announcements':[ 
		'Registration starts today.' ],
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

// Sprint 6 session 5 of 6: Wednesday
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
export const web_6_5of6 = () => { return xyz_n_5of6(sprint, web_6_5of6_lists, web_6_6of6_lists.prework, activityList) }

// Sprint 6 session 6 of 6: Friday
const web_6_6of6_lists = {
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday!`,
		'Be prepared begin you Final Project Monday' ],
	'prework':[
		'Complete through activity 12', '',
		'Be prepared for Programming Together' ],
	'agenda':[
		'Sprint Progress Polling',
		'Lab & Programming Together with Matchmaker for the Web and Final Project Proposals' ]
}
export const web_6_6of6 = () => { return xyz_n_6of6(sprint, web_6_6of6_lists, web_7_1of6_lists.prework, activityList) }