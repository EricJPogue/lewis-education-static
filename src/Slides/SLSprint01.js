import { getClass } from '../DataAndAPIs/Classes'
import { preflightChecklist, instructorChecklist, basicSlide, basicSlideWithLogo, orderedListSlide, end, breakout } from './SLSprint00' // Shared slides.
import { prework } from './SLSprint00'
import { list20000Sprint01 } from '../ActivityLists/AL20000Sprint01'
import { list44000Sprint01 } from '../ActivityLists/AL44000Sprint01'
import { agendaSlide } from './SLSprint00' // Shared slide templates.

// Sprint 1 integrated slide decks are defined below.
const sprint = 1

// Routing constants are defined by the class number followed by the sprint number and session. Note that sessions are
// identified by the session number without consideration for missed classes. For example a week 2 Friday session for a 
// MWF class would still be considered session 6 even if the preceding Monday was a holiday. For example, is sprint 1
// the second Monday is Labor day so the final Friday of the sprint for Software Engineering would have a rout of 
// '44000-1-6' which implies the integrated slide deck is for Software Engineering sprint 1 session 6.

export const sprint1Router = (route) => {
	const courseNumberPlusRoute = getClass().number + '-' + route
	switch(courseNumberPlusRoute) {
		case '20000-1-1': return ics1_1of6()
		case '20000-1-2': return ics1_2of6()

		case '24700-1-1': return web1_1of6()

		case '44000-1-1': return se1_1of6()
		case '44000-1-2': return se1_2of6()
		default: return null
	}
}

// Introduction to Computer Science (ICS)
const ics1_1of6 = () => { return mwf_1_1of6(prework_1_1of6) }
const ics1_2of6 = () => {
	const announcement =  () => {
		return basicSlideWithLogo('Announcements', [
			`Computer Science Illuminated textbook is no longer available through O’Reilly. Any of the three 
			available versions of the Science Illuminated will work for this class`])
	}
	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			'Sprint Progress Polling',
			'Introductions - Part 2 including Scrum Team Assignments (continued)',
			`Sprint ${sprint} Planning (continued)`,
			'Prework for Next Class',
			'Breakout: Scrum Team Review, Discord Setup, and Sprint 1 Planning Review' ])
	}
	const sprintProgressPolling = () => { return prework('Sprint Progress Polling', prework_1_1of6_list, sprint, list20000Sprint01) }
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

	return [ instructorChecklist, preflightChecklist, announcement, agenda, prework_1_1of6, sprintProgressPolling, introductions, sprintPlanning, 
		activitiesReview, ics_prework_1_2of6, breakoutTeamDiscordAndPlanning, end ]
}

// Shared between ICS sessions:
const ics_prework_1_2of6 = () => {
	return prework('Prework', [
		'Complete through activity 10 prior to next class', '',
		'Be ready for a fully remote Friday class where will need a working microphone and headset**', 		
		'Be prepared for a breakout session on “Computer Science Illuminated” chapter 11 File Systems and Directories',
		'Be sure to take screenshots when completing Tools of the Trade' ],
		sprint, list20000Sprint01)
}

// Web & Distributed Programming (WEB)
const web1_1of6 = () => { return mwf_1_1of6(prework_1_1of6) }


// Software Engineering (SE)
const se1_1of6 = () => { return mwf_1_1of6(prework_1_1of6) }
const se1_2of6 = () => { 
	const announcement =  () => { return basicSlideWithLogo('Announcements', ['Dr. Martinez is looking for someone to do some Web development work for her research project.']) }
	const sprintProgressPolling = () => { return prework('Sprint Progress Polling', prework_1_1of6_list, sprint, list44000Sprint01) }

	return mwf_1_2of6(announcement, prework_1_1of6, sprintProgressPolling, se_prework_1_2of6)
}

// Shared between SE sessions:
const se_prework_1_2of6 = () => {
	return prework('Prework', [
		'Complete through activity 8 prior to next class', '',
		'Be ready for a fully remote Friday class where will need a working microphone and headset**', 		
		'Be prepared for a breakout session on “Engineering Software as a Service” Chapter 1 and the associated lecture',
		'Be sure to take screenshots when completing Tools of the Trade' ],
		sprint, list44000Sprint01)
}



// Shared between classes:
const prework_1_1of6_list = [
	'Complete through activity 6 prior to next class', '',
	'Be ready to test your scrum team discussion capabilities with your team Discord server',
	'Get your headset (that includes a microphone) for teaming and programming together activities'
]
const prework_1_1of6 = () => { return prework('Prework', prework_1_1of6_list) }


const mwf_1_1of6 = (prework_1_1of6) => {
	// Todo: Move session 1 to an integrated slide deck as it was delivered as a PowerPoint slide presentation on 
	//     August, 28, 2022. An outline is provided below as a placeholder.  
	const agenda = () => {
		return agendaSlide([
			'Friendly Conversation Topic',
			'Prework and Announcements',
			'Zoom Polling',
			'Introductions – Part 1',
			'Sprint 1 Planning (abbreviated)',
			'Assignment',
			'Introductions – Part 2 including Scrum Team Assignments' ])
	}

	return [ instructorChecklist, preflightChecklist, agenda, prework_1_1of6, end ]
}

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
