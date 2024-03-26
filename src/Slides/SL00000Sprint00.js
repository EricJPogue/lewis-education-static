import { preflightChecklist, basicSlide, end } from './SLSprint00'
import { agendaSlide, orderedListSlide, bulletListSlide, basicSlideWithLogo, tPreworkWithLogo, tPrework, tQuizExpectations, tQuiz } from './SLSprint00'

import { retrospectiveIntroduction, retrospectiveBreakout, sprintDemos, sprintDemosIntro, demoAssignment } from './SLSprint00'

import { tDiscussionBreakout, tRecap, breakoutStandard } from './SLSprint00'

export const makeSlideDeck = (slides) => { 
	return [ preflightChecklist ].concat(slides).concat(end) 
}

export const completeDeck = (slideDeck, slides) => { 
	const addSlide = (slide) => { slideDeck.push(slide) }

	slides.forEach(addSlide)
	slideDeck.push(end)
	return slideDeck
}

export const xyz_n_nof6_lists = (sprint) => {
	return {
		'announcements':[ 
			'Any announcements?' ],
		'prework':[ 
			'Complete through **', '',
			`Be prepared ****` ],
		'agenda':[ 
			`Sprint ${sprint} Agenda item 1`,
			'Agenda item 2',
			'...' ]
	}
}

// Todo: Consider renaming the following function to tUnderConstruction
export const tUnderConstruction = () => {
	return basicSlideWithLogo('Slide Deck Under Construction', [
		'This slide deck is currently under construction. Please check back later.'])
}

export const tNoClassToday = () => {
	return basicSlideWithLogo('Holiday', [
		'The is no class today.'])
}

export const tNoRegularClassToday = () => {
	return basicSlideWithLogo('Finals Week', [
		'No regular class this week.'])
}

export const tFinalReviewActivityListAndAssignments = (sprint) => { return basicSlide(
	`Final sprint ${sprint} activity list and assignment Q&A`, 
	[ `Any sprint ${sprint} activity list or assignment questions?` ]) 
}

// Sprint 1 class 2 is intended to be the second time the class meets. For example, this may be the third session if the first
// session was a holiday (i.e. Martin Luther King day)
export const sprint1_class_2_PAaA = {
	'prework':[
		'Complete through activity 6', '', 
		'Scrum Master to set up team Discord server' ],
	'announcements':[ 
		'Welcome Back!',
		'Do you know where to find our Zoom recordings?',
		'Please be sure to email me directly with questions... and not Blackboard Message me' ],
	'agenda':[ 
		'Sprint Progress Polling',
		'Introductions and Scrum Team Assignments (continued)',
		'Sprint 1 Planning (continued)',
		'Sprint 1 Planning Breakout',
		'Prework for Next Class' ]
}
export const sprint1_class_2 = (sprint, activityList, pAaA, preworkNextSession) => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(pAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', pAaA.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', preworkNextSession, sprint, activityList) }
	const introductions = () => {
		return orderedListSlide('Introductions & Team Assignments (continued)', 'Review and complete introductions and team assignments by:', [
			'Reviewing teams that have completed introductions',
			'Completing any remaining introductions and team assignments',
			'Seeing who has not yet been introduced and assigned to a team' ])
	}
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning (continued)', `Sprint ${sprint} Expectations:`, [
			'Similar to future sprints with Discussion, Quiz, Lab, and Reflection',
			'Monday is a holiday which makes this sprint a little more challenging than most',
			'We will complete our scrum team Discussion Board breakout session today as time allows' ])
	}
	const breakoutSprint1Planning = () => {
		return breakoutStandard(
			'Breakout: Sprint 1 Planning (as time allows)', 
			'In this breakout session discuss discuss 1 thing the team is concerned about and 1 thing the team is looking forward to in sprint 1:', [
				'Presenter volunteers to report out... or Scrum Master assigns a presenter',
				'Discuss at least 1 activity that is a concern', 
				'Discuss at least 1 activity that looks interesting' ])
	}
	const recap = () => { return tRecap(pAaA.agenda.slice(1))}
	return completeDeck(slideDeck, [poll, introductions, sprintPlanning, breakoutSprint1Planning, preworkNext, recap])
}

