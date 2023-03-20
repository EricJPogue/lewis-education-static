// BugBug: Replace this file with the code in SL44000Sprint05A.js. 

import { makeSlideDeck, xyz_n_2of6, xyz_n_3of6 } from './SL00000Sprint00'
import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tLab } from './SL00000Sprint00'
import { agendaSlide, basicSlide, basicSlideWithLogo, breakoutStandard, orderedListSlide, submissionPercentage, tPrework, tPreworkWithLogo } from './SLSprint00'
import { insertInto, sprintPlanningSlideDeck } from './SLSprintPlanning'

import { list44000Sprint04 } from '../ActivityLists/AL44000Sprint04'
import { list44000Sprint05 } from '../ActivityLists/AL44000Sprint05'

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
			{ name: 'Discussion', due:26, submitted:26 },
			{ name: 'Quiz', due:26, submitted:26 },
			{ name: 'Lab', due:26, submitted:26},
			{ name: 'Reflection', due: 26, submitted: 26 }
		])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
		'Feedback from Assignments & Reflections', [
		'Yet again. Perfect submission percentage! Very well done.',
		'All assignments graded and posted',
		'Great comments about teammates',
		'Not so great comments about working in teams... working in teams is HARD',
		'Videos were long and I will consider breaking the topics between sprints in the future',
		'If you are struggling with server-side APIs, need to get on that quickly',
		'Bootstrap is your contribution for future teams :-) Thank you',
		'Very nice work!',
		'THE 1975 - Robbers (Piano Cover)... Thank you' ])
	}

	return  xyz_n_3of6(sprint, se_5_3of6_PAaA, se_5_4of6_PAaA.prework, activityList, metrics, retrospective)
}

const se_5_4of6_PAaA = {
	'prework':[
		'Complete through activity 9 prior to next class', '',
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
		`Your team’s sprint ${sprint+1} is required, in-person, and scheduled for next Monday, November 7th`,
		`Sprint ${sprint+1} product backlog grooming with be Friday... plan on coming Monday with a fully groomed product backlog` ],

	'agenda':[
		'Sprint Progress Polling',
		'Lab',
		`Quiz ${sprint}` ]
}



/*
// BugBug: From last semester below.
// Sprint 5 Session 3 of 4
export const SD44000_5_3_of_4_ROUTE = '44000-5-3-of-4'
export const sd44000Sprint5_3of4 = () => {
	return {
		sprint: 5,
		startingSlide: 2,
		slideFunctionList: [ preflightChecklist, instructorChecklist, agenda3of4, prework3of4, 
			upcomingSprintPlanning, breakoutMaintenanceAndSupport, prework4of4, quiz5, endOfSession ]
	}
}

const agenda3of4 = () => {
	return ( <div>
		{renderLogo()}
		{renderHeaderAndOrderedList(
			'Agenda:', '', [
			'Prework for Today',
			'Upcoming Sprint Planning Sessions with Required Attendance',
			'Breakout on Software Maintenance and Support and Fox Software Maintenance',
			'Prework for Next Class',
			'Quiz 5' ]
		)}
		<br /><br />
		{agendaFooter()}
	</div>)
}

const prework3of4 = () => {
	return ( <div>
		{renderHeader('Prework for Today')}
		Complete through activity 8<br /><br />
		Be prepared Breakout on Software Maintenance and Support and Fox Software Maintenance<br />
		Be prepared for Quiz 5
	</div> )
}
const upcomingSprintPlanning = () => { return topic('Upcoming Sprint Planning Sessions with Required Attendance') }

const quiz5 = () => {
	return ( <div>		
		{renderHeader('Quiz 5')}
		<p>A sincere attempt at quiz 5 is due before you leave class today.</p>
	</div> )
}

const prework4of4 = () => {
	return basicSlideWithTitle('Prework for Today', [
		'Complete through activity 11 and working on 12', '',
		'Be prepared for Sprint 6 Backlog Grooming',
		'Be prepared for Breakout Session on Software Metrics', 
		'Be prepared for Lab'
	])
}

// Shared functions
const agendaFooter = () => {
	const styleBodyText = { fontSize:20 }
	return (
		<p style={styleBodyText}>Discussion &amp; Questions welcome at any time but please be present with no phones or 
		email during our time together</p>
	)
}


*/