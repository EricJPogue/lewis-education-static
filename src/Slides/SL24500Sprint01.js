import { xyz_1_2of6, checklistAnnouncementsPreworkAndAgenda, completeDeck } from './SL00000Sprint00'
import { tPrework, tQuiz, basicSlideWithLogo, bulletListSlide, breakoutStandard, orderedListSlide } from './SLSprint00'

import { list24500Sprint01 } from '../ActivityLists/AL24500Sprint01'

// Introduction to Computer Science (ICS) sprint 1 global values.
const sprint = 1
const activityList = () => { return list24500Sprint01(sprint) }

// Sprint 1 session 1 of 6: Monday
const oop_1_1of6_lists = {
	'announcements':[ 
		'Welcome back! I hope you had a wonderful Holiday Break.' ],
	'prework':[
		'Review Welcome Message',
		'Review Blended Learning & Flipped Classroom',
		'Review Introduction to Scrum',
		'Review Course Syllabus' ],
	'agenda':[
		'Progress Polling',
		'Class Format',
		'Introductions - Part 1',
		'Sprint 1 Planning (abbreviated)',
		'Introductions - Part 2 and Scrum Team Assignments',
		'Prework for Next Class' ]
}

export const oop_1_1of6 = () => { 
	const poll = () => { return tPrework('Sprint Progress Polling', oop_1_1of6_lists.prework, sprint, activityList) }
	const switchDeck = () => { return bulletListSlide('PowerPoint', 'Switch to PowerPoint slides.', [])}

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(oop_1_1of6_lists, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', oop_1_2of6_lists.prework, sprint, activityList) }
	return completeDeck(slideDeck, [poll, switchDeck, preworkNext])
}

// Sprint 1 session 2 of 6: Wednesday
const oop_1_2of6_lists = {
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
export const oop_1_2of6 = () => { return xyz_1_2of6(sprint, oop_1_2of6_lists, oop_1_3of6_lists, activityList) }

// Sprint 1 session 3 of 6: Friday
const oop_1_3of6_lists = {
	'announcements':[ 
		'Reminder that Monday is Martin Luther King Jr. Day with no classes' ],
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
export const oop_1_3of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(oop_1_3of6_lists, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', oop_1_3of6_lists.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', oop_1_5of6_lists.prework, sprint, activityList) }
	const lab = () => {
		return bulletListSlide('Programming Together', 
			`Let’s spend a few minutes programming together checking our Java SDK installation and utilizing our 
			knowledge of Git and GitHub to access the example code for this class.`, [])
	}
	const breakout = () => { 
		return breakoutStandard(
			'Breakout: Object-Oriented Programming Concepts & Practices', 
			'In this breakout session on Object-Oriented Programming Concepts & Practices your team will:', [
			'Classes and Objects',
			'Properties (member variables) & Methods (member functions)',
			'Encapsulation (information hiding)… Can it protect data from hackers?',
			'Inheritance (abstraction)',
			'Polymorphism',
			'Composition & Aggregation' ])
	}

	return completeDeck(slideDeck, [poll, lab, breakout, preworkNext])
}

// Sprint 1 session 4 of 6: Monday
export const oop_1_4of6 = () => { 
	const announcement = () => { return basicSlideWithLogo('Announcement', ['In recognition of Martin Luther King Jr. Day day there is no class.']) }
	return [ announcement ] 
}

// Sprint 1 session 5 of 6: Wednesday
const oop_1_5of6_lists = {
	'prework':[
		'Complete through activity 11 prior to next class', '',
		'Make your initial post for Discussion 1',
		'Be prepared to continue “Object-Oriented Programming Concepts & Practices” Breakout',
		'Be prepared for Quiz 1'],
	'announcements':['TBD'],
	'agenda':['TBD']
}
export const oop_1_5of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(oop_1_5of6_lists, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', oop_1_5of6_lists.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', oop_1_6of6_lists.prework, sprint, activityList) }
	const breakout = () => { 
		return breakoutStandard(
		'Breakout: SaaS, Cloud, and Frameworks & Tools', 
		'In this breakout session on Software Development Life Cycles (SDLCs), Software as a Service, Cloud Computing, and Highly Productive Frameworks & Tools your team will:', [
		'SaaService architectures including SOA, APIs, and Web Services',
		'Cloud Computing including Azure, AWS, Google, GoDaddy, and Cloud9... How have costs evolved?',
		'Highly Effective Frameworks including Ruby/Rails, React, MERN, Flask and many more', 
		'Highly Effective Tools Git, GitHub, JUnit,  and many more',
		'Testing including Verification and Validation... How does Waterfall accomplish Validation?' ])
	}
	const quizExpectations = () => {
		return orderedListSlide('Quiz Expectations', 
			'Quiz Expectations include:', [
			'You may use any naturally available documentation including books, notes, and web browser',
			'You may not use quiz specific content like question banks',
			'The quiz is an individual assignment so asking others would be inappropriate**',
			'You are welcome to ask me quiz or non-quiz related questions',
			'Your first sincere attempt at the quiz is expected by the end of class']) 
	}
	const quiz = () => { return tQuiz(sprint) }
	return completeDeck(slideDeck, [poll, breakout, quizExpectations, quiz, preworkNext])
}

// Sprint 1 session 6 of 6: Friday
const oop_1_6of6_lists = {
	'announcements':['TBD'],
	'prework':['TBD'],
	'agenda':['TBD']
}
export const oop_1_6of6 = () => { 
	return checklistAnnouncementsPreworkAndAgenda(oop_1_6of6_lists, sprint, activityList)
}