export const xyz_n_1of6_agenda_list = (sprint) => { 
	return [ `Sprint ${sprint} Planning`,
	`Sprint ${sprint} Planning Breakout`,
	'Prework for Next Class' ]
}

export const xyz_n_1of6_prework_list = (sprint) => {
	return [ 'Everything is due Sunday!', '',
		`Be prepared for Sprint ${sprint} Planning` ]
}

export const xyz_n_1of6_lists = (sprint) => {
	return {
		'prework':[ 
			'Everything is due Sunday!', '',
			`Be prepared for Sprint ${sprint} Planning` ],
		'announcements':[ 
			`Sprint ${sprint} starts now.` ],
		'agenda':[ 
			`Sprint ${sprint} Planning`,
			`Sprint ${sprint} Planning Breakout`,
			'Prework for Next Class' ]
	}
}
export const xyz_n_1of6 = (sprint, preworkList, activityListPrevious, agendaList, preworkListNext, activityList, substituteSprintPlanning = null) => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', preworkList, sprint-1, activityListPrevious) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ['Let’s stay 100% focused on sprint planning today']) }
	const agenda = () => { return agendaSlide(agendaList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', preworkListNext, sprint, activityList) }

	const sprintPlanning = () => {
		if (substituteSprintPlanning != null) {
			return substituteSprintPlanning()
		} else {
			return orderedListSlide('Sprint Planning', `Sprint ${sprint} Expectations:`, [
				'Similar to previous sprints with Discussion, Quiz, Lab, and Reflection',
				'We will complete our scrum team Discussion Board breakout session on Wednesday',
				`We will have sprint ${sprint-1} Demos and Retrospective on Friday` ])
		}
	}
	const activitiesReview = () => {
		return basicSlide('Activity List and Assignments Review', [
			'Let’s open our Blackboard shell and review the activity list and assignments together.' ]
		)
	}
	const planningBreakout = () => {
		return orderedListSlide('Sprint Planning Scrum Team Breakout', 'As a scrum team:', [
			`Review sprint ${sprint} activity list & assignments in detail`,
			'Discuss and identify questions/concerns',
			'Scrum master report out by sharing scrum team’s top 2 or 3 questions/concerns' ]
		)
	}

	return makeSlideDeck([ prework, announcements, agenda, sprintPlanning, activitiesReview, planningBreakout, preworkNext ])
}

export const ssc_n_1of1_lists = (sprint) => {
	return {
		'prework':[ 
			'Everything is due Sunday!', '',
			`Be prepared for Sprint ${sprint} Planning` ],
		'announcements':[ 
			`Sprint ${sprint} starts now.` ],
		'agenda':[ 
			`Sprint ${sprint} Planning` ]
	}
}
export const ssc_n_1of1 = (sprint, preworkList, activityListPrevious, agendaList, preworkListNext, activityList, substituteSprintPlanning = null) => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', preworkList, sprint-1, activityListPrevious) }
	const agenda = () => { return agendaSlide(agendaList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', preworkListNext, sprint, activityList) }

	const sprintPlanning = () => {
		if (substituteSprintPlanning != null) {
			return substituteSprintPlanning()
		} else {
			return orderedListSlide('Sprint Planning', `Sprint ${sprint} Expectations:`, [
				'Similar to previous sprints with Discussion, Quiz, Lab, and Reflection',
				'The Lab assignment continues to be separated into two parts',
				'We need to start making progress on class Demos' ])
		}
	}
	const activitiesReview = () => {
		return basicSlide('Activity List and Assignments Review', [
			'Let’s open our Blackboard shell and review the activity list and assignments together.' ]
		)
	}

	return makeSlideDeck([ prework, agenda, sprintPlanning, activitiesReview, preworkNext ])
}

export const xyz_n_2of6 = (sprint, sessionLists, preworkListNext, activityList) => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(sessionLists, sprint, activityList)
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', preworkListNext, sprint, activityList) }
	const reviewDemoSchedule = () => {
		return bulletListSlide('Review Friday’s Demo Schedule', 
			'Let’s review Friday’s demo schedule while recalling that demos are an important part of scrum and that they:', [
			'Occur at the beginning of each new sprint ',
			'Are an opportunity to show what was completed in the previous sprint',
			'Are an **easy** and hopefully rewarding experience to show off your work',
			'Provide a chance to see how others solved a problem and to see some of the challenges they faces' ]
		)
	}

	return completeDeck(slideDeck, [ discussionBreakout, reviewDemoSchedule, preworkNext, tLab ])
}

export const xyz_n_3of6 = (sprint, sessionLists, preworkListNext, activityList, metricsSubmissionPercentage, retrospective) => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(sessionLists, sprint, activityList)
	const metricsIntro = () => {
		return basicSlide(`Sprint ${sprint-1} Metrics`, [
			`Let’s take a minute and review our Sprint ${sprint-1} Submission Percentage class metric.` ])
	}
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const breakout = () =>{ return retrospectiveBreakout(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', preworkListNext, sprint, activityList) }

	return completeDeck(slideDeck, [sprintDemosIntro, sprintDemos, tDemos, demoAssignment, metricsIntro, metricsSubmissionPercentage, retrospectiveInto, retrospective, breakout, preworkNext])
}

export const xyz_n_4of6_PAaA = (sprint, completeThrough, breakoutTopic) => {
	const preworkAnnouncementsAndAgenda = {
		'prework': [
			`${completeThrough}`, '',
			`'Be prepared for “${breakoutTopic}” breakout'`,
			`All sprint ${sprint} assignments are due Sunday` ],
		'announcements':[
			`Any announcements?`],
		'agenda':[
			`Sprint Progress Polling`,
			`Breakout: ${breakoutTopic}`,
			'Prework for Next Class', 
			'Lab']
	}
	return preworkAnnouncementsAndAgenda
}

export const xyz_n_4of6 = (sprint, sessionLists, preworkListNext, activityList, breakout) => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(sessionLists, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', sessionLists.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', preworkListNext, sprint, activityList) }

	return completeDeck(slideDeck, [poll, breakout, preworkNext, tLab])
}

