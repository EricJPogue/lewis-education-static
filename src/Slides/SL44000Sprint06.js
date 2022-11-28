import { xyz_n_1of6_lists, xyz_n_1of6, xyz_n_4of6 } from './SL00000Sprint00'
import { submissionPercentage, orderedListSlide, basicSlideWithTitle } from '../Slides/SLSprint00'

import { checklistAnnouncementsPreworkAndAgenda, completeDeck } from './SL00000Sprint00'
import { tPrework, bulletListSlide, tDiscussionBreakout } from './SLSprint00'

import { breakoutStandard } from '../Slides/SLSprint00'

import { tLab } from './SL00000Sprint00'
import { tQuiz } from '../Slides/SLSprint00'

import { retrospectiveIntroduction } from './SLSprint00'

import { se_7_1of6_lists } from './SL44000Sprint07'

import { list44000Sprint05 } from '../ActivityLists/AL44000Sprint05'
import { list44000Sprint06 } from '../ActivityLists/AL44000Sprint06'

// Sprint 6 Software Engineering (SE) global values.
const sprint = 6
const activityListPrevious = () => { return list44000Sprint05(sprint-1) }
const activityList = () => { return list44000Sprint06(sprint) }


// SE Sprint 6 session 1 of 6: Monday
export const se_6_1of6_lists = xyz_n_1of6_lists(sprint)
export const se_6_1of6 = () => { return xyz_n_1of6(sprint, se_6_1of6_lists.prework, activityListPrevious, se_6_1of6_lists.agenda, se_6_2of6_lists.prework, activityList) }

// SE Sprint 6 session 2 of 6: Wednesday
const se_6_2of6_lists = {
	'announcements':[ 
		'Any announcements?' ],
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
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_6_2of6_lists, sprint, activityList)
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const preworkNext = () => { return tPrework('Prework For Next Class', se_6_3of6_lists.prework, sprint, activityList) }
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

const se_6_3of6_lists = {
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
			{ name: 'Discussion', due:13, submitted:13 },
			{ name: 'Quiz', due:13, submitted:13 },
			{ name: 'Lab', due:13, submitted:13 },
			{ name: 'Reflection', due: 13, submitted: 12 }
		])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
		'Feedback from Assignments & Reflections', [
		'Exceptional sprint 5 submission percentage',
		'All assignments are graded and posted', 
		'Very well done in sprint 5... this is hard!' ])
	}
	const scrumTeamDemos = () => {
		return orderedListSlide('Scrum Team Demos',
		'How do/will your team handle Demos?', [
		'What is your team’s “Best-of-the-best” demo' ])
	}
	const scrumTeamRetrospective = () => {
		return orderedListSlide('Scrum Team Retrospective',
		'What will your team need to do differently to complete Sprint 7 planning on the first day of Sprint 7', [
		'What is the highest priority Continuous Improvement item for your team... will you make it a story in the future?' ])
	}

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_6_3of6_lists, sprint, activityList)
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const preworkNext = () => { return tPrework('Prework For Next Class', se_6_4of6_lists.prework, sprint, activityList) }

	return completeDeck(slideDeck, [retrospectiveInto, metricsSubmissionPercentage, retrospective, scrumTeamDemos, scrumTeamRetrospective, preworkNext])
}

const se_6_4of6_lists = {
	'announcements':[ 
		`Reminder that your team’s sprint ${sprint+1} is required, in-person, and scheduled for next Monday`, ],
	'prework':[
		'Complete through activity 10 prior to next class', '',
		'Be prepared breakout session on Metrics' ],
	'agenda':[
		'Metrics Breakout',
		'Prework for Next Class',
		'Lab & Programming Together' ]
}
export const se_6_4of6 = () => {
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Metrics', 
			'In this breakout session we will explore Metrics:', [
				'Software Quality, Architecture Quality, and Project Quality',
				'Characteristics of a Good Metric and Common Metrics for Waterfall and Agile',
				'Software Metrics Best Practices',
				'Metics that measure team output',
				'Pros and cons of our Software Engineering team metrics' ]
		)
	}

	return xyz_n_4of6(sprint, se_6_4of6_lists, se_6_5of6_lists.prework, activityList, breakout)
}

const se_6_5of6_lists = {
	'announcements':[ 
		`Reminder that your team’s sprint ${sprint+1} is required, in-person, and scheduled for next Monday`,
		'Two new MongoDB programming together tutorial added' ],
	'prework':[
		'Complete through activity 11 prior to next class', '',
		`Be prepared for Quiz ${sprint}` ],
	'agenda':[
		'Sprint Progress Polling',
		'Serverless Computing',
		'Lab & Programming Together',
		`Quiz ${sprint}` ]
}
export const se_6_5of6 = () => {
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_6_5of6_lists, sprint, activityList)
	const poll = () => { return tPrework('Sprint Progress Polling', se_6_5of6_lists.prework, sprint, activityList) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_6_6of6_lists.prework, sprint, activityList) }
	const quiz = () => { return tQuiz(sprint) }
	const serverless = () => { 
		return basicSlideWithTitle(
			'Serverless Computing', [
				'Azure Functions', 
				'Google Cloud Functions',
				'AWS Lambda'])}
	
	return completeDeck(slideDeck, [ poll, serverless, tLab, preworkNext, quiz ]) 
}

// Sprint 6 session 6 of 6
const se_6_6of6_lists = {
	'announcements':[ 
		`Your team’s sprint ${sprint+1} planning is required, in-person, and scheduled for Monday`,
		`Sprint ${sprint+1} product backlog grooming is today... come Monday with a fully groomed product backlog`,
		'Sprint 7 individual capacity has been reduced from 10 story points to 8 story points due to Thanksgiving Break',
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[
		`All sprint ${sprint} assignments due Sunday!`, '',
		'Be prepared for Backlog Grooming' ],
	'agenda':[
		'Backlog Grooming',
		'Lab' ]
}
export const se_6_6of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_6_6of6_lists, sprint, activityList)
	const backlogGrooming = () => {
		return basicSlideWithTitle(
			'Backlog Grooming', [
				`Complete epic and story backlog grooming in preparation for sprint ${sprint+1} planning on Monday`, 
				`Have a plan to complete sprint ${sprint+1} planning by the end of class on Monday`,
				`What is the appropriate individual and team capacity for sprint ${sprint+1}?` ]) 

	}
	const preworkNext = () => { return tPrework('Prework For Next Class', se_7_1of6_lists.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ backlogGrooming, preworkNext ]) 
}