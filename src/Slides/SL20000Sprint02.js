import { list20000Sprint01 } from '../ActivityLists/AL20000Sprint01'
import { list20000Sprint02 } from '../ActivityLists/AL20000Sprint02'

import { xyz_n_1of6_lists, xyz_n_1of6, xyz_n_6of6, checklistAnnouncementsPreworkAndAgenda, completeDeck, tReviewDemoSchedule, tLab } from './SL00000Sprint00'
import { basicSlide, breakoutStandard, bulletListSlide, orderedListSlide, submissionPercentage, tDiscussionBreakout, tPrework, tQuizExpectations, tQuiz, sprintDemosIntro, sprintDemos, demoAssignment } from './SLSprint00'

import { xyz_2_1of6_sprintPlanning, xyz_2_6of6_PreworkAnnouncementsAndAgenda, theHumbleTextFileName, theHumbleTextFile } from './SL00000Sprint02'
import { ics_3_1of6_PAaA } from './SL20000Sprint03'
import { getClass } from '../DataAndAPIs/Classes'

// Introduction to Computer Science (ICS) sprint 2 shared values.
const sprint = 2
const activityListPrevious = () => { return list20000Sprint01(sprint-1) }
const activityList = () => { return list20000Sprint02(sprint) }

// Session 1 of 6: Monday
export const ics_2_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const ics_2_1of6 = () => { return xyz_n_1of6(sprint, ics_2_1of6_PAaA.prework, activityListPrevious, ics_2_1of6_PAaA.agenda, ics_2_2of6_PAaA.prework, activityList, xyz_2_1of6_sprintPlanning(sprint)) }

// Todo: Add slide on "Kaizen": Small improvements eventually result in huge benefits
// Session 2 of 6: Wednesday
const ics_2_2of6_PAaA = {
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

	return completeDeck(slideDeck, [ qAndA, discussionBreakout, introducingDemos, tReviewDemoSchedule, preworkNext, tLab ])
}

// Todo: Add slide for Metrics (Rule #9)... “Anything that is measured and watched, improves.” – Bob Parsons
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
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_2_3of6_PAaA, sprint, activityList)
	const metrics = () => {
		return basicSlide(`Sprint ${sprint-1} Metrics`, [
			'What is Bob Parsons Rule #9?', '',
			`Let’s take a minute and review our Sprint ${sprint-1} Submission Percentage class metric.` ])
	}
	const metricsSubmissionPercentage = () => {
		if (getClass().section === '002') {
			return submissionPercentage([
				{ name: 'Discussion', due:27, submitted:27 },
				{ name: 'Quiz', due:27, submitted:26 },
				{ name: 'Lab', due:27, submitted:26 },
				{ name: 'Reflection', due: 27, submitted: 26 }])
		}
		else {
			return submissionPercentage([
				{ name: 'Discussion', due:25, submitted:25 },
				{ name: 'Quiz', due:25, submitted:25 },
				{ name: 'Lab', due:25, submitted:24 },
				{ name: 'Reflection', due: 25, submitted: 24 }])
		}
	}
	// Todo: Consider adding the pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Very good submission percentage in sprint 1',
			'All assignments are graded and posted', 
			'Thank you for your reflection comments',
			'Lots of nice comments about scrum teammates and the benefit of seeing classmates displaying their work', 
			'A couple comments about going a little too fast to cover all of the sprint 1 topics... I agree',
			'Be **sure** to put something in for each question so that I can give you at least a point or two',
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
const ics_2_4of6_PAaA = {
	'prework': [
		'Complete through activity 11 prior to next class', '',
		`Be prepared for “The Information Layer” breakout` ],
	'announcements':[ 
		'Any announcements or questions?' ],
	'agenda':[ 
		'Breakout: The Information Layer',
		`Data Representation and ${theHumbleTextFileName}`,
		'Prework for Next Class' ]
}
export const ics_2_4of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_2_4of6_PAaA, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_2_5of6_PAaA.prework, sprint, activityList) }
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

// Session 5 of 6: Wednesday
const ics_2_5of6_PAaA = {
	'prework': [
		'Complete through activity 13 prior to next class', '',
		'Be prepared for “Data Representation” breakout',
		`Be prepared for Quiz ${sprint}` ],
	'announcements':[ 
		'Mass of the Holy Spirit at St Charles Borromeo Hall at 11 AM' ],
	'agenda':[ 
		'Sprint Progress Polling',
		'Breakout: Data Representation... moved to Friday',
		`Complete Data Representation and ${theHumbleTextFileName}`,
		`Quiz ${sprint}` ],
}
export const ics_2_5of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_2_5of6_PAaA, sprint, activityList)
	const breakout = () => { 
		return breakoutStandard('Breakout: Data Representation', 
			'In this breakout session on Data Representation (reading and lecture) your team will:', [
			'Analog and Digital Data',
			'Binary Representation of Numeric Data',
			'Text including ASCII, Unicode, UTF-8, UTF-16 Representations, and PDF',
			'Photo and Audio Representation Priorities',
			'Video Representation priorities' ])
	}
	const poll = () => { return tPrework('Sprint Progress Polling', ics_2_5of6_PAaA.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_2_6of6_PAaA.prework, sprint, activityList) }
	const quizExpectations = () => { return tQuizExpectations(sprint)}
	const quiz = () => { return tQuiz(sprint) }

	return 	completeDeck(slideDeck, [ poll, breakout, preworkNext, quizExpectations, quiz ])
}

// Session 6 of 6: Friday
const ics_2_6of6_PAaA = xyz_2_6of6_PreworkAnnouncementsAndAgenda('activity 13 and actively working on 14', sprint)
export const ics_2_6of6 = () => { return  xyz_n_6of6(sprint, ics_2_6of6_PAaA, ics_3_1of6_PAaA.prework, activityList) }
