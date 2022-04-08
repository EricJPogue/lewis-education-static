import { basicSlide, bulletListSlide, orderedListSlide, end, submissionPercentage } from './SLSprint00'
import { defaultDeck, agendaSlide, preworkSlide, quiz } from './SLSprint00'
import { checklist, preflightChecklist, instructorChecklist } from './SLSprint00'
import { al20000Sprint06 } from '../ActivityLists/AL20000Sprint06'
import { al24500Sprint06 } from '../ActivityLists/AL24500Sprint06'
import { al44000Sprint06 } from '../ActivityLists/AL44000Sprint06'
import { syllabus } from './syllabus'

import { discussionSE6 } from './Slide'
import { discussionBreakout6 } from './SLSprint00'
import { renderBreakout } from './Breakout'

export const sprint6Router = (route) => {
	switch(route) {
		case CHECKLIST_ROUTE: return checklist()

		case ICS_6_1of6_ROUTE: return ics6_1of6()
		case ICS_6_2of6_ROUTE: return ics6_2of6()
		case ICS_6_3of6_ROUTE: return ics6_3of6()
		case ICS_6_4of6_ROUTE: return ics6_4of6()
		case ICS_6_5of6_ROUTE: return ics6_5of6()

		case OOP_6_1of6_ROUTE: return oop6_1of6()
		case OOP_6_2of6_ROUTE: return oop6_2of6()
		case OOP_6_3of6_ROUTE: return oop6_3of6()
		case OOP_6_4of6_ROUTE: return oop6_4of6()
		case OOP_6_5of6_ROUTE: return oop6_5of6()

		case SE_6_1of4_ROUTE: return se6_1of4()
		case SE_6_2of4_ROUTE: return se6_2of4()
		case SE_6_3of4_ROUTE: return se6_3of4()
		case SE_6_4of4_ROUTE: return se6_4of4()

		case 'syllabus': return syllabus()

		default: return defaultDeck()
	}
}

// Checklist slide deck
const CHECKLIST_ROUTE = 'checklist'

// Introduction to Computer Science
const ICS_6_1of6_ROUTE = 'ics6-1of6'
const ics6_1of6 = () => {
	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			'Sprint 6 Planning',
			'Breakout on Sprint 6 Planning',
			'Review Demo Schedule for Wednesday',
			'Prework for Next Class' ])
	}
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', 'Sprint 6 Changes:', [
			'Very similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
			'Also very similar with sprint 5 demos on Wednesday and Discussion on Friday' ])
	}
	const activitiesBreakout = () => {
		return orderedListSlide('Scrum Team Planning Review', 'As a scrum team:', [
			'Review sprint 6 activities & assignments in detail',
			'Discuss and identify questions/concerns',
			'Scrum master share your team’s top 2 questions/concerns during report out' ])
	}

	return [ preflightChecklist, instructorChecklist, 
		agenda, icsPrework_6_1of6, sprintPlanning, activitiesReview, activitiesBreakout, icsPrework_6_2of6, end ]
}

const ICS_6_2of6_ROUTE = 'ics6-2of6'
const ics6_2of6 = () => {
	const agenda = () => { return sprintReviewAgendaMWF('5') }
	// Todo: Add pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Excellent submission percentage',
			'All assignments are graded and posted', 
			`Remember that if you are not able to participate in our Friday team Discussion, you still need to
			 make your initial post by Sunday and respond back to two of your classmates’ posts`,
			'I enjoyed the recipes for Strawberry-Rhubarb Jam in the reflections :)',
			'Multiple positive comments on using Friday’s for lab time and programming together',
			'At least one question about why I don’t provide the answers to quiz questions with each attempt' ])
	}
	// Todo: Create and add slide for metrics.
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			'How does your team feel about sprint 5 now that it is over',
			'What could be done to make sprint 5 or the class overall better or more manageable',
			'What improvements should we make as a class, team, or individual going forward',
			'What advice to you have for me relating to quizzes in future classes' ])
	}
	return [ preflightChecklist, instructorChecklist, agenda, icsPrework_6_2of6, al20000Sprint06, 
		sprintDemosIntro, sprintDemos, demoAssignment, retrospective, retrospectiveBreakout, 
		icsPrework_6_3of6, end ]
}

