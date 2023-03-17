import { checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'
import { tDiscussionBreakout } from './SLSprint00'
import { tPrework } from './SLSprint00'
import { bulletListSlide } from './SLSprint00'
import { completeDeck } from './SL00000Sprint00'
import { tLab } from './SL00000Sprint00'
import { submissionPercentage } from './SLSprint00'
import { orderedListSlide } from './SLSprint00'
import { xyz_n_3of6 } from './SL00000Sprint00'

// import { list24500Sprint04 } from '../ActivityLists/AL24500Sprint04'
import { list24500Sprint05 } from '../ActivityLists/AL24500Sprint05'

// Sprint 5 Introduction to Object-Oriented Programming (OOP) global values.
const sprint = 5
const activityList = () => { return list24500Sprint05(sprint) }
// const activityListPrevious = () => { return list24500Sprint04(sprint) }

// BugBug: Need to implement session 1 slides and uncomment activityListPrevious.


const oop_5_2of6_PAaA = {
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'announcements':[ 
		'What is the last day to withdraw from Spring, 2023 16-week classes with a grade of “W”' ],
	'agenda':[
		'YouTube, Eric’s Trip to Google, The Social Dilemma, and Technology Business Models',
		`Discussion Board ${sprint} as a scrum team`,
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const oop_5_2of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(oop_5_2of6_PAaA, sprint, activityList)
	const theSocialDilemma = () => {
		return bulletListSlide('Technology Business Models', 
			'YouTube, Eric’s Trip to Google, The Social Dilemma, and Technology Business Models', [
			'YouTube',
			'Eric’s Trip to Google',
			'The Social Dilemma',
			'Technology Business Models' ])
	}
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', oop_5_3of6_PAaA.prework, sprint, activityList) }
	const reviewDemoSchedule = () => {
		return bulletListSlide('Review Friday’s Demo Schedule', 
			'Let’s review Wednesday’s demo schedule while recalling that demos are an important part of scrum and that they:', [
			'Occur at the beginning of each new sprint ',
			'Are an opportunity to show what was completed in the previous sprint',
			'Are an **easy** and hopefully rewarding experience to show off your work',
			'Provide a chance to see how others solved a problem and to see some of the challenges they faces' ]
		)
	}

	return completeDeck(slideDeck, [ theSocialDilemma, discussionBreakout, preworkNext, reviewDemoSchedule, tLab ])
}

const oop_5_3of6_PAaA = {
	'prework':[
		'Complete through activity 10 prior to next class', '',
		`Be prepared sprint ${sprint-1} Demos and Retrospectives` ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}

export const oop_5_3of6 = () => {
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:17, submitted:16 },
			{ name: 'Quiz', due:17, submitted:16 },
			{ name: 'Lab', due:17, submitted:17 },
			{ name: 'Reflection', due: 17, submitted: 17 }])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Fantastic submission percentage!',
			'All assignments are graded and posted', 
			'Can you see your scores and the answers to all quiz questions?',
			'Keep in mind that the last day to drop with a “W” is coming up soon',
			'Thank you for your reflection comments',
			'**Great** reflection question on why we don’t do more server-side Java programming' ])
	}
	return xyz_n_3of6(sprint, oop_5_3of6_PAaA, oop_5_4of6_PAaA.prework, activityList, metricsSubmissionPercentage, retrospective)
}

const oop_5_4of6_PAaA = {
	'prework':[
		'Complete through activity 11 prior to next class', '',
		'Be prepared for “Software Testing” breakout' ],
	'announcements':[ 
		'TBD' ],
	'agenda':[
		'TBD' ]
}