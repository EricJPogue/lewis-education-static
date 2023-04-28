
import { xyz_n_1of6_lists, xyz_n_1of6, xyz_n_3of6 } from './SL00000Sprint00'
import { ics_8_2of6_PAaA, ics_8_2of6 } from './SL20000Sprint08'

import { orderedListSlide } from './SLSprint00'
import { getFinalExamDateAndTime } from '../DataAndAPIs/Classes'
import { submissionPercentage } from './SLSprint00'
import { checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'
import { tPrework } from './SLSprint00'
import { completeDeck } from './SL00000Sprint00'


import { list24500Sprint07 } from '../ActivityLists/AL24500Sprint07'
import { list24500Sprint08 } from '../ActivityLists/AL24500Sprint08'

// Object-Oriented Programming sprint 8 global values.
const sprint = 8
const activityListPrevious = () => { return list24500Sprint07(sprint-1) }
const activityList = () => { return list24500Sprint08(sprint) }

export const oop_8_1of6_PAaA = xyz_n_1of6_lists()
export const oop_8_1of6 = () => { 
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

	return xyz_n_1of6(sprint, oop_8_1of6_PAaA.prework, activityListPrevious, oop_8_1of6_PAaA.agenda, oop_8_2of6_PAaA.prework, activityList, sprintPlanning()) 
}

// Session 2 of 6: Wednesday
const oop_8_2of6_PAaA = ics_8_2of6_PAaA
export const oop_8_2of6 = ics_8_2of6

// Session 3 of 6: Friday
const oop_8_3of6_PAaA = {
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared for sprint ${sprint-1} Demos & Retrospectives` ],
	'announcements':[ 
		'Today is our last regular class session',
		`Our final project presentations are **${getFinalExamDateAndTime()}**`, 
		'Please consider taking time to complete your course evaluation' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		'Final Comments',
		'Lab & Programming Together' ]
}
export const oop_8_3of6 = () => { 
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:16, submitted:12 },
			{ name: 'Quiz', due:16, submitted:14 },
			{ name: 'Lab', due:16, submitted:13 },
			{ name: 'Reflection', due: 16, submitted: 13 }])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Miserable submission percentage',
			'Discussions, Quizzes, and  are graded and posted',
			'Quiz answer should be available' ])
	}
	const finalComments = () => {
		return orderedListSlide('Thank you!',
			'', [
			'Thank you for making this a wonderful experience for me',
			'Don’t hesitate to reach out in the future',
			'Hope to see you in a future class', 
			'Very nice work! I am impressed with what you have accomplished.' ])
	}

	let slides = xyz_n_3of6(sprint, oop_8_3of6_PAaA, oop_8_7of6_PAaA.prework, activityList, metricsSubmissionPercentage, retrospective)

	slides.splice(slides.length-2, 0, finalComments)
	return slides
}

// Final Exam / Final Project Presentation
const oop_8_7of6_PAaA = {
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
export const oop_8_7of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(oop_8_7of6_PAaA, sprint, activityList)
	const finalProjectPresentation = () => {
		return orderedListSlide('Final Project Presentations', `Recall that your final project presentation should including a/an:`, [
			'Brief introduction of yourself',
			'Overview of your final project proposal',
			'Demonstration standard and advanced feature',
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