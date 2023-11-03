import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'

import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tLab } from './SL00000Sprint00'
import { tPrework, bulletListSlide, tDiscussionBreakout } from './SLSprint00'

import { submissionPercentage, retrospectiveIntroduction, retrospectiveBreakout, orderedListSlide, sprintDemos, sprintDemosIntro, demoAssignment } from './SLSprint00'

import { breakoutStandard } from './SLSprint00'
import { tQuiz } from './SLSprint00'

import { web_6_1of6_lists } from './SL24700Sprint06'

import { list24700Sprint04 } from '../ActivityLists/AL24700Sprint04'
import { list24700Sprint05 } from '../ActivityLists/AL24700Sprint05'

// Sprint 5 Introduction to Computer Science (ICS) global values.
const sprint = 5
const activityListPrevious = () => { return list24700Sprint04(sprint-1) }
const activityList = () => { return list24700Sprint05(sprint) }

// Sprint 5 session 1 of 6: Monday
export const web_5_1of6_lists = xyz_n_1of6_lists(sprint)
export const web_5_1of6 = () => { return xyz_n_1of6(sprint, web_5_1of6_lists.prework, activityListPrevious, web_5_1of6_lists.agenda, web_5_2of6_lists.prework, activityList) }

// Sprint 5 session 2 of 6: Wednesday
const web_5_2of6_lists = {
	'announcements':[ 
		'Any announcements?' ],
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		'Review Friday’s Demo Schedule',
		'Lab & Programming Together' ]
}
export const web_5_2of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_5_2of6_lists, sprint, activityList)
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', web_5_3of6_lists.prework, sprint, activityList) }
	const reviewDemoSchedule = () => {
		return bulletListSlide('Review Friday’s Demo Schedule', 
			'Let’s review Wednesday’s demo schedule while recalling that demos are an important part of scrum and that they:', [
			'Occur at the beginning of each new sprint ',
			'Are an opportunity to show what was completed in the previous sprint',
			'Are an **easy** and hopefully rewarding experience to show off your work',
			'Provide a chance to see how others solved a problem and to see some of the challenges they faces' ]
		)
	}

	return completeDeck(slideDeck, [ discussionBreakout, preworkNext, reviewDemoSchedule, tLab ])
}

// Sprint 5 session 3 of 6: Friday
const web_5_3of6_lists = {
	'announcements':[ 
		'Any announcements?' ],
	'prework':[
		'Complete through activity 5 and working on activity 6 prior to next class', '',
		`Be prepared sprint ${sprint-1} Demos and Retrospectives` ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}
export const web_5_3of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_5_3of6_lists, sprint, activityList)
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:10, submitted:10 },
			{ name: 'Quiz', due:10, submitted:10 },
			{ name: 'Lab', due:10, submitted:10 },
			{ name: 'Reflection', due:10, submitted:10 }
		])
	}
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Fantastic submission percentage! Very well done!',
			'Grading is a work in process',
			'It looks like there were some challenges with Map Mania' ])
	}
	const breakout = () =>{ return retrospectiveBreakout(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', web_5_4of6_lists.prework, sprint, activityList) }

	return completeDeck(slideDeck, [sprintDemosIntro, sprintDemos, demoAssignment, retrospectiveInto, metricsSubmissionPercentage, retrospective, breakout, preworkNext])
}

// Sprint 5 session 4 of 6: Monday
export const web_5_4of6_lists = {
	'announcements':[ 
		'Sprint 4 assignments graded and posted' ],		
	'prework':[
		'Complete through activity 8 prior to next class', '',
		'Be prepared for “Database Access Through the Web” breakout' ],
	'agenda':[
		'YouTube, Eric’s Trip to Google, The Social Dilemma, and Technology Business Models',
		'“Database Access Through the Web” Breakout',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const web_5_4of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_5_4of6_lists, sprint, activityList)
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Database Access Through the Web', 
			'In this breakout session we will explore SQL Databases and Database Access Through the Web:', [
				'Relational Databases and the Structured Query Language (SQL)',
				'Databases, Tables, CREATE TABLE, INSERT, SELECT, WHERE, UPDATE, DELETE, DROP',
				'Data normalization, de-normalization, and joins... why is “join” controversial?',
				'PHP, Node.js, Java, C#, etc. ',
				'MySQL, PostgreSQL, DB2, MS SQL Server, etc. ',
				'SQL Database architecture of a Web application and Database Access Through the Web',
				'Shared databases',
				'NoSQL and where are we headed?' ]
		)
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', web_5_5of6_lists.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ breakout, preworkNext ])
}

const web_5_5of6_lists = {
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday!`,
		'I have to leave about 15 minutes early today' ],
	'prework':[
		'Complete through activity 11', '',
		'Be prepared for Lab',
		`Be prepared for Quiz ${sprint}` ],
	'agenda':[
		'Sprint Progress Polling',
		'Lab',
		`Quiz ${sprint}` ]
}
export const web_5_5of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_5_5of6_lists, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', web_5_5of6_lists.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', web_5_6of6_lists.prework, sprint, activityList) }
	const quiz = () => { return tQuiz(sprint) }

	return 	completeDeck(slideDeck, [ poll, tLab, preworkNext, quiz ])
}

const web_5_6of6_lists = {
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[
		'Complete through activity 10', '',
		'Be prepared for Lab' ],
	'agenda':[
		'Sprint Progress Polling',
		'Lab' ]
}
export const web_5_6of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_5_6of6_lists, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', web_5_6of6_lists.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', web_6_1of6_lists.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ poll, preworkNext, tLab ])
}