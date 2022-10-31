import { getClass } from '../DataAndAPIs/Classes'

import { xyz_n_1of6, xyz_n_1of6_lists } from './SL00000Sprint00'

import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tLab } from './SL00000Sprint00'
import { tPrework, bulletListSlide, tDiscussionBreakout, end } from './SLSprint00'

import { submissionPercentage, retrospectiveIntroduction, orderedListSlide, retrospectiveBreakout, sprintDemos, sprintDemosIntro, demoAssignment } from './SLSprint00'

import { breakoutStandard } from './SLSprint00'

import { list20000Sprint04 } from '../ActivityLists/AL20000Sprint04'
import { list20000Sprint05 } from '../ActivityLists/AL20000Sprint05'

// Sprint 5 Introduction to Computer Science (ICS) global values.
const sprint = 5
const activityListPrevious = () => { return list20000Sprint04(sprint-1) }
const activityList = () => { return list20000Sprint05(sprint) }

// Sprint 5 session 1 of 6: Monday
export const ics_5_1of6_lists = xyz_n_1of6_lists(sprint)
export const ics_5_1of6 = () => { return xyz_n_1of6(sprint, ics_5_1of6_lists.prework, activityListPrevious, ics_5_1of6_lists.agenda, ics_5_2of6_lists.prework, activityList) }

// Sprint 5 session 2 of 6: Wednesday
const ics_5_2of6_lists = {
	'announcements':[ 
		'Friday, November 4 is the last day to withdraw from Fall 16-week classes with a grade of “W”',
		'Any other announcements?' ],
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		'YouTube, Eric’s Trip to Google, The Social Dilemma, and Technology Business Models',
		`Discussion Board ${sprint} as a scrum team`,
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		'Review Friday’s Demo Schedule',
		'Lab & Programming Together' ]
}
export const ics_5_2of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_5_2of6_lists, sprint, activityList)
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

	return completeDeck(slideDeck, [ discussionBreakout, preworkNext, reviewDemoSchedule, tLab ])
}

// Sprint 5 session 3 of 6: Friday
const ics_5_3of6_lists = {
	'announcements':[ 
		'Any announcements?' ],
	'prework':[
		'Complete through activity 6 and working on activity 7 prior to next class', '',
		`Be prepared sprint ${sprint-1} Demos and Retrospectives` ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}
export const ics_5_3of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_5_3of6_lists, sprint, activityList)
	const metricsSubmissionPercentage = () => {
		if (getClass().section === '002') {
			return submissionPercentage([
				{ name: 'Discussion', due:27, submitted:26 },
				{ name: 'Quiz', due:27, submitted:26 },
				{ name: 'Lab', due:27, submitted:25 },
				{ name: 'Reflection', due: 27, submitted: 26 }
			])
		} else {
			return submissionPercentage([
				{ name: 'Discussion', due:27, submitted:26 },
				{ name: 'Quiz', due:27, submitted:27 },
				{ name: 'Lab', due:27, submitted:27 },
				{ name: 'Reflection', due: 27, submitted: 27 }
			])
		}
	}
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const retrospective = () => {
		if (getClass().section === '002') {
			return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Solid submission percentage... well done.',
			'All assignments are graded and posted', 
			'Friday, November 4 is the last day to withdraw from Fall 16-week classes with a grade of “W”',
			'Multiple Reflection comments about successfully getting started earlier', 
			'Very nice Python work!' ])
		} else {
			return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Exceptional submission percentage... very well done!',
			'100% Submission Percentage === Food... what does “===” mean in Python?',
			'All assignments are graded and posted', 
			'Friday, November 4 is the last day to withdraw from Fall 16-week classes with a grade of “W”',
			'Multiple Reflection comments about successfully getting started earlier', 
			'Very nice Python work!' ])
		}
	}
	const breakout = () =>{ return retrospectiveBreakout(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_5_4of6_lists.prework, sprint, activityList) }

	return completeDeck(slideDeck, [sprintDemosIntro, sprintDemos, demoAssignment, retrospectiveInto, metricsSubmissionPercentage, retrospective, breakout, preworkNext])
}

// Sprint 5 session 4 of 6: Monday
const ics_5_4of6_lists = {
	'announcements':[ 
		'Any announcements?' ],
	'prework':[
		'Complete through activity 10 prior to next class', '',
		'Be prepared for Networks breakout' ],
	'agenda':[
		'Networks Breakout',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const ics_5_4of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_5_4of6_lists, sprint, activityList)
	const breakout = () => { 
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
	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'How can we best make progress on TurtleDraw?', [
			'Review the differences between TurtleDraw Lite and TurtleDraw',
			'Implementing a README.md and LICENSE file in GitHub', 
			'Added TurtleDraw.py file', 
			'Pushed the updated files to GitHub',
			'Start working on TurtleDraw' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_4_5of6_lists.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ breakout, preworkNext, programmingTogether ])
}

// Sprint 5 session 5 of 6: Wednesday
const ics_4_5of6_lists = {
	'announcements':[ 
		'Last warning that Friday, November 4 is the last day to withdraw from Fall 16-week classes with a grade of “W”',
		'Any other announcements?' ],
	'prework':[
		'Complete through activity 11', '',
		'Be prepared for Programming Together with Abstraction, Loops, Functions, and Files',
		`Be prepared for Quiz ${sprint}` ],
	'agenda':[
		'Lab & Programming Together with Loops, Functions, and Files... but not Tuples, Lists, Dictionaries, and Sets',
		'Quiz 4' ]
}

export const ics_5_5of6 = () => { return [end] }
export const ics_5_6of6 = () => { return [end] }