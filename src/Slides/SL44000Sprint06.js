import { submissionPercentage, orderedListSlide, retrospectiveIntroduction } from '../Slides/SLSprint00'
import { breakoutStandard, bulletListSlide, tDiscussionBreakout, tPrework, tQuiz } from './SLSprint00'
import { tPreworkWithLogo, basicSlideWithLogo, agendaSlide, basicSlide } from '../Slides/SLSprint00'

import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tLab, makeSlideDeck } from './SL00000Sprint00'
import { insertInto } from './SLSprintPlanning'
import { sprintPlanningSlideDeck } from './SLSprintPlanning'
import { tNoClassToday } from './SL00000Sprint00'

import { se_7_2of6_PAaA } from './SL44000Sprint07'

import { list44000Sprint05 } from '../ActivityLists/AL44000Sprint05'
import { list44000Sprint06 } from '../ActivityLists/AL44000Sprint06'

// Sprint 6 Software Engineering (SE) global values.
const sprint = 6
const activityListPrevious = () => { return list44000Sprint05(sprint-1) }
const activityList = () => { return list44000Sprint06(sprint) }

// Todo: Review slide schedule knowing that the current slide schedule reflects Easter break occurring in the middle 
//     of sprint 6 and sprint 7.

// Session 1 of 6: Monday
export const se_6_1of6_PAaA = {
	'prework':[ 
		`All sprint ${sprint-1} assignments are due Sunday!`, '',
		`Be on time and prepared for in-person sprint ${sprint} Planning`,
		'Come Monday with a fully groomed Product Backlog',
		'Make sure that you production application is up and running Monday' ],
	'announcements':[ 
		'Welcome to Dr. Howard, Professor and Chair, Engineering, Computing and Mathematical Sciences',
		'Today is going to be challenging so let’s stay relaxed and stay focused' ],
	'agenda':[ 
		`Sprint ${sprint} Planning as a Class`,
		'Prework for Next Class',
		`Sprint ${sprint} Planning for your Team` ]
}
export const se_6_1of6 = () => { 
	const prework = () => { return tPreworkWithLogo('Prework For Today', se_6_1of6_PAaA.prework, sprint-1, activityListPrevious) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', se_6_1of6_PAaA.announcements) }
	const agenda = () => { return agendaSlide(se_6_1of6_PAaA.agenda) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_6_2of6_PAaA.prework, sprint, activityList) }
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning as a Class', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprints with Discussion, Quiz, Lab, and Reflection',
			'Demos will be occurring within your teams', 
			'The Easter Holiday Recess will cause us a a few scheduling and capacity challenges',
			'We will complete our scrum team Discussion Board on Wednesday',
			`We will have sprint ${sprint-1} Retrospective on Friday` ])
	}
	const activitiesReview = () => {
		return basicSlide('Activity List and Assignments Review', [
			'Let’s open our Blackboard shell and briefly review the activity list and assignments together.' ]
		)
	}
	const planningBreakout = () => {
		return orderedListSlide('Sprint Planning Scrum Team Breakout', 'As a scrum team:', [
			`No discussion or breakout today so that we can focus on your Team’s Sprint ${sprint} planning` ]
		)
	}

	const slideDeck = makeSlideDeck([ prework, announcements, agenda, sprintPlanning, activitiesReview, planningBreakout, preworkNext ])
	const slideDeckWithSprintPlanning = insertInto(slideDeck, sprintPlanningSlideDeck(sprint), 8)
	return slideDeckWithSprintPlanning
}

