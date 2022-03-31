import React from 'react'
import { getClassIDfromURL } from '../data/ClientDataAPIs'
import { getCurrentSprintBase1 } from '../data/ClientDataAPIs'

import LewisUniversityLogo from './LewisUniversityLogo.png'

const BASE_SLIDE_ROUTE = '/slide/'
export class Slide extends React.Component {
	renderSlide = () => {
		// console.log(this.props.match.params.reference)
		const route = this.props.match.params.reference

		switch(route) {
			case PREFLIGHT_CHECKLIST_ROUTE: return preflightChecklist()
			case INSTRUCTOR_CHECKLIST_ROUTE: return instructorChecklist()
			case CURRENT_SPRINT_ACTIVITY_LIST_ROUTE: return currentSprintActivityList()
			case AGENDA_SPRINT_PLANNING_ROUTE: return agendaSprintPlanning(getCurrentSprintBase1())
			case AGENDA_SPRINT_REVIEW_ROUTE: return agendaSprintReview(getCurrentSprintBase1())
			case MWF_SESSION_1_PREWORK_ROUTE: return mwfSession1Prework()
			case MWF_SESSION_2_PREWORK_ROUTE: return mwfSession2Prework()
			case SPRINT_PLANNING: return sprintPlanning()
			case DISCUSSION_5_ROUTE: return discussionSE5('5')
			case DISCUSSION_5_BREAKOUT_ROUTE: return discussionSE5Breakout('5')
			default: return null
		}
	}
	
	render() { return ( <div>{this.renderSlide()}</div> ) 	}
}

const PREFLIGHT_CHECKLIST_ROUTE = 'preflight-checklist'
export const preflightChecklist = () => {
	return ( <div>
		{renderLogo()}
		{renderHeaderAndBulletList(
			'Preflight Checklist', INSTRUCTOR_CHECKLIST_ROUTE,
			'In preparation for class:', [
			'Sign into our Blackboard course shell',
			'Sign into our Zoom session through the Zoom link in our Blackboard course shell',
			'Make sure that you can hear the conversation, see shared desktops, and view chat topics',
			'Be prepared to share your computer screen',
			'Be prepared to utilize a headset with a microphone',
			'Optionally leave your camera on to help make our class more interactive']
		)}
		{renderBulletList(
			'In-person participants also:', [
			'Make sure that your microphone and speakers are muted or off so that we don’t get an echo',
			'Sit in a good spot near the classroom ceiling microphones if possible',
			'Log into our campus wireless network as needed' ]
		)}
	</div> )
}

const INSTRUCTOR_CHECKLIST_ROUTE = 'instructor-checklist'
export const instructorChecklist = () => {
	return ( <div>
		{renderLogo()}
		{renderHeaderAndBulletList(
			'Instructor Checklist', AGENDA_SPRINT_REVIEW_ROUTE,
			'In preparation for class:', [
			'Load polls as needed',
			'Set camera, microphone, and speakers',
			'Share desktop in Zoom session',
			'Review that recordings are opportunistic and available in our Blackboard shell',
			'Open the Activity List, open the Agenda, and Start recording' ]
		)}
	</div> )
}

const agendaFooter = () => {
	return (
		<p style={styleBodyText}>Discussion &amp; Questions welcome at any time but please be present with no phones or 
		email during our time together</p>
	)
}

const AGENDA_SPRINT_PLANNING_ROUTE = 'agenda-sprint-planning'
export const agendaSprintPlanning = (sprint) => {
	return ( <div>
		{renderLogo()}
		{renderHeaderAndOrderedList(
			'Agenda:', MWF_SESSION_1_PREWORK_ROUTE, '', [
			'Prework',
			`Sprint ${sprint} Planning`,
			`Breakout Session for ${sprint} Planning`,
			'Review Demo Schedule for Wednesday',
			'Prework for Next Class' ]
		)}
		<br /><br />
		{agendaFooter()}
	</div> )
} 

const DISCUSSION_5_BREAKOUT_ROUTE = 'discussion-se-breakout'
const discussionSE5Breakout = (sprint) => {
	return ( <div>
		{renderHeader(`Breakout: Discussion ${sprint}`, null)}
		{discussionFinalProjects()}<br /><br /><br />
		{breakoutNoteExample(sprint)}
	</div>)
}

const DISCUSSION_5_ROUTE = 'discussion-5'
const discussionSE5 = (sprint) => {
	return ( <div>
		{renderHeader(`Discussion ${sprint}`, null)}
		{discussionFinalProjects()}
		{discussionFooter()}
	</div> )
}