const ICS_6_3of6_ROUTE = 'ics6-3of6'
const ics6_3of6 = () => {
	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			'Breakout Session for Discussion 6',
			'Programming Together with Matchmaker for the Web',
			'Prework for Next Class' ])
	}

	return [ preflightChecklist, instructorChecklist, agenda, icsPrework_6_3of6, al20000Sprint06, 
		discussionBreakout6, programmingTogetherWithMatchmaker,
		icsPrework_6_4of6, al20000Sprint06, end ]
}

const ICS_6_4of6_ROUTE = 'ics6-4of6'
const ics6_4of6 = () => {
	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			'Breakout Session for The World Wide Web chapter and lecture',
			'Programming Together with Matchmaker for the Web',
			'Prework for Next Class' ])
	}
	const wwwBreakout = () => {
		return renderBreakout({
			'title':'The World Wide Web Breakout',
			'topics': [
				'The Internet vs. The World Wide Web',
				'HTML, CSS, and Javascript',
				'Java Applets, Java Servlets, and Java Server Pages',
				'XML, DTDs, and JSON',
				'Search Engines, Social Networks, Cookies, Web Analytics, and Web 3.0' ]
		})
	}
	return [ preflightChecklist, instructorChecklist, agenda, icsPrework_6_4of6, al20000Sprint06, 
		wwwBreakout, programmingTogetherWithMatchmaker,
		icsPrework_6_5of6, al20000Sprint06, end ]
}

const ICS_6_5of6_ROUTE = 'ics6-5of6'
const ics6_5of6 = () => {
	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			'Programming Together with Matchmaker for the Web',
			'Prework for Next Class', 
			'Quiz 6' ])
	}

	return [ preflightChecklist, instructorChecklist, agenda, icsPrework_6_5of6, al20000Sprint06, 
		programmingTogetherWithMatchmaker, prework_6_6of6, al20000Sprint06, quiz6, end ]
}

// Introduction to Computer Science shared slides used in multiple sessions
const programmingTogetherWithMatchmaker = () => {
	return basicSlide('Programming Together', [
		'Work on Matchmaker for the Web as a class.']) 
}
const icsPrework_6_1of6 = () => {
	return preworkSlide([
		'All Sprint 5 Assignments due Sunday!', '',
		'Be prepared for Sprint 6 Planning on Monday' ])
}
const icsPrework_6_2of6 = () => {
	return preworkSlide([
		'Complete through activity 4 and start on activity 5', '',
		'Be prepared for sprint 5 demos' ])
}
const icsPrework_6_3of6 = () => {
	return preworkSlide([
		'Complete through activity 7', '',
		'Be prepared for Discussion 6',
		'Be prepared for Lab and programming together with Matchmaker for the Web' ])
}
const icsPrework_6_4of6 = () => {
	return preworkSlide([
		'Complete through activity 9', '',
		'Be prepared to discuss “Computer Science Illuminated” The World Wide Web and review our associated lecture' ])
}
const icsPrework_6_5of6 = () => {
	return preworkSlide([
		'Complete through activity 11', '',
		'Be prepared for Quiz 6' ])
}


// Object-Oriented Programming
const OOP_6_1of6_ROUTE = 'oop6-1of6'
const oop6_1of6 = () => { return ics6_1of6() }

const OOP_6_2of6_ROUTE = 'oop6-2of6'
const oop6_2of6 = () => { 
	const agenda = () => { return sprintReviewAgendaMWF('5') }
	// Todo: Create and add slide for metrics.
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Excellent submission percentage',
			'All assignments are graded and posted', 
			`Remember that if you are not able to participate in our Friday team Discussion, you still need to
			 make your initial post by Sunday and respond back to two of your classmates’ posts`,
			'Let’s talk if you would like to make a web application for your final project',
			'Multiple positive comments on using Friday’s for lab time and programming together',
			'At least one question about why I don’t provide the answers to quiz questions with each attempt' ])
	}
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			'How does your team feel about sprint 5 now that it is over',
			'What could be done to make sprint 5 or the class overall better or more manageable',
			'What improvements should we make as a class, team, or individual going forward',
			'How can I continue to evolve my quizzes to make them more meaningful in the future' ])
	}
	return [ preflightChecklist, instructorChecklist, agenda, icsPrework_6_2of6, al24500Sprint06,
		sprintDemosIntro, sprintDemos, demoAssignment, retrospective, retrospectiveBreakout, 
		icsPrework_6_3of6, end ]
	// Todo: Add pretty slides back into slide deck for Demos and Retrospectives. 
}

