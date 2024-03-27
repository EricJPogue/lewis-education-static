import { makeSlideDeck, xyz_n_2of6 } from './SL00000Sprint00'
import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tLab } from './SL00000Sprint00'
import { agendaSlide, basicSlide, basicSlideWithLogo, breakoutStandard, orderedListSlide, submissionPercentage, tPrework, tPreworkWithLogo, tQuiz } from './SLSprint00'
import { insertInto, sprintPlanningSlideDeck } from './SLSprintPlanning'
import { retrospectiveBreakout, retrospectiveIntroduction } from './SLSprint00'
import { sprintDemosIntro, sprintDemos, demoAssignment } from './SLSprint00'

import { se_6_1of6_PAaA } from './SL44000Sprint06'
import { list44000Sprint04 } from '../ActivityLists/AL44000Sprint04'
import { list44000Sprint05 } from '../ActivityLists/AL44000Sprint05'

import { xyz_5_1of6SprintPlanning } from './SL20000Sprint05'

// Sprint 5 Software Engineering (SE) values.
const sprint = 5
const activityListPrevious = () => { return list44000Sprint04(sprint-1) }
const activityList = () => { return list44000Sprint05(sprint) }

// Session 1 of 6: Monday
export const se_5_1of6_PAaA = {
	'prework':[ 
		'Everything is due Sunday!', '',
		`Be prepared for Sprint ${sprint} Planning` ],
	'announcements':[ 
		`${sprint} starts now.` ],
	'agenda':[ 
		`Sprint ${sprint} Planning as a Class`,
		'Prework for Next Class',
		`Sprint ${sprint} Planning for your Team**` ]
}
export const se_5_1of6 = () => { 
	const prework = () => { return tPreworkWithLogo('Prework For Today', se_5_1of6_PAaA.prework, sprint-1, activityListPrevious) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ['Today is going to be challenging so let’s stay relaxed and focused']) }
	const agenda = () => { return agendaSlide(se_5_1of6_PAaA.agenda) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_5_2of6_PAaA.prework, sprint, activityList) }
	const activitiesReview = () => {
		return basicSlide('Activity List and Assignments Review', [
			'Let’s open our Blackboard shell and briefly review the activity list and assignments together.' ]
		)
	}
	const planningBreakout = () => {
		return orderedListSlide('Sprint Planning Scrum Team Breakout', 'As a scrum team:', [
			`No discussion or breakout today so that we can focus on your Team’s Sprint ${sprint} planning` ]
		)
	}

	const slideDeck = makeSlideDeck([ prework, announcements, agenda, xyz_5_1of6SprintPlanning, activitiesReview, planningBreakout, preworkNext ])
	const slideDeckWithSprintPlanning = insertInto(slideDeck, sprintPlanningSlideDeck(sprint), 8)
	return slideDeckWithSprintPlanning
}

// Session 2 of 6: Wednesday
const se_5_2of6_PAaA = {
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Sprint Planning (continued)' ],
	'announcements':[ 
		'What is the last day to withdraw from Spring, 2023 16-week classes with a grade of “W”' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Confirm Demos Schedule for Next Class',
		'Prework for Next Class',
		'Review Friday’s Demo Schedule',
		'Lab & Programming Together' ]
}

export const se_5_2of6 = () => {
	const slideDeck = xyz_n_2of6(sprint, se_5_2of6_PAaA, se_5_3of6_PAaA.prework, activityList)
	const slideDeckWithSprintPlanning = insertInto(slideDeck, sprintPlanningSlideDeck(sprint), 8)
	return slideDeckWithSprintPlanning
}

// Session 3 of 6: Friday
const se_5_3of6_PAaA = {
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
export const se_5_3of6 = () => {
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:28, submitted:25 },
			{ name: 'Quiz', due:28, submitted:28 },
			{ name: 'Lab', due:28, submitted:28 },
			{ name: 'Reflection', due:28, submitted: 28 }])
	} 
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Excellent submission percentage... I still owe you donuts from before?',
			'Everything is graded and posted',
			'I was not sure how to grade Discussion 4... so I just gave out points like candy',
			'Thank you, thank you, thank you for your Reflection 4 comments',
			'Working with teams is challenging, can be enjoyable, and is essential' ])
	}
	const breakout = () =>{ return retrospectiveBreakout(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_5_4of6_PAaA.prework, sprint, activityList) }

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_5_3of6_PAaA, sprint, activityList)
	return completeDeck(slideDeck, [sprintDemosIntro, sprintDemos, demoAssignment, retrospectiveInto, metricsSubmissionPercentage, retrospective, breakout, preworkNext])
}
const se_5_4of6_PAaA = {
	'prework':[
		'Complete through activity 10 prior to next class', '',
		'Be prepared for “Software Maintenance and Support” breakout' ],
	'announcements':[ 
		`Reminder that your team’s sprint ${sprint+1} is required, in-person, and scheduled for next Wednesday`,
		`Sprint ${sprint+1} product backlog grooming with be Wednesday... plan on coming Wednesday with a fully groomed product backlog`,
		'Lab 5 - Planning, Demos, and Retrospective was due last week... please get it submitted today' ],
	'agenda':[
		'Sprint Progress Polling', 
		'Prework for Next Class',
		'“Software Maintenance and Support” Breakout',
		'Lab' ]
}
export const se_5_4of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_5_4of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', se_5_4of6_PAaA.prework, sprint, activityList) }
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Maintenance and Support', 
			'In this breakout session we will explore Maintenance and Support:', [
				'Maintenance including daily activities of a development and/or maintenance team',
				'Issues vs. Defects',
				'Support including daily activities of a support team',
				'Maintenance in Waterfall and Iterative',
				'Maintenance in Agile',
				'What is the biggest challenge we face in getting real-life usage of your products?' ]
		)
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', se_5_5of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ breakout, poll, preworkNext, tLab ]) 
}

// Session 5 of 6
const se_5_5of6_PAaA = {
	'prework':[
		'Complete through activity 10 prior to next class', '',
		'Be prepared for Backlog Grooming',
		`Be prepared for Quiz ${sprint}` ],
	'announcements':[ 
		`In-person attendance in required for Wednesday for sprint ${sprint+1} planning` ],
	'agenda':[
		'Sprint Progress Polling',
		'Backlog Grooming',
		`Quiz ${sprint}` ]
}
export const se_5_5of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_5_5of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', se_5_5of6_PAaA.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_5_6of6_PAaA.prework, sprint, activityList) }
	const quiz = () => { return tQuiz(sprint) }
	
	const slideDeckWithPrework = completeDeck(slideDeck, [ poll, tLab, preworkNext, quiz ]) 
	return insertInto(slideDeckWithPrework, sprintPlanningSlideDeck(sprint), 5)
}

// Session 6 of 6
const se_5_6of6_PAaA = {
	'prework':[
		`All sprint ${sprint} assignments due Sunday!`, '',
		'Be prepared for Sprint Planning' ],
	'announcements':[ 
		`Your team’s sprint ${sprint+1} planning is required, in-person, and scheduled for Monday`,
		`Monday with a fully groomed product backlog`,
		`All sprint ${sprint} assignments due Sunday!` ],
	'agenda':[
		'Backlog Grooming',
		'Lab' ]
}
export const se_5_6of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_5_6of6_PAaA, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', se_6_1of6_PAaA.prework, sprint, activityList) }
	const slideDeckWithPrework = completeDeck(slideDeck, [ preworkNext ]) 
	return insertInto(slideDeckWithPrework, sprintPlanningSlideDeck(sprint), 5)
}
