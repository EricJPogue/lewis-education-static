import { xyz_n_1of6_agenda_list, xyz_n_1of6_prework_list, xyz_n_1of6, completeDeck, checklistAnnouncementsPreworkAndAgenda, tLab } from './SL00000Sprint00'

import { sprintDemosIntro, sprintDemos, demoAssignment, reviewDemoSchedule, tExamExpectations, tExam } from './SLSprint00'
import { tPrework, bulletListSlide, discussionBreakout, submissionPercentage, orderedListSlide, breakoutStandard } from './SLSprint00'

import { list20000Sprint03 } from '../ActivityLists/AL20000Sprint03'
import { list20000Sprint04 } from '../ActivityLists/AL20000Sprint04'

import { tReviewDemoSchedule } from './SL00000Sprint00'
import { basicSlide } from './SLSprint00'

// Sprint 4 Introduction to Computer Science (ICS) values.
const sprint = 4
const activityListPrevious = () => { return list20000Sprint03(sprint-1) }
const activityList = () => { return list20000Sprint04(sprint) }

// Todo: Review https://stackoverflow.com/questions/1300242/passing-a-function-with-parameters-as-a-parameter
// Todo: Create xyz_n_1of6 version 2 that includes optional null (or default_announcements) announcements and makes prework_list 
// and agenda_list optionally null (or default_prework_list and default_agenda_list)




// Session 1 of 6: Monday
// Add https://witty-sand-028b04910.2.azurestaticapps.net/index.html
export const ics_4_1of6_prework_list = xyz_n_1of6_prework_list(sprint)  
const ics_4_1of6_agenda_list = xyz_n_1of6_agenda_list(sprint)
export const ics_4_1of6 = () => { 
	let slides = xyz_n_1of6(sprint, ics_4_1of6_prework_list, activityListPrevious, ics_4_1of6_agenda_list, ics_4_2of6_lists.prework, activityList, substituteSprintPlanning)
	slides.splice(4, 0, classProjects)
	return slides
}
export const classProjects = () => {
	return bulletListSlide('Class Projects & Sprints 4 through 8', 
		'Class Projects & Sprints 4 through 8:', [
		'When I first came to Lewis, I thought class projects were a copout', 
		'... I was 100% wrong, wrong, wrong', 
		'I have worked to continuously improved my classes and to give more time to class projects',
		'This semester you will have 30 hours to on a class project of **your** choice',
		'Sprint 7 & sprint 8 Expectation: 18 hours + 18 hours -> 27 hours + 9 hours',
		'My suggestion? Do something that will make you proud... and that you could show to a perspective employer',
		'What will you do?' ])
}
export const substituteSprintPlanning = () => {
	return orderedListSlide('Planning', `Sprint ${sprint} Expectations:`, [
		'Similar to previous sprints with Discussion, Quiz, Lab, and Reflection',
		'Similar in that we will complete our scrum team Discussion Board breakout session on Wednesday',
		`And will have sprint ${sprint-1} Demos and Retrospective on Friday`,
		'Different in that we have Spring Break the week of March 11 causing the sprint to expand to 3 weeks duration ' ])
}

// Session 2 of 6: Wednesday
const ics_4_2of6_lists = {
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'announcements':[ 
		'Fall registration is coming... do you know what you want to take?' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const ics_4_2of6 = () => {
	const discussion4Breakout = () => { return discussionBreakout(sprint) } 
	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'Let’s commit to focusing on our Lab assignment by:', [
			'Start MatchMakerLite tutorial by implementing a README.md and LICENSE file in GitHub', 
			'Adding a MatchMakerLite.py file', 
			'Pushing the updated files to GitHub',
			'Zipping the files as if we were going to submit them for Lab 4',
			'Finally, let’s do the same thing for MatchMaker' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_4_3of6_lists.prework, sprint, activityList) }

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_4_2of6_lists, sprint, activityList)
	return completeDeck(slideDeck, [ discussion4Breakout, reviewDemoSchedule, preworkNext, programmingTogether ])
}

