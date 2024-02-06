import { list20000Sprint01 } from '../ActivityLists/AL20000Sprint01'
import { list20000Sprint02 } from '../ActivityLists/AL20000Sprint02'

import { xyz_n_1of6_lists, xyz_n_1of6, checklistAnnouncementsPreworkAndAgenda, completeDeck, tReviewDemoSchedule, tLab } from './SL00000Sprint00'
import { basicSlide, breakoutStandard, bulletListSlide, orderedListSlide, submissionPercentage, tDiscussionBreakout, tPrework, tQuizExpectations, tQuiz, sprintDemosIntro, sprintDemos, demoAssignment } from './SLSprint00'


import { ics_3_1of6_PAaA } from './SL20000Sprint03'
import { tRecap } from './SLSprint00'

// Introduction to Computer Science (ICS) sprint 2 shared values.
const sprint = 2
const activityListPrevious = () => { return list20000Sprint01(sprint-1) }
const activityList = () => { return list20000Sprint02(sprint) }

// Session 1 of 6: Monday
export const sprint2Planning = () => {
	return orderedListSlide('Sprint Planning as a Class', `Sprint ${sprint} Expectations:`, [
		'Similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
		'We will complete our scrum team Discussion Board breakout session on Wednesday',
		`We will have sprint ${sprint-1} Demos and Retrospective on Friday`,
		`Sprint ${sprint} should be a little easier since we don’t have a holiday during the sprint` ])
}

export const ics_2_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const ics_2_1of6 = () => { return xyz_n_1of6(sprint, ics_2_1of6_PAaA.prework, activityListPrevious, ics_2_1of6_PAaA.agenda, ics_2_2of6_PAaA.prework, activityList, sprint2Planning) }

// Session 2 of 6: Wednesday
const ics_2_2of6_PAaA = {
	'prework': [
		'Complete through activity 6 prior to next class', '',
		'Be prepared for Discussion  & Lab Wednesday',
		'Demos and retrospectives will be Friday' ],
	'announcements':[
		'Reducing procrastination is on the agenda',
		'Does everyone know where to find class recordings?'],
	'agenda':[
		`Sprint ${sprint} Planning Questions & Answers`,
		`Discussion Board ${sprint} as a scrum team`,
		'Confirm Demos for Next Class',
		'Lab',
		'Prework for Next Class' ]
}
export const ics_2_2of6 = () => { 
	// Todo: Add slide on "Kaizen": Small improvements eventually result in huge benefits
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_2_2of6_PAaA, sprint, activityList)
	const qAndA = () => { return bulletListSlide(`Sprint ${sprint} Planning Questions & Answers`, `What questions do you have about sprint ${sprint}?`, [ ]) }
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_2_3of6_PAaA.prework, sprint, activityList) }
	const introducingDemos = () => {
		return bulletListSlide('Foreshadowing Friday’s Sprint Demos', 
			'Sprint demos are a key part of Agile software development and Scrum.', [
			'They occur at the beginning of each new sprint ',
			'They are an opportunity to show what was completed in the previous sprint',
			'They are intended to be an **easy** and rewarding experience to show off your work',
			'Also a chance to see how others solved a problem and to see some of the challenges they faces',
			'We will each be doing at least on sprint demo during the semester during class' ])
	}
	const recap = () => { return tRecap(ics_2_2of6_PAaA.agenda)}

	return completeDeck(slideDeck, [ qAndA, discussionBreakout, introducingDemos, tReviewDemoSchedule, preworkNext, tLab, recap ])
}

