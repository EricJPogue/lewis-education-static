import { xyz_n_1of6_lists, xyz_n_4of6, xyz_n_4of6_PAaA, xyz_n_5of6, tNoClassToday } from './SL00000Sprint00'
import { orderedListSlide } from './SLSprint00'

import { se_8_1of6_PAaA } from './SL44000Sprint08'

import { submissionPercentage, tPrework, retrospectiveIntroduction, basicSlideWithTitle } from './SLSprint00'
import { checklistAnnouncementsPreworkAndAgenda, completeDeck, tLab } from './SL00000Sprint00'

import { tPreworkWithLogo } from './SLSprint00'
import { basicSlideWithLogo } from './SLSprint00'
import { agendaSlide } from './SLSprint00'
import { basicSlide } from './SLSprint00'
import { makeSlideDeck } from './SL00000Sprint00'
import { insertInto } from './SLSprintPlanning'
import { sprintPlanningSlideDeck } from './SLSprintPlanning'

import { breakoutStandard } from './SLSprint00'

import { list44000Sprint06 } from '../ActivityLists/AL44000Sprint06'
import { list44000Sprint07 } from '../ActivityLists/AL44000Sprint07'

// Software Engineering (SE) sprint 7 global values.
const sprint = 7
const activityListPrevious = () => { return list44000Sprint06(sprint-1) }
const activityList = () => { return list44000Sprint07(sprint) }

// Session 1 of 6: Monday
export const se_7_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const se_7_1of6 = () => { return [ tNoClassToday ] }

// Session 2 of 6: Wednesday
export const se_7_2of6_PAaA = xyz_n_1of6_lists(sprint)
export const se_7_2of6 = () => { 
	const prework = () => { return tPreworkWithLogo('Prework For Today', se_7_2of6_PAaA.prework, sprint-1, activityListPrevious) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', se_7_2of6_PAaA.announcements) }
	const agenda = () => { return agendaSlide(se_7_2of6_PAaA.agenda) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_7_2of6_PAaA.prework, sprint, activityList) }
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning as a Class', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprints with Discussion, Quiz, Lab, and Reflection',
			'We missed Monday due to the Easter Holiday Recess',
			'Demos will be occurring Friday... including Aidan',
			'We will complete our scrum team Discussion Board on Friday',
			`We will have sprint ${sprint-1} Retrospective on Friday also if possible` ])
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

// Session 3 of 6: Friday
const se_7_3of6_PAaA = {
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Demos & Retrospectives' ],
	'announcements':[ 
		'Fall 2023 registration is process',
		'Charlie Brown at the Lewis Theater this weekend' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Class Retrospective',
		`Scrum Team Sprint ${sprint-1} Demos`,
		'Best-of-the-best Scrum Team Demo',
		`Scrum Team Sprint ${sprint-1} Retrospective`,
		`Scrum Team report-outs for Sprint ${sprint-1} Retrospective` ]
}
export const se_7_3of6 = () => { 
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:26, submitted:24 },
			{ name: 'Quiz', due:26, submitted:26 },
			{ name: 'Lab', due:26, submitted:25 },
			{ name: 'Reflection', due: 26, submitted: 25 }
		])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
		'Feedback from Assignments & Reflections', [
		`Okay Sprint ${sprint-1} submission percentage... it’s that time of the year`,
		'It’s that time of the year for me too... I am running substantially behind on grading', 
		'Bootstrap is the legacy your class will leave for future Software Engineering classes', 
		'I am concerned about sprint planning participation', 
		'Very well done!... this is hard!' ])
	}
	const scrumTeamDemos = () => {
		return orderedListSlide('Scrum Team Demos', 
			'How do/will your team handle Demos?', [
			'Did you complete and create an artifact for your Demos?',
			'Aidan Interactive Rendering Demo', 
			'What is your team’s “Best-of-the-best” demo... as time allows' ])
	}
	const scrumTeamRetrospective = () => {
		return orderedListSlide('Scrum Team Retrospective',
			'What is the highest priority Continuous Improvement action for your team?', [
			`What will your team need to do to guarantee Sprint ${sprint+1} planning is complete on the first day of the Sprint?`,
			'Do we need to do something different to make sure that team members are here in person for sprint planning?',
			'What is the highest priority Continuous Improvement item for your team... will you make it a story in the future?' ])
	}

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_7_3of6_PAaA, sprint, activityList)
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const preworkNext = () => { return tPrework('Prework For Next Class', se_7_4of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [retrospectiveInto, metricsSubmissionPercentage, retrospective, scrumTeamDemos, scrumTeamRetrospective, preworkNext])
}

