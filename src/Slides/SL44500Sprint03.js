import { list44500Sprint02 } from '../ActivityLists/AL44500Sprint02'
import { list44500Sprint03 } from '../ActivityLists/AL44500Sprint03'

import { xyz_n_1of6_lists, xyz_n_1of6, xyz_n_6of6_PAaA, xyz_n_6of6, makeSlideDeck } from './SL00000Sprint00'
import { agendaSlide, basicSlideWithLogo, bulletListSlide, discussionBreakout, tPrework, tPreworkWithLogo } from './SLSprint00'
import { basicSlide, submissionPercentage, sprintDemos, sprintDemosIntro, demoAssignment, orderedListSlide } from './SLSprint00' 
import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tReviewDemoSchedule, tLab } from './SL00000Sprint00'

import { af_4_1of6_prework_list } from './SL44500Sprint04'


// Constants
const sprint = 3
const activityList = () => { return list44500Sprint03(sprint) }
const activityListPrevious = () => { return list44500Sprint02(sprint-1) }

// Session 1 of 6: Monday
export const af_3_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const af_3_1of6 = () => { return xyz_n_1of6(sprint, af_3_1of6_PAaA.prework, activityListPrevious, af_3_1of6_PAaA.agenda, af_3_2of6_PAaA.prework, activityList) }

const af_3_2of6_PAaA = {
	'prework': [
		'Complete through activity 5 prior to next class', '',
		'Be prepared for Discussion 3',
		'Be prepared for Lab & Programming Together Wednesday',
		'Demos and retrospectives will be Friday' ],
	'announcements':[
		'Any questions or announcements?' ],
	'agenda':[
		`Sprint ${sprint} Planning Questions & Answers`,
		`Discussion Board ${sprint} as a scrum team`,
		'Confirm Demos for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}

export const af_3_2of6 = () => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', af_3_2of6_PAaA.prework, sprint, activityList) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', af_3_2of6_PAaA.announcements ) }
	const agenda = () => { return agendaSlide(af_3_2of6_PAaA.agenda) }
	const preworkNext = () => { return tPrework('Prework For Next Class', af_3_3of6_PAaA.prework, sprint, activityList) }

	const discussion3Breakout = () => { return discussionBreakout(sprint) } 
	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'Let’s commit to making 30 minutes of focused effort to our Lab assignment by:', [
			'Discussing and Implementing our README.md and LICENSE file in GitHub', 
			'Clone from Azure React template',
			'Edit, Test Local... Repeat (every 5 minutes)', 
			'Git Add, Git Commit, Git Push, Test Production (Every hour)',
			'Pus everything at the end of each day' ])
	}

	return makeSlideDeck([ prework, announcements, agenda, discussion3Breakout, programmingTogether, preworkNext ])
}

// Session 3 of 6: Friday
const af_3_3of6_PAaA = {
	'prework': [
		'Complete through activity 9 prior to next class', '',
		`Be prepared for sprint ${sprint-1} demos and retrospectives`,
		'Those scheduled to demo please be a couple of minutes early to class' ],
	'announcements':[ 
		'Any questions or announcements?' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}
export const af_3_3of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(af_3_3of6_PAaA, sprint, activityList)
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
			'Perfect submission percentage... again',
			'All assignments are partially graded and posted', 
			'Thank you for your reflection comments' ])
	}
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			`How does your team feel about sprint ${sprint-1} now that it is over`,
			`What could be done to make sprint ${sprint-1} or the class overall better or more manageable`,
			'What improvements should we make as a class, team, or individual going forward' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', af_3_4of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ tReviewDemoSchedule, sprintDemosIntro, sprintDemos, demoAssignment, metrics, 
		metricsSubmissionPercentage, retrospective, retrospectiveBreakout, preworkNext, tLab ])
}

// Session 4 of 6: Monday
const af_3_4of6_PAaA = {
	'prework': [
		'Complete through activity 9 prior to next class', '',
		`Be prepared for Lab`, ],
	'announcements':[ 
		'Recall that sprint 4 will be our midterm and that your in class participation is required' ],
	'agenda':[
		`Lab`,
		'Prework for Next Class' ]
}
export const af_3_4of6 = () => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', af_3_4of6_PAaA.prework, sprint, activityList) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', af_3_2of6_PAaA.announcements ) }
	const agenda = () => { return agendaSlide(af_3_2of6_PAaA.agenda) }
	const preworkNext = () => { return tPrework('Prework For Next Class', af_3_5of6_PAaA.prework, sprint, activityList) }

	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'Let’s commit to making 40 minutes of focused effort to our Lab assignment by:', [
			'Discussing and Implementing our README.md and LICENSE file in GitHub', 
			'Clone from Azure React template',
			'Edit, Test Local... Repeat (every 5 minutes)', 
			'Git Add, Git Commit, Git Push, Test Production (Every hour)',
			'Pus everything at the end of each day' ])
	}

	return makeSlideDeck([ prework, announcements, agenda, programmingTogether, preworkNext ])
}

// Session 5 of 6: Wednesday
const af_3_5of6_PAaA = {
	'prework': [
		'Complete through activity 10 prior to next class', '',
		'Be prepared for “What is React” discussion',
		`Be prepared for Lab`, ],
	'announcements':[ 
		'Recall that sprint 4 will be our midterm and that your in class participation is required' ],
		'agenda':[
			'“What is React” Discussion',
			`Lab`,
			'Prework for Next Class' ]
} 

// Session 5 of 6: Wednesday
// No slide created for this session. 

// Session 6 of 6: Friday
const af_3_6of6_PAaA = xyz_n_6of6_PAaA('Complete through activity activity 11 and actively working on 12', sprint)
export const af_3_6of6 = () => { return  xyz_n_6of6(sprint, af_3_6of6_PAaA, af_4_1of6_prework_list, activityList) }