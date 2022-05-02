import { getCourseNumber } from '../data/ClientDataAPIs'

import { checklist } from './SLSprint00' // Shared slide decks.
import { preflightChecklist, instructorChecklist, activitiesReview, submissionPercentage, end } from './SLSprint00' // Shared slides.
import { agendaSlide, basicSlide, bulletListSlide, orderedListSlide, preworkSlide, preworkWithActivityList } from './SLSprint00' // Shared slide templates.
import { sprintDemosIntro, sprintDemos, demoAssignment, quiz  } from './SLSprint00'
import { renderBreakout } from './Breakout'

import { list20000Sprint08 } from '../ActivityLists/AL20000Sprint08'
import { list24500Sprint08 } from '../ActivityLists/AL24500Sprint08'

export const sprint8Router = (route) => {
	const courseNumberPlusRoute = getCourseNumber() + '-' + route
	switch(courseNumberPlusRoute) {
		case ICS_8_1of6_ROUTE: return ics8_1of6()
		case ICS_8_2of6_ROUTE: return ics8_2of6()
		case ICS_8_3of6_ROUTE: return ics8_3of6()
		case OOP_8_1of6_ROUTE: return oop8_1of6()
		case OOP_8_2of6_ROUTE: return oop8_2of6()
		case OOP_8_3of6_ROUTE: return oop8_3of6()
		case OOP_8_4of6_ROUTE: return oop8_4of6()
		case SE_8_1of4_ROUTE: return se8_1of4()
		case SE_8_2of4_ROUTE: return se8_2of4()

		default: return checklist()
	}
}

// The global sprint number.
const sprint = 8

// Introduction to Computer Science
const ICS_8_1of6_ROUTE = '20000-8-1'
const ics8_1of6 = () => { return mwfSprint8Planning(sprint, icsPrework_8_2of6) }

const ICS_8_2of6_ROUTE = '20000-8-2'
const ics8_2of6 = () => {
	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			`Sprint ${sprint-1} Demos`,
			`Sprint ${sprint-1} Retrospective`,
			`Breakout for Sprint ${sprint-1} Retrospective`,
			'Prework for Next Class', 
			`Quiz ${sprint}` ])
	}
	const prework = () => { return icsPrework_8_2of6() }
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:20, submitted:17 },
			{ name: 'Quiz', due:20, submitted:20 },
			{ name: 'Lab', due:20, submitted:19},
			{ name: 'Reflection', due: 20, submitted: 18 }
		])
	}
	// Todo: Add pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Solid if not great submission percentage',
			'All assignments are graded and posted', 
			'Although I have largely overcome riddles, my new Kryptonite is Reflection graphical patterns :-)',
			'... Jarrod, please no more... and what does it mean?!?!',
			'Be sure to submit your Lab Demo assignments' ])
	}
	// Todo: Create and add slide for metrics.
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			`How does your team feel about sprint ${sprint-1} now that it is over`,
			`What could be done to make sprint ${sprint-1} or the class overall better`,
			'What improvements should I make for the class going forward' ])
	}
	const quiz8 = () => { return quiz(sprint) }

	return [ preflightChecklist, instructorChecklist, agenda, prework, sprintDemosIntro, sprintDemos, demoAssignment, 
		metricsSubmissionPercentage, retrospective, retrospectiveBreakout, icsPrework_8_3of6, quiz8, end ]
}

const ICS_8_3of6_ROUTE = '20000-8-3'
const ics8_3of6 = () => {
	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			'Thank you!',
			'Web Development Class and Course Evaluations',
			'Prework for Next Class',
			'Final Project Presentation Assignment',
			'Lab' ])
	}
	const lab = () => { return basicSlide('Lab', [
		'How can I help you be successful with your Final Projects?'	])
	}
	const webDevelopmentAndCourseEvaluation = () => {
		return basicSlide('Web Development Class and Course Evaluations', [
			'Special invitation to join my Web and Distributed programming next semester if you are interested',
			'Please consider completing your Course Evaluations'
		])
	}
	const finalProjectPresentationAssignment = () => {
		return basicSlide('Final Project Presentation Assignment', [
			'Let’s complete the Final Project presentation assignment together.'
		])
	}

	return [ preflightChecklist, instructorChecklist, agenda, icsPrework_8_3of6, thankYou, webDevelopmentAndCourseEvaluation,
		icsPrework_8_4of6, finalProjectPresentationAssignment, lab, end ]
}

