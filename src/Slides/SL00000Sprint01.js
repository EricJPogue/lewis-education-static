import { checklistAnnouncementsPreworkAndAgenda, completeDeck } from './SL00000Sprint00'
import { tPrework, basicSlide, bulletListSlide, orderedListSlide } from './SLSprint00'

// Sprint 1 session 1 of 6: Monday
const xyz_1_1of6_PAaA = {
	'prework':[
		'Review Welcome Message',
		'Review Blended Learning & Flipped Classroom',
		'Review Introduction to Scrum',
		'Review Course Syllabus' ],
	'announcements':[ 
		'Welcome back! I hope you had a wonderful Christmas break.' ],
	'agenda':[
		'Progress Polling',
		'Class Format',
		'Introductions - Part 1',
		'Sprint 1 Planning (abbreviated)',
		'Introductions - Part 2 and Scrum Team Assignments',
		'Prework for Next Class' ]
}
export const xyz_1_1of6 = (activityList, xyz_1_2of6Prework) => { 
	const sprint = 1

	const poll = () => { return tPrework('Sprint Progress Polling', xyz_1_1of6_PAaA.prework, sprint, activityList) }
	const switchDeck = () => { return bulletListSlide('PowerPoint', 'Switch to PowerPoint slides.', [])}

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(xyz_1_1of6_PAaA, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', xyz_1_2of6Prework, sprint, activityList) }
	return completeDeck(slideDeck, [poll, switchDeck, preworkNext])
}

// Sprint 1 session 2 of 6: Wednesday
export const xyz_1_2of6 = (sprint, currentSession, nextSession, sprintActivitiesList) => {
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
			'Monday is a holiday which makes this sprint a little more challenging than most',
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