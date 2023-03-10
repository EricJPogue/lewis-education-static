// BugBug: Replace this file with the code in SL44000Sprint05A.js. 

import { xyz_n_1of6_lists, xyz_n_1of6 /*, tLab */} from './SL00000Sprint00'

/*
import { checklistAnnouncementsPreworkAndAgenda, completeDeck } from './SL00000Sprint00'
import { tPrework, bulletListSlide, tDiscussionBreakout } from './SLSprint00'

import { submissionPercentage, retrospectiveIntroduction, orderedListSlide, sprintDemos, sprintDemosIntro, demoAssignment } from './SLSprint00'

import { breakoutStandard } from './SLSprint00'
import { tQuiz } from './SLSprint00'

import { se_6_1of6_lists } from './SL44000Sprint06'


*/ 

import { list44000Sprint04 } from '../ActivityLists/AL44000Sprint04'
import { list44000Sprint05 } from '../ActivityLists/AL44000Sprint05'

// Sprint 5 Software Engineering (SE) values.
const sprint = 5
const activityListPrevious = () => { return list44000Sprint04(sprint-1) }
const activityList = () => { return list44000Sprint05(sprint) }

// SE Sprint 5 session 1 of 6: Monday
export const se_5_1of6_lists = xyz_n_1of6_lists(sprint)
export const se_5_1of6 = () => { return xyz_n_1of6(sprint, se_5_1of6_lists.prework, activityListPrevious, se_5_1of6_lists.agenda, se_5_2of6_lists.prework, activityList) }


// SE Sprint 5 session 2 of 6: Wednesday
const se_5_2of6_lists = {
	'announcements':[ 
		'Friday, November 4 is the last day to withdraw from Fall 16-week classes with a grade of “W”',
		'Any other announcements?' ],
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

export const testFunction = () => { }

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