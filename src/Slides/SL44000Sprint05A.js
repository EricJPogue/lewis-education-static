import { xyz_n_1of6_lists, xyz_n_1of6, tLab } from './SL00000Sprint00'

import { checklistAnnouncementsPreworkAndAgenda, completeDeck } from './SL00000Sprint00'
import { tPrework, bulletListSlide, tDiscussionBreakout } from './SLSprint00'

import { submissionPercentage, retrospectiveIntroduction, orderedListSlide, sprintDemos, sprintDemosIntro, demoAssignment } from './SLSprint00'

import { breakoutStandard } from './SLSprint00'

import { list44000Sprint04 } from '../ActivityLists/AL44000Sprint04'
import { list44000Sprint05 } from '../ActivityLists/AL44000Sprint05'

// Sprint 5 Software Engineering (SE) values.
const sprint = 5
const activityListPrevious = () => { return list44000Sprint04(sprint-1) }
const activityList = () => { return list44000Sprint05(sprint) }

// SE Sprint 5 session 1 of 6: Monday
export const se_5_1of6_lists = xyz_n_1of6_lists(sprint)
export const se_5_1of6 = () => { return xyz_n_1of6(sprint, se_5_1of6_lists.prework, activityListPrevious, se_5_1of6_lists.agenda, se_5_2of6_lists.prework, activityList) }

// SE Sprint 5 session 2 of 6: Wednesday
const se_5_2of6_lists = {
	'announcements':[ 
		'Friday, November 4 is the last day to withdraw from Fall 16-week classes with a grade of “W”',
		'Any other announcements?' ],
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Sprint Planning (continued)' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Confirm no Demos Schedule for Next Class',
		'Prework for Next Class',
		'Review Friday’s Demo Schedule',
		'Lab & Programming Together' ]
}
export const se_5_2of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_5_2of6_lists, sprint, activityList)
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', se_5_3of6_lists.prework, sprint, activityList) }
	const reviewDemoSchedule = () => {
		return bulletListSlide('Confirm no Demos Schedule for Next Class', 
			'Let’s review Friday’s demo schedule while recalling that demos are an important part of scrum and that they:', [
			'Occur at the beginning of each new sprint ',
			'Are an opportunity to show what was completed in the previous sprint',
			'Are an **easy** and hopefully rewarding experience to show off your work',
			'Provide a chance to see how others solved a problem and to see some of the challenges they faces' ]
		)
	}
	const sprintPlanningContinued = () => {
		return bulletListSlide('Sprint Planning (continued)', 
			`What do we need to do to finalize sprint ${sprint} planning?`, [
			'Backlog Grooming',
			'Sprint Planning',
			'Immutable commitments... it is okay to fail but not okay to modify.' ]
		)
	}

	return completeDeck(slideDeck, [ discussionBreakout, preworkNext, reviewDemoSchedule, sprintPlanningContinued ])
}

// Sprint 5 session 3 of 6: Friday
const se_5_3of6_lists = {
	'announcements':[ 
		'Any announcements?' ],
	'prework':[
		'Complete through activity 6 and working on activity 7 prior to next class', '',
		`Be prepared sprint ${sprint-1} Demos and Retrospectives` ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class',
		'Sprint Planning (continued)' ]
}
export const se_5_3of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_5_3of6_lists, sprint, activityList)
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:14, submitted:14 },
			{ name: 'Quiz', due:14, submitted:14 },
			{ name: 'Lab', due:14, submitted:13 },
			{ name: 'Reflection', due: 14, submitted: 13 }
		])
	}
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Fantastic submission percentage!',
			'Assignments graded and posted' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', se_5_4of6_lists.prework, sprint, activityList) }
	const sprintPlanningContinued = () => {
		return bulletListSlide('Sprint Planning (continued)', 
			`What do we need to do to finalize sprint ${sprint} planning?`, [
			'Backlog Grooming',
			'Sprint Planning',
			'Immutable commitments... it is okay to fail but not okay to modify.' ]
		)
	}

	return completeDeck(slideDeck, [sprintDemosIntro, sprintDemos, demoAssignment, retrospectiveInto, metricsSubmissionPercentage, retrospective, preworkNext, sprintPlanningContinued])
}

// Sprint 5 session 4 of 6: Monday
const se_5_4of6_lists = {
	'announcements':[ 
		`Reminder that your team’s sprint ${sprint+1} is required, in-person, and scheduled for next Monday, November 7th`,
		`Sprint ${sprint+1} product backlog grooming with be Friday... plan on coming Monday with a fully groomed product backlog` ],
	'prework':[
		'Complete through activity 9 prior to next class', '',
		'Be prepared for “Software Maintenance and Support” breakout' ],
	'agenda':[
		`Scrum Team Sprint ${sprint} backlog review and sign off`,
		'Prework for Next Class',
		'“Software Maintenance and Support” Breakout' ]
}
export const se_5_4of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_5_4of6_lists, sprint, activityList)
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Maintenance and Support', 
			'In this breakout session we will explore Networks:', [
				'Maintenance',
				'Support',
				'Maintenance in Waterfall and Iterative',
				'Maintenance in Agile',
				'Describe the daily activities of a support team and the impact of user base',
				'Describe the daily activities of a maintenance team and how it differs from a development team' ]
		)
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', se_5_5of6_lists.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ breakout, preworkNext, tLab ]) 
}

// SE sprint 5 session 5 of 6
const se_5_5of6_lists = {
	'announcements':[ 
		`Your team’s sprint ${sprint+1} is required, in-person, and scheduled for next Monday, November 7th`,
		`Sprint ${sprint+1} product backlog grooming with be Friday... plan on coming Monday with a fully groomed product backlog` ],
	'prework':[
		'Complete through activity 10 prior to next class', '',
		'Be prepared for “Software Maintenance and Support” breakout' ],
	'agenda':[
		`Scrum Team Sprint ${sprint} backlog review and sign off`,
		'Prework for Next Class',
		'“Software Maintenance and Support” Breakout' ]
}
export const se_5_5of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_5_5of6_lists, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', se_5_6of6_lists.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ preworkNext ]) 
}

// SE sprint 5 session 6 of 6
const se_5_6of6_lists = {
	'announcements':[ 
		`Your team’s sprint ${sprint+1} is required, in-person, and scheduled for next Monday, November 7th`,
		`Sprint ${sprint+1} product backlog grooming with be Friday... plan on coming Monday with a fully groomed product backlog`,
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[
		`All sprint ${sprint} assignments due Sunday!`, '',
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		'Sprint Progress Polling',
		'Prework for Next Class',
		'Lab and Programming Together' ]
}
export const se_5_6of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_5_6of6_lists, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', se_6_1of6_lists.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ preworkNext ]) 
}

// Todo: Move this to sprint 6 slides. 

// SE Sprint 6 session 1 of 6: Monday
export const se_6_1of6_lists = xyz_n_1of6_lists(sprint)