// Shared between ICS sessions:
const icsPrework_8_2of6 = () => {
	return preworkWithActivityList([
		'Complete through activity 4', '',
		'Be prepared for sprint 7 demos and retrospective',
		'Be prepared for quiz 8' ], 
		list20000Sprint08, sprint)
}

const icsPrework_8_3of6 = () => {
	return preworkWithActivityList([
		'Complete through activity 5',
		'Be actively working on activity 7', '',
		'Be prepared for Lab' ], 
		list20000Sprint08, sprint)
}

const icsPrework_8_4of6 = () => {
	return preworkWithActivityList([
		'Complete ready for activity 6', '',
		'Be prepared for your Final Project presentation' ], 
		list20000Sprint08, sprint)
}

// Object-Oriented Programming
const OOP_8_1of6_ROUTE = '24500-8-1'
const oop8_1of6 = () => { return mwfSprint8Planning(sprint, oopPrework_8_2of6) }

const OOP_8_2of6_ROUTE = '24500-8-2'
const oop8_2of6 = () => { 
	const replaceSlideInDeck = (deck, index, slide ) => {
		deck[index] = slide 
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:18, submitted:17 },
			{ name: 'Quiz', due:18, submitted:18 },
			{ name: 'Lab', due:18, submitted:18},
			{ name: 'Reflection', due: 18, submitted: 18 }
		])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Excellent submission percentage',
			'All assignments are graded and posted', 
			'Although I have largely overcome Riddles, my new Kryptonite is Reflection “random” graphical patterns',
			'... okay, and apparently humorous scrum videos... please no more Austin :-)',
			'Be sure to submit your Lab Demo assignments' ])
	}

	let deck = ics8_2of6()
	replaceSlideInDeck(deck, 7, metricsSubmissionPercentage)
	replaceSlideInDeck(deck, 8, retrospective)
	return deck
}

const OOP_8_3of6_ROUTE = '24500-8-3'
const oop8_3of6 = () => { 
	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			'Thank you!',
			'Web Development Class and Course Evaluations',
			'Breakout for Application Architectures, Object-Oriented Programming, and Databases - Part 2',
			'Prework for Next Class',
			'Final Project Presentation Assignment',
			'Lab' ])
	}
	const prework = () => { return oopPrework_8_3of6(sprint) }
	const preworkForNextClass = () => { return oopPrework_8_4of6(sprint) }
	const lab = () => { return basicSlide('Lab', [
		'How can I help you be successful with your Final Projects?'	])
	}
	const webDevelopmentAndCourseEvaluation = () => {
		return basicSlide('Web Development Class and Course Evaluations', [
			'Special invitation to join my Web and Distributed programming next semester if you are interested',
			'Please consider completing your Course Evaluations'
		])
	}
	const finalProjectPresentationAssignment = () => {
		return basicSlide('Final Project Presentation Assignment', [
			'Let’s complete the Final Project presentation assignment together.'
		])
	}
	const architecturePart2Breakout = () => {
		return renderBreakout({
			'title':'Application Architecture - Part 2',
			'topics': [
				'Databases, Data Duplication, and Data Replication',
				'Object-Oriented Programming and Inheritance Across Languages',
				'Distributed Development and Server-Side Programming',
				'Object-Oriented Programming and Inheritance Across Networked Computers',
				'CORBA, DCOM, OpenDoc, and the Dark Ages',
				'XML, JSON, and Web Services',
				'SQL vs NoSQL Databases' ]
		})
	}

	return [ preflightChecklist, instructorChecklist, agenda, prework, thankYou, webDevelopmentAndCourseEvaluation,
		architecturePart2Breakout, preworkForNextClass, finalProjectPresentationAssignment, lab, end ]
}