const OOP_6_3of6_ROUTE = 'oop6-3of6'
const oop6_3of6 = () => {
	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			'Breakout Session for Discussion 6',
			'Programming Together with SwissArmyKnife',
			'Prework for Next Class' ])
	}
	const programmingTogether = () => {
		return basicSlide('Programming Together', [
			'Work on SwissArmKnife as a class.']) 
	}
	return [ preflightChecklist, instructorChecklist, agenda, icsPrework_6_4of6, al24500Sprint06, 
		discussionBreakout6, programmingTogether,
		oopPrework_6_4of6, al24500Sprint06, end ]
}

const OOP_6_4of6_ROUTE = 'oop6-4of6'
const oop6_4of6 = () => {
	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			'Breakout Session for Performance and Multithreading',
			'Programming Together with SwissArmyKnife',
			'Prework for Next Class' ])
	}
	const performanceAndMultithreadingBreakout = () => {
		return renderBreakout({
			'title':'Performance and Multithreading Breakout',
			'topics': [
				'Performance Optimization including CPU, Memory, Disk IO, Network Bandwidth, Network Latency, User Interaction',
				'Processors, Cores, and Threads to improve Disk IO, and Network Performance',
				'Threads, Multithreaded Applications and Theory vs Reality',
				'Prioritizing and Testing for Performance Enhancements', 
				'Testing Multithreaded Applications' ]
		})
	}
	const programmingTogether = () => {
		return basicSlide('Programming Together', [
			'Work on hosting JSON, SwissArmKnife, or SleepFast as a class.']) 
	}

	return [ preflightChecklist, instructorChecklist, agenda, oopPrework_6_4of6, al24500Sprint06, 
		performanceAndMultithreadingBreakout, programmingTogether,
		oopPrework_6_5of6, al24500Sprint06, end ]
}

const OOP_6_5of6_ROUTE = 'oop6-5of6'
const oop6_5of6 = () => {
	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			'Programming Together with adding JSON files to index, hosting JSON, or SwissArmKnife',
			'Prework for Next Class', 
			'Quiz 6' ])
	}
	const programmingTogether = () => {
		return basicSlide('Programming Together', [
			'Work on adding JSON files to index, hosting JSON, SwissArmKnife, or SleepFast as a class.']) 
	}

	return [ preflightChecklist, instructorChecklist, agenda, oopPrework_6_5of6, al24500Sprint06, 
		programmingTogether,
		prework_6_6of6, al24500Sprint06, end ]
}

// Object-Oriented Programming Shared Slides
const oopPrework_6_4of6 = () => {
	return preworkSlide([
		'Complete through activity 9', '',
		'Be prepared to discuss Performance and Multithreading' ])
}
const oopPrework_6_5of6 = () => {
	return preworkSlide([
		'Complete through activity 12', '',
		'Be prepared to discuss Object-Oriented Programming Languages and Platforms',
		'Be prepared for Quiz 6' ])
}

// Software Engineering
const SE_6_1of4_ROUTE = 'se6-1of4'
const se6_1of4 = () => {
	const agenda = () => {
		return agendaSlide([
			'Prework',
			'Sprint 6 Planning - Class',
			'Review Backlog Grooming',
			'Sprint 6 Planning - Scrum Team',
			'Prework for Next Class' ])
	}
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', 'Sprint 6 Changes:', [
			'Very similar to format to previous sprints with Discussion, Quiz, Lab, and Reflection',
			'Completely new emphasis with our focus changing to your team delivering a product using agile development, scrum, and SaaS' ])
	}
	const reviewBacklogGrooming = () => {
		return basicSlide('Review Backlog Grooming', [
			'Review our Backlog Groom activities and artifacts from Thursday’s class.']) 
	}
	const sprint6Planning = () => {
		return basicSlide('Sprint 6 Planning', [
			'Complete sprint 6 planning including final team and individual sprint 6 backlog commitments.']) 
	}

	return [ preflightChecklist, instructorChecklist, agenda, preworkSE6_1of4, al44000Sprint06,
		sprintPlanning, activitiesReview, preworkSE6_2of4, reviewBacklogGrooming, sprint6Planning, end ]
}

