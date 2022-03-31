import { basicSlide, bulletListSlide, orderedListSlide, end } from './SLSprint00'
import { agendaSlide, preworkSlide } from './SLSprint00'
import { checklist, preflightChecklist, instructorChecklist } from './SLSprint00'
import { submissionPercentageDeck } from './SLSprint00'
import { al20000Sprint06 } from '../ActivityLists/AL20000Sprint06'
import { al24500Sprint06 } from '../ActivityLists/AL24500Sprint06'
import { al44000Sprint06 } from '../ActivityLists/AL44000Sprint06'

import { discussionSE6 } from './Slide'

export const sprint6Router = (route) => {
	switch(route) {
		case CHECKLIST_ROUTE: return checklist()

		case ICS_6_1of6_ROUTE: return ics6_1of6()
		case ICS_6_2of6_ROUTE: return ics6_2of6()

		case OOP_6_1of6_ROUTE: return oop6_1of6()
		case OOP_6_2of6_ROUTE: return oop6_2of6()

		case SE_6_1of4_ROUTE: return se6_1of4()
		case SE_6_2of4_ROUTE: return se6_2of4()

		case 'metric': return submissionPercentageDeck()
		default: return null
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
		agenda, prework_6_1of6, sprintPlanning, activitiesReview, activitiesBreakout, prework_6_2of6, end ]
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
	return [ preflightChecklist, instructorChecklist, agenda, prework_6_2of6, al20000Sprint06, 
		sprintDemosIntro, sprintDemos, demoAssignment, retrospective, retrospectiveBreakout, 
		prework_6_3of6, end ]
}

// Introduction to Computer Science shared slides used in multiple sessions
const prework_6_1of6 = () => {
	return preworkSlide([
		'All Sprint 5 Assignments due Sunday!', '',
		'Be prepared for Sprint 6 Planning on Monday' ])
}
const prework_6_2of6 = () => {
	return preworkSlide([
		'Complete through activity 4 and start on activity 5', '',
		'Be prepared for sprint 5 demos' ])
}
const prework_6_3of6 = () => {
	return preworkSlide([
		'Complete through activity 7', '',
		'Be prepared for Discussion 6',
		'Be prepared for Lab and programming together' ])
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
	return [ preflightChecklist, instructorChecklist, agenda, prework_6_2of6, al24500Sprint06,
		sprintDemosIntro, sprintDemos, demoAssignment, retrospective, retrospectiveBreakout, 
		prework_6_3of6, end ]
	// Todo: Add pretty slides back into slide deck for Demos and Retrospectives. 
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

// Software Engineering
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
			'... and these are your sprint demos.'
		])
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

	// Todo: Create and add slide for metrics.
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
		sprintDemosIntro, sprintDemos, yourProcessYourDemos, teamSprintDemos, metrics, classRetrospective, teamRetrospective, 
		recallSprint6Planning, discussionSE6,
		preworkSE6_3of4, al44000Sprint06, end ]
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