const OOP_8_4of6_ROUTE = '24500-8-4'
const oop8_4of6 = () => { 
	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			'Final Project Presentations',
			'Next Steps',
			'Thank you!' ])
	}
	const prework = () => { return oopPrework_8_4of6(sprint) }
	const finalProjectPresentations = () => { return bulletListSlide('Final Project Presentations', 
			'Recall that in presenting your Final Projects you should:', [
			'Briefly review your Final Project proposal ',
			'Show your application running and explain what it does',
			'Share some of the project source code',
			'Explain if there is anything else you expect to complete by the end of the day Thursday' ])
	}
	const nextSteps = () => { return oopPrework_8_5of6(sprint) }

	return [ preflightChecklist, instructorChecklist, agenda, prework, finalProjectPresentations, nextSteps, thankYou, end ]
}

// Shared between OOP sessions:
const oopPrework_8_2of6 = () => {
	return preworkWithActivityList([
		'Complete through activity 4', '',
		'Be prepared for sprint 7 demos and retrospective',
		'Be prepared for quiz 8' ], 
		list24500Sprint08, sprint)
}

const oopPrework_8_3of6 = (sprint) => {
	return preworkWithActivityList([
		'Complete through activity 5', '',
		'Be prepared for Application Architecture discussion',
		'Be prepared for Lab' ], 
		list24500Sprint08, sprint)
}

const oopPrework_8_4of6 = (sprint) => {
	return preworkWithActivityList([
		'Complete ready for activity 6', '',
		'Be prepared for your Final Project presentation' ], 
		list24500Sprint08, sprint)
}
const oopPrework_8_5of6 = (sprint) => {
	return preworkWithActivityList([
		'Everything is due Thursday!' ], 
		list24500Sprint08, sprint)
}


export const mwfSprint8Planning = (sprint, prework_2of6) => {
	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			`Sprint ${sprint} Planning`,
			`Breakout on Sprint ${sprint} Planning`,
			'Review Demo Schedule',
			'Prework for Next Class', ])
	}
	const prework_1of6 = () => {
		return preworkSlide([
			`All Sprint ${sprint-1} Assignments due Sunday!`, '',
			`Be prepared for Sprint ${sprint} Planning on Monday`
		])
	}
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', `Sprint ${sprint} is substantially different from previous sprints in that:`, [
			`Next week is finals week so there are no regular class sessions during our second week of sprint ${sprint}`,
			'All assignments are due Thursday next week with no late assignments accepted',
			`Your first sincere attempt at Quiz ${sprint} is due in class on Wednesday`,
			`There will be no Discussion ${sprint}`,
			`Your final project presentation assignment is due at least 2 hours before your scheduled presentation time`
		])
	}
	const activitiesBreakout = () => {
		return orderedListSlide('Scrum Team Planning Review', 'As a scrum team:', [
			`Review sprint ${sprint} activity list & assignments in detail`,
			'Discuss and identify questions/concerns',
			'Scrum master share your team’s top 2 questions/concerns during report out' ])
	}
	return [ preflightChecklist, instructorChecklist,
		agenda, prework_1of6, sprintPlanning, activitiesReview, activitiesBreakout, prework_2of6, end ]
}