const discussionFinalProjects = () => {
	return ( <div>
	{renderOrderedList(`In order to assist us in developing our Final Project proposals we will utilize this 
	discussion to share our Final Project ideas. In your initial discussion post provide a summary of the 
	application that you will be developing including:`, [
	'The team working on the project (this may be just you)', 
	'The initial application name (in CamelCase with no spaces)',
	'At least three of the key features that you envision developing in the application'])}
	</div>)
}

const breakoutNoteExample = (sprint) => {
	return ( <div>
		<div style={styleBodyText}>
		<em><u>Required Notes Format:</u></em><br />
		Team: FluffyPenguins<br />
		Discussion: {sprint}<br />
		Participants: Eric Pogue (note taker), Chanda Rubin (presenter), and Ted Danson
		</div>
		{renderOrderedList('Key discussion points:', ['Discussion point 1', 'Discussion point 2', 'Discussion point 3'])}
	</div>)
}

const discussionFooter = () => {
	return (
		<p style={styleBodyText}><br /><i>Your initial post is due by the end of the day on the first Sunday of the sprint and your response to at 
			least two of classmates' posts is due be the end of the sprint.</i></p>
	)
}

const AGENDA_SPRINT_REVIEW_ROUTE = 'agenda-sprint-review'
const agendaSprintReview = (sprint) => {
	return ( <div>
		{renderLogo()}
		{renderHeaderAndOrderedList(
			'Agenda', MWF_SESSION_2_PREWORK_ROUTE, 'Topics for today include:', [
			'Prework',
			`Sprint ${sprint} Demos`,
			`Sprint ${sprint} Retrospective`,
			`Breakout Session: Sprint ${sprint} Planning`,
			'Prework for Next Class' ]
		)}
		<br /><br />
		{agendaFooter()}
	</div> )
} 

const styleBodyText = { fontSize:20 }
const MWF_SESSION_1_PREWORK_ROUTE = 'mwf-session-1-prework'
const mwfSession1Prework = () => {
	// Todo: Add be prepared for sprint demos on Wednesday to prework.
	return ( <div>
		{renderLogo()}
		{renderHeader('Prework for Today', SPRINT_PLANNING )}
		<p style={styleBodyText}><em>Everything is due the Sunday before we get back from Spring Break!</em></p>
		<p style={styleBodyText}>Be prepared for sprint 5 planning</p>
	</div>)
}

const MWF_SESSION_2_PREWORK_ROUTE = 'mwf-session-2-prework'
const mwfSession2Prework = () => {
	// Todo: Add be prepared for sprint demos on Wednesday to prework.
	return ( <div>
		{renderLogo()}
		{renderHeader('Prework', SPRINT_PLANNING )}
		<p style={styleBodyText}>Complete through activity 4</p>
		<p style={styleBodyText}>Those scheduled to demo on Wednesday please be a couple of minutes early to class</p>
	</div>)
}

const SPRINT_PLANNING = 'sprint-planning' 
const sprintPlanning = () => {
	let sprint = getCurrentSprintBase1()
	return ( <div>
		<br />
		{renderHeader(`Sprint ${sprint} Planning`, CURRENT_SPRINT_ACTIVITY_LIST_ROUTE)}
		<p style={styleBodyText}>Very similar to previous sprints</p>
		<br />
		{renderBulletList(`New in sprint ${sprint}`, [
			'We will be developing our Final Project Proposals with an eye toward sprints 7 and 8',
			'More individual responsibility' ])}
	</div>)
}

const CURRENT_SPRINT_ACTIVITY_LIST_ROUTE = 'current-sprint-activity-list'
const currentSprintActivityList = () => {
	window.location.assign(`?cpsc=${getClassIDfromURL()}#/sprint/${getCurrentSprintBase1()}`);
}

const renderLogo = () => {
	return (
		<div style={{display: "flex", justifyContent: "right", alignItems: "center"}}>
		<img src={LewisUniversityLogo} alt='Lewis University' width= '256'/></div>
	)
}

const headerClicked = (input) => {
	// Todo: Consider updating this so that it gets the current sprint instead of sprint 1 (which is passed into the function).
	// Todo: Introduce a feature the pulls up the current sprint Activity list.
	// Todo: Update the Blackboard course shells so they reference "Activity list" instead of "Todo list."
	// Todo: Implement link to current sprint Activity list **appropriately** in Blackboard shells (consider why a 
	//     student might NOT want to be forwarded to the current shell).
	window.location.assign('#'+BASE_SLIDE_ROUTE+input);	
}

