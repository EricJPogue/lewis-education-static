import { xyz_n_1of6_agenda_list, xyz_n_1of6_prework_list, xyz_n_1of6, tLab } from './SL00000Sprint00'
import { completeDeck, checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'

import { sprintDemosIntro, sprintDemos, demoAssignment, reviewDemoSchedule, backlogGrooming } from './SLSprint00'
import { tPrework, bulletListSlide, discussionBreakout, submissionPercentage, retrospectiveBreakout, orderedListSlide, retrospectiveIntroduction, breakoutStandard, tQuiz } from './SLSprint00'

import { list44000Sprint03 } from '../ActivityLists/AL44000Sprint03'
import { list44000Sprint04 } from '../ActivityLists/AL44000Sprint04'

import { se_5_1of6_lists } from './SL44000Sprint05A'

// Sprint 4 Software Engineering (SE) values.
const sprint = 4
const activityListPrevious = () => { return list44000Sprint03(sprint-1) }
const activityList = () => { return list44000Sprint04(sprint) }

// Session 1 of 6: Monday
// Todo: Review Sprint 4 Session 1 (below) as it was fixed but not reviewed after the session.
export const se_4_1of6_prework_list = xyz_n_1of6_prework_list(sprint)  
const se_4_1of6_agenda_list = xyz_n_1of6_agenda_list(sprint)
export const se_4_1of6 = () => { return xyz_n_1of6(sprint, se_4_1of6_prework_list, activityListPrevious, se_4_1of6_agenda_list, se_4_2of6_lists.prework, activityList) }

// Session 2 of 6: Wednesday
const se_4_2of6_lists = {
	'announcements':[ 
		'Your team’s Sprint 5 Planning will be Monday, March 13th',
		'**Each of the remaining sprint planning sessions require in-person attendance' ],
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
export const se_4_2of6 = () => {
	const discussion4Breakout = () => { return discussionBreakout(sprint) } 
	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'Let’s commit to focusing on our Lab assignment by:', [
			'Reviewing the Final Project Proposal activity in our sprint 5 activity list', 
			'Complete a draft version of your team’s Final Project Proposal',
			'Be ready for a brief report-out on your draft proposal with about 10 minutes left in class', 
			'Consider the Lewis (ECaMS) “Cloud Billboard” product based on “Dogs, JavaScript & An API 🐶 Fetch, Promises & Async Await”' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', se_4_3of6_lists.prework, sprint, activityList) }

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_4_2of6_lists, sprint, activityList)
	return completeDeck(slideDeck, [ reviewDemoSchedule, preworkNext, discussion4Breakout, programmingTogether ])
}

// Session 3 of 6: Friday
const se_4_3of6_lists = {
	'prework':[
		'Complete through activity 9 prior to next class', '',
		`Be prepared for sprint ${sprint-1} demos and retrospectives`,
		'Those scheduled to demo please be a couple of minutes early to class' ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}
export const se_4_3of6 = () => {
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:14, submitted:14 },
			{ name: 'Quiz', due:14, submitted:14 },
			{ name: 'Lab', due:14, submitted:14 },
			{ name: 'Reflection', due: 14, submitted: 14 }
		])
	}
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Fantastic submission percentage... donuts, pizza, or something else?',
			'Assignments are not all graded... I still need to grade some labs, sorry?',
			'Several requests for more class time to work with your teams',
			'I will need to do something different with Node.js websites given the improvements with static websites',
			'Lots of comments about enjoying working with your teams',
			'Music videos... my new grading kryptonite? ' ])
	}
	const breakout = () =>{ return retrospectiveBreakout(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_4_4of6_lists.prework, sprint, activityList) }

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_4_3of6_lists, sprint, activityList)
	return completeDeck(slideDeck, [sprintDemosIntro, sprintDemos, demoAssignment, retrospectiveInto, metricsSubmissionPercentage, retrospective, breakout, preworkNext])
}

// Session 4 of 6: Monday
// Todo: Reduce prework to less than activity 10. 
const se_4_4of6_lists = {
	'prework':[
		'Complete through activity 8 and working on activity 9', '',
		'Be prepared for a breakout session on “Software Testing: Test-Driven Development”' ],
	'announcements':[ 
		'Reminder that your team’s sprint 5 planning is required, in-person, and scheduled for Monday, October 24th' ],
	'agenda':[
		'“Software Testing: Test-Driven Development” breakout',
		'Prework for Next Class',
		'Lab' ]
}
export const se_4_4of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_4_4of6_lists, sprint, activityList)
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Software Testing: Test-Driven Development', 
			'In this breakout session your team will discuss Software Testing: Test-Driven Development:', [
			'Test-Driven Development (TDD)', 
			'FIRST, TDD, and Red-Green-Refactor', 
			'Code coverage and defect assumptions',
			'Plan and Document vs. Agile testing practices and product quality responsibility',
			'Quality Assurance Organizations vs. Testing Services Organizations vs. Integrated Team Testing'
		])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', se_4_5of6_lists.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ breakout, preworkNext, tLab ])
}

// Session 5 of 6: Wednesday
const se_4_5of6_lists = {
	'announcements':[ 
		'Reminder that your team’s sprint 5 planning is required, in-person, and scheduled for Monday, October 24th',
		'... and there will be pizza!', '',
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[
		'Complete through activity 10 and be working on activity 11', '',
		'Be prepared for Quiz 4' ],
	'agenda':[
		'Backlog Grooming in Preparation for Sprint 5 Planning',
		'Prework for Next Class',
		'Quiz 4' ]
}
export const se_4_5of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_4_5of6_lists, sprint, activityList)
	const breakout = () => { return backlogGrooming(sprint+1) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_4_6of6_lists.prework, sprint, activityList) }
	const quiz = () => { return tQuiz(sprint) }

	return completeDeck(slideDeck, [ breakout, preworkNext, quiz ])
}

// Session 6 of 6: Friday
const se_4_6of6_lists = {
	'announcements':[ 
		'Reminder that your team’s sprint 5 planning is required, in-person, and scheduled for Monday, October 24th',
		'... and there will be pizza!', '',
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[
		`All sprint ${sprint} assignments due Sunday!`, '',
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		'Sprint Progress Polling',
		'Prework for Next Class',
		'Lab and Programming Together' ]
}
export const se_4_6of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_4_6of6_lists, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', se_5_1of6_lists.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ preworkNext, tLab ])
}