const SE_6_2of4_ROUTE = 'se6-2of4'
const se6_2of4 = () => {
	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			'Your Sprint 5 Demos',
			'Sprint 5 Retrospectives',
			'Recall Sprint 6 Planning',
			'Finalizing Sprint 6 Commitments with Discussion 6',
			'Prework for Next Class' ])
	}
	const yourProcessYourDemos = () => {
		return basicSlide('This is Your Process', [
			'... and these are your sprint demos.' ])
	}
	const teamSprintDemos = () => {
		return basicSlide('Your Sprint Demos', [
			'Each team member demos one of their stories that is “done”',
			'Team votes on best story that can be demoed to class',
			'Best story is available to demo to class' ])
	}
	const metrics = () => {
		return basicSlide('Sprint 5 Metrics', [
			'Let’s take a minute and review our Sprint 5 Submission Percentage class metric.' ])
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:21, submitted:20 },
			{ name: 'Quiz', due:21, submitted:21 },
			{ name: 'Lab', due:21, submitted:20},
			{ name: 'Reflection', due: 21, submitted: 19 }
		])
	}
	const classRetrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Solid submission percentage',
			'All assignments are graded and posted including Sprint (Lab) Demos', 
			`Remember that if you are not able to participate in our Friday team Discussion, you still need to
				make your initial post by Sunday and respond back to two of your classmates’ posts`,
			'At least one question about why I don’t provide the answers to quiz questions with each attempt' ])
	}
	const teamRetrospective = () => {
		return basicSlide('Scrum Team Retrospective', [
			'Due to time constraints you will need to complete and document your scrum team’s retrospective outside of class.' ])
	}
	const recallSprint6Planning = () => {
		return basicSlide('Recall Sprint 6 Planning', [
			'Complete sprint 6 planning including final team and individual sprint 6 backlog commitments.' ]) 
	}

	return [ preflightChecklist, instructorChecklist, agenda, preworkSE6_2of4, al44000Sprint06,
		sprintDemosIntro, sprintDemos, yourProcessYourDemos, teamSprintDemos, metrics, metricsSubmissionPercentage, classRetrospective, teamRetrospective, 
		recallSprint6Planning, discussionSE6,
		preworkSE6_3of4, al44000Sprint06, end ]
}

const SE_6_3of4_ROUTE = 'se6-3of4'
const se6_3of4 = () => {
	const agenda = () => {
		return agendaSlide([
			'Prework',
			'Breakout Session for Project Management, Scrum, Pairs, and Version Control',
			'Azure Functions Progress',
			'Practical Diversity and Global Software Development Teams',
			'Prework for Next Class',
			'Quiz 6' ])
	}
	const projectManagementScrumPairsAndVersionControlBreakout = () => {
		return renderBreakout({
			'title':'Project Management, Scrum, Pairs, and Version Control',
			'topics': [
				'Team sizes, SDLCs, and key Scrum Roles & Rituals',
				'Project Managers, Project Management, and the Six Phases of a Project',
				'Priority of specialized vs generalized skills in Agile vs Waterfall or Iterative',
				'Configuration management, version control, merge conflicts, and branching',
				'Reporting and fixing bugs: The five R’s', 
				'The two most important books about managing people (according to the authors)',
				'Paired Programming' ]
		})
	}
	const azureFunctionsProgress = () => {
		return basicSlide('Azure Functions Progress', [
			'I‘ve have heard rumors of issues in creating Azure functions. What has been your experience with activity 11?' ])
	}
	const practicalDiversity = () => {
		return basicSlide('Practical Diversity and Global Software Development', [
			'As time allows, I would like to start a discussion about practical diversity and global software development teams.' ])
	}
	return [ preflightChecklist, instructorChecklist, agenda, preworkSE6_3of4, al44000Sprint06,
		projectManagementScrumPairsAndVersionControlBreakout, azureFunctionsProgress, practicalDiversity,
		preworkSE6_4of4, quiz6, end ]
}

