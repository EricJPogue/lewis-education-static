import { xyz_n_1of6_prework_list, xyz_n_1of6 } from './SL00000Sprint00'
import { xyz_n_1of6_agenda_list } from './SL00000Sprint00'

import { completeDeck, checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'

import { classProjects, substituteSprintPlanning } from './SL20000Sprint04'

import { reviewDemoSchedule } from './SLSprint00'
import { tPrework, bulletListSlide, discussionBreakout } from './SLSprint00'

import { submissionPercentage, sprintDemos, sprintDemosIntro, demoAssignment, orderedListSlide } from './SLSprint00' 
import { tReviewDemoSchedule, tLab } from './SL00000Sprint00'
import { breakoutStandard } from './SLSprint00'


import { list44500Sprint03 } from '../ActivityLists/AL44500Sprint03'
import { list44500Sprint04 } from '../ActivityLists/AL44500Sprint04'

// Constants
const sprint = 4
const activityList = () => { return list44500Sprint04(sprint) }
const activityListPrevious = () => { return list44500Sprint03(sprint-1) }

// Session 1 of 6: Monday
export const af_4_1of6_prework_list = xyz_n_1of6_prework_list(sprint)  
const af_4_1of6_agenda_list = xyz_n_1of6_agenda_list(sprint)
export const af_4_1of6 = () => { 
	let slides = xyz_n_1of6(sprint, af_4_1of6_prework_list, activityListPrevious, af_4_1of6_agenda_list, af_4_2of6_lists.prework, activityList, substituteSprintPlanning)
	slides.splice(4, 0, classProjects)
	return slides
}

// Session 2 of 6: Wednesday
const af_4_2of6_lists = {
	'announcements':[ 
		'Registration is coming' ],
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		`Discussion Board ${sprint} as a scrum team`,
		'Lab: Complete a draft of your Final Project Proposal' ]
}

export const af_4_2of6 = () => {
	const discussion4Breakout = () => { return discussionBreakout(sprint) } 
	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'Let’s commit to focusing on our Lab assignment by:', [
			'Start Lewis-Tac-Toe Leader Board' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', af_4_3of6_PAaA.prework, sprint, activityList) }

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(af_4_3of6_PAaA, sprint, activityList)
	return completeDeck(slideDeck, [ discussion4Breakout, reviewDemoSchedule, preworkNext, programmingTogether ])
}

// Session 3 of 6: Friday
const af_4_3of6_PAaA = {
	'announcements':[ 
		'Registration is coming' ],
	'prework':[
		'Complete through activity 9 prior to next class', '',
		`Be prepared for sprint ${sprint-1} demos and retrospectives`,
		'Those scheduled to demo please be a couple of minutes early to class' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}

export const af_4_3of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(af_4_3of6_PAaA, sprint, activityList)
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:4, submitted:4 },
			{ name: 'Quiz', due:4, submitted:4 },
			{ name: 'Lab', due:4, submitted:4 },
			{ name: 'Reflection', due:4, submitted:4 }])
	}
	// Todo: Consider adding the pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Perfect submission percentage... again',
			'Everything except Lab 3 is graded and posted', 
			'A big thanks for the Reflection 3 music suggestions!' ])
	}
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			`How does your team feel about sprint ${sprint-1} now that it is over`,
			`What could be done to make sprint ${sprint-1} or the class overall better or more manageable`,
			'What improvements should we make as a class, team, or individual going forward' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', af_4_4of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ tReviewDemoSchedule, sprintDemosIntro, sprintDemos, demoAssignment,
		metricsSubmissionPercentage, retrospective, retrospectiveBreakout, preworkNext, tLab ])
}

// Session 4 of 6: Monday
const af_4_4of6_PAaA = {
	'prework': [
		'Complete through activity 9 prior to next class', '',
		`Be prepared for Lab`, ],
	'announcements':[ 
		'Recall that sprint 4 will be our midterm and that your in class participation is required' ],
	'agenda':[
		`Lab`,
		'Prework for Next Class' ]
}
export const af_4_4of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(af_4_4of6_PAaA, sprint, activityList)
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Auth0 and Authentication Services', 
			'In this breakout session your team will discuss Auth0 and Authentication Services:', [
			'Historical positioning of Authentication, Authorization, and Application Development', 
			'Puppy [[This was Amelia helping make slides this morning]]', 
			'Auth0 vs. Passport'
		])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', af_4_5of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ breakout, preworkNext, tLab ])
}

// Session 5 of 6: Wednesday
const af_4_5of6_PAaA = {
	'prework': [
		'Complete through activity 9 prior to next class', '',
		`Be prepared for Lab`, ],
	'announcements':[ 
		'Recall that sprint 4 will be our midterm and that your in class participation is required' ],
	'agenda':[
		`Lab`,
		'Prework for Next Class' ]
}