const renderHeader = (slideTitle, clickRoute) => {
	const title = { fontSize:40	}
	return ( <h1 style={title} onClick={() => headerClicked(clickRoute)}>{slideTitle}</h1> ) 
}

const renderTopicHeader = (topic) => {
	const title = { textAlign:"center", fontSize:40	}
	return ( <div><br /><br /><br /><br /><br /><br /><h1 style={title}>{topic}</h1> </div>)
}

export const endOfSession = () => {
	const title = { textAlign:"center", fontSize:40	}
	return ( <div style={{backgroundColor: '#d3d3d3'}} ><br /><br /><br /><br /><br /><br /><br /><br /><br /><h1 style={title}>End of Session</h1> <br /><br /><br /><br /><br /><br /><br /><br /><br /></div>)
}

const renderHeaderAndBulletList = (header, route, intro, list) => {
	return ( <div>
		{renderHeader(header, route)}
		{renderBulletList(intro, list)}
	</div> )
}

const renderBulletList = (intro, list) => {
	const squareType = { listStyleType:'square' }
	return ( <div>
		{renderListIntro(intro)}
		<ul style={squareType}>
			{renderList(list)}
		</ul>
	</div>)
}

const renderHeaderAndOrderedList = (header, route, intro, list) => {
	return ( <div>
		{renderHeader(header, route)}
		{renderOrderedList(intro, list)}
	</div> )
}

const renderOrderedList = (intro, list) => {
	return ( <div>
		{renderListIntro(intro)}
		<ol>
			{renderList(list)}
		</ol>
	</div> )
}

const styleListIntro = { fontSize:20 }
const renderListIntro = (intro) => { return ( <p style={styleListIntro}>{intro}</p> ) }

const styleListItem = { fontSize:20 }
const renderListItem = (item) => { return (<li key={item} style={styleListItem}>{item}</li>) }
const renderList = (itemList) => { return (<div>{itemList.map(renderListItem)}</div>) }

// Slides for MWF Sprint 5 Session 4
const agendaMWF5_4 = (sprint, breakoutSessionTopic) => {
	return ( <div>
		{renderLogo()}
		{renderHeaderAndOrderedList(
			'Agenda:', '', '', [
			'Prework',
			'Important Upcoming Dates',
			`Breakout session on ${breakoutSessionTopic}`,
			'Prework for Next Class',
			'Programming Together' ]
		)}
		<br /><br />
		{agendaFooter()}
	</div>)
}

// Slides for MWF Sprint 5 Session 4 ICS
export const agendaMWF5_4_ICS = (sprint) => {
	return agendaMWF5_4(sprint, '“Computer Science Illuminate” Networks')
}

export const preworkMWF5_4ISC = () => {
	return ( <div>
		{renderHeader('Prework')}
		<p>Complete through activity 9 prior to next class</p>
		<p>Be prepared to discuss “Computer Science Illuminated” Networks</p>
	</div> )
}

export const breakoutMWF5_4ICS = () => { return renderTopicHeader('Breakout Session on “Computer Science Illuminate” Networks') }
export const MWF5_4_UpcomingDates = () => { return renderTopicHeader('Important Upcoming Dates') }

export const MWF5_5ISCPrework = () => {
	return ( <div>
		{renderHeader('Prework')}
		<p>Complete through activity 10 prior to next class</p>
		<p>Be prepared for Quiz 5</p>
	</div> )
}


export const discussionSE6 = () => {
	const sprint = 6
	return ( <div>
		{renderHeader(`Breakout for Discussion ${sprint}`, null)}
		{discussionMetrics()}<br />
		{breakoutNoteExample()}
	</div> )
}

const discussionMetrics = () => {
	return ( <div>
	{renderOrderedList(`In order to assist us in completing our sprint 6 metrics in Lab 6 we will utilize this 
	discussion time to complete the Capacity and Committed portions of your team’s “Sprint 6 Capacity, Committed, 
	Effort, and Delivered Metric”:`, [
	'Assign a note taker and presenter', 
	'Complete Discussion 6 while note taker documents discussion',
	'Share discussion notes with team',
	'Each team member pastes and submits an exact copy of the notes into their discussion board',
	'Team sits back, relaxes, and tells the note taker and presenter what I wonderful job the did' ])}
	</div> )
}

