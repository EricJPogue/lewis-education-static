import { preflightChecklist, basicSlide, end } from './SLSprint00'
import { agendaSlide, orderedListSlide, bulletListSlide, basicSlideWithLogo, tPreworkWithLogo, tPrework, tQuizExpectations, tQuiz } from './SLSprint00'

import { retrospectiveIntroduction, retrospectiveBreakout, sprintDemos, sprintDemosIntro, demoAssignment } from './SLSprint00'

import { tDiscussionBreakout } from './SLSprint00'

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
		'announcements':[ 
			`${sprint} starts now.` ],
		'prework':[ 
			'Everything is due Sunday!', '',
			`Be prepared for Sprint ${sprint} Planning` ],
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
			return substituteSprintPlanning
		} else {
			return orderedListSlide('Sprint Planning', `Sprint ${sprint} Expectations:`, [
				'Similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
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
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const breakout = () =>{ return retrospectiveBreakout(sprint) }
	const preworkNext = () => { return tPrework('Prework For Next Class', preworkListNext, sprint, activityList) }

	return completeDeck(slideDeck, [sprintDemosIntro, sprintDemos, demoAssignment, retrospectiveInto, metricsSubmissionPercentage, retrospective, breakout, preworkNext])
}

export const xyz_n_4of6 = (sprint, sessionLists, preworkListNext, activityList, breakout) => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(sessionLists, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', preworkListNext, sprint, activityList) }

	return completeDeck(slideDeck, [breakout, preworkNext, tLab])
}

export const xyz_n_5of6 = (sprint, sessionLists, preworkListNext, activityList) => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(sessionLists, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', sessionLists.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', preworkListNext, sprint, activityList) }
	const quizExpectations = () => { return tQuizExpectations(sprint)}
	const quiz = () => { return tQuiz(sprint) }

	return 	completeDeck(slideDeck, [ poll, tLab, preworkNext, quizExpectations, quiz ])
}

export const xyz_n_6of6 = (sprint, sessionLists, preworkListNext, activityList) => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(sessionLists, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', preworkListNext, sprint, activityList) }

	return completeDeck(slideDeck, [ preworkNext, tLab ])
}

export const tLab = () => {
	return bulletListSlide('Lab & Programming Together', 
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