export const xyz_n_5of6 = (sprint, sessionLists, preworkListNext, activityList) => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(sessionLists, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', sessionLists.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', preworkListNext, sprint, activityList) }
	const quizExpectations = () => { return tQuizExpectations(sprint)}
	const quiz = () => { return tQuiz(sprint) }

	return 	completeDeck(slideDeck, [ poll, tLab, preworkNext, quizExpectations, quiz ])
}

export const xyz_n_6of6_PAaA = (completeThrough, sprint) => {
	const preworkAnnouncementsAndAgenda = {
		'prework': [
			`${completeThrough}`, '',
			'Be prepared for Lab & Programming Together',
			`All sprint ${sprint} assignments are due Sunday!` ],
		'announcements':[
			`Any announcements?`],
		'agenda':[
			`Final sprint ${sprint} activity list and assignment Q&A`,
			`Quiz ${sprint} “Phone a Friend”`,
			'Prework for Next Class', 
			'Lab']
	}
	return preworkAnnouncementsAndAgenda
}

export const xyz_n_6of6 = (sprint, sessionLists, preworkListNext, activityList) => {
	const finalReviewActivityListAndAssignments = () => { return basicSlide(
		`Final sprint ${sprint} activity list and assignment Q&A`, [`Any sprint ${sprint} activity list or assignment questions?`]) }
	const quizPhoneAFriend = () => { return basicSlide(`Quiz ${sprint} “Phone a Friend”`, [`Any quiz ${sprint} “Phone a Friend” questions?`]) }
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(sessionLists, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', preworkListNext, sprint, activityList) }

	return completeDeck(slideDeck, [ finalReviewActivityListAndAssignments, quizPhoneAFriend, preworkNext, tLab ])
}

// ** New world order ** 

// Parameters ordered by the least likely to be null to the most likely to be null to optimize default parameters.
export const makeSession = (sprint, activityList=null, pAaA=null, preworkNext=null, activityListPrevious=null) => {
	let prework = null
	let announcements = null
	let agenda = null

	if (pAaA!=null) {
		prework = pAaA.prework
		announcements = pAaA.announcements
		agenda = pAaA.agenda
	}

	return {
		sprint: sprint,
		activityList: activityList,
		prework: prework,
		announcements: announcements,
		agenda: agenda,
		preworkNext: preworkNext,
		activityListPrevious: activityListPrevious
	}
}

export const xyz_8_7of6_PAaA = {
	'prework':[
		'Verify that you have submitted your final project presentation assignment',
		'Be prepared for your final project presentation' ],
	'announcements':[ 
		'Please consider taking time to complete your course evaluation if you haven’t already' ],
	'agenda':[
		'Final Project Presentations',
		'Next Steps',
		'Thank you!' ]
}
export const xyz_8_7of6 = (session) => {
	const default_prework = ['Everything is due Thursday!' ]
	const finalProjectPresentation = () => {
		return orderedListSlide('Final Project Presentations', `Recall that your final project presentation should including a/an:`, [
			'Introduce yourself',
			'Review your proposal',
			'Demonstrate your product including least one standard and advanced feature',
			'Share source code',
			'Describe what else you expect to complete by the end of the day Thursday' ])
	}
	const finalComments = () => {
		return orderedListSlide('Thank you!',
			'', [
			'Thank you for making this a wonderful experience for me',
			'Don’t hesitate to reach out in the future',
			'Hope to see you in a future class', 
			'Reach out to me if you are interested in taking Web & Distributed Programming',
			'I am impressed with what you have accomplished' ])
	}

	// Does not support overriding PAaA or prework.
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(xyz_8_7of6_PAaA, session.sprint, session.activityList)
	const nextSteps = () => { return tPrework('Next Steps', [  default_prework ], session.sprint, session.activityList) }

	return completeDeck(slideDeck, [ finalProjectPresentation, nextSteps, finalComments ]) 
}




export const tLab = () => {
	return bulletListSlide('Lab', 
		'Let’s focus on completing our activities and assignments by:', [
		'Deciding how we can best utilize our time today', 
		'Completing the most important activities and assignments together' ])
}

export const tReviewDemoSchedule = () => {
	return bulletListSlide('Review Demo Schedule', 
		'Let’s review our demo schedule while recalling that demos are an important part of scrum and that they:', [
		'Occur at the “beginning” of each new sprint ',
		'Are an opportunity to show what was completed in the previous sprint',
		'Are an **easy** and hopefully rewarding experience to show off your work',
		'Provide a chance to see how others solved a problem and to see some of the challenges they faces' ]
	)
}

export const tDemos = () => {
	return bulletListSlide('Sprint Demos', 
		`Remember:`, [
		'Presenters: What was your experience, application running, maybe some source code',
		'Listeners: Actively listen, come up with a question, clap for the presenter' ]
	)
}

export const tAnnouncementPreworkOrAgenda = (titleAndList, sprint=null, activityList=null) => {
	return tPreworkWithLogo(titleAndList[0], titleAndList.slice(1), sprint, activityList )
}

export const checklistAnnouncementsPreworkAndAgenda = (lists, sprint, activityList) => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', lists.prework, sprint, activityList) }
	const announcements = () => { return tPreworkWithLogo('Announcements', lists.announcements, sprint )}
	const agenda = () => { return agendaSlide(lists.agenda) }

	const slideDeck = [ preflightChecklist ]

	if (lists.prework.length > 0) 
		slideDeck.push(prework)

	if (lists.announcements.length > 0) 
		slideDeck.push(announcements)

	if (lists.agenda.length > 0) 
		slideDeck.push(agenda)

	return slideDeck
}