// Session 3 of 6: Friday
const ics_4_3of6_lists = {
	'announcements':[ 
		'Registration is coming' ],
	'prework':[
		'Complete through activity 9 prior to next class', '',
		`Be prepared for sprint ${sprint-1} demos and retrospectives`,
		'Those scheduled to demo please be a couple of minutes early to class' ],
	'agenda':[
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakout for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}
export const ics_4_3of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_4_3of6_lists, sprint, activityList)
	const metrics = () => {
		return basicSlide(`Sprint ${sprint-1} Metrics`, [
			'What is Bob Parsons Rule #9?', '',
			`Let’s take a minute and review our Sprint ${sprint-1} Submission Percentage class metric.` ])
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:15, submitted:14 },
			{ name: 'Quiz', due:15, submitted:15 },
			{ name: 'Lab', due:15, submitted:12 },
			{ name: 'Reflection', due:15, submitted:14 }])
	}
	// Todo: Consider adding the pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Surprisingly troubling submission percentage... missing 2 labs does not feel very good', 
			'Grading is complete and grades are posted',
			'You should be able to see the answers to all quiz questions', 
			'Thank you for your reflection comments' ])
	}
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			`How does your team feel about sprint ${sprint-1} now that it is over`,
			`What could be done to make sprint ${sprint-1} or the class overall better or more manageable`,
			'What improvements should we make as a class, team, or individual going forward' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_4_4of6_PAaA.prework, sprint, activityList) }


	return completeDeck(slideDeck, [ tReviewDemoSchedule, sprintDemosIntro, sprintDemos, demoAssignment, metrics, 
		metricsSubmissionPercentage, retrospective, retrospectiveBreakout, preworkNext ])
}

// Session 4 of 6: Monday
const breakoutComputingComponentsName = 'Computing Components'
const breakoutComputingComponents = () => { 
	return breakoutStandard( 
		`Breakout: ${breakoutComputingComponentsName}`, 
		`In this breakout session on our ${breakoutComputingComponentsName} reading and lecture your team will discuss:`, [
		'Computing Components',
		'Stored Program plus Von Neumann Architecture',
		'Ram and Rom plus Secondary Storage',
		'Embedded Systems',
		'Parallel Architectures plus Classes of Parallel Hardware' ])
}

const ics_4_4of6_PAaA = {
	'prework':[
		'Complete through activity 9 prior to next class', '',
		`Be prepared for ${breakoutComputingComponentsName} Breakout` ],
	'announcements':[ 
		'**Next class (Wednesday, March 6) is our midterm Exam your in person attendance is required' ],
	'agenda':[
		'Sprint Progress Polling',
		`${breakoutComputingComponentsName} Breakout`,
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const ics_4_4of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_4_4of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', ics_4_4of6_PAaA.prework, sprint, activityList) }
	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'How can we best make progress on Matchmaker given that we have already:', [
			'Matchmaker for the Web',
			'Do you know where to find the source code if you need it?' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_4_5of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ poll, breakoutComputingComponents, preworkNext, programmingTogether ])
}

// Session 5 of 6: Wednesday (midterm Exam)
const ics_4_5of6_PAaA = {
	'prework':[
		'**Be prepared to take you midterm exam in person on Wednesday' ],
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday, March 17th!` ],
	'agenda':[
		'Midterm Exam' ],
}
export const ics_4_5of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_4_5of6_PAaA, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_4_6of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ preworkNext, tExamExpectations, tExam ])
}

// Session 6 of 6: Friday
const ics_4_6of6_PAaA = {
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday, March 17!` ],
	'prework':[
		'Be complete with activity 10 working on activity 11 prior to next class', '',
		'Be prepared for Lab & Programming together' ],
	'agenda':[
		'Final Activity List & Assignment Review',
		'Prework for Next Class',
		'Lab and Programming Together' ]
}
export const ics_4_6of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(ics_4_6of6_PAaA, sprint, activityList)
	const finalReviewActivityListAndAssignments = () => { return basicSlide(
		`Final sprint ${sprint} activity list and assignment Q&A`, [`Any sprint ${sprint} activity list or assignment questions?`]) }
	const preworkNext = () => { return tPrework('Prework For Next Class', ics_5_1of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ finalReviewActivityListAndAssignments,preworkNext, tLab ])
}

const ics_5_1of6_PAaA = {
	'prework':[
		`All sprint ${sprint} assignments due Sunday, March 17!`, '',
		`Be prepared for sprint 5 planning` ],
	'announcements':[ 
		`` ],
	'agenda':[
		'' ]
}