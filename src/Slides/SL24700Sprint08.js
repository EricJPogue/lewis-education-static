import { xyz_n_1of6_lists, xyz_n_1of6, xyz_n_3of6 } from './SL00000Sprint00'
import { tNoRegularClassToday } from './SL00000Sprint00'
import { orderedListSlide } from './SLSprint00'
import { checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'
import { tQuiz, tPrework } from './SLSprint00'
import { tLab, completeDeck } from './SL00000Sprint00'
import { submissionPercentage } from './SLSprint00'


import { list24700Sprint07 } from '../ActivityLists/AL24700Sprint07'
import { list24700Sprint08 } from '../ActivityLists/AL24700Sprint08'

// Web & Distributed Programming (web) sprint 8 global values.
const sprint = 8
const activityListPrevious = () => { return list24700Sprint07(sprint-1) }
const activityList = () => { return list24700Sprint08(sprint) }

// Sprint 8 session 1 of 6: Monday
export const web_8_1of6_lists = xyz_n_1of6_lists(sprint)
export const web_8_1of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', `Sprint ${sprint} Expectations:`, [
			`We will be focused on final projects throughout the sprint ${sprint}`,
			'No regular class sessions during finals week',
			'You will submit Quiz 8, Lab 8, Reflection 8, and Final Project Presentation assignments',
			'Discussion 8 is a request to complete your course evaluation and is not graded',
			'Quiz 8 will be in class on Wednesday',
			`We will have our sprint ${sprint-1} Demos and Retrospective Friday`,
			'Final project presentations will be during our final exam time next week' ])
	}

	return xyz_n_1of6(sprint, web_8_1of6_lists.prework, activityListPrevious, web_8_1of6_lists.agenda, web_8_2of6_lists.prework, activityList, sprintPlanning()) 
}

// Sprint 8 session 2 of 6: Wednesday
const web_8_2of6_lists = {
	'announcements':[ 
		'This is the last week of regular classes', 
		'Be certain you have your final exam time marked on your calendar' ],
	'prework':[
		'Complete through activity 4 prior to next class', '',
		`Be prepared for Quiz ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		'Lab & Programming Together',
		`Quiz ${sprint}` ]
}
export const web_8_2of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_8_2of6_lists, sprint, activityList)
	const quiz = () => { return tQuiz(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', web_8_3of6_lists.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ tLab, preworkNext, quiz ]) 
}

// Sprint 8 session 3 of 6: Friday
const web_8_3of6_lists = {
	'announcements':[ 
		'Today is our last regular class session',
		'Be certain you have your final exam time marked on your calendar' ],
	'prework':[
		'Complete through activity 4 prior to next class', '',
		`Be prepared for sprint ${sprint-1} Demos & Retrospectives`,
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		'Lab & Programming Together' ]
}
export const web_8_3of6 = () => { 
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:11, submitted:11 },
			{ name: 'Quiz', due:11, submitted:11 },
			{ name: 'Lab', due:11, submitted:10 },
			{ name: 'Reflection', due: 11, submitted: 10 }
		])
	}

	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Fantastic submission percentage!',
			'All assignments graded and posted', 
			'Very nice work!' ])
	}
	const finalComments = () => {
		return orderedListSlide('Thank you!',
			'', [
			'Thank you for making this a wonderful experience for me',
			'Don’t hesitate to reach out in the future',
			'Hope to see you in a future class', 
			'Very nice work! I am impressed with what you have accomplished.' ])
	}

	let slides = xyz_n_3of6(sprint, web_8_3of6_lists, web_8_7of6_lists.prework, activityList, metricsSubmissionPercentage, retrospective)
	slides.splice(slides.length-2, 0, finalComments)
	return slides
}

// Sprint 8 session 4 of 6: Monday
export const web_8_4of6 = () => { return [ tNoRegularClassToday ] }

// Sprint 8 session 5 of 6: Wednesday
export const web_8_5of6 = () => { return [ tNoRegularClassToday ] }

// Sprint 8 session 6 of 6: Friday
export const web_8_6of6 = () => { return [ tNoRegularClassToday ] }

// Final Exam / Final Project Presentation
const web_8_7of6_lists = {
	'announcements':[ 
		'Final Project Presentations Today',
		'Please consider taking time to complete your course evaluation' ],
	'prework':[
		'Be prepared for your final project presentations' ],
	'agenda':[
		`Final Project Presentations` ]
}

// Final Exam / Final Project Presentation
const web_8_7of6_PAaA = {
	'announcements':[ 
		'Final Project Presentations Today',
		'Please consider taking time to complete your course evaluation' ],
	'prework':[
		'Verify that you have submitted your final project presentation assignment',
		'Be prepared for your final project presentations' ],
	'agenda':[
		'Final Project Presentations',
		'Next Steps',
		'Thank you!' ]
}
export const web_8_7of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_8_7of6_PAaA, sprint, activityList)
	const finalProjectPresentation = () => {
		return orderedListSlide('Final Project Presentations', `Recall that your final project presentation should including a/an:`, [
			'Brief introduction of yourself',
			'Overview of your final project proposal',
			'Demonstration standard and advanced features',
			'Overview of the project source code',
			'Description of what else you expect to complete by the end of the day Thursday' ])
	}
	const nextSteps = () => { return tPrework('Next Steps', [ 'Everything is due Thursday!' ], sprint, activityList) }
	const finalComments = () => {
		return orderedListSlide('Thank you!',
			'', [
			'Thank you for making this a wonderful experience for me',
			'Don’t hesitate to reach out in the future',
			'Hope to see you in a future class', 
			'Reach out to me if you are interested in taking Web & Distributed Programming',
			'Very nice work! I am impressed with what you have accomplished.' ])
	}

	return completeDeck(slideDeck, [ finalProjectPresentation, nextSteps, finalComments ]) 
}