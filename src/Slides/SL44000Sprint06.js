import { submissionPercentage, orderedListSlide, retrospectiveIntroduction, tDiscussionBreakout } from '../Slides/SLSprint00'
import { breakoutStandard, tPrework } from './SLSprint00'
import { tPreworkWithLogo, basicSlideWithLogo, agendaSlide, basicSlide } from '../Slides/SLSprint00'

import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tLab, makeSlideDeck } from './SL00000Sprint00'
import { insertInto } from './SLSprintPlanning'
import { sprintPlanningSlideDeck } from './SLSprintPlanning'

import { list44000Sprint05 } from '../ActivityLists/AL44000Sprint05'
import { list44000Sprint06 } from '../ActivityLists/AL44000Sprint06'

import { xyz_n_5of6 } from './SL00000Sprint00'
import { xyz_n_6of6 } from './SL00000Sprint00'
import { se_7_1of6_PAaA } from './SL44000Sprint07'


import { xyz_n_1of6_lists } from './SL00000Sprint00'
import { xyz_6_2of6SprintPlanning } from './SL20000Sprint06'


// Todo: theSocialDilemma, 
// import { theSocialDilemma } from './SL20000Sprint05'


// Sprint 6 Software Engineering (SE) global values.
const sprint = 6
const activityListPrevious = () => { return list44000Sprint05(sprint-1) }
const activityList = () => { return list44000Sprint06(sprint) }

// Todo: Review slide schedule knowing that the current slide schedule reflects Easter break occurring in the middle 
//     of sprint 6 and sprint 7.

// Session 1 of 6: Monday
export const se_6_1of6_PAaA = {
	'prework':[ 
		`All sprint ${sprint-1} assignments are due Sunday!`, '',
		`Be on time and prepared for in-person sprint ${sprint} Planning`,
		'Come Monday with a fully groomed Product Backlog',
		'Make sure that you production application is up and running Monday' ],
	'announcements':[ 
		'Welcome to Dr. Howard, Professor and Chair, Engineering, Computing and Mathematical Sciences',
		'Today is going to be challenging so let’s stay relaxed and stay focused' ],
	'agenda':[ 
		`Sprint ${sprint} Planning as a Class`,
		'Prework for Next Class',
		`Sprint ${sprint} Planning for your Team` ]
}
export const se_6_1of6 = () => { 
	const prework = () => { return tPreworkWithLogo('Prework For Today', se_6_1of6_PAaA.prework, sprint-1, activityListPrevious) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', se_6_1of6_PAaA.announcements) }
	const agenda = () => { return agendaSlide(se_6_1of6_PAaA.agenda) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_6_2of6_PAaA.prework, sprint, activityList) }
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning as a Class', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprints with Discussion, Quiz, Lab, and Reflection',
			'Demos will be occurring within your teams', 
			'The Easter Holiday Recess will cause us a a few scheduling and capacity challenges',
			'We will complete our scrum team Discussion Board on Wednesday',
			`We will have sprint ${sprint-1} Retrospective on Friday` ])
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


export const se_6_2of6_PAaA = xyz_n_1of6_lists(sprint)
export const se_6_2of6 = () => {  
	const prework = () => { return tPreworkWithLogo('Prework For Today', se_6_1of6_PAaA.prework, sprint-1, activityListPrevious) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ['Today is going to be challenging so let’s stay relaxed and focused']) }
	const agenda = () => { return agendaSlide(se_6_1of6_PAaA.agenda) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_6_2of6_PAaA.prework, sprint, activityList) }
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

	const slideDeck = makeSlideDeck([ prework, announcements, agenda, xyz_6_2of6SprintPlanning, activitiesReview, planningBreakout, preworkNext ])
	const slideDeckWithSprintPlanning = insertInto(slideDeck, sprintPlanningSlideDeck(sprint), 8)
	return slideDeckWithSprintPlanning
}

