/*

import { list24700Sprint01 } from '../ActivityLists/AL24700Sprint01'
import { list24700Sprint02 } from '../ActivityLists/AL24700Sprint02'

import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'
import { xyz_2_1of6_sprintPlanning } from './SL00000Sprint02'

import { completeDeck, tReviewDemoSchedule, tLab } from './SL00000Sprint00'
import { bulletListSlide, tDiscussionBreakout, tPrework } from './SLSprint00'

import { breakoutStandard } from './SLSprint00'

import {checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'
import { basicSlide, orderedListSlide, submissionPercentage, sprintDemosIntro, sprintDemos, demoAssignment } from './SLSprint00'

import { tQuiz, tQuizExpectations } from './SLSprint00'
import { xyz_2_6of6_PreworkAnnouncementsAndAgenda } from './SL00000Sprint02'
import { xyz_n_6of6 } from './SL00000Sprint00'

import { web_3_1of6_PAaA } from './SL24700Sprint03'

//  Web & Distributed Programming (WEB) sprint 2 shared values.
const sprint = 2
const activityListPrevious = () => { return list24700Sprint01(sprint-1) }
const activityList = () => { return list24700Sprint02(sprint) }
	
// Session 1 of 6: Monday
export const web_2_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const web_2_1of6 = () => { return xyz_n_1of6(sprint, web_2_1of6_PAaA.prework, activityListPrevious, web_2_1of6_PAaA.agenda, web_2_2of6_PAaA.prework, activityList, xyz_2_1of6_sprintPlanning(sprint)) }

// Session 2 of 6: Wednesday
const web_2_2of6_PAaA = {
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

export const web_2_2of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_2_2of6_PAaA, sprint, activityList)
	const qAndA = () => { return bulletListSlide(`Sprint ${sprint} Planning Questions & Answers`, `What questions do you have about sprint ${sprint}?`, [ ]) }
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', web_2_3of6_PAaA.prework, sprint, activityList) }
	const introducingDemos = () => {
		return bulletListSlide('Foreshadowing Friday’s Sprint Demos', 
			'Sprint demos are a key part of Agile software development and Scrum.', [
			'They occur at the beginning of each new sprint ',
			'They are an opportunity to show what was completed in the previous sprint',
			'They are intended to be an **easy** and rewarding experience to show off your work',
			'Also a chance to see how others solved a problem and to see some of the challenges they faces',
			'We will each be doing at least on sprint demo during the semester during class' ])
	}

	return completeDeck(slideDeck, [ qAndA, discussionBreakout, introducingDemos, tReviewDemoSchedule, preworkNext, tLab ])
}

// Session 3 of 6: Friday
const web_2_3of6_PAaA = {
	'prework': [
		'Complete through activity 9 prior to next class', '',
		'Be prepared for Demos and Retrospectives' ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}

// Session 3 of 6: Friday
export const web_2_3of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_2_3of6_PAaA, sprint, activityList)
	const metrics = () => {
		return basicSlide(`Sprint ${sprint-1} Metrics`, [
			'What is Bob Parsons Rule #9?', '',
			`Let’s take a minute and review our Sprint ${sprint-1} Submission Percentage class metric.` ])
	}
	const metricsSubmissionPercentage = () => {
			return submissionPercentage([
				{ name: 'Discussion', due:10, submitted:9 },
				{ name: 'Quiz', due:10, submitted:10 },
				{ name: 'Lab', due:10, submitted:9 },
				{ name: 'Reflection', due: 10, submitted:9 }])
	}
	// Todo: Consider adding the pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Solid submission percentage in sprint 1',
			'All assignments are graded and posted', 
			'Thank you for your reflection comments',
			'A couple of nice comments about scrum teammates and the benefit of seeing classmates displaying their work', 
			'If you are not where you want to be in the class after sprint 1, I encourage you to come and talk with me' ])
	}
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			`How does your team feel about sprint ${sprint-1} now that it is over`,
			`What could be done to make sprint ${sprint-1} or the class overall better or more manageable`,
			'What improvements should we make as a class, team, or individual going forward' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', web_2_4of6_PAaA.prework, sprint, activityList) }


	return completeDeck(slideDeck, [ tReviewDemoSchedule, sprintDemosIntro, sprintDemos, demoAssignment, metrics, 
		metricsSubmissionPercentage, retrospective, retrospectiveBreakout, preworkNext ])
}

// Session 4 of 6: Monday
const breakoutCSSName = 'Cascading Style Sheets (CSS) '
const breakoutCSS = () => {
	return breakoutStandard( 
		`Breakout: ${breakoutCSSName}`, 
		`In this breakout session on ${breakoutCSSName} reading and lecture your team will discuss:`, [
		'Rulesets, Comments, Padding, Border, and Margin',
		'Selectors, Classes, and Pseudoclasses',
		'Cascading rules including inline, internal, and external', 
		'CSS and Bootstrap' ])
}
const web_2_4of6_PAaA = {
	'prework': [
		'Complete through activity 12 prior to next class', '',
		'Be prepared for Learning Web Development and Software License breakout' ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[ 
		'Sprint Progress Polling',
		'The Humble Text File (abbreviated)',
		`Breakout: ${breakoutCSSName}`,
		'Lab (as time allows)' ]
}
export const web_2_4of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_2_4of6_PAaA, sprint, activityList)
	const theHumbleTextFile = () => { return basicSlide('The Humble Text File (abbreviated)', ['Let’s explore the evolution of the humble text file.']) }
	const preworkNext = () => { return tPrework('Prework For Next Class', web_2_5of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ theHumbleTextFile, breakoutCSS, preworkNext, tLab ])
}

// Session 5 of 6: Wednesday
const breakoutCICDAzureWebsiteAndLicenseName = 'CI/CD, Azure Website, and Software Licenses'
const breakoutCICDAzureWebsiteAndLicense = () => {
	return breakoutStandard( 
		`Breakout: ${breakoutCICDAzureWebsiteAndLicenseName}`, 
		`In this breakout session on ${breakoutCICDAzureWebsiteAndLicenseName} reading and lectures your team will discuss:`, [
		'CI/CD... what are the tools we will be using for CI/CD?',
		'Azure Website... how will we host and implement CI/CD using Azure',
		'Software Licenses... make a case for a GPL license. Why would I choose MIT?' ])
}
const web_2_5of6_PAaA = {
	'prework': [
		'Complete through activity 14 prior to next class', '',
		`Be prepared for Quiz ${sprint}` ],
	'announcements':[ 
		'Any announcements or questions?' ],
	'agenda':[ 
		'Sprint Progress Polling',
		`Breakout: ${breakoutCICDAzureWebsiteAndLicenseName}`,
		'Lab... as time allows',
		`Quiz ${sprint}` ],
}
export const web_2_5of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_2_5of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', web_2_5of6_PAaA.prework, sprint, activityList) }
	const breakout = () => { return breakoutCICDAzureWebsiteAndLicense() }
	const preworkNext = () => { return tPrework('Prework For Next Class', web_2_6of6_PAaA.prework, sprint, activityList) }
	const quizExpectations = () => { return tQuizExpectations(sprint)}
	const quiz = () => { return tQuiz(sprint) }

	return 	completeDeck(slideDeck, [ poll, breakout, tLab, preworkNext, quizExpectations, quiz ])
}

const web_2_6of6_PAaA = xyz_2_6of6_PreworkAnnouncementsAndAgenda('Complete activity 14 and actively working on 15', sprint)
export const web_2_6of6 = () => { return  xyz_n_6of6(sprint, web_2_6of6_PAaA, web_3_1of6_PAaA.prework, activityList) }

*/