import { xyz_n_1of6, xyz_n_1of6_lists } from './SL00000Sprint00'

import { xyz_n_3of6 } from './SL00000Sprint00'
import { submissionPercentage, orderedListSlide, tPrework } from './SLSprint00'
import { tDiscussionBreakout } from './SLSprint00'
import { insertInto } from './SLSprintPlanning'
import { checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'
import { completeDeck } from './SL00000Sprint00'

import { list44500Sprint05 } from '../ActivityLists/AL44500Sprint05'
import { list44500Sprint06 } from '../ActivityLists/AL44500Sprint06'

import { xyz_n_5of6 } from './SL00000Sprint00'
import { xyz_n_6of6 } from './SL00000Sprint00'

// Constants
const sprint = 6
const activityListPrevious = () => { return list44500Sprint05(sprint-1) }
const activityList = () => { return list44500Sprint06(sprint) }

export const af_6_2of6_PAaA = xyz_n_1of6_lists(sprint)
export const xyz_6_2of6SprintPlanning = () => {
	return orderedListSlide('Sprint Planning', `Sprint ${sprint} Expectations:`, [
		'Similar to previous sprints with Discussion, Quiz, Lab, and Reflection',
		'Having a holiday on Monday set us back a bit',
		'We will complete our scrum team Discussion Board breakout session on Friday',
		`We will also have sprint ${sprint-1} Demos and Retrospective on Friday`,
		'Recall that sprint 7 and 8 will be different' ])
}
export const af_6_2of6 = () => { return xyz_n_1of6(sprint, af_6_2of6_PAaA.prework, activityListPrevious, af_6_2of6_PAaA.agenda, af_6_3of6_PAaA.prework, activityList, xyz_6_2of6SprintPlanning) }

// Session 3 of 6: Friday
const  af_6_3of6_PAaA = {
	'prework':[
		'Complete through activity 3 prior to next class', '',
		`Be prepared sprint ${sprint-1} Demos and Retrospectives`,
		'Be prepared for Discussion 6 as a team' ],
	'announcements':[ 
		'Registration starts next week' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Skipping or Breakout for Sprint ${sprint-1} Retrospective`,
		`Discussion 6`,
		'Prework for Next Class' ]
}

export const  af_6_3of6 = () => {
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:4, submitted:4 },
			{ name: 'Quiz', due:4, submitted:4 },
			{ name: 'Lab', due:4, submitted:4 },
			{ name: 'Reflection', due:4, submitted:4 }])
	}
	const retrospective = () => {
			return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
				'As always thank you for getting everything submitted',
				'Not all assignments are graded', 
				'Very nice work!' ])
	}
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const slideDeck =  xyz_n_3of6(sprint,  af_6_3of6_PAaA,  af_6_4of6_PAaA.prework, activityList, metricsSubmissionPercentage, retrospective)
	return insertInto(slideDeck, [discussionBreakout], 14)
}

const  af_6_4of6_PAaA = {
	'prework':[
		'Complete through activity 4' ],
	'announcements':[ 
		'Registration starts today' ],
	'agenda':[
		`Discussion 6`,
		'Application Frameworks and Architecture',
		'Prework for Next Class' ]
}

export const  af_6_4of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(af_6_4of6_PAaA, sprint, activityList) 
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const applicationFrameworksAndArchitecture = () => {
		return orderedListSlide('Application Frameworks and Architecture',
		'How do Application Frameworks and Architecture relate and interact?', [
			'Components of Application Architecture including Presentation, Business Logic, Data Storage, API, Security, Infrastructure, Globalization',
			'Best Practices: Scalability and Performance, Maintainability, Testing, Security', 
			'Frameworks influence or dictate architecture',
			'Selection of an Application Framework should be driven by the desired or required Architecture', 
			'Customer Requirements -> Architecture -> Framework',
			'Trends including Serverless, Containerization and Orchestration, and AI / Machine Learning Integration',
			'How does Agile impact Architecture' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', af_6_5of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ discussionBreakout, applicationFrameworksAndArchitecture, preworkNext ])
}

// Session 5 of 6: Wednesday
const af_6_5of6_PAaA = {
	'prework':[
		'Complete through activity 5', '',
		'Be prepared for Lab',
		`Be prepared for Quiz ${sprint}` ],
	'announcements':[ 
		'Registration, registration, and more registration' ],
	'agenda':[
		'Lab',
		`Quiz ${sprint}` ]
}

export const af_6_5of6 = () => { return xyz_n_5of6(sprint, af_6_5of6_PAaA, af_6_6of6_PAaA.prework, activityList) }

// Session 6 of 6
// Session 6 of 6: Friday
const af_6_6of6_PAaA = {
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[
		'Complete through activity 6', '',
		'Be prepared for Lab' ],
	'agenda':[
		'Sprint Progress Polling',
		'Lab' ]
}
export const af_6_6of6 = () => { return xyz_n_6of6(sprint, af_6_6of6_PAaA, af_7_1of6_PAaA.prework, activityList) }

export const af_7_1of6_PAaA = xyz_n_1of6_lists(sprint+1)