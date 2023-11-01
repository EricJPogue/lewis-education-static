import { makeSlideDeck, xyz_n_2of6, xyz_n_3of6 } from './SL00000Sprint00'
import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tLab } from './SL00000Sprint00'
import { agendaSlide, basicSlide, basicSlideWithLogo, breakoutStandard, orderedListSlide, submissionPercentage, tPrework, tPreworkWithLogo, tQuiz } from './SLSprint00'
import { insertInto, sprintPlanningSlideDeck } from './SLSprintPlanning'

import { se_6_1of6_PAaA } from './SL44000Sprint06'
import { list44000Sprint04 } from '../ActivityLists/AL44000Sprint04'
import { list44000Sprint05 } from '../ActivityLists/AL44000Sprint05'

import { theSocialDilemma } from './SL20000Sprint05'

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
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning as a Class', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprints with Discussion, Quiz, Lab, and Reflection',
			'We will complete our scrum team Discussion Board breakout session on Wednesday',
			`We will have sprint ${sprint-1} Demos and Retrospective on Friday` ])
	}
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

	const slideDeck = makeSlideDeck([ prework, announcements, agenda, sprintPlanning, activitiesReview, planningBreakout, preworkNext ])
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
	const metrics = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:13, submitted:13 },
			{ name: 'Quiz', due:13, submitted:13 },
			{ name: 'Lab', due:13, submitted:12},
			{ name: 'Reflection', due:13, submitted:12 }
		])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
		'Feedback from Assignments & Reflections', [
		'Solid submission percentage! Well done.',
		'Azure functions are NOT a panacea',
		'Node.js is not the mess that it was at the beginning of the sprint',
		'My grading is a of a work in process this semester' ])
	}

	return  xyz_n_3of6(sprint, se_5_3of6_PAaA, se_5_4of6_PAaA.prework, activityList, metrics, retrospective)
}

const se_5_4of6_PAaA = {
	'prework':[
		'Complete through activity 10 prior to next class', '',
		'Be prepared for “Software Maintenance and Support” breakout' ],
	'announcements':[ 
		`Reminder that your team’s sprint ${sprint+1} is required, in-person, and scheduled for next Monday`,
		`Sprint ${sprint+1} product backlog grooming with be Friday... plan on coming Monday with a fully groomed product backlog`,
		'Very well done with your sprint 1 planning and sign off' ],
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
		'Be prepared for Lab',
		`Be prepared for Quiz ${sprint}` ],
	'announcements':[ 
		`In-person attendance in required for Monday for sprint ${sprint+1} planning`,
		`Sprint ${sprint+1} product backlog grooming with be Friday... plan on coming Monday with a fully groomed product backlog`,
		'Lab Demo assignments have been graded' ],
	'agenda':[
		'Sprint Progress Polling',
		'YouTube, Eric’s Trip to Google, The Social Dilemma, and Technology Business Models',
		'Lab',
		`Quiz ${sprint}` ]
}
export const se_5_5of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_5_5of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', se_5_5of6_PAaA.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_5_6of6_PAaA.prework, sprint, activityList) }
	const quiz = () => { return tQuiz(sprint) }
	
	return completeDeck(slideDeck, [ poll, theSocialDilemma, tLab, preworkNext, quiz ]) 
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
