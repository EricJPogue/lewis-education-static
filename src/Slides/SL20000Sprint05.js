import { tFinalReviewActivityListAndAssignments, tNoClassToday, xyz_n_1of6, xyz_n_1of6_lists } from './SL00000Sprint00'

import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tLab } from './SL00000Sprint00'
import { tPrework, bulletListSlide, tDiscussionBreakout } from './SLSprint00'

import { submissionPercentage, retrospectiveIntroduction, orderedListSlide, retrospectiveBreakout, sprintDemos, sprintDemosIntro, demoAssignment, tQuiz } from './SLSprint00'

import { breakoutStandard } from './SLSprint00'

import { list20000Sprint04 } from '../ActivityLists/AL20000Sprint04'
import { list20000Sprint05 } from '../ActivityLists/AL20000Sprint05'

import { basicSlide } from './SLSprint00'

// Sprint 5 Introduction to Computer Science (ICS) global values.
const sprint = 5
const activityListPrevious = () => { return list20000Sprint04(sprint-1) }
const activityList = () => { return list20000Sprint05(sprint) }

// Sprint 5 session 1 of 6: Monday
export const ics_5_1of6_lists = xyz_n_1of6_lists(sprint)
export const xyz_5_1of6SprintPlanning = () => {
	return orderedListSlide('Sprint Planning', `Sprint ${sprint} Expectations:`, [
		'Similar to previous sprints with Discussion, Quiz, Lab, and Reflection',
		'We will complete our scrum team Discussion Board breakout session on Wednesday',
		`We will have sprint ${sprint-1} Demos and Retrospective on Friday`,
		'However, the final Friday of the sprint with be Easter Break which will be a challenge' ])
}
export const ics_5_1of6 = () => { return xyz_n_1of6(sprint, ics_5_1of6_lists.prework, activityListPrevious, ics_5_1of6_lists.agenda, ics_5_2of6_PAaA.prework, activityList, xyz_5_1of6SprintPlanning) }

export const theSocialDilemma = () => {
	return bulletListSlide('Technology Business Models', 
		'YouTube, Eric’s Trip to Google, The Social Dilemma, and Technology Business Models', [
		'YouTube',
		'Eric’s Trip to Google',
		'The Social Dilemma',
		'Technology Business Models' ])
}

// Sprint 5 session 2 of 6: Wednesday
const ics_5_2of6_PAaA = {
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'announcements':[ 
		'Registration is coming...' ],
	'agenda':[
		'Previous Class Projects',
		`Discussion Board ${sprint} as a scrum team`,
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const ics_5_2of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_5_2of6_PAaA, sprint, activityList)
	const previousClassProjects = () => {
		return basicSlide('Previous Class Projects', [
			'Review previous class project from example code.'])
	}
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_5_3of6_lists.prework, sprint, activityList) }
	const reviewDemoSchedule = () => {
		return bulletListSlide('Review Friday’s Demo Schedule', 
			'Let’s review Wednesday’s demo schedule while recalling that demos are an important part of scrum and that they:', [
			'Occur at the beginning of each new sprint ',
			'Are an opportunity to show what was completed in the previous sprint',
			'Are an **easy** and hopefully rewarding experience to show off your work',
			'Provide a chance to see how others solved a problem and to see some of the challenges they faces' ]
		)
	}

	return completeDeck(slideDeck, [ previousClassProjects, discussionBreakout, preworkNext, reviewDemoSchedule, tLab ])
}

// Sprint 5 session 3 of 6: Friday
const ics_5_3of6_lists = {
	'prework':[
		'Complete through activity 7 and working on activity 8 prior to next class', '',
		`Be prepared sprint ${sprint-1} Demos and Retrospectives` ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}
export const ics_5_3of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_5_3of6_lists, sprint, activityList)
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:15, submitted:12 },
			{ name: 'Quiz', due:15, submitted:15 },
			{ name: 'Lab', due:15, submitted:14 },
			{ name: 'Reflection', due:15, submitted:14 }])
	}
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Okay submission percentage',
			'Matchmaker feedback... challenging but fun',
			'All assignments are graded and posted' ])
	}
	const breakout = () =>{ return retrospectiveBreakout(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_5_4of6_lists.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ sprintDemosIntro, sprintDemos, demoAssignment, retrospectiveInto, metricsSubmissionPercentage, retrospective, breakout, preworkNext])
}



// Session 4 of 6: Monday
const ics_5_4of6_lists = {
	'prework':[
		'Complete through activity 12 prior to next class', '',
		'Be prepared for Networks breakout' ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[
		'Sprint Progress Polling',
		'Networks Breakout',
		'Prework for Next Class',
		'Lab' ]
}
export const ics_5_4of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_5_4of6_lists, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', ics_5_4of6_lists.prework, sprint, activityList) }
	const breakoutNetworks = () => { 
		return breakoutStandard( 
			'Breakout: Networks', 
			'In this breakout session we will explore Networks:', [
				'Network Types, Internet Connections, and Packet Switching',
				'Open Systems, Network Protocols, TCP/IP, and High-Level Protocols... plus latency and bandwidth',
				'The Web, HTTP, HTTPs, Encryption, and Domain Name System (DNS)',
				'Cloud Computing and Web servers',
				'Blockchain, Bitcoin, and Hashing... plus bitcoin vs ethereum energy consumption?' ]
		)
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_5_5of6_lists.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ poll, breakoutNetworks, preworkNext, tLab ])
}

// Sprint 5 session 5 of 6: Wednesday
const ics_5_5of6_lists = {
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[
		'Complete through activity 11', '',
		'Be prepared for Programming Together',
		`Be prepared for Quiz ${sprint}` ],
	'agenda':[
		'Sprint Progress Polling',
		'Final Assignment Review' ,
		'Lab',
		`Quiz ${sprint}` ]
}
export const ics_5_5of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_5_5of6_lists, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', ics_5_5of6_lists.prework, sprint, activityList) }
	const assignmentReview = () => { return tFinalReviewActivityListAndAssignments(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_5_6of6_lists.prework, sprint, activityList) }
	const quiz = () => { return tQuiz(sprint) }

	return 	completeDeck(slideDeck, [ poll, assignmentReview, tLab,  preworkNext, quiz ])
}

// Sprint 5 session 6 of 6: Friday
const ics_5_6of6_lists = {
	'prework':[
		`All sprint ${sprint} assignments due Sunday!` ],
	'announcements':[ ],
	'agenda':[ ]
}
export const ics_5_6of6 = () => { return [ tNoClassToday ] }

