import { preflightChecklist, instructorChecklist, basicSlide, basicSlideWithLogo, orderedListSlide, end, breakout, bulletListSlide } from './SLSprint00' // Shared slides.
import { prework, breakoutStandard, quiz } from './SLSprint00'
import { list24700Sprint01 } from '../ActivityLists/AL24700Sprint01'
import { agendaSlide } from './SLSprint00' // Shared slide templates.

import { xyz_1_1of6  } from './SL00000Sprint01'

// Sprint 1 integrated slide decks are defined below.
const sprint = 1

// Web & Distributed Programming (WEB)
// export const web_1_1of6 = () => { return mwf_1_1of6(prework_1_1of6) }

const activityList = () => { return list24700Sprint01(sprint) }
export const web_1_1of6 = () => { return xyz_1_1of6(activityList, web_1_2of6_PreworkAnnouncementAndAgenda.prework) }

// **BugBug: Update below. 

// Session 2 of 6: Wednesday
const web_1_2of6_PreworkAnnouncementAndAgenda = {
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

export const web_1_2of6 = () => { 
	const announcements =  () => { return basicSlideWithLogo('Announcements', ['Dr. Martinez is looking for someone to do some Web development work for her research project.']) }
	const sprintProgressPolling = () => { return prework('Sprint Progress Polling', prework_1_1of6_list, sprint, list24700Sprint01) }

	return mwf_1_2of6(announcements, prework_1_1of6, sprintProgressPolling, web_prework_1_2of6)
}

const web_prework_1_2of6 = () => {
	return prework('Prework', [
		'Complete through activity 10 prior to next class', '',
		'Be ready for a fully remote Friday class where will need a working microphone and headset**', 		
		'Be prepared for a breakout session on Web Development Workflows and HTML',
		'Be sure to take screenshots when completing Tools of the Trade' ],
		sprint, list24700Sprint01)
}
export const web_1_3of6 = () => {
	const announcements =  () => {
		return basicSlideWithLogo('Announcements', [ 'Reminder that Monday is the Labor Day holiday with no classes.' ]) }
	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			'Polling: Sprint Progress',
			'Programming Together: Lew Alcindor and Web Programming',
			'Prework for Next Class',
			'Breakout: Web Development Workflows and HTML' ])
	}
	const programmingTogether = () => {
		return bulletListSlide('Programming Together: Lew Alcindor and Web Programming', 
			'Let’s spend a few minutes programming together utilizing command line and graphical tools to create a basic web application by:', [
			'Launching PowerShell or Terminal', 
			'Executing pwd, cd, ls, ls -l, ls -a, mkdir, and clear', 
			'Identifying an optimal location to work on our files',
			'Utilizing VS Code and a Web browser to create a web page' ])
	}
	const poll = () => { return prework('Poll', [ 'Sprint Progress' ], sprint, list24700Sprint01) }
	const breakout = () => { 
		return breakoutStandard(
		'Breakout: Web Development Workflows and HTML', 
		'In this breakout session on Web development workflows and HTML your team will:', [
		'Web Development Workflow... What is our web development workflow and tooling?',
		'HTML history and evolution... What HTML standard will we use?',
		'Syntax and basic structure... What are other popular markup languages?',
		'How do we Verify correct HTML syntax... Can you demo this activity?' ])
	}

	return [ instructorChecklist, preflightChecklist, announcements, agenda, web_prework_1_2of6, poll, programmingTogether, web_prework_1_5of6, breakout, end ] 
}

export const web_1_4of6 = () => { return shared1_4of6() }
const shared1_4of6 = () => { 
	const laborDayAnnouncements =  () => { return basicSlideWithLogo('Announcements', [ 
		'In recognition of Labor day there is no class.']) }
	return [ laborDayAnnouncements ]
}

const web_prework_1_5of6 = () => {
	return prework('Prework', [
		'Complete through activity 13 prior to next class', '',
		'Be prepared to continue breakout session',
		'Be prepared for Quiz 1' ],
		sprint, list24700Sprint01)
}
export const web_1_5of6 = () => {
	const announcements =  () => {
		return basicSlideWithLogo('Announcements', [ 'I hope you had a wonderful three day weekend' ])
	}
	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			'Polling: Sprint Progress',
			'Breakout: Web Development Workflows and HTML (continued)',
			'Prework for Next Class',
			'Quiz 1' ])
	}
	const breakout = () => { 
		return breakoutStandard(
			'Breakout: Web Development Workflows and HTML (continued)', 
			'In this breakout session on Web development workflows and HTML your team will:', [
			'Web Development Workflow... What is our web development workflow and tooling?',
			'HTML history and evolution... What HTML standard will we use?',
			'Syntax and basic structure... What are other popular markup languages?',
			'How do we Verify correct HTML syntax... Can you demo this activity?' ])
	}

	const quizSlide = () => { return quiz(sprint) }

	return [ instructorChecklist, preflightChecklist, announcements, agenda, web_prework_1_5of6, breakout, web_prework_1_6of6, quizExpectations, quizSlide, end ]
}

