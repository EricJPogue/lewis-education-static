import { defaultDeck, checklist, CHECKLIST_ROUTE } from './SLSprint00' // Shared slide decks.
import { preflightChecklist, instructorChecklist, activitiesReview, submissionPercentage, discussionBreakout, quiz, end } from './SLSprint00' // Shared slides.
import { agendaSlide, basicSlide, orderedListSlide, preworkSlide, preworkWithActivityList } from './SLSprint00' // Shared slide templates.
import { sprintDemosIntro, sprintDemos, demoAssignment  } from './SLSprint00'
import { renderBreakout } from './Breakout'

import { list20000Sprint07 } from '../ActivityLists/AL20000Sprint07'
import { list24500Sprint07 } from '../ActivityLists/AL24500Sprint07'
// import { list44000Sprint07 } from '../ActivityLists/AL44000Sprint07'

export const sprint7Router = (route) => {
	switch(route) {
		case CHECKLIST_ROUTE: return checklist()

		case ICS_7_1of6_ROUTE: return ics7_1of6()
		case ICS_7_2of6_ROUTE: return ics7_2of6()
		case ICS_7_5of6_ROUTE: return ics7_5of6()

		case OOP_7_1of6_ROUTE: return oop7_1of6()
		case OOP_7_2of6_ROUTE: return oop7_2of6()
		case OOP_7_5of6_ROUTE: return oop7_5of6()

		case SE_7_1of4_ROUTE: return se7_1of4()
		case SE_7_3of4_ROUTE: return se7_3of4()
		
		default: return defaultDeck()
	}
}

// Introduction to Computer Science
const ICS_7_1of6_ROUTE = 'ics7-1of6'
const ics7_1of6 = () => { return mwf_7_1of6(icsPrework_7_2of6) }

const ICS_7_2of6_ROUTE = 'ics7-2of6'
const ics7_2of6 = () => {
	const sprint = 7
	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			`Sprint ${sprint-1} Demos`,
			`Sprint ${sprint-1} Retrospective`,
			`Breakout for Sprint ${sprint-1} Retrospective and Discussion 7`,
			'Prework for Next Class' ])
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:21, submitted:20 },
			{ name: 'Quiz', due:21, submitted:21 },
			{ name: 'Lab', due:21, submitted:20},
			{ name: 'Reflection', due: 21, submitted: 20 }
		])
	}
	// Todo: Add pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Feedback from Assignments & Reflections', [
			'Excellent submission percentage',
			'All assignments are graded and posted', 
			'I have decided that Reflection Riddles are like Kryptonite for me :-)',
			'Hang in there just a few more weeks',
			'Submit you Lab Demo assignments' ])
	}
	// Todo: Create and add slide for metrics.
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			`How does your team feel about sprint ${sprint-1} now that it is over`,
			`What could be done to make sprint ${sprint-1} or the class overall better or more manageable`,
			'What improvements should we make as a class, team, or individual going forward',
			'What advice to you have for me relating to quizzes in future classes' ])
	}
	const discussion7 = () => {
		return discussionBreakout(7)
	}

	return [ preflightChecklist, instructorChecklist, agenda, icsPrework_7_2of6, 
		sprintDemosIntro, sprintDemos, demoAssignment, metricsSubmissionPercentage, retrospective, retrospectiveBreakout, discussion7,
		icsPrework_7_5of6, end ]
}

// ISC sessions 3 of 6 and 4 of 6 were over Easter Break.
const ICS_7_5of6_ROUTE = 'ics7-5of6'
const ics7_5of6 = () => {
	const sprint = 7
	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			'Security Breakout',
			'Prework for Next Class',
			`Quiz ${sprint}` ])
	}
	const securityBreakout = () => {
		return renderBreakout({
			'title':'Security',
			'topics': [
				'Information Security and Confidentiality, Availability, and Integrity',
				'Access, Authentication, Authorization, CAPTCHA',
				'Malicious Code /Malware, Worms, Trojan Horses, Phishing, and DoS',
				'Cryptography, Encryption/Decryption, ciphers, public-key cryptography, and digital signatures',
				'Protecting Online Information' ]
		})
	}
	const quiz7 = () => { return quiz(7) }

	return [ preflightChecklist, instructorChecklist, agenda, icsPrework_7_5of6, securityBreakout, icsPrework_7_6of6, quiz7, end ]
}

// Shared between ICS sessions:
const icsPrework_7_2of6 = () => {
	return preworkWithActivityList([
		'Complete through activity 4', '',
		'Be prepared for sprint 6 demos',
		'Be prepared for Discussion 7' ], 
		list20000Sprint07)
}

// Easter Break caused sessions 4 and 5 (Friday & Monday) to be canceled.
const icsPrework_7_5of6 = () => {
	return preworkWithActivityList([
		'Complete through activity 8', '',
		'Be prepared to discuss “Computer Science Illuminated” Security and associated lecture',
		'Be prepared for Quiz 7' ], 
		list20000Sprint07)
}

