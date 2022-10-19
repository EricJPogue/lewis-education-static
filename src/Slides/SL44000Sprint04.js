import { xyz_n_1of6_agenda_list, xyz_n_1of6_prework_list, xyz_n_1of6, tLab } from './SL00000Sprint00'
import { completeDeck, checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'

import { sprintDemosIntro, sprintDemos, demoAssignment, reviewDemoSchedule, end } from './SLSprint00'
import { tPrework, bulletListSlide, discussionBreakout, submissionPercentage, retrospectiveBreakout, orderedListSlide, retrospectiveIntroduction, breakoutStandard } from './SLSprint00'

import { list44000Sprint03 } from '../ActivityLists/AL44000Sprint03'
import { list44000Sprint04 } from '../ActivityLists/AL44000Sprint04'

// Sprint 4 Software Engineering (SE) values.
const sprint = 4
const activityListPrevious = () => { return list44000Sprint03(sprint-1) }
const activityList = () => { return list44000Sprint04(sprint) }

// Session 1 of 6.
// Todo: Review Sprint 4 Session 1 (below) as it was fixed but not reviewed after the session.
export const se_4_1of6_prework_list = xyz_n_1of6_prework_list(sprint)  
const se_4_1of6_agenda_list = xyz_n_1of6_agenda_list(sprint)
export const se_4_1of6 = () => { return xyz_n_1of6(sprint, se_4_1of6_prework_list, activityListPrevious, se_4_1of6_agenda_list, se_4_2of6_lists.prework, activityList) }

// Session 2 of 6.
const se_4_2of6_lists = {
	'announcements':[ 
		'Your team’s Sprint 5 Planning will be Monday, October 24th',
		'This planning session is required and in-person attendance**' ],
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
export const se_4_2of6 = () => {
	const discussion4Breakout = () => { return discussionBreakout(sprint) } 
	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'Let’s commit to focusing on our Lab assignment by:', [
			'Setting up a GitHub organization', 
			'Setting up a GitHub repository and Azure static website to host the client',
			'Setting up a GitHub repository and Azure Node.js website to host the server APIs', 
			'Starting work on a “Hello World” type Node.js API' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', se_4_3of6_lists.prework, sprint, activityList) }

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_4_2of6_lists, sprint, activityList)
	return completeDeck(slideDeck, [ discussion4Breakout, reviewDemoSchedule, preworkNext, programmingTogether ])
}

// Session 3 of 6: Friday
const se_4_3of6_lists = {
	'announcements':[ 
		'Reminder that your team’s sprint 5 planning is required, in-person, and scheduled for Monday, October 24th' ],
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
			'Fantastic submission percentage... how would we like to celebrate, food? ',
			'Very nice work with GitHub Organizations... that will be something that future classes will thank you for',
			'Assignments are not all graded... I still need to grade 4 labs, sorry?', 
			'I agree that some of the lab 3 instructions were not very clear... I will work to improve that in the future' ])
	}
	const breakout = () =>{ return retrospectiveBreakout(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_4_4of6_lists.prework, sprint, activityList) }

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_4_3of6_lists, sprint, activityList)
	return completeDeck(slideDeck, [sprintDemosIntro, sprintDemos, demoAssignment, retrospectiveInto, metricsSubmissionPercentage, retrospective, breakout, preworkNext])
}

// Session 4 of 6: Monday
const se_4_4of6_lists = {
	'announcements':[ 
		'Reminder that your team’s sprint 5 planning is required, in-person, and scheduled for Monday, October 24th' ],
	'prework':[
		'Complete through activity 10 and be working on activity 11', '',
		'Be prepared for a breakout session on “Software Testing: Test-Driven Development”' ],
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

// Session 4 of 6: Monday
const se_4_5of6_lists = {
	'announcements':[ 
		'Reminder that your team’s sprint 5 planning is required, in-person, and scheduled for Monday, October 24th',
		'... and there will be pizza!' ],
	'prework':[
		'Complete through activity 10 and be working on activity 11', '',
		'Be prepared for Quiz 4' ],
	'agenda':[
		'',
		'',
		'' ]
}

// Session 5 of 6: Wednesday
export const se_4_5of6 = () => { return [end]}

// Session 6 of 6: Friday
export const se_4_6of6 = () => { return [end]}