// Session 3 of 6: Friday
const ics_2_3of6_PAaA = {
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
	// Todo: Add slide for Metrics (Rule #9)... “Anything that is measured and watched, improves.” – Bob Parsons
	// Todo: Consider adding the pretty slides back into slide deck for Demos and Retrospectives. 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_2_3of6_PAaA, sprint, activityList)
	const metrics = () => {
		return basicSlide(`Sprint ${sprint-1} Metrics`, [
			'What is Bob Parsons Rule #9?', '',
			`Let’s take a minute and review our Sprint ${sprint-1} Submission Percentage class metric.` ])
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:16, submitted:15 },
			{ name: 'Quiz', due:16, submitted:16 },
			{ name: 'Lab', due:16, submitted:15 },
			{ name: 'Reflection', due: 16, submitted: 16 }])
	}

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
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_2_4of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ tReviewDemoSchedule, sprintDemosIntro, sprintDemos, demoAssignment, metrics, 
		metricsSubmissionPercentage, retrospective, retrospectiveBreakout, preworkNext ])
}

// Session 4 of 6: Monday
const breakoutTheBigPictureName = 'The Big Picture'
const breakoutTheBigPicture = () => { 
	return breakoutStandard( 
		`Breakout: ${breakoutTheBigPictureName}`, 
		`In this breakout session on our ${breakoutTheBigPictureName} reading and lecture your team will discuss:`, [
		'History', 
		'Abstraction', 
		'Data & Information',
		'Programming',
		'The Internet & The Web',
		'Artificial Intelligence' ])
}

const ics_2_4of6_PAaA = {
	'prework': [
		'Complete through activity 11 prior to next class', '',
		`Be prepared for ${breakoutTheBigPictureName} breakout` ],
	'announcements':[ 
		'Any announcements or questions?' ],
	'agenda':[ 
		'Sprint Progress Polling',
		`Breakout: ${breakoutTheBigPictureName}`,
		'Prework for Next Class',
		'Lab' ]
}
export const ics_2_4of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_2_4of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', ics_2_5of6_PAaA.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_2_5of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ poll, breakoutTheBigPicture, tLab, preworkNext ])
}

const breakoutNumberingSystemsName = 'Numbering Systems'
const breakoutNumberingSystems = () => { 
	return breakoutStandard(
		`Breakout: ${breakoutNumberingSystemsName}`, 
		`In this breakout session on ${breakoutNumberingSystemsName} your team will discuss:`, [
		'Numbers and Computing', 
		'Positional Notation', 
		'Binary, Octal, and Hexadecimal',
		'Why Hex? How does this relate to files?',
		'What about conversion calculators?' ])
}

// Session 5 of 6: Wednesday
const ics_2_5of6_PAaA = {
	'prework': [
		'Complete through activity 13 prior to next class', '',
		`Be prepared for ${breakoutNumberingSystemsName} breakout`,
		`Be prepared for Quiz ${sprint}` ],
	'announcements':[ 
		'Any announcements?' ],
	'agenda':[ 
		'Sprint Progress Polling',
		`Breakout: ${breakoutNumberingSystemsName}`,
		`Quiz ${sprint}` ],
}

export const ics_2_5of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_2_5of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', ics_2_5of6_PAaA.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_2_6of6_PAaA.prework, sprint, activityList) }
	const quizExpectations = () => { return tQuizExpectations(sprint)}
	const recap = () => { return tRecap(ics_2_5of6_PAaA.agenda.slice(1))}
	const quiz = () => { return tQuiz(sprint) }

	return 	completeDeck(slideDeck, [ poll, breakoutNumberingSystems, preworkNext, recap, quizExpectations, quiz ])
}

// Session 6 of 6: Friday
const ics_2_6of6_PAaA = {
	'prework': [
		'Complete through activity 13 and be actively working on activity 14', '',
		'Be prepared for Lab',
		`All sprint ${sprint} assignments are due Sunday!` ],
	'announcements':[
		`All sprint ${sprint} assignments are due Sunday!`],
	'agenda':[
		'Lab']
}
export const ics_2_6of6 = () => {
	const finalReviewActivityListAndAssignments = () => { return basicSlide(
		`Final sprint ${sprint} activity list and assignment Q&A`, [`Any sprint ${sprint} activity list or assignment questions?`]) }
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_2_6of6_PAaA, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_3_1of6_PAaA.prework, sprint, activityList) }
	

	return completeDeck(slideDeck, [ finalReviewActivityListAndAssignments, preworkNext, tLab ])
}