const icsPrework_7_6of6 = () => {
	return preworkWithActivityList([
		'Everything is due Sunday!', '',
		'Be prepared for Lab' ], 
		list20000Sprint07)
}

// Object-Oriented Programming
const OOP_7_1of6_ROUTE = 'oop7-1of6'
const oop7_1of6 = () => { return mwf_7_1of6(oopPrework_7_2of6) }

const OOP_7_2of6_ROUTE = 'oop7-2of6'
const oop7_2of6 = () => {
	const sprint = 7
	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			`Sprint ${sprint-1} Demos`,
			`Sprint ${sprint-1} Retrospective`,
			`Breakout for Sprint ${sprint-1} Retrospective and Discussion 7`,
			'Prework for Next Class' ])
	}
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:19, submitted:13 },
			{ name: 'Quiz', due:19, submitted:19 },
			{ name: 'Lab', due:19, submitted:18 },
			{ name: 'Reflection', due: 19, submitted: 18 }
		])
	}
	// Todo: Add pretty slides back into slide deck for Demos and Retrospectives. 
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
			'Sprint 6 is hard and threading is hard', [
			'Not very good submission percentage... how did we end up with 6 discussion not submitted?',
			'All assignments are graded and posted', 
			'I have decided that Reflection Riddles are like Kryptonite for me :-)',
			'What could I do to change sprint 6 up and improve it for future classes?' ])
	}
	// Todo: Create and add slide for metrics.
	const retrospectiveBreakout = () => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			`How does your team feel about sprint ${sprint-1} now that it is over`,
			`What could be done to make sprint ${sprint-1} or the class overall better or more manageable`,
			'What improvements should we make as a class, team, or individual going forward',
			'What advice to you have for me relating to quizzes in future classes' ])
	}
	const discussion7 = () => {
		return discussionBreakout(7)
	}

	return [ preflightChecklist, instructorChecklist, agenda, oopPrework_7_2of6, 
		sprintDemosIntro, sprintDemos, demoAssignment, metricsSubmissionPercentage, retrospective, retrospectiveBreakout, discussion7,
		oopPrework_7_5of6, end ]
}

// OOP sessions 3 of 6 and 4 of 6 were over Easter Break.
const OOP_7_5of6_ROUTE = 'oop7-5of6'
const oop7_5of6 = () => {
	const sprint = 7
	const agenda = () => { 
		return agendaSlide([
			'Prework for Today',
			'Breakout for Application Architectures, Object-Oriented Programming, and Databases - Part 1',
			'Prework for Next Class',
			`Quiz ${sprint}` ])
	}
	const architecturePart1Breakout = () => {
		return renderBreakout({
			'title':'Application Architectures, Object-Oriented Programming, and Databases - Part 1',
			'topics': [
				'Object-Oriented Programming Concepts/Practices, Patterns, Principles',
				'Threading, Shared Data, and Relational Databases',
				'SQL, Schemas, Tables, and Views',
				'Database Normalization, Joins, and Object-Relational Mapping',
				'NoSQL Databases, SQL, Schema, Joins, and Horizontal Scaling' ]
		})
	}
	const quiz7 = () => { return quiz(7) }

	return [ preflightChecklist, instructorChecklist, agenda, oopPrework_7_5of6, architecturePart1Breakout, oopPrework_7_6of6, quiz7, end ]
}

// Shared between OOP sessions:
const oopPrework_7_2of6 = () => {
	return preworkWithActivityList([
		'Complete through activity 4', '',
		'Be prepared for sprint 6 demos',
		'Be prepared for Discussion 7' ], 
		list24500Sprint07)
}

// Easter Break caused sessions 4 and 5 (Friday & Monday) to be canceled.
const oopPrework_7_5of6 = () => {
	return preworkWithActivityList([
		'Complete through activity 8', '',
		'Be prepared to discuss “Application Architectures, Object-Oriented Programming, and Databases - Part 1”',
		'Be prepared for Quiz 7' ], 
		list24500Sprint07)
}

const oopPrework_7_6of6 = () => {
	return preworkWithActivityList([
		'Everything is due Sunday!', '',
		'Be prepared for Lab' ], 
		list24500Sprint07)
}

