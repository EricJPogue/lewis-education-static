import { xyz_n_1of6, xyz_n_1of6_lists } from './SL00000Sprint00'
import { xyz_5_1of6SprintPlanning } from './SL20000Sprint05'

import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tLab } from './SL00000Sprint00'
import { basicSlide } from './SLSprint00'
import { submissionPercentage, sprintDemos, sprintDemosIntro, demoAssignment, orderedListSlide } from './SLSprint00' 
import { tReviewDemoSchedule } from './SL00000Sprint00'
import { breakoutStandard } from './SLSprint00'

import { tPrework, bulletListSlide, tDiscussionBreakout } from './SLSprint00'
import { tUnderConstruction } from './SL00000Sprint00'
import { list44500Sprint04 } from '../ActivityLists/AL44500Sprint04'
import { list44500Sprint05 } from '../ActivityLists/AL44500Sprint05'

// Constants
const sprint = 5
const activityListPrevious = () => { return list44500Sprint04(sprint-1) }
const activityList = () => { return list44500Sprint05(sprint) }

// Sprint 5 session 1 of 6: Monday
export const af_5_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const af_5_1of6 = () => { return xyz_n_1of6(sprint, af_5_1of6_PAaA.prework, activityListPrevious, af_5_1of6_PAaA.agenda, af_5_2of6_PAaA.prework, activityList, xyz_5_1of6SprintPlanning) }

// Sprint 5 session 2 of 6: Wednesday
const af_5_2of6_PAaA = {
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
export const af_5_2of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(af_5_2of6_PAaA, sprint, activityList)
	const previousClassProjects = () => {
		return basicSlide('Previous Class Projects', [
			'Review previous class project from example code.'])
	}
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', af_5_3of6_PAaP.prework, sprint, activityList) }
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
const af_5_3of6_PAaP = {
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

// export const af_5_3of6 = () => { return [ tUnderConstruction ] }

export const af_5_3of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(af_5_3of6_PAaP, sprint, activityList)
	const metrics = () => {
		return basicSlide(`Sprint ${sprint-1} Metrics`, [
			'What is Bob Parsons Rule #9?', '',
			`Let’s take a minute and review our Sprint ${sprint-1} Submission Percentage class metric.` ])
	}
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
			'All assignments are partially graded and posted', 
			'Thank you for your reflection comments' ])
	}
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			`How does your team feel about sprint ${sprint-1} now that it is over`,
			`What could be done to make sprint ${sprint-1} or the class overall better or more manageable`,
			'What improvements should we make as a class, team, or individual going forward' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', af_5_4of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ tReviewDemoSchedule, sprintDemosIntro, sprintDemos, demoAssignment, metrics, 
		metricsSubmissionPercentage, retrospective, retrospectiveBreakout, preworkNext, tLab ])
}


// Sprint 5 session 4 of 6: Monday
const af_5_4of6_PAaA = {
	'prework':[
		'Complete through activity 9' ],
	'announcements':[ 
		'Stay focused as Wednesday will be our last class for this sprint' ],
	'agenda':[
		'Remote Procedure Calls (RPCs) and Web Services',
		'Lab',
		'Prework for Next Class' ]
}

export const af_5_4of6 = () =>  {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(af_5_4of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', af_5_4of6_PAaA.prework, sprint, activityList) }
	const breakoutRPCs = () => { 
		return breakoutStandard( 
			'Breakout: Remote Procedure Calls (RPCs)', 
			'In this breakout session we will explore various RPCs methods used by various Application FrameworksNetworks:', [
				'“Old school web” URL paths and parameters responding with HTML, CSS, and JavaScript',
				'REST and SOAP with POST, GET, DELETE, and PUT',
				'Variations of parameter passing with REST and SOAP',
				'GraphQL',
				'gRPC',
				'Apache Thrift',
				'WebSocket' ]
		)
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', af_5_5of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ poll, breakoutRPCs, preworkNext, tLab ])
}

// Sprint 5 session 4 of 6: Monday
const af_5_5of6_PAaA = {
	'prework':[
		'Complete through activity 11' ],
	'announcements':[ 
		'' ],
	'agenda':[
		'' ]
}
export const af_5_5of6 = () => { return [ tUnderConstruction ] }
export const af_5_6of6 = () => { return [ tUnderConstruction ] }