// Sprint 7 session 4 of 6: Monday
const se_7_4of6_PAaA = xyz_n_4of6_PAaA(sprint, 
	'Complete through activity 8 prior to next class', 
	'Project Management, Scrum, Pairs, and Version Control')
export const se_7_4of6 = () => { 
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Project Management, Scrum, Pairs, and Version Control', 
			'In this breakout session we will explore Project Management, Scrum, Pairs, and Version Control:', [
				'Team sizes, SDLCs, and key Scrum Roles & Rituals',
				'Project Managers, Project Management, and the Six Phases of a Project',
				'Priority of specialized vs generalized skills in Agile vs Waterfall or Iterative',
				'Configuration management, version control, merge conflicts, and branching',
				'Reporting and fixing bugs: The five R’s', 
				'Paired Programming',
				'The two most important books about managing people (according to the authors)' ]
		)
	}
	
	return xyz_n_4of6(sprint, se_7_4of6_PAaA, se_7_5of6_PAaA.prework, activityList, breakout)
}

// Sprint 7 session 5 of 6: Wednesday
const se_7_5of6_PAaA = {
	'prework':[
		'Complete through activity 9 prior to next class', '',
		`Be prepared for Lab & Quiz ${sprint}` ],
	'announcements':[ 
		`Monday is sprint ${sprint+1} planning with in-person attendance required`,
		'In retrospect several Quiz 6 questions were really bad questions', 
		'How would a good scrum team handle sprint 9 planning?'],
	'agenda':[
		'Backlog Grooming',
		'Lab',
		`Quiz ${sprint}` ]
}
export const se_7_5of6 = () => {
	const backlogGrooming = () => {
		return basicSlideWithTitle(
			'Backlog Grooming', [
				`Start backlog grooming in preparation for sprint ${sprint+1} planning on Monday`, 
				`Have a plan to complete sprint ${sprint+1} planning by the end of class on Monday`,
				`What is the appropriate individual and team capacity for sprint ${sprint+1}?` ]) 

	}
	const slides = xyz_n_5of6(sprint, se_7_5of6_PAaA, se_7_6of6_lists.prework, activityList)
	const agendaSlide = 3
	slides.splice(agendaSlide+1, 0, backlogGrooming)
	return slides 
}

// Sprint 7 session 6 of 6: Friday
const se_7_6of6_lists = {
	'prework':[
		`All sprint ${sprint} assignments due Sunday!`, '',
		'Team members who can not attend Friday should submit their Backlog Grooming stories prior to class on Friday', 
		'Be prepared to complete Backlog Grooming' ],
	'announcements':[ 
		`Recall that Monday in-person attendance is required for your team’s sprint ${sprint+1} planning`,
		`All sprint ${sprint} assignments due Sunday!` ],
	'agenda':[
		'Backlog Grooming',
		'Lab' ]
}
export const se_7_6of6 = () => { 
	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_7_6of6_lists, sprint, activityList)
	const backlogGrooming = () => {
		return basicSlideWithTitle(
			'Backlog Grooming', [
				`Complete backlog grooming in preparation for sprint ${sprint+1} planning on Monday`, 
				`Have a plan to complete sprint ${sprint+1} planning by the end of class on Monday`,
				`What is the appropriate individual and team capacity for sprint ${sprint+1}?` ]) 
	}
	const preworkNext = () => { return tPrework('Prework For Next Class', se_8_1of6_PAaA.prework, sprint, activityList) }
	const slideDeckWithPrework = completeDeck(slideDeck, [ backlogGrooming, tLab, preworkNext ]) 

	const insertIndex = 5
	return insertInto(slideDeckWithPrework, sprintPlanningSlideDeck(sprint), insertIndex)
 }

 