// Software Engineering
const SE_7_1of4_ROUTE = 'se7-1of4'
const se7_1of4 = () => {
	const sprint = 7
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
			{ name: 'Discussion', due:21, submitted:21 },
			{ name: 'Quiz', due:21, submitted:21 },
			{ name: 'Lab', due:21, submitted:20},
			{ name: 'Reflection', due: 21, submitted: 20 }
		])
	}
	const classRetrospective = () => {
		return orderedListSlide('Class Retrospective',
			`Feedback from Sprint ${sprint-1} Assignments & Reflections`, [
			'Solid submission percentage',
			'All assignments are graded and posted including Sprint (Lab) Demos', 
			`Remember that if you are not able to participate in our Friday team Discussion, you still need to
				make your initial post by Sunday and respond back to two of your classmates’ posts`,
			'Recall definition of "done" requirements',
			'Recall stories are "done" or "not done"',
			'Recall say/do ratio is a percentage of stories "done" divided by stories committed' ])
	}
	const reviewBacklogGrooming = () => {
		return basicSlide('Scrum Team Retrospective plus Backlog Grooming Review - Breakout', [
			`Complete your scrum team sprint ${sprint} retrospective plus your team Backlog Groom review.`]) 
	}
	const sprintPlanning = () => {
		return orderedListSlide(`Sprint Planning`, `Sprint ${sprint} Changes:`, [
			'Similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
			`We will try to complete Sprint ${sprint} Planning and Discussion ${sprint} today`,
			'Easter break and no classes Thursday through Monday will make the sprint a bit challenging'
		])
	}
	const sprint6Planning = () => {
		return basicSlide(`Sprint ${sprint}  Planning`, [
			`Complete sprint ${sprint} planning including final team and individual sprint ${sprint} backlog commitments.`,
			'And Discussion 7']) 
	}

	return [ preflightChecklist, instructorChecklist, agenda, prework_7_1of6, retrospective, metrics, metricsSubmissionPercentage, classRetrospective,
		reviewBacklogGrooming, sprintPlanning, activitiesReview, preworkSE7_3of4, sprint6Planning, end ]
}


// Session 2 of 4 was over Easter Break.
const SE_7_3of4_ROUTE = 'se7-3of4'
const se7_3of4 = () => {
	const sprint = 7
	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			`Recall Completing Sprint ${sprint} Planning & Discuss 7 on Tuesday before break`,
			'Job and internship opportunities',
			`Breakout on Design Patterns`,
			'Prework for Next Class' ])
	}
	const recallTuesdayClass = () => {
		return basicSlide(`Recall Sprint ${sprint} Planning & Discuss 7`, [
			`Recall completing sprint ${sprint} planning including final team and individual sprint ${sprint} 
			commitments plus Discussion 7.` ]) 
	}
	const jobOpportunities = () => {
		return basicSlide('Job Opportunities', [
			'Let’s spend a few minutes reviewing Job opportunities at John Deere and my announcement from this morning.' ]) 
	}
	const designPatternsBreakout = () => {
		return renderBreakout({
			'title':'Design Patterns (and Principles',
			'topics': [
				'Design Principles, SOLID, Single Responsibility Principle, Open/Close Principle', 
				'Design Patterns, “Gang of Four (GoF)”, Prefer Composition and Delegation over Inheritance',
				'Model-View-Controller and Singleton',
				'UML plus Just Enough UML',
				'The Plan-And-Document Perspective on Design Patterns (and Principles) plus UML',
				'Frameworks' ]
		})
	}

	return [ preflightChecklist, instructorChecklist, agenda, preworkSE7_3of4, recallTuesdayClass, jobOpportunities, designPatternsBreakout, preworkSE7_4of4, end ]
}

const preworkSE7_3of4 = () => {
	return basicSlide('Prework', [
		'Complete through activity 8', '',
		'Be prepared Breakout on Design Patterns',
		'Be prepared for Quiz 7' ])
}

const preworkSE7_4of4 = () => {
	return basicSlide('Prework', [
		'Complete through activity 9', '',
		'Be prepared Lab' ])
}

// Shared between classes:
const mwf_7_1of6 = (prework_7_2of6) => {
	const sprint = 7
	const agenda = () => {
		return agendaSlide([
			'Prework for Today',
			`Sprint ${sprint} Planning`,
			`Breakout on Sprint ${sprint} Planning`,
			'Review Demo Schedule',
			'Prework for Next Class' ])
	}
	const sprintPlanning = () => {
		return orderedListSlide(`Sprint Planning`, `Sprint ${sprint} Changes:`, [
			'Similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
			`Also similar with sprint ${sprint} demos on Wednesday`,
			'Easter break and no classes Thursday through Monday will make the sprint a bit challenging'
		])
	}
	const activitiesBreakout = () => {
		return orderedListSlide('Scrum Team Planning Review', 'As a scrum team:', [
			`Review sprint ${sprint} activity list & assignments in detail`,
			'Discuss and identify questions/concerns',
			'Scrum master share your team’s top 2 questions/concerns during report out' ])
	}
	return [ preflightChecklist, instructorChecklist,
		agenda, prework_7_1of6, sprintPlanning, activitiesReview, activitiesBreakout, prework_7_2of6, end ]
}

const prework_7_1of6 = () => {
	return preworkSlide([
		'All Sprint 6 Assignments due Sunday!', '',
		'** Be prepared for in-person Sprint 7 Planning on Monday' 
	])
}



