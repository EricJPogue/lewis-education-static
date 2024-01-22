import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tLab } from './SL00000Sprint00'
import { xyz_1_2of6 } from './SL00000Sprint01'
import { tPrework, tQuiz, basicSlideWithLogo, bulletListSlide, breakoutStandard, tQuizExpectations } from './SLSprint00'

import { list44000Sprint01 } from '../ActivityLists/AL44000Sprint01'
import { se_2_1of6_PAaA } from './SL44000Sprint02'
import { tRecap } from './SLSprint00'

// Software Engineering (SE) sprint 1 global values.
const sprint = 1
const activityList = () => { return list44000Sprint01(sprint) }

// Session 1 of 6: Monday
export const se_1_1of6 = () => 
{ 
	const announcement = () => { return basicSlideWithLogo('Announcement', ['In recognition of Martin Luther King Jr. Day day there is no class.']) }
	return [ announcement ] 
}

// Session 2 of 6: Wednesday
const se_1_2of6_PAaA = {
	'prework':[
		'Review welcome message', 
		'Review Blended Learning',
		'Review Scrum',
		'Take a quick look at the course syllabus' ],
	'announcements':[ 
		'Welcome back! I hope you had a wonderful Christmas break',
		'Friday’s class will be remote via Zoom' ],
	'agenda':[ 'Progress Polling',
		'Class Format',
		'Introductions - Part 1',
		'Sprint 1 Planning (abbreviated)',
		'Introductions - Part 2 and Scrum Team Assignments',
		'Prework for Next Class' ]
}
export const se_1_2of6 = () => { return xyz_1_2of6(sprint, se_1_2of6_PAaA, se_1_3of6_PAaA, activityList) }

// Session 3 of 6: Friday
const breakoutSDLCsName = 'SDLCs, Virtuous Triangle, Plan and Document, and Agile'
const breakoutSDLCs = () => { 
	return breakoutStandard(
		`Breakout: ${breakoutSDLCsName}`, 
		'In this breakout session your team will', [
		'The Virtuous Triangle... Could Saas on Cloud Computing and Frameworks and Tools be combined?',
		'Software Development Life Cycles including Plan and Document, Iterative, and Agile',
		'SDLCs including Waterfall, Spiral, RUP, Agile, and Scrum',
		'Agile Manifesto',
		'Agile methodologies including Kanban, XP (formerly Extreme Programming), and Test-Driven Development' ])
}
const se_1_3of6_PAaA = {
	'prework':[
		'Complete through activity 10 prior to next class', '',
		`Be prepared for “${breakoutSDLCsName}” breakout`],
	'announcements':[ 
		'Reminder that Monday is Labor Day with no classes' ],
	'agenda':[
		'Sprint Progress Polling',
		'Programming Together: Azure Website with Node.js',
		'Prework for Next Class',
		`Breakout: ${breakoutSDLCsName}` 
	]
}

export const se_1_3of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_1_3of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', se_1_3of6_PAaA.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_1_5of6_PAaA.prework, sprint, activityList) }
	const lab = () => {
		return bulletListSlide('Programming Together', 
			`Let’s spend a few minutes programming together utilizing our knowledge of Git, GitHub, and Azure to create 
			an Azure hosted Node.js website. Can we accomplish what used to take 6 months, $500,000, plus $50,000 per year 
			in 15 minutes and at a cost of $0?`, [])
	}

	return completeDeck(slideDeck, [poll, lab, breakoutSDLCs, preworkNext])
}

// Session 4 of 6: Monday
const se_1_4of6_PAaA = {
	'prework':[
		'Complete through activity 8 prior to next class', '',
		'Be prepared to complete Discussion 1', 
		'Be prepared for Lab'],
	'announcements':[ 
		'Welcome back for week 2!',
		'Today is a busy day' ],
	'agenda':[ 
		'Sprint Progress Poll',
		'Discussion 1 & Lab',
		'Preview of Wednesday’s topic']
}

export const se_1_4of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_1_4of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', se_1_4of6_PAaA.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_1_5of6_PAaA.prework, sprint, activityList) }
	const lab = () => { return bulletListSlide('Lab & Programming Together', 
		'Let’s focus on completing our activities and assignments by:', [
		'Discussing “Hello World for the Web”', 
		'Completing Discussion 1' ])
	}
	const recap = () => { return tRecap(se_1_4of6_PAaA.agenda.slice(1))}

	return completeDeck(slideDeck, [poll, lab, preworkNext, breakoutSaaS, recap])
}

// Session 5 of 6: Wednesday

const breakoutSaaSName = 'SaaS, Cloud, and Frameworks & Tools'
const breakoutSaaS = () => { 
	return breakoutStandard(
	'Breakout: SaaS, Cloud, and Frameworks & Tools', 
	'In this breakout session on Software Development Life Cycles (SDLCs), Software as a Service, Cloud Computing, and Highly Productive Frameworks & Tools your team will:', [
	'SaaService architectures including SOA, APIs, and Web Services',
	'Cloud Computing including Azure, AWS, Google, GoDaddy, and Cloud9... How have costs evolved?',
	'Highly Effective Frameworks including Ruby/Rails, React, and MERN and more... what is our framework?', 
	'Highly Effective Tools Git, GitHub, JUnit,  and more',
	'Testing including Verification and Validation... How does Waterfall accomplish Validation?' ])
}

// Session 5 of 6: Wednesday
const se_1_5of6_PAaA = {
	'prework':[
		'Complete through activity 12 prior to next class', '',
		'Make your initial post for Discussion 1',
		`Be prepared for “${breakoutSDLCsName}” breakout`],
	'announcements':[
		'Your initial Discussion 1 post is due... please submit it by the end of the day',
		'All sprint 1 activities and assignments due Sunday' ],
	'agenda':[
		'Sprint Progress Polling',
		`Breakout: ${breakoutSDLCsName}`,
		`Preview Breakout: ${breakoutSaaSName}`,
		'Prework for Next Class',
		'Quiz 1']
}
export const se_1_5of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_1_5of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', se_1_5of6_PAaA.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_1_6of6_PAaA.prework, sprint, activityList) }
	const quizExpectations = () => { return tQuizExpectations() }
	const quiz = () => { return tQuiz(sprint) }

	return completeDeck(slideDeck, [poll, breakoutSDLCs, breakoutSaaS, quizExpectations, preworkNext, quiz ])
}

// Sprint 1 session 6 of 6: Friday
const se_1_6of6_PAaA = {
	'prework': [
		'Complete through activity 15 prior to next class', '',
		`Be prepared for “${breakoutSaaSName}” breakout`,
		'Be prepared for Lab & Programming Together',
		'Be prepared to submit all sprint 1 assignments Sunday!' ],
	'announcements':[
		`All sprint ${sprint} assignments due Sunday!`],
	'agenda':[
		`Breakout: ${breakoutSaaSName}`,
		'Lab' ]
}
export const se_1_6of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_1_6of6_PAaA, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', se_2_1of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [breakoutSaaS, preworkNext, tLab ])
}