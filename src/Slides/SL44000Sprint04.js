import { xyz_n_1of6_agenda_list, xyz_n_1of6_prework_list, xyz_n_1of6, tLab } from './SL00000Sprint00'
import { completeDeck, checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'

import { sprintDemosIntro, sprintDemos, demoAssignment, reviewDemoSchedule, backlogGrooming } from './SLSprint00'
import { tPrework, bulletListSlide, discussionBreakout, submissionPercentage, retrospectiveBreakout, orderedListSlide, retrospectiveIntroduction, breakoutStandard, tQuiz } from './SLSprint00'

import { list44000Sprint03 } from '../ActivityLists/AL44000Sprint03'
import { list44000Sprint04 } from '../ActivityLists/AL44000Sprint04'

import { se_5_1of6_PAaA } from './SL44000Sprint05'

// Sprint 4 Software Engineering (SE) values.
const sprint = 4
const activityListPrevious = () => { return list44000Sprint03(sprint-1) }
const activityList = () => { return list44000Sprint04(sprint) }

// Session 1 of 6: Monday
// Todo: Review Sprint 4 Session 1 (below) as it was fixed but not reviewed after the session.
export const se_4_1of6_prework_list = xyz_n_1of6_prework_list(sprint)  
const se_4_1of6_agenda_list = xyz_n_1of6_agenda_list(sprint)
export const se_4_1of6 = () => { 
	const changes = () => {
		return bulletListSlide('Class Projects & Class Changes', 
			'Class Projects & Class Changes:', [
			'When I first came to Lewis, I thought class projects were a copout', 
			'... I was 100% wrong, wrong, wrong', 
			'I have worked to continuously improved my classes and to give more time to class projects',
			'This semester you will have 30 hours to on a class project of **your** choice',
			'Sprint 7 & sprint 8: 9 + 9 + 9 + 9 -> 12 + 12 + 12',
			'My suggestion? Do something that will make you proud... and that you could show to a perspective employer',
			'What will you do?' ])
	}
	let slides = xyz_n_1of6(sprint, se_4_1of6_prework_list, activityListPrevious, se_4_1of6_agenda_list, se_4_2of6_lists.prework, activityList)
	slides.splice(4, 0, changes)
	return slides
}


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
			{ name: 'Discussion', due:14, submitted:13 },
			{ name: 'Quiz', due:14, submitted:14 },
			{ name: 'Lab', due:14, submitted:14 },
			{ name: 'Reflection', due: 14, submitted: 14 }])
	}
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Excellent submission percentage... I still owe you donuts from before?',
			'My grading is a of a work in process this semester' ])
	}
	const breakout = () =>{ return retrospectiveBreakout(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_4_4of6_lists.prework, sprint, activityList) }

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_4_3of6_lists, sprint, activityList)
	return completeDeck(slideDeck, [sprintDemosIntro, sprintDemos, demoAssignment, retrospectiveInto, metricsSubmissionPercentage, retrospective, breakout, preworkNext])
}

// Session 4 of 6: Monday
const se_4_4of6_lists = {
	'prework':[
		'Complete through activity 8 and working on activity 9', '',
		'Be prepared for a breakout session on “Software Testing: Test-Driven Development”' ],
	'announcements':[ 
		'Your team’s sprint 5 planning is required, in-person, and scheduled for next Monday (October 23rd)',
		'ECaMS Billboard will be at high noon also on Monday, October 23rd'],
	'agenda':[
		'Sprint Progress Polling',
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
	'prework':[
		'Complete through activity 10 and be working on activity 11', '',
		'Be prepared for Quiz 4' ],
	'announcements':[ 
		'Reminder that your team’s sprint 5 planning is required, in-person, and scheduled for Monday, March 13th', '',
		`All sprint ${sprint} assignments due Sunday, March 12th!` ],
	'agenda':[
		'Backlog Grooming in Preparation for Sprint 5 Planning',
		'Lab & Programming Together', 
		'Prework for Next Class',
		'Quiz 4' ]
}
export const se_4_5of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_4_5of6_lists, sprint, activityList)
	const breakout = () => { return backlogGrooming(sprint+1) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_4_6of6_lists.prework, sprint, activityList) }
	const quiz = () => { return tQuiz(sprint) }

	return completeDeck(slideDeck, [ breakout, tLab, preworkNext, quiz ])
}

// Session 6 of 6: Friday
const se_4_6of6_lists = {
	'prework':[
		`All sprint ${sprint} assignments due Sunday, March 12th!`, '',
		'Be prepared for Backlog Grooming in Preparation for Sprint 5 Planning',
		'Be prepared for Lab & Programming Together' ],
	'announcements':[ 
		'Reminder that your team’s sprint 5 planning is required, in-person, and scheduled for Monday, March 13th', '',
		`All sprint ${sprint} assignments due Sunday, March 12th!` ],
	'agenda':[
		'Sprint Progress Polling',
		'Backlog Grooming in Preparation for Sprint 5 Planning',
		'Prework for Next Class',
		'Lab and Programming Together' ]
}
export const se_4_6of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_4_6of6_lists, sprint, activityList)
	const breakout = () => { return backlogGrooming(sprint+1) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_5_1of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ breakout, preworkNext, tLab ])
}