// Session 2 of 6: Wednesday
const se_6_2of6_PAaA = {
	'announcements':[ 
		'Software Systems Capstone section available... class size limited to 10 or 10-ish',
		'Registration for Sprint 2024 begins Monday, November 13th and continues through November 17',
		'Summer 2024 courses begins Tuesday, November 28th' ],
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}` ],
	'agenda':[
		`Sprint ${sprint} Planning Commitment and Sign Off`,
		`Discussion Board ${sprint} as a scrum team`,
		'Confirm scrum team Demos and Retrospectives for Next Class',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const se_6_2of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_6_2of6_PAaA, sprint, activityList)
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', se_6_3of6_PAaA.prework, sprint, activityList) }
	const reviewDemoSchedule = () => {
		return bulletListSlide('Consider your scrum team’s Friday’s Demo Schedule', 
			'Let’s review Friday’s demo schedule while recalling that demos are an important part of scrum and that they:', [
			'Occur at the beginning of each new sprint ',
			'Are an opportunity to show what was completed in the previous sprint',
			'Are an **easy** and hopefully rewarding experience to show off your work',
			'Provide a chance to see how others solved a problem and to see some of the challenges they faces' ]
		)
	}

	return completeDeck(slideDeck, [ discussionBreakout, reviewDemoSchedule, preworkNext, tLab ])
}

const se_6_3of6_PAaA = {
	'announcements':[ 
		'John Deere job openings' ],
	'prework':[
		'Complete through activity 7 prior to next class', '',
		`Be prepared scrum team sprint ${sprint-1} Demos and Retrospectives` ],
	'agenda':[
		'Class Retrospective',
		`Scrum Team Sprint ${sprint-1} Demos`,
		'Best-of-the-best Scrum Team Demo',
		`Scrum Team Sprint ${sprint-1} Retrospective`,
		`Scrum Team report-outs for Sprint ${sprint-1} Retrospective`,
		'Prework for Next Class' ]
}
export const se_6_3of6 = () => { 
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:26, submitted:26 },
			{ name: 'Quiz', due:26, submitted:26 },
			{ name: 'Lab', due:26, submitted:25},
			{ name: 'Reflection', due: 26, submitted: 26 }
		])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
		'Feedback from Assignments & Reflections', [
		`Wonderful sprint ${sprint-1} submission percentage`,
		'Lot’s of great comments about working with teammates', 
		'Lot’s of obvious pride in your work',
		'I am running behind on grading assignments... sorry for the generic comments to many of your reflections',
		'Planning is hard... and having more time (without experimentation) does not make it easier or better', 
		'Estimation is hard... and having more time (without experimentation) does not make it easier or better',  
		'Very well done!... this is hard!' ])
	}
	const scrumTeamDemos = () => {
		return orderedListSlide('Scrum Team Demos',
		'How do/will your team handle Demos?', [
		'What is your team’s “Best-of-the-best” demo' ])
	}
	const scrumTeamRetrospective = () => {
		return orderedListSlide('Scrum Team Retrospective',
		'What will your team need to do to complete Sprint 7 planning on the first day of Sprint 7', [
		'What is the highest priority Continuous Improvement item for your team... will you make it a story in the future?' ])
	}

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_6_3of6_PAaA, sprint, activityList)
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const preworkNext = () => { return tPrework('Prework For Next Class', se_6_5of6_PAaA.prework, sprint, activityList) }

	return completeDeck(slideDeck, [retrospectiveInto, metricsSubmissionPercentage, retrospective, scrumTeamDemos, scrumTeamRetrospective, preworkNext])
}

const se_6_4of6_PAaA = {
	'prework':[
		'Complete through activity 10 prior to next class', '',
		'Be prepared breakout session on Metrics' ],
	'announcements':[ 
		`Reminder that your team’s sprint ${sprint+1} is required, in-person, and scheduled for next Monday`, ],
	'agenda':[
		'Metrics Breakout',
		'Prework for Next Class',
		'Lab & Programming Together (as time allows)',
		`Quiz ${sprint}` ]
}
export const se_6_4of6 = () => {
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Metrics', 
			'In this breakout session we will explore Metrics:', [
				'Software Quality, Architecture Quality, and Project Quality',
				'Characteristics of a Good Metric and Common Metrics for Waterfall and Agile',
				'Software Metrics Best Practices',
				'Metics that measure team output including Story Points, Use Case Points, and Function Points',
				'Pros and cons of our Software Engineering team metrics' ]
		)
	}

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_6_4of6_PAaA, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', se_6_4of6_PAaA.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_6_5of6_PAaA.prework, sprint, activityList) }
	const quiz = () => { return tQuiz(sprint) }

	return completeDeck(slideDeck, [poll, breakout, preworkNext, tLab, quiz])
}

const se_6_5of6_PAaA = {
	'prework':[
		'Complete through activity 11 prior to next class', '',
		`Be prepared for Backlog Grooming in Preparation for Sprint ${sprint+1} Planning`,
		'Be prepared for Lab' ],
	'announcements':[ 
		`Reminder that your team’s sprint ${sprint+1} planning is required, in-person, and scheduled for next Wednesday`,
		'Two new MongoDB programming together tutorial added' ],
	'agenda':[
		'Backlog Grooming',
		'Lab' ]
}
export const se_6_5of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_6_5of6_PAaA, sprint, activityList)
	const preworkNext = () => { return tPrework('Prework For Next Class', se_7_2of6_PAaA.prework, sprint, activityList) }
	const slideDeckWithPrework = completeDeck(slideDeck, [ preworkNext ]) 
	return insertInto(slideDeckWithPrework, sprintPlanningSlideDeck(sprint), 5 /* index to insert */)
}

// Session 6 of 6
export const se_6_6of6 = () => { return [ tNoClassToday ] }


