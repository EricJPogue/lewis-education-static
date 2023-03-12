// BugBug: Replace this file with the code in SL44000Sprint05A.js. 

import { tPreworkWithLogo } from './SLSprint00'
import { tPrework } from './SLSprint00'
import { orderedListSlide } from './SLSprint00'
import { basicSlideWithLogo } from './SLSprint00'
import { agendaSlide } from './SLSprint00'
import { basicSlide } from './SLSprint00'
import { makeSlideDeck } from './SL00000Sprint00'
import { scrumProcess } from './SLSprint00'

import { list44000Sprint04 } from '../ActivityLists/AL44000Sprint04'
import { list44000Sprint05 } from '../ActivityLists/AL44000Sprint05'

// Sprint 5 Software Engineering (SE) values.
const sprint = 5
const activityListPrevious = () => { return list44000Sprint04(sprint-1) }
const activityList = () => { return list44000Sprint05(sprint) }

// Session 1 of 6: Monday
export const se_5_1of6_PAaA = {
	'prework':[ 
		'Everything is due Sunday!', '',
		`Be prepared for Sprint ${sprint} Planning` ],
	'announcements':[ 
		`${sprint} starts now.` ],
	'agenda':[ 
		`Sprint ${sprint} Planning as a Class`,
		'Prework for Next Class',
		`Sprint ${sprint} Planning for your Team**` ]
}
export const se_5_1of6 = () => { 
	const prework = () => { return tPreworkWithLogo('Prework For Today', se_5_1of6_PAaA.prework, sprint-1, activityListPrevious) }
	const announcements =  () => { return basicSlideWithLogo( 'Announcements', ['Today is going to be challenging so let’s stay relaxed and focused']) }
	const agenda = () => { return agendaSlide(se_5_1of6_PAaA.agenda) }
	const preworkNext = () => { return tPrework('Prework For Next Class', se_5_2of6_PAaA.prework, sprint, activityList) }
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning as a Class', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprints with Discussion, Quiz, Lab, and Reflection',
			'We will complete our scrum team Discussion Board breakout session on Wednesday',
			`We will have sprint ${sprint-1} Demos and Retrospective on Friday` ])
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
	const intro = () => {
		return orderedListSlide('Sprint Planning Goal & Steps', 
			`Each team member will **request** and commit to multiple User Stories that have a total story point 
			estimate approximately equal to their sprint ${sprint} capacity by utilizing the following steps:`, [
				'Priorities and Roles',
				'“Done”',
				`Product Backlog Grooming`, 
				`Sprint ${sprint} Planning` ]
		)
	}
	const prioritiesAndRoles = () => {
		return orderedListSlide('Step 1: Priorities and Roles', 
			'Scrum priorities and associated roles include:', [
				'Customer & Product Owner',
				'Technology & Architect (optional)',
				'Process & Scrum Master' ])
	} 
	const done = () => {
		return orderedListSlide('Step 2: “Done”', 
			'Update your team’s definition of “Done” by:', [
				'Verifying your definition of Done includes that stories are deployed and available to Demo in production',
				'Including at least one team specific item (i.e. “Demoed to Product Owner” or “Test in production”)',
				'Document your definition of Done by creating a “done.md” file in the root of your product repository' ])
	} 
	const productBacklogGrooming = () => {
		return orderedListSlide('Step 3: Product Backlog Grooming', 
			'Product Owner leads your team’s Product Backlog Grooming of stories so that the backlog includes:', [
				'Permanent unique identifiers for each story',
				'Only valid stories',
				'Only a “small” percentage of spikes',
				'Story point estimates for each story based on “Done” and assuming that 1 story point ~ 1 hour effort',
				'Updated or split stories for any story that is too large to complete in a single sprint',
				'Force ranked stories',
				`More estimated stories than your team can get Done in sprint ${sprint}` ])
	}
	const planning = () => {
		return orderedListSlide('Step 4: Sprint Planning', 
			'Create your team’s Sprint Backlog by:', [
				'Team members requesting highest priority stories', 
				`Product Owner **Moving** requested highest priority stories to the Sprint ${sprint} Backlog`,
				'Assigning each story to a **single** team member',
				'Maintaining the force ranking of stories as they are moved to the Sprint Backlog',
				`Creating the team’s **immutable** Sprint ${sprint} Backlog`,
				'Documenting the Sprint Backlog including team capacity plus stories and story points committed',
				'Making commitments while recalling that it is okay to be wrong, but not okay to be ambiguous' ])
	}

	return makeSlideDeck([ prework, announcements, agenda, sprintPlanning, activitiesReview, planningBreakout, preworkNext, 
		intro, scrumProcess, prioritiesAndRoles, done, scrumProcess, productBacklogGrooming, scrumProcess, planning ])
}

// Session 2 of 6: Wednesday
const se_5_2of6_PAaA = {
	'announcements':[ 
		'What is the last day to withdraw from Spring, 2023 16-week classes with a grade of “W”' ],
	'prework':[
		'Complete through activity 5 prior to next class', '',
		`Be prepared Discussion Board ${sprint}`,
		'Be prepared for Sprint Planning (continued)' ],
	'agenda':[
		`Discussion Board ${sprint} as a scrum team`,
		'Confirm no Demos Schedule for Next Class',
		'Prework for Next Class',
		'Review Friday’s Demo Schedule',
		'Lab & Programming Together' ]
}

/*
// BugBug: From last semester below.
// Sprint 5 Session 3 of 4
export const SD44000_5_3_of_4_ROUTE = '44000-5-3-of-4'
export const sd44000Sprint5_3of4 = () => {
	return {
		sprint: 5,
		startingSlide: 2,
		slideFunctionList: [ preflightChecklist, instructorChecklist, agenda3of4, prework3of4, 
			upcomingSprintPlanning, breakoutMaintenanceAndSupport, prework4of4, quiz5, endOfSession ]
	}
}

const agenda3of4 = () => {
	return ( <div>
		{renderLogo()}
		{renderHeaderAndOrderedList(
			'Agenda:', '', [
			'Prework for Today',
			'Upcoming Sprint Planning Sessions with Required Attendance',
			'Breakout on Software Maintenance and Support and Fox Software Maintenance',
			'Prework for Next Class',
			'Quiz 5' ]
		)}
		<br /><br />
		{agendaFooter()}
	</div>)
}

const prework3of4 = () => {
	return ( <div>
		{renderHeader('Prework for Today')}
		Complete through activity 8<br /><br />
		Be prepared Breakout on Software Maintenance and Support and Fox Software Maintenance<br />
		Be prepared for Quiz 5
	</div> )
}
const upcomingSprintPlanning = () => { return topic('Upcoming Sprint Planning Sessions with Required Attendance') }

const quiz5 = () => {
	return ( <div>		
		{renderHeader('Quiz 5')}
		<p>A sincere attempt at quiz 5 is due before you leave class today.</p>
	</div> )
}

const prework4of4 = () => {
	return basicSlideWithTitle('Prework for Today', [
		'Complete through activity 11 and working on 12', '',
		'Be prepared for Sprint 6 Backlog Grooming',
		'Be prepared for Breakout Session on Software Metrics', 
		'Be prepared for Lab'
	])
}

// Shared functions
const agendaFooter = () => {
	const styleBodyText = { fontSize:20 }
	return (
		<p style={styleBodyText}>Discussion &amp; Questions welcome at any time but please be present with no phones or 
		email during our time together</p>
	)
}


*/