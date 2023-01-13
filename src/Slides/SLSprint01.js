import { getClass } from '../DataAndAPIs/Classes'
import { preflightChecklist, instructorChecklist, basicSlide, basicSlideWithLogo, orderedListSlide, end, breakout, bulletListSlide } from './SLSprint00' // Shared slides.
import { prework, breakoutStandard, quiz } from './SLSprint00'
import { list20000Sprint01 } from '../ActivityLists/AL20000Sprint01'
import { list24700Sprint01 } from '../ActivityLists/AL24700Sprint01'
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
		case '20000-1-1o': return ics1_1of6()
		case '20000-1-2o': return ics1_2of6()
		case '20000-1-3': return ics1_3of6()
		case '20000-1-4': return ics1_4of6()
		case '20000-1-5': return ics1_5of6()
		case '20000-1-6': return ics1_6of6()

		case '24700-1-1': return web1_1of6()
		case '24700-1-2': return web1_2of6()
		case '24700-1-3': return web1_3of6()
		case '24700-1-4': return web1_4of6()
		case '24700-1-5': return web1_5of6()
		case '24700-1-6': return ics1_6of6() // Reusing ics slides. 
		// BugBug: Reusing ics slides incorrectly has ics activity lists!


		case '44000-1-1o': return se1_1of6()
		case '44000-1-2o': return se1_2of6()
		case '44000-1-3o': return se1_3of6()
		case '44000-1-4o': return se1_4of6()
		case '44000-1-5o': return se1_5of6()
		case '44000-1-6o': return ics1_6of6() // Reusing ics slides. 
		// BugBug: Reusing ics slides incorrectly has ics activity lists!

		default: return null
	}
}

// Introduction to Computer Science (ICS)
// Todo: Move session 1 from PowerPoint slides to integrated slides.
const ics_prework_1_1of6 = () => { return prework_1_1of6() } 
const ics1_1of6 = () => { return mwf_1_1of6(ics_prework_1_1of6) }

const ics_prework_1_2of6 = () => {
	return prework('Prework', [
		'Complete through activity 10 prior to next class', '',
		'Be ready for a fully remote Friday class where will need a working microphone and headset**', 		
		'Be prepared for a breakout session on “Computer Science Illuminated” chapter 11 File Systems and Directories',
		'Be sure to take screenshots when completing Tools of the Trade' ],
		sprint, list20000Sprint01)
}
const ics1_2of6 = () => {
	const announcement =  () => {
		return basicSlideWithLogo('Announcements', [
			`Computer Science Illuminated textbook is no longer available through O’Reilly. Any of the three 
			available versions of the Science Illuminated will work for this class`])
	}
	const poll = () => { return prework('Sprint Progress Polling', prework_1_1of6_list, sprint, list20000Sprint01) }
	return mwf_1_2of6(announcement, prework_1_1of6, poll, ics_prework_1_2of6)
}

const ics1_3of6 = () => {
	const announcements =  () => {
		return basicSlideWithLogo('Announcements', [ 
			'Reminder that Monday is the Labor Day holiday with no classes.',
			'I received a request for an “Introduction to Computer Science” note-taker. Is anyone be interested?',
			'Please email me directly rather than using the Blackboard messages.' ])
	}
	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			'Polling: Sprint Progress, Command Line Interfaces (CLI), and Directories',
			'Programming Together: Command Line Interfaces using PowerShell or Terminal',
			'Prework for Next Class',
			'Breakout: File Systems, Directories, and Files' ])
	}
	const programmingTogether = () => {
		return bulletListSlide('Programming Together', 
			'Let’s spend a few minutes programming together utilizing our Command Line Interface (CLI) to explore Directories and Files by:', [
			'Launching PowerShell or Terminal', 
			'Executing pwd', 
			'Executing cd, ls, ls -l, ls -a, and clear',
			'Utilizing mkdir and rmdir' ])
	}
	const poll = () => { return prework('Poll', [ 'Sprint Progress, Command Line Interfaces (CLI), and Directories' ], 
		sprint, list20000Sprint01) }
	const breakout = () => { 
		return breakoutStandard(
		'Breakout: File Systems, Directories, and Files', 
		'In this breakout session on File Systems, Directories, and Files (including Dale chapter 11 content) your team will:', [
			'File Systems, Directories, and Hidden Directories... Do hidden folders keep information safe? ',
			'Files, Hidden Files, File Types, and File Extensions... How do we see hidden files and file extensions?', 
			'How would we utilize graphical and command line tools to view and update File Systems?',
			'Where would be a good place to store files for this class? Why?', 
			'What would be a good answer to the lab question on where to store files for this class?' ])
	}

	return [ instructorChecklist, preflightChecklist, announcements, agenda, ics_prework_1_2of6, poll, programmingTogether, ics_prework_1_3of6, breakout, end ]
}

