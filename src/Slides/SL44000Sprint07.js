import { xyz_n_1of6_lists, xyz_n_1of6,xyz_n_5of6, tNoClassToday } from './SL00000Sprint00'
import { orderedListSlide } from './SLSprint00'

import { tUnderConstruction } from './SL00000Sprint00'
import { tDiscussionBreakout, submissionPercentage, tPrework, retrospectiveIntroduction } from './SLSprint00'
import { checklistAnnouncementsPreworkAndAgenda, completeDeck } from './SL00000Sprint00'

import { breakoutStandard } from './SLSprint00'

import { list44000Sprint06 } from '../ActivityLists/AL44000Sprint06'
import { list44000Sprint07 } from '../ActivityLists/AL44000Sprint07'

// Introduction to Computer Science (ICS) sprint 6 global values.
const sprint = 7
const activityListPrevious = () => { return list44000Sprint06(sprint-1) }
const activityList = () => { return list44000Sprint07(sprint) }

// Sprint 7 session 1 of 6: Monday
export const se_7_1of6_lists = xyz_n_1of6_lists(sprint)
export const se_7_1of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprint with Discussion, Quiz, Lab, and Reflection',
			'Not having class on Wednesday or Friday will be challenging',
			'We will complete our scrum team Discussion Board next Monday',
			`We will also have our sprint ${sprint-1} Demos and Retrospective next Monday` ])
	}

	return xyz_n_1of6(sprint, se_7_1of6_lists.prework, activityListPrevious, se_7_1of6_lists.agenda, se_7_4of6_lists.prework, activityList, sprintPlanning()) 
}

// Sprint 7 session 2 of 6: Wednesday
export const se_7_2of6 = () => { return [ tNoClassToday ] }

// Sprint 7 session 3 of 6: Friday
export const se_7_3of6 = () => { return [ tNoClassToday ] }

// Sprint 7 session 4 of 6: Monday
const se_7_4of6_lists = {
	'announcements':[ 
		'Welcome back! I hope you had a wonderful Thanksgiving holiday.' ],
	'prework':[
		'Complete through activity 5 prior to next class', '',
		'Be prepared for Demos & Retrospectives',
		`Be prepared Discussion Board ${sprint}` ],
	'agenda':[
		'Class Retrospective',
		`Scrum Team Sprint ${sprint-1} Demos`,
		'Best-of-the-best Scrum Team Demo',
		`Scrum Team Sprint ${sprint-1} Retrospective`,
		`Scrum Team report-outs for Sprint ${sprint-1} Retrospective`,
		`Discussion Board ${sprint} as a scrum team`,
		'Prework for Next Class' ]
}
export const se_7_4of6 = () => { 
	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:13, submitted:13 },
			{ name: 'Quiz', due:13, submitted:13 },
			{ name: 'Lab', due:13, submitted:13 },
			{ name: 'Reflection', due: 13, submitted: 13 }
		])
	}
	const retrospective = () => {
		return orderedListSlide('Class Retrospective',
		'Feedback from Assignments & Reflections', [
		'100% submission percentage = Food on finals day. Very well done!',
		'All assignments graded and posted',
		'Some confusion around finals / final project presentation date',
		'Several “It’s hard to complete work when it has dependencies / multiple people assigned” comments', 
		'Room for improvement and optimizations on team artifacts', 
		'Sending me links to your team’s non-public Google Docs is not a good plan',
		'Even a comment or two about the verboseness / tediousness of agile and scrum', 
		'Very nice work!' ])
	}
	const discussionBreakout = () => { return tDiscussionBreakout(sprint) } 
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

	const slideDeck = checklistAnnouncementsPreworkAndAgenda(se_7_4of6_lists, sprint, activityList)
	const retrospectiveInto = () => { return retrospectiveIntroduction(sprint)}
	const preworkNext = () => { return tPrework('Prework For Next Class', se_7_5of6_lists.prework, sprint, activityList) }

	return completeDeck(slideDeck, [retrospectiveInto, metricsSubmissionPercentage, retrospective, scrumTeamDemos, scrumTeamRetrospective, discussionBreakout, preworkNext])
}

// Sprint 7 session 5 of 6: Wednesday
const se_7_5of6_lists = {
	'announcements':[ 
		`Your team’s sprint ${sprint+1} planning is required, in-person, and scheduled for Monday`, ],
	'prework':[
		'Complete through activity 8 prior to next class', '',
		'Be prepared for “Project Management, Scrum, Pairs, and Version Control Systems” Breakout',
		`Be prepared for Quiz ${sprint}` ],
	'agenda':[
		'Project Management, Scrum, Pairs, and Version Control Breakout',
		'Lab and Programming Together',
		`Quiz ${sprint}` ]
}
export const se_7_5of6 = () => {
	const breakout = () => { 
		return breakoutStandard( 
			'Breakout: Project Management, Scrum, Pairs, and Version Control', 
			'In this breakout session we will explore Project Management, Scrum, Pairs, and Version Control:', [
				'Team sizes, SDLCs, and key Scrum Roles & Rituals',
				'Project Managers, Project Management, and the Six Phases of a Project',
				'Priority of specialized vs generalized skills in Agile vs Waterfall or Iterative',
				'Configuration management, version control, merge conflicts, and branching',
				'Reporting and fixing bugs: The five R’s', 
				'The two most important books about managing people (according to the authors)',
				'Paired Programming' ]
		)
	}

	const slides = xyz_n_5of6(sprint, se_7_5of6_lists, se_7_6of6_lists.prework, activityList)
	const agendaSlide = 3
	slides.splice(agendaSlide+1, 0, breakout)
	return slides 
}

// Sprint 7 session 6 of 6: Friday
const se_7_6of6_lists = {
	'announcements':[ 
		`All sprint ${sprint} assignments due Sunday!` ],
	'prework':[
		`All sprint ${sprint} assignments due Sunday!`, '',
		'Be prepared for Backlog Grooming' ],
	'agenda':[
		'Sprint Progress Polling',
		'Lab & Programming Together with Matchmaker for the Web and Final Project Proposals' ]
}
export const se_7_6of6 = () => { return [ tUnderConstruction ] }