const se_6_3of6_PAaA = {
	'announcements':[ 
		'Registration starts next week' ],
	'prework':[
		'Complete through activity 7 prior to next class', '',
		`Be prepared scrum team sprint ${sprint-1} Demos and Retrospectives` ],
	'agenda':[
		'Class Retrospective',
		`Scrum Team Sprint ${sprint-1} Demos`,
		'Best-of-the-best Scrum Team Demo',
		`Scrum Team Sprint ${sprint-1} Retrospective`,
		`Scrum Team report-outs for Sprint ${sprint-1} Retrospective`,
		`Discussion ${sprint}`,
		'Prework for Next Class' ]
}
export const se_6_3of6 = () => { 
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:28, submitted:28 },
			{ name: 'Quiz', due:28, submitted:28 },
			{ name: 'Lab', due:28, submitted:28 },
			{ name: 'Reflection', due:28, submitted: 28 }])
	} 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
		'Feedback from Assignments & Reflections', [
		`Oh my, what a fantastic fantastic sprint ${sprint-1} submission percentage... thank you!`,
		'How can I best reward you?',
		'Grading is in process and will be posted no later than Monday',
		'This is challenging working with teams, and really challenging working with multiple teams' ])
	}
	const scrumTeamDemos = () => {
		return orderedListSlide('Scrum Team Demos',
		'How do/will your team handle Demos?', [
		'What is your team’s “Best-of-the-best” demo' ])
	}
	const scrumTeamRetrospective = () => {
		return orderedListSlide('Scrum Team Retrospective',
		'What will your team need to do to complete Sprint 7 planning on the first day of Sprint 7', [
		'What is the highest priority Continuous Improvement item for your team... will you make it a story in the future?' ])
	}
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_6_3of6_PAaA, sprint, activityList)
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const preworkNext = () => { return tPrework('Prework For Next Class', se_6_5of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [retrospectiveInto, metricsSubmissionPercentage, retrospective, scrumTeamDemos, scrumTeamRetrospective, discussionBreakout, preworkNext])
}

const se_6_4of6_PAaA = {
	'prework':[
		'Complete through activity 10 prior to next class', '',
		'Be prepared breakout session on Metrics' ],
	'announcements':[ 
		`Reminder that your team’s sprint ${sprint+1} is required, in-person, and scheduled for next Monday`, ],
	'agenda':[
		'Sprint Progress Polling',
		'Metrics Breakout',
		'Prework for Next Class',
		'Lab & Programming Together (as time allows)' ]
}
export const se_6_4of6 = () => {
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Metrics', 
			'In this breakout session we will explore Metrics:', [
				'Software Quality, Architecture Quality, and Project Quality',
				'Characteristics of a Good Metric and Common Metrics for Waterfall and Agile',
				'Software Metrics Best Practices',
				'Metics that measure team output including Story Points, Use Case Points, and Function Points',
				'Pros and cons of our Software Engineering team metrics' ]
		)
	}

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_6_4of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', se_6_4of6_PAaA.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_6_5of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [poll, breakout, preworkNext, tLab])
}

const se_6_5of6_PAaA = {
	'prework':[
		'Complete through activity 9 prior to next class', '',
		`Be prepared for Backlog Grooming in Preparation for Sprint ${sprint+1} Planning`,
		'Be prepared for Lab' ],
	'announcements':[ 
		`Reminder that your team’s sprint ${sprint+1} planning is required, in-person, and scheduled for next Monday`,
		'Reminder MongoDB programming together tutorial added' ],
	'agenda':[
		'Sprint Progress Polling',
		'Lab / Backlog Grooming',
		'Quiz' ]
}

export const se_6_5of6 = () => { 
	const slideDeck = xyz_n_5of6(sprint, se_6_5of6_PAaA, se_6_6of6_PAaA.prework, activityList)
	insertInto(slideDeck, sprintPlanningSlideDeck(sprint), 5)
	return slideDeck
}

// Session 6 of 6
//export const se_6_6of6 = () => { return [ tNoClassToday ] }

// Session 6 of 6: Friday
const se_6_6of6_PAaA = {
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[
		'Complete through activity 12', '',
		'Be prepared for Programming Together' ],
	'agenda':[
		'Sprint Progress Polling',
		'Lab & Programming Together with Matchmaker for the Web and Final Project Proposals' ]
}
export const se_6_6of6 = () => { return xyz_n_6of6(sprint, se_6_6of6_PAaA, se_7_1of6_PAaA.prework, activityList) }


