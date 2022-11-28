import { xyz_n_1of6_lists, xyz_n_1of6, xyz_n_3of6, tNoClassToday } from './SL00000Sprint00'
import { orderedListSlide, submissionPercentage, tDiscussionBreakout } from './SLSprint00'

import { tUnderConstruction } from './SL00000Sprint00'

import { list24700Sprint06 } from '../ActivityLists/AL24700Sprint06'
import { list24700Sprint07 } from '../ActivityLists/AL24700Sprint07'

// Introduction to Computer Science (ICS) sprint 6 global values.
const sprint = 7
const activityListPrevious = () => { return list24700Sprint06(sprint-1) }
const activityList = () => { return list24700Sprint07(sprint) }

// Sprint 7 session 1 of 6: Monday
export const web_7_1of6_lists = xyz_n_1of6_lists(sprint)
export const web_7_1of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
			'Not having class on Wednesday or Friday will be challenging',
			'We will complete our scrum team Discussion Board next Monday',
			`We will also have our sprint ${sprint-1} Demos and Retrospective next Monday` ])
	}

	return xyz_n_1of6(sprint, web_7_1of6_lists.prework, activityListPrevious, web_7_1of6_lists.agenda, web_7_4of6_lists.prework, activityList, sprintPlanning()) 
}

// Sprint 7 session 2 of 6: Wednesday
export const web_7_2of6 = () => { return [ tNoClassToday ] }

// Sprint 7 session 3 of 6: Friday
export const web_7_3of6 = () => { return [ tNoClassToday ] }

// Sprint 7 session 4 of 6: Monday
const web_7_4of6_lists = {
	'announcements':[ 
		'Welcome back!' ],
	'prework':[
		'Complete through activity 5 prior to next class', '',
		'Be prepared for Demos & Retrospectives',
		`Be prepared Discussion Board ${sprint}` ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		`Discussion Board ${sprint} as a scrum team`,
		'Prework for Next Class' ]
}
export const web_7_4of6 = () => { 
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:11, submitted:10 },
			{ name: 'Quiz', due:11, submitted:11 },
			{ name: 'Lab', due:11, submitted:9 },
			{ name: 'Reflection', due: 11, submitted: 10 }
		])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
		'Feedback from Assignments & Reflections', [
		'Submission percentage concerns me',
		'All assignments graded and posted',
		'Some confusion around finals / final project presentation date',
		'Very nice work!' ])
	}

	const discussionBreakout = () => { return tDiscussionBreakout(sprint) }

	// Due to the Thanksgiving holiday we missed sessions 2 and 3 so we mostly doing session 3 activities here in session 4. 
	let slides = xyz_n_3of6(sprint, web_7_4of6_lists, web_7_5of6_lists.prework, activityList, metricsSubmissionPercentage, retrospective)

	slides.splice(slides.length-2,0,discussionBreakout)
	return slides
}

// Sprint 7 session 5 of 6: Wednesday
const web_7_5of6_lists = {
	'announcements':[ 
		'Any Announcements?' ],
	'prework':[
		'Complete through activity 8 prior to next class', '',
		'Be prepared for “Project Management, Scrum, Pairs, and Version Control Systems” Breakout',
		`Be prepared for Quiz ${sprint}` ],
	'agenda':[
		'TBD' ]
}
export const web_7_5of6 = () => { return [tUnderConstruction ] }

// Sprint 7 session 6 of 6: Friday
export const web_7_6of6 = () => { return [tUnderConstruction ] }