const ics_prework_1_3of6 = () => {
	return prework('Prework', [
		'Complete through activity 13 prior to next class', '',
		'Be prepared to discuss “Computer Science Illuminated” Chapter 1 The Big Picture',
		'Be prepared for Quiz 1' ],
		sprint, list20000Sprint01)
}

/* No class due to Labor Day. */
const ics1_4of6 = () => { return shared1_4of6() }
const shared1_4of6 = () => { 
	const laborDayAnnouncements =  () => { return basicSlideWithLogo('Announcements', [ 
		'In recognition of Labor day there is no class.']) }
	return [ laborDayAnnouncements ]
}

// BugBug: Prework number needs to be updated so that it reflects the prework assigned for the given session. For 
//     example, ics_prework_1_2of6 should be the prework that needed to be completed prior to sprint 1 session 2.

const ics_prework_1_5of6 = () => {
	return prework('Prework', [
		'Complete through activity 13 prior to next class', '',
		'Be prepared to discuss “Computer Science Illuminated” Chapter 1 The Big Picture',
		'Be prepared for Quiz 1' ],
		sprint, list20000Sprint01)
}
const ics1_5of6 = () => {
	const announcements =  () => {
		return basicSlideWithLogo('Announcements', [ 
			'I hope you had a wonderful three day weekend', 
			'Installing Git on a Mac is crazy easy with “git --version”.' ])
	}
	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			'Polling: Sprint Progress',
			'Breakout: File Systems, Directories, and Files (continued)',
			'Prework for Next Class',
			'Quiz 1' ])
	}
	const breakout = () => { 
		return breakoutStandard(
		'Breakout: File Systems, Directories, and Files (continued)', 
		'In this breakout session on File Systems, Directories, and Files (including Dale chapter 11 content) your team will:', [
			'File Systems, Directories, and Hidden Directories... Do hidden folders keep information safe? ',
			'Files, Hidden Files, File Types, and File Extensions... How do we see hidden files and file extensions?', 
			'How would we utilize graphical and command line tools to view and update File Systems?',
			'Where would be a good place to store files for this class? Why?', 
			'What would be a good answer to the lab question on where to store files for this class?' ])
	}

	const quizSlide = () => { return quiz(sprint) }

	return [ instructorChecklist, preflightChecklist, announcements, agenda, ics_prework_1_5of6, breakout, ics_prework_1_6of6, quizExpectations, quizSlide, end ]
}

