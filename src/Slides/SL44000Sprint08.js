import { getFinalExamDateAndTime } from '../DataAndAPIs/Classes'

import { xyz_n_1of6_lists, xyz_n_1of6, xyz_n_3of6 } from './SL00000Sprint00'
import { tNoRegularClassToday } from './SL00000Sprint00'
import { orderedListSlide } from './SLSprint00'
import { checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'
import { tQuiz, tPrework } from './SLSprint00'
import { tLab, completeDeck } from './SL00000Sprint00'
import { submissionPercentage } from './SLSprint00'

import { tPreworkWithLogo } from './SLSprint00'
import { basicSlideWithLogo } from './SLSprint00'
import { agendaSlide } from './SLSprint00'
import { basicSlide } from './SLSprint00'
import { makeSlideDeck } from './SL00000Sprint00'
import { insertInto } from './SLSprintPlanning'
import { sprintPlanningSlideDeck } from './SLSprintPlanning'

import { list44000Sprint07 } from '../ActivityLists/AL44000Sprint07'
import { list44000Sprint08 } from '../ActivityLists/AL44000Sprint08'

// Software Engineering (SE) sprint 8 global values.
const sprint = 8
const activityListPrevious = () => { return list44000Sprint07(sprint-1) }
const activityList = () => { return list44000Sprint08(sprint) }


export const se_8_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const se_8_1of6 = () => { 
	const prework = () => { return tPreworkWithLogo('Prework For Today', se_8_1of6_PAaA.prework, sprint-1, activityListPrevious) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', se_8_1of6_PAaA.announcements) }
	const agenda = () => { return agendaSlide(se_8_1of6_PAaA.agenda) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_8_1of6_PAaA.prework, sprint, activityList) }
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning as a Class', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprints with Discussion, Quiz, Lab, and Reflection',
			'We missed Monday due to the Easter Holiday Recess',
			'Demos will be occurring Friday... including Aidan',
			'We will complete our scrum team Discussion Board on Friday',
			`We will have sprint ${sprint-1} Retrospective on Friday also if possible` ])
	}
	const activitiesReview = () => {
		return basicSlide('Activity List and Assignments Review', [
			'Let’s open our Blackboard shell and briefly review the activity list and assignments together.' ]
		)
	}
	const planningBreakout = () => {
		return orderedListSlide('Sprint Planning Scrum Team Breakout', 'As a scrum team:', [
			`No discussion or breakout today so that we can focus on your Team’s Sprint ${sprint} planning` ]
		)
	}

	const slideDeck = makeSlideDeck([ prework, announcements, agenda, sprintPlanning, activitiesReview, planningBreakout, preworkNext ])
	const slideDeckWithSprintPlanning = insertInto(slideDeck, sprintPlanningSlideDeck(sprint), 8)
	return slideDeckWithSprintPlanning
}

// Sprint 8 session 1 of 6: Monday
export const se_X_1of6_lists = xyz_n_1of6_lists(sprint)
export const se_X_1of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', `Sprint ${sprint} Expectations:`, [
			'No regular class sessions during finals week',
			'You will submit Quiz 8, Lab 8, Reflection 8, and Final Project Presentation assignments',
			'Discussion 8 is a request to complete your course evaluation and is not graded',
			'Quiz 8 will be in class on Wednesday',
			`We will have our sprint ${sprint-1} Demos and Retrospective Friday`,
			'Final project presentations will be during our final exam time next week' ])
	}

	return xyz_n_1of6(sprint, se_X_1of6_lists.prework, activityListPrevious, se_X_1of6_lists.agenda, se_8_2of6_lists.prework, activityList, sprintPlanning()) 
}

// Sprint 8 session 2 of 6: Wednesday
const se_8_2of6_lists = {
	'prework':[
		'Complete through activity 4 prior to next class', '',
		`Be prepared for Quiz ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'announcements':[ 
		'This is the last week of regular classes', 
		`Recall final project presentations on **${getFinalExamDateAndTime()}**`  ],
	'agenda':[
		'Confirm Final Project Presentations',
		'Lab & Programming Together',
		`Quiz ${sprint}` ]
}
export const se_8_2of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_8_2of6_lists, sprint, activityList)
	const confirmFinalProjectPresentations = () => {
		return orderedListSlide('Final Project Presentations', 
			'Confirm final project presentation expectations, dates, and times', [
			'Expectations: Overview of application plus each team member presenting',
			'Any exceptions should have meeting requests',
			'Any exceptions need to specify location' ])
	}
	const quiz = () => { return tQuiz(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_8_3of6_lists.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ confirmFinalProjectPresentations, tLab, preworkNext, quiz ]) 
}

// Sprint 8 session 3 of 6: Friday
// BugBug: Review and update this session as the slides are not very good. 
const se_8_3of6_lists = {
	'prework':[
		'Submit all assignments by the end of the day Thursday, May 4... no late assignments', '',
		'Be prepared for final project presentation' ],
	'announcements':[ 
		'Today is our last regular class session',
		`In-person final project presentations are **${getFinalExamDateAndTime()}**`,
		'If you are completing your final project presentation at another time you are still welcome to attend', 
		'Please consider taking time to complete your course evaluation' ],
	'agenda':[
		'FreakingFractals presenting the Lewis University Interactive Map',
		`Sprint ${sprint-1} Retrospective`,
		'Final Comments' ]
}
export const se_8_3of6 = () => { 
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:26, submitted:24 },
			{ name: 'Quiz', due:26, submitted:26 },
			{ name: 'Lab', due:26, submitted:26 },
			{ name: 'Reflection', due: 26, submitted: 26 }
		])
	}

	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Excellent submission percentage!',
			'Discussions and Quizzes are graded and posted',
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

	let slides = xyz_n_3of6(sprint, se_8_3of6_lists, se_8_7of6_lists.prework, activityList, metricsSubmissionPercentage, retrospective)
	slides.splice(slides.length-2, 0, finalComments)
	return slides
}

// Sprint 8 session 4 of 6: Monday
export const se_8_4of6 = () => { return [ tNoRegularClassToday ] }

// Sprint 8 session 5 of 6: Wednesday
export const se_8_5of6 = () => { return [ tNoRegularClassToday ] }

// Sprint 8 session 6 of 6: Friday
export const se_8_6of6 = () => { return [ tNoRegularClassToday ] }

// Final Exam / Final Project Presentation
const se_8_7of6_lists = {
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
export const se_8_7of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_8_7of6_lists, sprint, activityList)
	const finalProjectPresentation = () => {
		return orderedListSlide('Final Project Presentations', `Recall that your final project presentation should including a/an:`, [
			'Brief introduction of your team and yourself',
			'Overview of your final project proposal',
			'One team member review the overall project',
			'Each team member demonstrate a feature that they personally delivered that they are most proud of delivering',
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