import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tLab } from './SL00000Sprint00'
import { xyz_1_1of6, xyz_1_2of6 } from './SL00000Sprint01'
import { tPrework, tQuiz, basicSlide, basicSlideWithLogo, bulletListSlide, breakoutStandard, tQuizExpectations } from './SLSprint00'

import { list24500Sprint01 } from '../ActivityLists/AL24500Sprint01'
import { oop_2_1of6_PreworkAnnouncementsAndAgenda } from './SL24500Sprint02'

// Introduction to Computer Science (ICS) sprint 1 global values.
const sprint = 1
const activityList = () => { return list24500Sprint01(sprint) }

// Session 1 of 6: Monday
export const oop_1_1of6 = () => { return xyz_1_1of6(activityList, oop_1_2of6_PreworkAnnouncementsAndAgenda.prework) }

// Session 2 of 6: Wednesday
const oop_1_2of6_PreworkAnnouncementsAndAgenda = {
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
export const oop_1_2of6 = () => { return xyz_1_2of6(sprint, oop_1_2of6_PreworkAnnouncementsAndAgenda, oop_1_3of6_PreworkAnnouncementsAndAgenda, activityList) }

// Session 3 of 6: Friday
const oop_1_3of6_PreworkAnnouncementsAndAgenda = {
	'announcements':[ 
		'Reminder that Monday is Labor Day with no classes' ],
	'prework':[
		'Complete through activity 9 prior to next class', '',
		'Be prepared for “Object-Oriented Programming Concepts & Practices” Breakout'],
	'agenda':[
		'Sprint Progress Polling',
		'Programming Together: Accessing Example Code',
		'Prework for Next Class',
		'Breakout: Object-Oriented Programming Concepts & Practices' 
	]
}

const breakoutOOPConceptsName = 'Object-Oriented Programming Concepts'
const breakoutOOPConcepts = () => {
	return breakoutStandard(
		`Breakout: ${breakoutOOPConceptsName}`, 
		'In this breakout session your team will', [
		'Classes and Objects',
		'Properties (member variables) & Methods (member functions)',
		'Encapsulation (information hiding)… Can it protect data from hackers?',
		'Inheritance (abstraction)',
		'Polymorphism',
		'Composition & Aggregation' ])
}
export const oop_1_3of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(oop_1_3of6_PreworkAnnouncementsAndAgenda, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', oop_1_3of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', oop_1_5of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }
	const lab = () => {
		return bulletListSlide('Programming Together', 
			`Let’s spend a few minutes programming together checking our Java SDK installation and utilizing our 
			knowledge of Git and GitHub to access the example code for this class.`, [])
	}
	const breakout = () => { return breakoutOOPConcepts() }

	return completeDeck(slideDeck, [poll, lab, breakout, preworkNext])
}

// Session 4 of 6: Monday
export const oop_1_4of6 = () => { 
	const announcement = () => { return basicSlideWithLogo('Announcement', ['In recognition of Martin Luther King Jr. Day day there is no class.']) }
	return [ announcement ] 
}

// Session 5 of 6: Wednesday
const oop_1_5of6_PreworkAnnouncementsAndAgenda = {
	'prework':[
		'Complete through activity 11 prior to next class', '',
		'Make your initial post for Discussion 1',
		`Be prepared to continue “${breakoutOOPConceptsName}” Breakout`,
		'Be prepared for Quiz 1'],
	'announcements':[
		'ECaMS Study Table open for business in Memorial Hall - Room 129',
		'All sprint 1 activities and assignments due Sunday' ],
	'agenda':[
		'Sprint Progress Polling',
		`Breakout: ${breakoutOOPConceptsName}`,
		'Prework for Next Class',
		'Quiz 1']
}
export const oop_1_5of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(oop_1_5of6_PreworkAnnouncementsAndAgenda, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', oop_1_5of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', oop_1_6of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }
	const breakout = () => { return breakoutOOPConcepts() }
	const quizExpectations = () => { return tQuizExpectations() }
	const quiz = () => { return tQuiz(sprint) }

	return completeDeck(slideDeck, [poll, breakout, quizExpectations, quiz, preworkNext])
}

// Session 6 of 6: Friday
const oop_1_6of6_PreworkAnnouncementsAndAgenda = {
	'prework': [
		'Complete through activity 15 prior to next class', '',
		`Be prepared for “${breakoutOOPConceptsName}” breakout (continued)`,
		'Be prepared for Lab & Programming Together',
		'Be prepared to submit all sprint 1 assignments Sunday!' ],
	'announcements':[
		`All sprint ${sprint} assignments due Sunday!`],
	'agenda':[
		`Breakout: ${breakoutOOPConceptsName} (continued)`,
		`Quiz ${sprint} “Phone a Friend”`,
		'Prework for Next Class',
		'Lab' ]
}
export const oop_1_6of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(oop_1_6of6_PreworkAnnouncementsAndAgenda, sprint, activityList)
	const quizPhoneAFriend = () => { return basicSlide(
		`Quiz ${sprint} “Phone a Friend”`, [
			`Let’s play Quiz ${sprint} “Phone a Friend”`,
			`Who has a Quiz ${sprint} question they would like help with?`]) }
	const preworkNext = () => { return tPrework('Prework For Next Class', oop_2_1of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }

	return completeDeck(slideDeck, [breakoutOOPConcepts, quizPhoneAFriend, preworkNext, tLab ])
}