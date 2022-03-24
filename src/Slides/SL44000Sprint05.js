import React from 'react'
import { renderLogo, renderHeaderAndOrderedList, renderHeader, topic, basicSlideWithTitle } from './SL00000'
import { preflightChecklist, instructorChecklist, endOfSession } from './Slide'
import { breakoutMaintenanceAndSupport } from './Breakout'

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


