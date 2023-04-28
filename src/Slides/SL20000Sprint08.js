import { getFinalExamDateAndTime } from '../DataAndAPIs/Classes'

import { xyz_n_1of6_lists, xyz_n_1of6, xyz_n_3of6 } from './SL00000Sprint00'
import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tLab, tNoRegularClassToday } from './SL00000Sprint00'
import { tQuiz, tPrework, submissionPercentage, orderedListSlide } from './SLSprint00'

import { list20000Sprint07 } from '../ActivityLists/AL20000Sprint07'
import { list20000Sprint08 } from '../ActivityLists/AL20000Sprint08'

// Introduction to Computer Science (ICS) sprint 8 global values.
const sprint = 8
const activityListPrevious = () => { return list20000Sprint07(sprint-1) }
const activityList = () => { return list20000Sprint08(sprint) }

// Sprint 8 session 1 of 6: Monday
export const ics_8_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const ics_8_1of6 = () => { 
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

	return xyz_n_1of6(sprint, ics_8_1of6_PAaA.prework, activityListPrevious, ics_8_1of6_PAaA.agenda, ics_8_2of6_PAaA.prework, activityList, sprintPlanning()) 
}

// Session 2 of 6: Wednesday
export const ics_8_2of6_PAaA = {
	'prework':[
		'Complete through activity 4 prior to next class', '',
		`Be prepared for Quiz ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'announcements':[ 
		'This is the last week of regular classes', 
		`Be certain that you have your on your calendar for **${getFinalExamDateAndTime()}**` ],
	'agenda':[
		'Confirm Final Project Presentations',
		'Lab & Programming Together',
		`Quiz ${sprint}` ]
}
export const ics_8_2of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_8_2of6_PAaA, sprint, activityList)
	const quiz = () => { return tQuiz(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_8_3of6_PAaA.prework, sprint, activityList) }
	const confirmFinalProjectPresentations = () => {
		return orderedListSlide('Confirm Final Project Presentations', 
			'Confirm final project presentation date and times', [
			`${getFinalExamDateAndTime()} is your scheduled time for Final Project Presentations`,
			'Any exceptions should have meeting requests',
			'Any exceptions need to specify location' ])
	}

	return completeDeck(slideDeck, [ confirmFinalProjectPresentations, tLab, preworkNext, quiz ]) 
}

// Session 3 of 6: Friday
const ics_8_3of6_PAaA = {
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
export const ics_8_3of6 = () => { 
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:13, submitted:9 },
			{ name: 'Quiz', due:13, submitted:13 },
			{ name: 'Lab', due:13, submitted:12 },
			{ name: 'Reflection', due: 13, submitted: 12 }])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Not very good submission percentage',
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

	let slides = xyz_n_3of6(sprint, ics_8_3of6_PAaA, ics_8_7of6_PAaA.prework, activityList, metricsSubmissionPercentage, retrospective)

	slides.splice(slides.length-2, 0, finalComments)
	return slides
}

// Sprint 8 session 4 of 6: Monday
export const ics_8_4of6 = () => { return [ tNoRegularClassToday ] }

// Sprint 8 session 5 of 6: Wednesday
export const ics_8_5of6 = () => { return [ tNoRegularClassToday ] }

// Sprint 8 session 6 of 6: Friday
export const ics_8_6of6 = () => { return [ tNoRegularClassToday ] }

// Final Exam / Final Project Presentation
const ics_8_7of6_PAaA = {
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
export const ics_8_7of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_8_7of6_PAaA, sprint, activityList)
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