const SE_6_4of4_ROUTE = 'se6-4of4'
const se6_4of4 = () => {
	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			'Sprint 7 Planning Expectations', 
			'Backlog Grooming in Preparation for Tuesday’s Sprint 7 Sprint Planning',
			'Lab... as time allows',
			'Practical Diversity and Global Software Development Teams... another day',
			'Prework for Next Class' ])
	}
	const planningExpectations = () => { return basicSlide('Sprint 7 Planning Expectations', [
		'Review Blackboard Announcement from this morning.' ]) 
	}
	const backlogGrooming = () => { return basicSlide('Backlog Grooming', [
			'Backlog Grooming in Preparation for Tuesday’s Sprint 7 Sprint Planning', '',
			'** Goal: Each team member needs to provide Product Owner two or more valid user stories estimated at ten or more story points prior to class on Tuesday' ]) 
	}
	const lab = () => { return basicSlide('Lab', [
			'Continue working in scrum teams on Sprint 6 assignments', 
			'And/or do we need to talk about Azure Functions?' ]) 
	}
	const practicalDiversity = () => { return basicSlide('Practical Diversity and Global Software Development', [
			'As time allows, I would like to start a discussion about practical diversity and global software development teams.' ])
	}
	return [ preflightChecklist, instructorChecklist, agenda, preworkSE6_4of4, al44000Sprint06,
		planningExpectations, backlogGrooming, lab, practicalDiversity,
		preworkSE7_1of4, end ]
}

// Software Engineering shared slides used in multiple sessions
const preworkSE6_1of4 = () => {
	return basicSlide('Prework', [
		'All Sprint 5 Assignments due Sunday!', '',
		'** Be prepared for in-person Sprint 6 Planning on Tuesday' ])
}
const preworkSE6_2of4 = () => {
	return basicSlide('Prework', [
		'Complete through activity 5',
		'Finalize and commit to your sprint 6 backlog', '',
		'Be prepared for sprint 5 reviews (class demos of “Best Story” and “Random Story”) and retrospectives',
		'Be prepared to complete Discussion 6' ])
}
const preworkSE6_3of4 = () => {
	return basicSlide('Prework', [
		'Complete through activity 8 and started on activity 9', '',
		'Be prepared Breakout on Project Management, Scrum, Pairs, and Version Control Systems',
		'Be prepared for Quiz 6' ])
}
const preworkSE6_4of4 = () => {
	return basicSlide('Prework', [
		'Complete through activity 12', '',
		'Be prepared Backlog Grooming in preparation for Sprint 7 Planning',
		'Be prepared Lab' ])
}

const preworkSE7_1of4 = () => {
	return basicSlide('Prework for Today', [
		'All Sprint 6 Assignments due Sunday!', '',
		'** Be prepared for in-person Sprint 7 Planning on Tuesday' ])
}

// Shared slides used across multiple classes
const sprintDemosIntro = () => {
	return bulletListSlide('Sprint Demo Presenters', 
		'Recall that as a presenter you should be prepared to:', [
		'Show your application running and explain what it does',
		'Talk about any challenges your faced',
		'Be prepared to share your code with classmates upon request' ])
}
const sprintDemos = () => {
	return bulletListSlide('Sprint Demo Listeners', 
		'As a demo listener your responsibilities include:', [
		'Actively listening and watching what your classmate is demoing',
		'Come up with a meaningful yet easy to answer question to ask',
		'Clapping for the presenter when they have finished' ])
}
const demoAssignment = () => {
	return basicSlide('Complete Demo Assignment', [
		'If you have completed your sprint demo, please also submit your lab demo assignment in Blackboard.' ])
}
const sprintReviewAgendaMWF = (sprint) => {
	return agendaSlide([
		'Prework for Today',
		`Sprint ${sprint} Demos`,
		`Sprint ${sprint} Retrospective`,
		`Breakouts Session on Sprint ${sprint}`,
		'Prework for Next Class' ])
}

const activitiesReview = () => {
	return basicSlide('Review Activity List and Assignments', [
		'Please open Blackboard and review our activity list and assignments together.' ])
}

const quiz6 = () => { return quiz(6) }

const prework_6_6of6 = () => {
	return preworkSlide([
		'Everything is due Sunday!', '',
		'Be prepared for Lab' ])
}

