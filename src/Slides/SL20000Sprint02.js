import { list20000Sprint01 } from '../ActivityLists/AL20000Sprint01'
import { list20000Sprint02 } from '../ActivityLists/AL20000Sprint02'

import { xyz_n_1of6_lists, xyz_n_1of6, checklistAnnouncementsPreworkAndAgenda, completeDeck, tReviewDemoSchedule, tLab } from './SL00000Sprint00'
import { basicSlide, breakoutStandard, bulletListSlide, orderedListSlide, submissionPercentage, tDiscussionBreakout, tPrework, sprintDemosIntro, sprintDemos, demoAssignment } from './SLSprint00'

import { xyz_2_1of6_sprintPlanning, theHumbleTextFileName, theHumbleTextFile } from './SL00000Sprint02'

// Introduction to Computer Science (ICS) sprint 2 global values.
const sprint = 2
const activityListPrevious = () => { return list20000Sprint01(sprint-1) }
const activityList = () => { return list20000Sprint02(sprint) }

// Session 1 of 6: Monday
export const ics_2_1of6_PreworkAnnouncementsAndAgenda = xyz_n_1of6_lists(sprint)
export const ics_2_1of6 = () => { 
	return xyz_n_1of6(sprint, ics_2_1of6_PreworkAnnouncementsAndAgenda.prework, activityListPrevious, ics_2_1of6_PreworkAnnouncementsAndAgenda.agenda, 
		ics_2_2of6_PreworkAnnouncementsAndAgenda.prework, activityList, xyz_2_1of6_sprintPlanning(sprint)) 
}

// Session 2 of 6: Wednesday
const ics_2_2of6_PreworkAnnouncementsAndAgenda = {
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
export const ics_2_2of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_2_2of6_PreworkAnnouncementsAndAgenda, sprint, activityList)
	const qAndA = () => { return bulletListSlide(`Sprint ${sprint} Planning Questions & Answers`, `What questions do you have about sprint ${sprint}?`, [ ]) }
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_2_3of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ qAndA, discussionBreakout, tReviewDemoSchedule, preworkNext, tLab ])
}

// Session 3 of 6: Friday
const ics_2_3of6_PreworkAnnouncementsAndAgenda = {
	'prework': [
		'Complete through activity 9 prior to next class', '',
		'Be prepared to discuss “The Information Layer”' ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}
export const ics_2_3of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_2_3of6_PreworkAnnouncementsAndAgenda, sprint, activityList)

	const metrics = () => {
		return basicSlide(`Sprint ${sprint-1} Metrics`, [
			`Let’s take a minute and review our Sprint ${sprint-1} Submission Percentage class metric.` ])
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:14, submitted:14 },
			{ name: 'Quiz', due:14, submitted:14 },
			{ name: 'Lab', due:14, submitted:14},
			{ name: 'Reflection', due: 14, submitted: 14 }])
	}
	// Todo: Consider adding the pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Wow! 100% submission percentage in sprint 1',
			'All assignments are graded and posted', 
			'Thank you for your reflection comments',
			'Lots of nice comments about scrum teammates', 
			'Be **sure** to put something in for each question so that I can give you at least a point or two',
			'Riddles continue to be my Kryptonite for me :-) ... and now funny YouTube videos?!?!', 
			'... What did the computer do at lunchtime?', 
			'If you are not where you want to be in the class after sprint 1, I encourage you to come and talk with me' ])
	}
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			`How does your team feel about sprint ${sprint-1} now that it is over`,
			`What could be done to make sprint ${sprint-1} or the class overall better or more manageable`,
			'What improvements should we make as a class, team, or individual going forward' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_2_4of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ tReviewDemoSchedule, sprintDemosIntro, sprintDemos, demoAssignment, metrics, 
		metricsSubmissionPercentage, retrospective, retrospectiveBreakout, preworkNext ])
}

const ics_2_4of6_PreworkAnnouncementsAndAgenda = {
	'prework': [
		'Complete through activity 11 prior to next class', '',
		`Be prepared for breakout` ],
	'announcements':[ 
		'Any announcements or questions?' ],
	'agenda':[ 
		'Breakout: The Information Layer',
		`Data Representation and ${theHumbleTextFileName}`,
		'Prework for Next Class' ]
}
export const ics_2_4of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_2_4of6_PreworkAnnouncementsAndAgenda, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_2_5of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }
	const breakoutTheInformationLayer = () => { 
		return breakoutStandard('Breakout: The Information Layer', 
			'In this breakout session on The Information Layer (reading and lecture) your team will discuss:', [
			'Numbers and Computing', 
			'Positional Notation', 
			'Binary, Octal, and Hexadecimal',
			'Why Hex? How does this relate to files?',
			'What about conversion calculators?' ])
	}

	return completeDeck(slideDeck, [ breakoutTheInformationLayer, theHumbleTextFile, preworkNext, tLab ])
}

const ics_2_5of6_PreworkAnnouncementsAndAgenda = {
	'prework': [
		'Complete through activity 13 prior to next class', '',
		'Be prepared for “Data Representation” breakout',
		`Be prepared for Quiz ${sprint}` ],
	'announcements':[ 
		'Any announcements or questions?' ],
	'agenda':[ 
		'Breakout: Data Representation',
		`Quiz ${sprint}` ]
}
