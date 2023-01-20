import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tLab } from './SL00000Sprint00'
import { xyz_1_1of6, xyz_1_2of6 } from './SL00000Sprint01'
import { tPrework, tQuiz, basicSlideWithLogo, bulletListSlide, breakoutStandard, tQuizExpectations } from './SLSprint00'

import { list44000Sprint01 } from '../ActivityLists/AL44000Sprint01'
import { se_2_1of6_PreworkAnnouncementsAndAgenda } from './SL44000Sprint02'

// Software Engineering (SE) sprint 1 global values.
const sprint = 1
const activityList = () => { return list44000Sprint01(sprint) }

// Sprint 1 session 1 of 6: Monday
export const se_1_1of6 = () => { return xyz_1_1of6(activityList, se_1_2of6_PreworkAnnouncementsAndAgenda.prework) }

// Sprint 1 session 2 of 6: Wednesday
const se_1_2of6_PreworkAnnouncementsAndAgenda = {
	'prework':[
		'Complete through activity 7 prior to next class', '',
		`Be prepared to complete sprint ${sprint} planning` ],
	'announcements':[ 
		'Friday’s class will be remote via Zoom' ],
	'agenda':[
		'Sprint Progress Polling', 
		'Introductions and Scrum Team Assignments (continued)',
		`Sprint ${sprint} Planning (continued)`,
		`Sprint ${sprint} Scrum Team Breakout` ]
}
export const se_1_2of6 = () => { return xyz_1_2of6(sprint, se_1_2of6_PreworkAnnouncementsAndAgenda, se_1_3of6_PreworkAnnouncementsAndAgenda, activityList) }

// Sprint 1 session 3 of 6: Friday
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
const se_1_3of6_PreworkAnnouncementsAndAgenda = {
	'prework':[
		'Complete through activity 9 prior to next class', '',
		`Be prepared for “${breakoutSDLCsName}” breakout`],
	'announcements':[ 
		'Reminder that Monday is Martin Luther King Jr. Day with no classes' ],
	'agenda':[
		'Sprint Progress Polling',
		'Programming Together: Azure Website with Node.js',
		'Prework for Next Class',
		`Breakout: ${breakoutSDLCsName}` 
	]
}

export const se_1_3of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_1_3of6_PreworkAnnouncementsAndAgenda, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', se_1_3of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_1_5of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }
	const lab = () => {
		return bulletListSlide('Programming Together', 
			`Let’s spend a few minutes programming together utilizing our knowledge of Git, GitHub, and Azure to create 
			an Azure hosted Node.js website. Can we accomplish what used to take 6 months, $500,000, plus $50,000 per year 
			in 15 minutes and at a cost of $0?`, [])
	}

	return completeDeck(slideDeck, [poll, lab, breakoutSDLCs, preworkNext])
}

// Sprint 1 session 4 of 6: Monday
export const se_1_4of6 = () => { 
	const announcement = () => { return basicSlideWithLogo('Announcement', ['In recognition of Martin Luther King Jr. Day day there is no class.']) }
	return [ announcement ] 
}

// Sprint 1 session 5 of 6: Wednesday
const breakoutSaaSName = 'SaaS, Cloud, and Frameworks & Tools'
const se_1_5of6_PreworkAnnouncementsAndAgenda = {
	'prework':[
		'Complete through activity 11 prior to next class', '',
		'Make your initial post for Discussion 1',
		`Be prepared for “${breakoutSDLCsName}” breakout`,
		`Be prepared for “${breakoutSaaSName}” breakout`,
		'Be prepared for Quiz 1'],
	'announcements':[
		'ECaMS Study Table open for business in Memorial Hall - Room 129',
		'All sprint 1 activities and assignments due Sunday' ],
	'agenda':[
		'Sprint Progress Polling',
		`Breakout: ${breakoutSDLCsName}`,
		`Breakout: ${breakoutSaaSName}`,
		'Prework for Next Class',
		'Quiz 1']
}
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
export const se_1_5of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_1_5of6_PreworkAnnouncementsAndAgenda, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', se_1_5of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_1_6of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }
	const quizExpectations = () => { return tQuizExpectations() }
	const quiz = () => { return tQuiz(sprint) }

	return completeDeck(slideDeck, [poll, breakoutSDLCs, breakoutSaaS, quizExpectations, preworkNext, quiz ])
}

// Sprint 1 session 6 of 6: Friday
const se_1_6of6_PreworkAnnouncementsAndAgenda = {
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
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_1_6of6_PreworkAnnouncementsAndAgenda, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', se_2_1of6_PreworkAnnouncementsAndAgenda.prework, sprint, activityList) }

	return completeDeck(slideDeck, [breakoutSaaS, preworkNext, tLab ])
}