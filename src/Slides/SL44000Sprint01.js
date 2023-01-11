
import { checklistAnnouncementsPreworkAndAgenda, completeDeck } from './SL00000Sprint00'
import { tPrework, bulletListSlide, orderedListSlide, basicSlide } from './SLSprint00'

import { list44000Sprint01 } from '../ActivityLists/AL44000Sprint01'

// Software Engineering (SE) sprint 1 global values.
const sprint = 1
const activityList = () => { return list44000Sprint01(sprint) }

// Sprint 1 session 1 of 6: Monday
const se_1_1of6_lists = {
	'announcements':[ 
		'Welcome back! I hope you had a wonderful Holiday Break.' ],
	'prework':[
		'Review Welcome Message',
		'Review Blended Learning & Flipped Classroom',
		'Review Introduction to Scrum',
		'Review Course Syllabus' ],
	'agenda':[
		'Sprint Progress Polling',
		'Class Format',
		'Introductions - Part 1',
		'Sprint 1 Planning (abbreviated)',
		'Introductions - Part 2 and Scrum Team Assignments',
		'Prework for Next Class' ]
}

export const se_1_1of6 = () => { 
	const poll = () => { return tPrework('Sprint Progress Polling', se_1_1of6_lists.prework, sprint, activityList) }
	const switchDeck = () => { return bulletListSlide('PowerPoint', 'Switch to PowerPoint slides.', [])}

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_1_1of6_lists, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', se_1_2of6_lists.prework, sprint, activityList) }
	return completeDeck(slideDeck, [poll, switchDeck, preworkNext])
}

// Sprint 1 session 2 of 6: Wednesday
const se_1_2of6_lists = {
	'announcements':[ 
	'Friday’s class will be remote via Zoom' ],
	'prework':[
		'Complete through activity 7 prior to next class', '',
		`Be prepared to complete sprint ${sprint} planning` ],
	'agenda':[
		'Sprint Progress Polling', 
		'Introductions and Scrum Team Assignments (continued)',
		`Sprint ${sprint} Planning (continued)`,
		`Sprint ${sprint} Scrum Team Breakout` ]
}

const xyz_1_2of6 = (sprint, currentSession, nextSession, sprintActivitiesList) => {
	const poll = () => { return tPrework('Sprint Progress Polling', currentSession.prework, sprint, sprintActivitiesList) }

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(currentSession, sprint, sprintActivitiesList)
	const preworkNext = () => { return tPrework('Prework For Next Class', nextSession.prework, sprint, sprintActivitiesList) }
	const introductionsContinued = () => {
		return basicSlide('Introductions and Scrum Team Assignments (continued)', [
			'Review scrum team assignments from Monday',
			'Continue with introductions and scrum team assignments',
			'Did we miss anyone?' ]
		)
	}
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning (continued)', `Sprint ${sprint} Expectations:`, [
			'Similar to future sprints with Discussion, Quiz, Lab, and Reflection',
			'Monday is a holiday which makes this sprint a little more challenging that most',
			'We will complete our scrum team Discussion Board breakout session today as time allows' ])
	}
	const activitiesReview = () => {
		return basicSlide('Activity List and Assignments Review', [
			'Let’s open our Blackboard shell and review the activity list, syllabus, and assignments together.' ]
		)
	}
	const planningBreakout = () => {
		return orderedListSlide('Sprint Planning Scrum Team Breakout', 'As a scrum team:', [
			`Review sprint ${sprint} activity list & assignments in detail`,
			'Discuss and identify questions/concerns',
			'Scrum master report out by sharing scrum team’s top 2 or 3 questions/concerns' ]
		)
	}

	return completeDeck(slideDeck, [poll, introductionsContinued, sprintPlanning, activitiesReview, planningBreakout, preworkNext])
}

export const se_1_2of6 = () => { return xyz_1_2of6(sprint, se_1_2of6_lists, se_1_3of6_lists, activityList) }


export const se_1_2of6b = () => { 
	const poll = () => { return tPrework('Sprint Progress Polling', se_1_2of6_lists.prework, sprint, activityList) }

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_1_2of6_lists, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', se_1_3of6_lists.prework, sprint, activityList) }
	const introductionsContinued = () => {
		return basicSlide('Introductions and Scrum Team Assignments (continued)', [
			'Review sample team names and introduction expectations (PowerPoint)',
			'Review scrum team assignments from Monday',
			'Continue with introductions and scrum team assignments' ]
		)
	}
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning (continued)', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
			'We will complete our scrum team Discussion Board breakout session on Wednesday',
			`We will have sprint ${sprint-1} Demos and Retrospective on Friday` ])
	}
	const activitiesReview = () => {
		return basicSlide('Activity List and Assignments Review', [
			'Let’s open our Blackboard shell and review the activity list, syllabus, and assignments together.' ]
		)
	}
	const planningBreakout = () => {
		return orderedListSlide('Sprint Planning Scrum Team Breakout', 'As a scrum team:', [
			`Review sprint ${sprint} activity list & assignments in detail`,
			'Discuss and identify questions/concerns',
			'Scrum master report out by sharing scrum team’s top 2 or 3 questions/concerns' ]
		)
	}

	return completeDeck(slideDeck, [poll, introductionsContinued, sprintPlanning, activitiesReview, planningBreakout, preworkNext])
}

// Sprint 1 session 3 of 6: Friday
const se_1_3of6_lists = {
	'announcements':[ 
		'Any Announcements?' ],
	'prework':[
		'Have your scrum team Discord server set up for Friday’s remote class',
		'Complete through activity 9 prior to next class', '',
		'Be prepared to for a scrum team breakout session on “Engineering Software as a Service” Chapter 1 and the associated lecture' ],
	'agenda':[
		'Sprint Progress Polling', 
		'Introductions and Scrum Team Assignments (continued)' ]
}