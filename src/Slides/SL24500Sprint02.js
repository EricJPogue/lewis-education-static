import { list24500Sprint01 } from '../ActivityLists/AL24500Sprint01'
import { list24500Sprint02 } from '../ActivityLists/AL24500Sprint02'

import { basicSlide, bulletListSlide, orderedListSlide, submissionPercentage, tDiscussionBreakout, tPrework, sprintDemosIntro, sprintDemos, demoAssignment } from './SLSprint00'
import { xyz_n_1of6_lists, xyz_n_1of6, checklistAnnouncementsPreworkAndAgenda, completeDeck, tReviewDemoSchedule, tLab } from './SL00000Sprint00'

import { xyz_2_1of6_sprintPlanning } from './SL00000Sprint02'

// Object-Oriented Programming (OOP)sprint 2 global values.
const sprint = 2
const activityListPrevious = () => { return list24500Sprint01(sprint-1) }
const activityList = () => { return list24500Sprint02(sprint) }

// Session 1 of 6: Monday
export const oop_2_1of6_PreworkAnnouncementsAndAgenda = xyz_n_1of6_lists(sprint)
export const oop_2_1of6 = () => { 
	return xyz_n_1of6(sprint, oop_2_1of6_PreworkAnnouncementsAndAgenda.prework, activityListPrevious, oop_2_1of6_PreworkAnnouncementsAndAgenda.agenda, 
		oop_2_2of6_PreworkAnnouncementsAndAgenda.prework, activityList, xyz_2_1of6_sprintPlanning(sprint)) 
}

// Session 2 of 6: Wednesday
const oop_2_2of6_PreworkAnnouncementsAndAgenda = {
	'prework': [
		'Complete through activity 6 prior to next class', '',
		'Be prepared for Lab & Programming Together Wednesday',
		'Demos and retrospectives will be Friday' ],
	'announcements':[
		'Reducing procrastination is on the agenda',
		'Does everyone know where to find the class recordings?'],
	'agenda':[
		`Sprint ${sprint} Planning Questions & Answers`,
		`Discussion Board ${sprint} as a scrum team`,
		'Confirm Demos for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const oop_2_2of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(oop_2_2of6_PreworkAnnouncementsAndAgenda, sprint, activityList)
	const qAndA = () => { return bulletListSlide(`Sprint ${sprint} Planning Questions & Answers`, `What questions do you have about sprint ${sprint}?`, [ ]) }
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', oop_2_3of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ qAndA, discussionBreakout, tReviewDemoSchedule, preworkNext, tLab ])
}

// Session 3 of 6: Friday
const oop_2_3of6_PreworkAnnouncementsAndAgenda = {
	'prework': [
		'Complete through activity 9 prior to next class', '',
		`Be prepared for breakout` ],
	'announcements':[ 
		'Be sure to spend some extra time reading “Learning Java” and completing the exercises' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}
export const oop_2_3of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(oop_2_3of6_PreworkAnnouncementsAndAgenda, sprint, activityList)

	const metrics = () => {
		return basicSlide(`Sprint ${sprint-1} Metrics`, [
			`Let’s take a minute and review our Sprint ${sprint-1} Submission Percentage class metric.` ])
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:17, submitted:17 },
			{ name: 'Quiz', due:17, submitted:17 },
			{ name: 'Lab', due:17, submitted:17},
			{ name: 'Reflection', due: 17, submitted: 16 }])
	}
	// Todo: Consider adding the pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Very well done with your submission percentage!',
			'All assignments are graded and posted', 
			'Thank you for your reflection comments',
			'Lots of nice comments about scrum teammates', 
			'Be **sure** to put something in for each question so that I can give you at least a point or two',
			'We have some work to do on Java basics', 
			'If you are not where you want to be in the class after sprint 1, I encourage you to come and talk with me' ])
	}
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			`How does your team feel about sprint ${sprint-1} now that it is over`,
			`What could be done to make sprint ${sprint-1} or the class overall better or more manageable`,
			'What improvements should we make as a class, team, or individual going forward' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', oop_2_4of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ tReviewDemoSchedule, sprintDemosIntro, sprintDemos, demoAssignment, metrics, 
		metricsSubmissionPercentage, retrospective, retrospectiveBreakout, preworkNext ])
}

const oop_2_4of6_PreworkAnnouncementsAndAgenda = {
	'prework': [
		'Complete through activity 12 prior to next class', 
		'', '',
		`Be prepared for breakout` ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[ 
		'TBD' ]
}



// Feedback:
// Remember to respond back to at least two of your classmates in Discussions
// I am impressed with how many of you have outside jobs

// Metric: Missing only 1 Reflection

// What do dentists cal their x-rays? Tooth pics.