import { xyz_n_1of6_agenda_list, xyz_n_1of6_prework_list, xyz_n_1of6 } from './SL00000Sprint00'
import { completeDeck, checklistAnnouncementsPreworkAndAgenda, tLab } from './SL00000Sprint00'

import { tPrework, bulletListSlide, discussionBreakout, reviewDemoSchedule } from './SLSprint00'
import { submissionPercentage, retrospectiveBreakout, orderedListSlide, retrospectiveIntroduction, breakoutStandard, tQuiz } from './SLSprint00'
import { sprintDemosIntro, sprintDemos, demoAssignment } from './SLSprint00'

import { list24700Sprint03 } from '../ActivityLists/AL24700Sprint03'
import { list24700Sprint04 } from '../ActivityLists/AL24700Sprint04'

import { web_5_1of6_lists } from './SL24700Sprint05'

// Sprint 4 Software Engineering (SE) values.
const sprint = 4
const activityListPrevious = () => { return list24700Sprint03(sprint-1) }
const activityList = () => { return list24700Sprint04(sprint) }

// Session 1 of 6.
// Todo: Review Sprint 4 Session 1 (below) as it was fixed but not reviewed after the session.
export const web_4_1of6_prework_list = xyz_n_1of6_prework_list(sprint)  
const web_4_1of6_agenda_list = xyz_n_1of6_agenda_list(sprint)
export const web_4_1of6 = () => { 
	const changes = () => {
		return bulletListSlide('Class Projects & Class Changes', 
			'Class Projects & Class Changes:', [
			'When I first came to Lewis, I thought class projects were a copout', 
			'... I was 100% wrong, wrong, wrong', 
			'I have worked to continuously improved my classes and to give more time to class projects',
			'This semester you will have 30 hours to on a class project of **your** choice',
			'Sprint 7 & sprint 8: 9 + 9 + 9 + 9 -> 12 + 12 + 12',
			'My suggestion? Do something that will make you proud... and that you could show to a perspective employer',
			'What will you do?' ])
	}
	let slides = xyz_n_1of6(sprint, web_4_1of6_prework_list, activityListPrevious, web_4_1of6_agenda_list, web_4_2of6_lists.prework, activityList)
	slides.splice(4, 0, changes)
	return slides
}


//export const web_4_1of6_prework_list = xyz_n_1of6_prework_list(sprint)  

// Session 2 of 6.
const web_4_2of6_lists = {
	'announcements':[ 
		'Any announcements?' ],
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Review Demo Schedule for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const web_4_2of6 = () => {
	const discussion4Breakout = () => { return discussionBreakout(sprint) } 
	const programmingTogether = () => {
		return bulletListSlide('Lab & Programming Together', 
			'Let’s commit to focusing on our Lab assignment by:', [
			'Setting up a GitHub repository and Azure Node.js website to host Map Mania' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', web_4_3of6_lists.prework, sprint, activityList) }

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_4_2of6_lists, sprint, activityList)
	return completeDeck(slideDeck, [ discussion4Breakout, reviewDemoSchedule, preworkNext, programmingTogether ])
}

// Session 3 of 6.
const web_4_3of6_lists = {
	'announcements':[ 
		'Reminder that you do not have to implement your local development web server as suggested in ”“Learning Web Development” Chapter 6' ],
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
export const web_4_3of6 = () => {
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:14, submitted:14 },
			{ name: 'Quiz', due:14, submitted:14 },
			{ name: 'Lab', due:14, submitted:12 },
			{ name: 'Reflection', due:14, submitted:14 }
		])
	}
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Okay submission percentage... it does’t feel good to have multiple Labs not submitted',
			'My grading is a of a work in process this semester' ])
	}
	const breakout = () =>{ return retrospectiveBreakout(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', web_4_4of6_lists.prework, sprint, activityList) }

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_4_3of6_lists, sprint, activityList)
	return completeDeck(slideDeck, [sprintDemosIntro, sprintDemos, demoAssignment, retrospectiveInto, metricsSubmissionPercentage, retrospective, breakout, preworkNext])
}

// Session 4 of 6: Monday
const web_4_4of6_lists = {
	'announcements':[ 
		'Any announcements?' ],
	'prework':[
		'Complete through activity 9 prior to next class', '',
		'Be prepared for a discussion on the Node.js local server environment, AJAX, and JSON' ],
	'agenda':[
		'Node.js The Server breakout',
		'Prework for Next Class',
		'Lab' ]
}
export const web_4_4of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_4_4of6_lists, sprint, activityList)
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Node.js The Server breakout', 
			'In this breakout session your team will discuss Node.js server environment:', [
			'Software Configuration Management (SCM)... Wikipedia',
			'Unit testing and the Node.js local environment', 
			'Azure Static Website vs. Azure Node.js Website', 
			'Hosting Map Mania... static website or Node.js', 
			'Local development and testing of Node.js website vs. local testing of a static website', 
			'Local development and testing of Node.js “Learning Web Development” vs. suggested environment', 
			'JSON, AJAX, and CORS'
		])
	}

	const preworkNext = () => { return tPrework('Prework For Next Class', web_4_5of6_lists.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ breakout, preworkNext, tLab ])
}

// Sprint 5 session 5 of 6: Wednesday
const web_4_5of6_lists = {
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[
		'Complete through activity 10 and be working on activity 11', '',
		'Be prepared for Quiz 4' ],
	'agenda':[
		'Lab & Programming Together',
		'Prework for Next Class',
		'Quiz 4' ]
}
export const web_4_5of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_4_5of6_lists, sprint, activityList)
	const breakout = () => {
		return bulletListSlide('Lab & Programming Together', 
			'Let’s commit to focusing on our Lab assignment by:', [
			'Focusing on Map Mania' ])
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', web_4_6of6_lists.prework, sprint, activityList) }
	const quiz = () => { return tQuiz(sprint) }

	return completeDeck(slideDeck, [ breakout, preworkNext, quiz ])
}

// Sprint 4 session 6 of 6: Friday
const web_4_6of6_lists = {
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[
		`All sprint ${sprint} assignments due Sunday!`, '',
		'Be prepared for Lab & Programming Together' ],
	'agenda':[
		'Sprint Progress Polling',
		'Prework for Next Class',
		'Lab and Programming Together' ]
}
export const web_4_6of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(web_4_6of6_lists, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', web_5_1of6_lists.prework, sprint, activityList) }

	return completeDeck(slideDeck, [ preworkNext, tLab ])
}