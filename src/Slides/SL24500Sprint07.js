import { xyz_n_1of6_lists, xyz_n_1of6, xyz_n_4of6_PAaA, xyz_n_4of6, xyz_n_5of6 } from './SL00000Sprint00'
import { tNoClassToday } from './SL00000Sprint00'
import { orderedListSlide } from './SLSprint00'

import { checklistAnnouncementsPreworkAndAgenda } from './SL00000Sprint00'
import { retrospectiveIntroduction } from './SLSprint00'
import { tPrework } from './SLSprint00'
import { completeDeck } from './SL00000Sprint00'
import { sprintDemos, sprintDemosIntro, demoAssignment } from './SLSprint00'
import { tDemos } from './SL00000Sprint00'
import { tDiscussionBreakout } from './SLSprint00'
import { submissionPercentage } from './SLSprint00'
import { breakoutStandard } from './SLSprint00'

import { list24500Sprint06 } from '../ActivityLists/AL24500Sprint06'
import { list24500Sprint07 } from '../ActivityLists/AL24500Sprint07'
// import { xyz_n_6of6_PAaA } from './SL00000Sprint00'

// Introduction to Computer Science (ICS) sprint 7 global values.
const sprint = 7
const activityListPrevious = () => { return list24500Sprint06(sprint-1) }
const activityList = () => { return list24500Sprint07(sprint) }

// Session 1 of 6: Monday
export const oop_7_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const oop_7_1of6 = () => { return [ tNoClassToday ] }

// Session 2 of 6: Wednesday
export const oop_7_2of6_PAaA = xyz_n_1of6_lists(sprint)
export const oop_7_2of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning as a Class', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprints with Discussion, Quiz, Lab, and Reflection',
			'We missed Monday due to the Easter Holiday recess which is challenging',
			'Demos will be occurring Friday... including Aidan',
			'We will complete our scrum team Discussion Board on Friday',
			`We will have sprint ${sprint-1} Retrospective on Friday also if possible` ])
	}

	return xyz_n_1of6(sprint, oop_7_1of6_PAaA.prework, activityListPrevious, oop_7_2of6_PAaA.agenda, oop_7_2of6_PAaA.prework, activityList, sprintPlanning) 
}

// Session 3 of 6: Friday
const oop_7_3of6_PAaA = {
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Demos & Retrospectives' ],
	'announcements':[ 
		'Fall 2023 registration is process',
		'Charlie Brown at the Lewis Theater this weekend' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		'Lab' ]
}
export const oop_7_3of6 = () => { 
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:16, submitted:15 },
			{ name: 'Quiz', due:16, submitted:14 },
			{ name: 'Lab', due:16, submitted:15 },
			{ name: 'Reflection', due: 16, submitted: 14 }])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
		'Feedback from Assignments & Reflections', [
		`Not very good Sprint ${sprint-1} submission percentage`,
		'I am running substantially behind on grading', 
		'Can we make one final push to the end? ' ])
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

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(oop_7_3of6_PAaA, sprint, activityList)
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const preworkNext = () => { return tPrework('Prework For Next Class', oop_7_4of6_PAaA.prework, sprint, activityList) }
	return completeDeck(slideDeck, [ discussionBreakout, sprintDemosIntro, sprintDemos, tDemos, demoAssignment, retrospectiveInto, metricsSubmissionPercentage, retrospective, scrumTeamDemos, scrumTeamRetrospective, preworkNext])
}

// Session 4 of 6: Monday
const oop_7_4of6_PAaA = xyz_n_4of6_PAaA(sprint, 
	'Complete through activity 7 prior to next class', 
	'Lab with Thunderbird')
export const oop_7_4of6 = () => { 
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
	
	return xyz_n_4of6(sprint, oop_7_4of6_PAaA, oop_7_5of6_PAaA.prework, activityList, breakout)
}

const oop_7_5of6_PAaA = xyz_n_4of6_PAaA(sprint, 
	'Complete through activity 7 prior to next class', 
	'Project Management, Scrum, Pairs, and Version Control')

export const oop_7_5of6 = () => { return xyz_n_5of6(sprint, oop_7_5of6_PAaA, oop_7_6of6_PAaA.prework, activityList) }

const oop_7_6of6_PAaA = {
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Demos & Retrospectives' ]
}