import { orderedListSlide } from './SLSprint00'
import { xyz_n_1of6_lists, xyz_n_1of6 } from './SL00000Sprint00'

import { list44500Sprint01 } from '../ActivityLists/AL44500Sprint01'
import { list44500Sprint02 } from '../ActivityLists/AL44500Sprint02'

import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tReviewDemoSchedule, tLab } from './SL00000Sprint00'
import { bulletListSlide, tDiscussionBreakout, tPrework } from './SLSprint00'

import { basicSlide, submissionPercentage, sprintDemos, sprintDemosIntro, demoAssignment } from './SLSprint00' 


import { tRecap } from './SLSprint00'

// Application Frameworks sprint 2 shared values.
const sprint = 2
const activityListPrevious = () => { return list44500Sprint01(sprint) }
const activityList = () => { return list44500Sprint02(sprint) }

// Session 1 of 6: Monday
export const sprint2Planning = () => {
	return orderedListSlide('Sprint Planning as a Class', `Sprint ${sprint} Expectations:`, [
		'Similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
		'We will complete our scrum team Discussion Board breakout session on Wednesday',
		`We will have sprint ${sprint-1} Demos and Retrospective on Friday`,
		`Sprint ${sprint} should be a little easier since we don’t have a holiday during the sprint` ])
}

const af_2_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const af_2_1of6 = () => { return xyz_n_1of6(sprint, af_2_1of6_PAaA.prework, activityListPrevious, af_2_1of6_PAaA.agenda, af_2_2of6_PAaA.prework, activityList, sprint2Planning) }

// Session 2 of 6: Wednesday
const af_2_2of6_PAaA = {
	'prework': [
		'Complete through activity 6 prior to next class', '',
		'Be prepared for Lab & Programming Together Wednesday',
		'Demos and retrospectives will be Friday' ],
	'announcements':[
		'Reducing procrastination is on the agenda',
		'Does everyone know where to find the class recordings?'],
	'agenda':[
		`Sprint ${sprint} Planning Questions & Answers`,
		`Discussion Board ${sprint} as a scrum team`,
		'Confirm Demos for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}

export const af_2_2of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(af_2_2of6_PAaA, sprint, activityList)
	const qAndA = () => { return bulletListSlide(`Sprint ${sprint} Planning Questions & Answers`, `What questions do you have about sprint ${sprint}?`, [ ]) }
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', af_2_3of6_PAaA.prework, sprint, activityList) }
	const introducingDemos = () => {
		return bulletListSlide('Foreshadowing Friday’s Sprint Demos', 
			'Sprint demos are a key part of Agile software development and Scrum.', [
			'They occur at the beginning of each new sprint ',
			'They are an opportunity to show what was completed in the previous sprint',
			'They are intended to be an **easy** and rewarding experience to show off your work',
			'Also a chance to see how others solved a problem and to see some of the challenges they faces',
			'We will each be doing at least on sprint demo during the semester during class' ])
	}
	const recap = () => { return tRecap(af_2_2of6_PAaA.agenda)}

	return completeDeck(slideDeck, [ qAndA, discussionBreakout, introducingDemos, tReviewDemoSchedule, preworkNext, tLab, recap ])
}

// Todo: Add slide for Metrics (Rule #9)... “Anything that is measured and watched, improves.” – Bob Parsons
// Session 3 of 6: Friday
const af_2_3of6_PAaA = {
	'prework': [
		'Complete through activity 9 prior to next class', '',
		'Be prepared to discuss initial direction and framework choice' ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}

export const af_2_3of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(af_2_3of6_PAaA, sprint, activityList)
	const metrics = () => {
		return basicSlide(`Sprint ${sprint-1} Metrics`, [
			'What is Bob Parsons Rule #9?', '',
			`Let’s take a minute and review our Sprint ${sprint-1} Submission Percentage class metric.` ])
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:4, submitted:4 },
			{ name: 'Quiz', due:4, submitted:4 },
			{ name: 'Lab', due:4, submitted:4 },
			{ name: 'Reflection', due:4, submitted:4 }])
	}
	// Todo: Consider adding the pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Very good submission percentage in sprint 1',
			'All assignments are graded and posted', 
			'Thank you for your reflection comments',
			'Lots of nice comments about scrum teammates', 
			'Be **sure** to put something in for each question so that I can give you at least a point or two',
			'Feel free to bring up quiz questions during class',
			'If you are not where you want to be in the class after sprint 1, I encourage you to come and talk with me' ])
	}
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			`How does your team feel about sprint ${sprint-1} now that it is over`,
			`What could be done to make sprint ${sprint-1} or the class overall better or more manageable`,
			'What improvements should we make as a class, team, or individual going forward' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', af_2_4of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ tReviewDemoSchedule, sprintDemosIntro, sprintDemos, demoAssignment, metrics, 
		metricsSubmissionPercentage, retrospective, retrospectiveBreakout, preworkNext ])
}

// Session 4 of 6: Monday
const af_2_4of6_PAaA = {
	'prework': [
		'Complete through activity 11 prior to next class', '',
		'Be prepared to define what we are each committing to deliver in this sprint' ],
	'announcements':[ 
		'Any announcements or questions?' ],
	'agenda':[ 
		'Breakout: The Information Layer',
		'Prework for Next Class' ]
}
export const af_2_4of6 = () => {
	const retrospectiveBreakout = () => {
		return bulletListSlide(`What will we deliver at the end of ${sprint}?`, 
			'Let’s spend this class defining what we will each are committing to deliver at the end of the sprint:', [
			'Requirement 1',
			'Requirement 2',
			'Requirement 3',
			'Requirement 4' ])
	}

	return [ retrospectiveBreakout ]
}

export const af_2_5of6 = () => {
	const retrospectiveBreakout = () => {
		return bulletListSlide('Today', 
			'Let’s spend this class reviewing our commitments / assignment and looking at the “SillyMa” direction:', [
			'Review updated activity / assignment',
			'Review JSON structures',
			'Review Syllabus examples' ])
	}

	return [ retrospectiveBreakout ]
}