const ics_prework_1_6of6 = () => {
	return prework('Prework', [
		'Everything is due Sunday!', '',
		'I am not planning on having a breakout session on “Computer Science Illuminated” Chapter 1 The Big Picture', 
		'Be prepared for Lab' ], 
		sprint, list20000Sprint01)
}
const ics1_6of6 = () => {
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
export const ics_prework_2_1of6 = () => {
	return prework('Prework', [
		'Everything is due Sunday!', '',
		'Be prepared for 100% focus on Sprint 2 Planning' ], 
		sprint, list20000Sprint01)
}


// Web & Distributed Programming (WEB)
const web1_1of6 = () => { return mwf_1_1of6(prework_1_1of6) }

const web1_2of6 = () => { 
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
const web1_3of6 = () => {
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

const web1_4of6 = () => { return shared1_4of6() }

const web_prework_1_5of6 = () => {
	return prework('Prework', [
		'Complete through activity 13 prior to next class', '',
		'Be prepared to continue breakout session',
		'Be prepared for Quiz 1' ],
		sprint, list24700Sprint01)
}
const web1_5of6 = () => {
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

// Software Engineering (SE)
const se1_1of6 = () => { return mwf_1_1of6(prework_1_1of6) }
const se1_2of6 = () => { 
	const announcement =  () => { return basicSlideWithLogo('Announcements', ['Dr. Martinez is looking for someone to do some Web development work for her research project.']) }
	const sprintProgressPolling = () => { return prework('Sprint Progress Polling', prework_1_1of6_list, sprint, list44000Sprint01) }
	return mwf_1_2of6(announcement, prework_1_1of6, sprintProgressPolling, se_prework_1_2of6)
}

const se_prework_1_2of6 = () => {
	return prework('Prework', [
		'Complete through activity 8 prior to next class', '',
		'Be ready for a fully remote Friday class where will need a working microphone and headset**', 		
		'Be prepared for a breakout session on “Engineering Software as a Service” Chapter 1 and the associated lecture',
		'Be sure to take screenshots when completing Tools of the Trade' ],
		sprint, list44000Sprint01)
}
const se1_3of6 = () => {
	const announcements =  () => {
		return basicSlideWithLogo('Announcements', [ 'Reminder that Monday is the Labor Day holiday with no classes.' ]) }
	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			'Polling: Sprint Progress',
			'Programming Together: Azure Website with Node.js',
			'Prework for Next Class',
			'Breakout: SDLCs, SaaS, Cloud Computing, plus Frameworks & Tools' ])
	}
	const programmingTogether = () => {
		return bulletListSlide('Programming Together', 
			`Let’s spend a few minutes programming together utilizing our knowledge of Git, GitHub, and Azure to create 
			an operational Azure hosted Node.js website. Can we accomplish what used to take 6 months and $500,000 in 
			15 minutes and at a cost of $0?`, [])
	}
	const poll = () => { return prework('Poll', [ 'Sprint Progress' ], sprint, list44000Sprint01) }
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
	const breakout2 = () => { 
		return breakoutStandard(
		'Breakout: SaaS, Cloud, and Frameworks & Tools', 
		'In this breakout session on Software Development Life Cycles (SDLCs), Software as a Service, Cloud Computing, and Highly Productive Frameworks & Tools your team will:', [
		'SaaService architectures including SOA, APIs, and Web Services',
		'Cloud Computing including Azure, AWS, Google, GoDaddy, and Cloud9... How have costs evolved?',
		'Highly Effective Frameworks including Ruby/Rails, React, MERN, Flask and many more', 
		'Highly Effective Tools Git, GitHub, JUnit,  and many more',
		'Testing including Verification and Validation... How does Waterfall accomplish Validation?' ])
	}

	return [ instructorChecklist, preflightChecklist, announcements, agenda, se_prework_1_2of6, poll, programmingTogether, se_prework_1_5of6, breakout, breakout2, end ] 
}

/* No class due to Labor Day. */
const se1_4of6 = () => { return shared1_4of6() }

const se_prework_1_5of6 = () => {
	return prework('Prework', [
		'Complete through activity 12 prior to next class', '', 		
		'Be prepared for a breakout session on “Engineering Software as a Service”',
		'Be prepared for Quiz 1' ],
		sprint, list44000Sprint01)
}
const se1_5of6 = () => {
	const announcements =  () => {
		return basicSlideWithLogo('Announcements', [ 'I hope you had a wonderful three day weekend' ])
	}
	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			'Polling: Sprint Progress',
			'Breakout: Software Development Life Cycles',
			'Breakout: SaaS, Cloud, and Frameworks & Tools (optional)',
			'Prework for Next Class',
			'Quiz 1' ])
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
	const breakout2 = () => { 
		return breakoutStandard(
		'Breakout: SaaS, Cloud, and Frameworks & Tools', 
		'In this breakout session on Software Development Life Cycles (SDLCs), Software as a Service, Cloud Computing, and Highly Productive Frameworks & Tools your team will:', [
		'SaaS architectures including SOA, APIs, and Web Services',
		'Cloud Computing including Azure, AWS, Google, GoDaddy, and Cloud9... How have costs evolved?',
		'Highly Effective Frameworks including Ruby/Rails, React, MERN, Flask, and many more', 
		'Highly Effective Tools Git, GitHub, JUnit, and many more',
		'Testing Frameworks & Tools... Do testing tools support Validation? How does Waterfall accomplish Validation?' ])
	}
	const quizSlide = () => { return quiz(sprint) }

	return [ instructorChecklist, preflightChecklist, announcements, agenda, se_prework_1_5of6, breakout, breakout2, se_prework_1_6of6, quizExpectations, quizSlide, end ]
}

const se_prework_1_6of6 = () => { return shared_prework_1_6of6() }

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
	// Todo: Consider reducing content as Introductions and Planning stretched into Wednesday (especially for larger classes.) 
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

const quizExpectations = () => {
	return orderedListSlide('Quiz Expectation', 
		'Quiz Expectations include:', [
		'You may use any naturally available documentation including books, notes, and web browser',
		'You may not use quiz specific content like question banks',
		'The quiz is an individual assignment so asking others would be inappropriate**',
		'You are welcome to ask me quiz or non-quiz related questions',
		'Your first sincere attempt at the quiz is expected by the end of class']) 
}

