import React from 'react'
import LewisUniversityLogo from './LewisUniversityLogo.png'

import { preflightChecklist, instructorChecklist, endOfSession } from './Slide'

export const SD44000_5_TTh_4_ROUTE = 'SL-44000-5-TTh-4'
export const sd44000_5_TTh_4 = () => {
	return {
		sprint: 5,
		startingSlide: 2,
		slideFunctionList: [ preflightChecklist, instructorChecklist, agenda, prework, upcomingSprintPlanning, breakoutMaintenanceAndSupport, preworkForNextClass, quiz5, endOfSession ]
	}
}

const agenda = (breakoutSessionTopic) => {
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

const prework = () => {
	return ( <div>
		{renderHeader('Prework')}
		Complete through activity 8<br /><br />
		Be prepared Breakout on Software Maintenance and Support and Fox Software Maintenance<br />
		Be prepared for Quiz 5
	</div> )
}
const upcomingSprintPlanning = () => { return renderTopicHeader('Upcoming Sprint Planning Sessions with Required Attendance') }

const breakoutMaintenanceAndSupport = () => {
	return renderBreakout({
		'title':'Maintenance & Support',
		'topics': [
			'Maintenance',
			'Support',
			'Maintenance in Waterfall and Iterative',
			'Maintenance in Agile',
			'Describe the daily activities of a support team and the impact of user base',
			'Describe the daily activities of a maintenance team and how it differs from a development team' ]
	})
}

const preworkForNextClass = () => {
	return ( <div>
		{renderHeader('Prework for Next Class')}
		Complete through activity 11 and working on 12<br /><br />

		Be prepared for Sprint 6 Backlog Grooming<br />
		Be prepared for Breakout Session on Software Metrics<br />
		Be prepared for Lab<br />
	</div> )
}

const quiz5 = () => {
	return ( <div>		
		{renderHeader('Quiz 5')}
		<p>A sincere attempt at quiz 5 is due before you leave class today.</p>
	</div> )
}

// Share functions
const renderLogo = () => {
	return (
		<div style={{display: "flex", justifyContent: "right", alignItems: "center"}}>
		<img src={LewisUniversityLogo} alt='Lewis University' width= '256'/></div>
	)
}

const renderHeaderAndOrderedList = (header, intro, list) => {
	return ( <div>
		{renderHeader(header)}
		{renderOrderedList(intro, list)}
	</div> )
}

const renderHeader = (slideTitle) => {
	const title = { fontSize:40	}
	return ( <h1 style={title}>{slideTitle}</h1> ) 
}


const agendaFooter = () => {
	const styleBodyText = { fontSize:20 }
	return (
		<p style={styleBodyText}>Discussion &amp; Questions welcome at any time but please be present with no phones or 
		email during our time together</p>
	)
}

const styleListIntro = { fontSize:20 }
const renderListIntro = (intro) => { return ( <p style={styleListIntro}>{intro}</p> ) }
const renderOrderedList = (intro, list) => {
	return ( <div>
		{renderListIntro(intro)}
		<ol>
			{renderList(list)}
		</ol>
	</div> )
}

const styleListItem = { fontSize:20 }
const renderListItem = (item) => { return (<li key={item} style={styleListItem}>{item}</li>) }
const renderList = (itemList) => { return (<div>{itemList.map(renderListItem)}</div>) }

const renderTopicHeader = (topic) => {
	const title = { textAlign:"center", fontSize:40	}
	return ( <div><br /><br /><br /><br /><br /><br /><h1 style={title}>{topic}</h1> </div>)
}

const renderBreakout = (breakoutData) => { 
	const processItem = (item) => { return (<li key={item} style={subListItem}>{item}</li>) }
	const processItemList = (itemList) => {
		return (<div>{itemList.map(processItem)}</div>)
	}

	const defaultText = { fontSize:24 }
	const title = { fontSize:36 }
	const listItem = { fontSize:24 }
	const subListItem = { fontSize:20 }
	const subList = { listStyleType:'lower-alpha' }
	
	return ( <div>
		<h1 style={title}>{breakoutData.title} Breakout</h1>
		<p style={defaultText}>In this breakout session your team will:</p>
		<ol>
			<li style={listItem}>Identify a presenter</li>
			<li style={listItem}>Discuss the following topics while the presenter summarizes the conversation:</li>
			<ol style={subList}>
				{processItemList(breakoutData.topics)}
			</ol>
			<li style={listItem}>Sit back, relax, and acknowledge the bravery and dedication of the presenter</li>
		</ol>
	</div> ) }