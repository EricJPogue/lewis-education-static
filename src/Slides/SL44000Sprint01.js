import { xyz_1_2of6, checklistAnnouncementsPreworkAndAgenda, completeDeck } from './SL00000Sprint00'
import { tPrework, tQuiz, basicSlideWithLogo, bulletListSlide, breakoutStandard, orderedListSlide } from './SLSprint00'

import { list44000Sprint01 } from '../ActivityLists/AL44000Sprint01'

// Software Engineering (SE) sprint 1 global values.
const sprint = 1
const activityList = () => { return list44000Sprint01(sprint) }

// Sprint 1 session 1 of 6: Monday
const se_1_1of6_lists = {
	'announcements':[ 
		'Welcome back! I hope you had a wonderful Holiday Break.' ],
	'prework':[
		'Review Welcome Message',
		'Review Blended Learning & Flipped Classroom',
		'Review Introduction to Scrum',
		'Review Course Syllabus' ],
	'agenda':[
		'Sprint Progress Polling',
		'Class Format',
		'Introductions - Part 1',
		'Sprint 1 Planning (abbreviated)',
		'Introductions - Part 2 and Scrum Team Assignments',
		'Prework for Next Class' ]
}
export const se_1_1of6 = () => { 
	const poll = () => { return tPrework('Sprint Progress Polling', se_1_1of6_lists.prework, sprint, activityList) }
	const switchDeck = () => { return bulletListSlide('PowerPoint', 'Switch to PowerPoint slides.', [])}

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_1_1of6_lists, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', se_1_2of6_lists.prework, sprint, activityList) }
	return completeDeck(slideDeck, [poll, switchDeck, preworkNext])
}

// Sprint 1 session 2 of 6: Wednesday
const se_1_2of6_lists = {
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
export const se_1_2of6 = () => { return xyz_1_2of6(sprint, se_1_2of6_lists, se_1_3of6_lists, activityList) }

// Sprint 1 session 3 of 6: Friday
const se_1_3of6_lists = {
	'announcements':[ 
		'Reminder that Monday is Martin Luther King Jr. Day with no classes' ],
	'prework':[
		'Complete through activity 9 prior to next class', '',
		'Be prepared for “Software as a Service, Agile Development, and Cloud Computing” Breakout'],
	'agenda':[
		'Sprint Progress Polling',
		'Programming Together: Azure Website with Node.js',
		'Prework for Next Class',
		'Breakout: SDLCs, SaaS, Cloud Computing, plus Frameworks & Tools' 
	]
}
export const se_1_3of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_1_3of6_lists, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', se_1_3of6_lists.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_1_5of6_lists.prework, sprint, activityList) }
	const lab = () => {
		return bulletListSlide('Programming Together', 
			`Let’s spend a few minutes programming together utilizing our knowledge of Git, GitHub, and Azure to create 
			an Azure hosted Node.js website. Can we accomplish what used to take 6 months, $500,000, plus $50,000 per year 
			in 15 minutes and at a cost of $0?`, [])
	}
	const breakout = () => { 
		return breakoutStandard(
			'Breakout: Software Development Life Cycles', 
			'In this breakout session on Software Development Life Cycles (SDLCs), Software as a Service, Cloud Computing, and Highly Productive Frameworks & Tools your team will:', [
			'Virtuous Triangle... Could Saas on Cloud Computing and Frameworks and Tools be combined?',
			'SDLCs including Plan and Document, Iterative, and Agile',
			'SDLCs including Waterfall, Spiral, RUP, Agile, and Scrum',
			'Agile Manifesto',
			'Agile methodologies including Kanban, XP (formerly Extreme Programming), and Test-Driven Development' ])
	}

	return completeDeck(slideDeck, [poll, lab, breakout, preworkNext])
}

// Sprint 1 session 4 of 6: Monday
export const se_1_4of6 = () => { 
	const announcement = () => { return basicSlideWithLogo('Announcement', ['In recognition of Martin Luther King Jr. Day day there is no class.']) }
	return [ announcement ] 
}

// Sprint 1 session 5 of 6: Wednesday
const se_1_5of6_lists = {
	'prework':[
		'Complete through activity 11 prior to next class', '',
		'Make your initial post for Discussion 1',
		'Be prepared to continue “Software as a Service, Agile Development, and Cloud Computing” Breakout',
		'Be prepared for Quiz 1'],
	'announcements':['TBD'],
	'agenda':['TBD']
}
export const se_1_5of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_1_5of6_lists, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', se_1_5of6_lists.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_1_6of6_lists.prework, sprint, activityList) }
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
const se_1_6of6_lists = {
	'announcements':['TBD'],
	'prework':['TBD'],
	'agenda':['TBD']
}
export const se_1_6of6 = () => { 
	return checklistAnnouncementsPreworkAndAgenda(se_1_6of6_lists, sprint, activityList)
}