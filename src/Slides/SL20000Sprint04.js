import { getClass } from '../DataAndAPIs/Classes'

import { xyz_n_1of6_agenda_list, xyz_n_1of6_prework_list, xyz_n_1of6, completeDeck, checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'

import { sprintDemosIntro, sprintDemos, demoAssignment, reviewDemoSchedule } from './SLSprint00'
import { tPrework, bulletListSlide, discussionBreakout, submissionPercentage, retrospectiveBreakout, orderedListSlide, retrospectiveIntroduction } from './SLSprint00'

import { list20000Sprint03 } from '../ActivityLists/AL20000Sprint03'
import { list20000Sprint04 } from '../ActivityLists/AL20000Sprint04'

// Sprint 4 Introduction to Computer Science (ICS) values.
const sprint = 4
const activityList = () => { return list20000Sprint04(sprint) }
const activityListPrevious = () => { return list20000Sprint03(sprint-1) }

// Todo: Review https://stackoverflow.com/questions/1300242/passing-a-function-with-parameters-as-a-parameter
// Todo: Create xyz_n_1of6 version 2 that includes optional null (or default_announcements) announcements and makes prework_list 
// and agenda_list optionally null (or default_prework_list and default_agenda_list)

// Session 1 of 6.
export const ics_4_1of6_prework_list = xyz_n_1of6_prework_list(sprint)  
const ics_4_1of6_agenda_list = xyz_n_1of6_agenda_list(sprint)
export const ics_4_1of6 = () => { return xyz_n_1of6(sprint, ics_4_1of6_prework_list, activityListPrevious, ics_4_1of6_agenda_list, ics_4_2of6_lists.prework, activityList) }

// Session 2 of 6.
const ics_4_2of6_lists = {
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
		'Lab & Programming Together' ]
}
export const ics_4_2of6 = () => {
	const discussion4Breakout = () => { return discussionBreakout(sprint) } 
	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'Let’s commit to focusing on our Lab assignment by:', [
			'Start MatchMakerLite tutorial by implementing a README.md and LICENSE file in GitHub', 
			'Adding a MatchMakerLite.py file', 
			'Pushing the updated files to GitHub',
			'Zipping the files as if we were going to submit them for Lab 4',
			'Finally, let’s do the same thing for MatchMaker' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_4_3of6_lists.prework, activityList) }

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_4_2of6_lists, sprint, activityList)
	return completeDeck(slideDeck, [ discussion4Breakout, reviewDemoSchedule, preworkNext, programmingTogether ])
}

// Session 3 of 6.
const ics_4_3of6_lists = {
	'announcements':[ 
		'Any announcements?' ],
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
export const ics_4_3of6 = () => {
	const metricsSubmissionPercentage = () => {
		if (getClass().section === '002') {
			return submissionPercentage([
				{ name: 'Discussion', due:27, submitted:25 },
				{ name: 'Quiz', due:27, submitted:27 },
				{ name: 'Lab', due:27, submitted:24 },
				{ name: 'Reflection', due: 27, submitted: 26 }
			])
		} else {
			return submissionPercentage([
				{ name: 'Discussion', due:28, submitted:26 },
				{ name: 'Quiz', due:28, submitted:28 },
				{ name: 'Lab', due:28, submitted:27 },
				{ name: 'Reflection', due: 28, submitted: 27 }
			])
		}
	}
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Okay submission percentage... it does’t feel good to have multiple Labs not submitted',
			'I “don’t allow” for late assignments because historically it makes a difficult situation worse',
			'All assignments are graded and posted... maybe?', 
			'Still some difficulties creating and attaching zip files' ])
	}
	const breakout = () =>{ return retrospectiveBreakout(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_4_4of6_lists.prework, sprint, activityList) }

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_4_3of6_lists, sprint, activityList)
	return completeDeck(slideDeck, [sprintDemosIntro, sprintDemos, demoAssignment, retrospectiveInto, metricsSubmissionPercentage, retrospective, breakout, preworkNext])
}

const ics_4_4of6_lists = {
	'announcements':[ 
		'Any announcements?' ],
	'prework':[
		'Complete through activity 11 prior to next class', '',
		'Focus on “Gates and Circuits” and “Computing Components” chapters and lectures',
		'Be prepared for Lab and Programming Together**' ],
	'agenda':[
		'Gates and Circuits Breakout (abbreviated)',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}