// Software Engineering
const SE_8_1of4_ROUTE = '44000-8-1'
const se8_1of4 = () => {
	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			`Sprint ${sprint-1} Retrospective - Class`,
			`Sprint ${sprint-1} Scrum Team Retrospective plus Backlog Grooming Review - Breakout`,
			`Sprint ${sprint} Planning - Class`,
			'Review Backlog Grooming',
			`Breakout on Sprint ${sprint} Planning`,
			`Sprint ${sprint} Planning - Scrum Team`,
			'Prework for Next Class' ])
	}
	const prework = () => { return preworkSE8_1of4(sprint) }
	const retrospective = () => {
		return basicSlide(`Sprint Retrospective - Class`, [
			`Today’s sprint ${sprint-1} retrospective will be abbreviated to make additional time for Sprint ${sprint} planning.` ])
	}
	const metrics = () => {
		return basicSlide(`Sprint ${sprint-1} Metrics`, [
			`Let’s take a minute and review our Sprint ${sprint-1} Submission Percentage class metric.` ])
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:22, submitted:22 },
			{ name: 'Quiz', due:22, submitted:22 },
			{ name: 'Lab', due:22, submitted:20},
			{ name: 'Reflection', due: 22, submitted: 21 }
		])
	}
	const classRetrospective = () => {
		return orderedListSlide('Class Retrospective',
			`Feedback from Sprint ${sprint-1} Assignments & Reflections`, [
			'Solid submission percentage',
			'Two missing Labs does not feel good at this point in the semester', 
			'All assignments are graded and posted including Sprint (Lab) Demos', 
			'Recall say/do ratio is a percentage of stories "done" divided by stories committed' ])
	}
	const reviewBacklogGrooming = () => {
		return basicSlide('Scrum Team Retrospective plus Backlog Grooming Review - Breakout', [
			`Complete your scrum team sprint ${sprint-1} retrospective plus your team Backlog Groom review.`,
			'Note that you should complete your team Review/Demos separately.' ]) 
	}
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', `Sprint ${sprint} is substantially different from previous sprints in that:`, [
			`Next week is finals week so there are no regular class sessions during our second week of sprint ${sprint}`,
			'All assignments are due Thursday next week with no late assignments accepted',
			`Your first sincere attempt at Quiz ${sprint} is due in class on Thursday`,
			`There will be no Discussion ${sprint}`,
			`Your final project presentation assignment is due at least 2 hours before your scheduled presentation time`,
			'No backlog grooming for next sprint'
		])
	}
	const teamSprintPlanning = () => {
		return basicSlide(`Sprint ${sprint} Planning`, [
			`Complete sprint ${sprint} planning including final team and individual sprint ${sprint} backlog commitments`,
			'And complete your Final Project Presentation assignment']) 
	}
	const preworkForNextClass = () => { return preworkSE8_2of4(sprint) }

	return [ preflightChecklist, instructorChecklist, agenda, prework, retrospective, metrics, metricsSubmissionPercentage, classRetrospective,
		reviewBacklogGrooming, sprintPlanning, activitiesReview, preworkForNextClass, preworkSE8_2of4, teamSprintPlanning, end ]
}

const SE_8_2of4_ROUTE = '44000-8-2'
const se8_2of4 = () => {
	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			'Thank you!',
			'Prework for Next Class',
			`Quiz ${sprint}`,
			`Lab with sprint ${sprint} Final Project Lab` ])
	}
	const prework = () => { return preworkSE8_2of4(sprint) }
	const preworkForNextClass = () => { return preworkSE8_3of4(sprint) }

	const quiz8 = () => { return quiz(sprint) }
	const lab = () => { return basicSlide('Lab', [
		'Work with your scrum team to make progress on your Final Project.'	])
	}

	return [ preflightChecklist, instructorChecklist, agenda, prework, thankYou, preworkForNextClass, quiz8, lab, end ]
}

const preworkSE8_1of4 = (sprint) => {
	return basicSlide('Prework', [
		`All Sprint ${sprint-1} Assignments due Sunday!`, '',
		`** Be prepared for in-person Sprint ${sprint} Planning on Tuesday` ])
}

const preworkSE8_2of4 = (sprint) => {
	return preworkWithActivityList([
		'Complete through activity 5', '',
		'Be prepared for Quiz 8',
		'Be prepared for Lab Time' ], 
		list20000Sprint08, sprint)
}

const preworkSE8_3of4 = (sprint) => {
	return preworkWithActivityList([
		'Complete through activity 6', '',
		'Be prepared to present your final project as a team',
		'Please be on time and ready to proceed with ScrumAndCoke and PasswordGenerator' ], 
		list20000Sprint08, sprint)
}


// Slides shared between multiple classes. 
const thankYou = () => { return basicSlide('Thank You', [ 
	'Thank you for you effort, dedication, and support.',
	'Don’t hesitate to reach out to me if I can be of assistance in the future.' ])
}