const web_prework_1_6of6 = () => { return shared_prework_1_6of6() }
const shared_prework_1_6of6 = () => {
	return prework('Prework', [
		'Everything is due Sunday!', '',
		'Be prepared for Lab' ], 
		sprint, list24700Sprint01)
}

export const web_prework_2_1of6 = () => {
	return prework('Prework', [
		'Everything is due Sunday!', '',
		'Be prepared for 100% focus on Sprint 2 Planning' ], 
		sprint, list24700Sprint01)
}

// Shared between classes:
const prework_1_1of6_list = [
	'Complete through activity 6 prior to next class', '',
	'Be ready to test your scrum team discussion capabilities with your team Discord server',
	'Get your headset (that includes a microphone) for teaming and programming together activities'
]
const prework_1_1of6 = () => { return prework('Prework', prework_1_1of6_list) }

const mwf_1_2of6 = (announcements, prework, poll, preworkForNextClass) => {
	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			'Sprint Progress Polling',
			'Introductions - Part 2 including Scrum Team Assignments (continued)',
			`Sprint ${sprint} Planning (continued)`,
			'Prework for Next Class',
			'Breakout: Scrum Team Review, Discord Setup, and Sprint 1 Planning Review' ])
	}
	const introductions = () => { 
		return orderedListSlide('Introductions (continued)', 
			'Be prepared to share your:', [
			'Full and preferred name', 
			'Seat Number',
			'Major / Minor',
			'Programming Experience (0 to 5)',
			'An interesting fun fact about yourself',
			'Favorite “adjective/noun” scrum team name'])
	}
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning (continued)', 'What’s Different about Sprint 1:', [
			'We are finishing sprint 1 planning today (Wednesday) instead of finishing it on Monday',
			'This coming Monday is a holiday so we will be missing one class session during sprint 1' ])
	}
	const activitiesReview = () => {
		return basicSlide('Review Syllabus, Activity List, and Assignments', [
			'Please open the Blackboard class shell and review our syllabus, activity list, and assignments together.' ])
	}
	const breakoutTeamDiscordAndPlanning = () => {
		return breakout(
			'Breakout',
			'Please spend a few minutes with your scrum team to:', [
				'Review your scrum team members and scrum team name',
				'Identify your scrum master',
				'Prepare Discord for Friday’s remote scrum team breakout session',
				'Review sprint 1 planning and identify any questions or concerns' ],
			'Report Out:', [
				'Who is your Scrum Master?',
				'What is your team name?',
				'Are you ready for Friday’s remote Scrum Team breakout session? If not, what’s your plan to be ready by Friday?',
				'What are the top two questions or concerns relating to our sprint 1 ' ]
		)
	}

	return [ instructorChecklist, preflightChecklist, announcements, agenda, prework, poll, introductions, sprintPlanning, 
		activitiesReview, preworkForNextClass, breakoutTeamDiscordAndPlanning, end ]
}

const quizExpectations = () => {
	return orderedListSlide('Quiz Expectation', 
		'Quiz Expectations include:', [
		'You may use any naturally available documentation including books, notes, and web browser',
		'You may not use quiz specific content like question banks',
		'The quiz is an individual assignment so asking others would be inappropriate**',
		'You are welcome to ask me quiz or non-quiz related questions',
		'Your first sincere attempt at the quiz is expected by the end of class']) 
}

export const web_1_6of6 = () => {
	const announcements =  () => {
		return basicSlideWithLogo('Announcements', [ 
			'Reminder that all sprint 1 assignments are due Sunday... you have a grace period until 6 AM Monday to hit the submit button' ])
	}
	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			'Polling: Sprint Progress',
			'Prework for Next Class',
			'Lab' ])
	}
	const lab = () => { return basicSlide('Lab', [
		'How can we best work together to help you be successful in sprint 1?', 
		'“Phone a Friend” quiz question review?', 
		'Working together on programming assignments?' ]) 
}

	return [ instructorChecklist, preflightChecklist, announcements, agenda, ics_prework_1_6of6, ics_prework_2_1of6, lab, end ]
}


const ics_prework_1_6of6 = () => {
	return prework('Prework', [
		'Everything is due Sunday!', '',
		'I am not planning on having a breakout session on “Computer Science Illuminated” Chapter 1 The Big Picture', 
		'Be prepared for Lab' ], 
		sprint, list24700Sprint01)
}

const ics_prework_2_1of6 = () => {
	return prework('Prework', [
		'Everything is due Sunday!', '',
		'Be prepared for 100% focus on Sprint 2 Planning' ], 
		sprint, list24700Sprint01)
}