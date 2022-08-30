import React from 'react'
import Table from 'react-bootstrap/Table'

import { getClass, getClassIDfromURL } from '../DataAndAPIs/Classes'
import { externalLink } from '../DataAndAPIs/Links'
import LewisUniversityLogo from './LewisUniversityLogo.png'

export const CHECKLIST_ROUTE = 'checklist'
export const checklist = () => { return [ preflightChecklist, instructorChecklist ] }
export const defaultDeck = () => { return [ noSlidesFound ] }

const noSlidesFound = () => {
	return (<div>No slides found.</div> )
}

export const preflightChecklist = () => {
	return ( <div>
		{renderLogo()}
		{bulletListSlide(
			'Preflight Checklist',
			`In preparation for ${getClass().title}:`, [
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

export const instructorChecklist = () => {
	return ( <div>
		{renderLogo()}
		{bulletListSlide(
			'Instructor Checklist',
			`In preparation for ${getClass().title} / ${getClassIDfromURL()}`, [
			'Load polls as needed',
			'Set camera, microphone, and speakers',
			'Share desktop in Zoom session',
			'Review that recordings are opportunistic and available in our Blackboard shell',
			'Open the Activity List, open the Agenda, and Start recording' ]
		)}
	</div> )
}

export const bulletListSlide = (header, intro, list) => {
	return ( <div>
		{renderHeader(header)}
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

export const agendaSlide = (agendaItems) => {
	const styleBodyText = { fontSize:20 }
	return ( <div>
		{renderLogo()}
		{orderedListSlide('Agenda:', '', agendaItems)}
		<br /><br />
		<p style={styleBodyText}>Discussion &amp; Questions welcome at any time but please be present with 
			no phones or email during our time together</p>
	</div>)
}

export const preworkSlide = (preworkItems) => { return basicSlideWithTitle('Prework', preworkItems) }
export const preworkForNextClass = (preworkItems) => { return basicSlideWithTitle('Prework for Next Class', preworkItems) }

// Todo: Remove default spring 7 as last parameter.
export const preworkWithActivityList = (preworkItems, activityListFunction, sprint=7) => {
	return ( <div>
		{preworkSlide(preworkItems)}
		<br /><hr />
		<p style={{fontSize:20}}>Sprint {sprint} Activities List</p>
		{activityListFunction()}
	</div> )
}

// Todo: Replace all other prework slides with this slide.
export const prework = (title, preworkItems, sprint=null, activityListFunction=null) => {
	const preworkList = (sprint, activityListFunction) => {
		if ((sprint === null) || (activityListFunction === null)) return null
		return ( <div><br /><hr />
			<p style={{fontSize:20}}>Sprint {sprint} Activities List</p>
			{activityListFunction()}
		</div> )	
	}

	return ( <div>
		{basicSlideWithTitle(title, preworkItems)}
		{preworkList(sprint, activityListFunction)}
	</div> )
}

export const progressPolling = () => {
	return basicSlideWithTitle('Sprint Progress Polling', [
	'Please take a few minutes and complete our sprint progress poll.'])
}

export const topic = (topic) => {
	const title = { textAlign:"center", fontSize:40	}
	return ( <div><br /><br /><br /><br /><br /><br /><h1 style={title}>{topic}</h1> </div>)
}

export const quiz = (sprint) => {
	return ( <div>		
		{renderHeader(`Quiz ${sprint}`)}
		<p style={styleBasic} >A sincere attempt at quiz {sprint} is due before you leave class today.</p>
	</div> )
}

export const end = () => {
	return basicSlideWithTitle('End of Session', [
		'Thank you for your time and participation.'])
}

const styleBasic = { fontSize:20 }
export const basicSlideWithTitle = (title, lineList) => {
	const renderBasicSlideLine = (item) => { return (<div key={item} style={styleBasic}>{item}<br /></div>) }
	return ( <div>
		{renderHeader(title)}
		{lineList.map(renderBasicSlideLine)}
	</div> )
}
export const basicSlide = (title, lineList) => { return basicSlideWithTitle(title, lineList)}

export const basicSlideWithTitleLink = (title, link, lineList) => {
	const renderBasicSlideLine = (item) => { return (<div key={item} style={styleBasic}>{item}<br /></div>) }
	return ( <div>
		{renderHeaderLink(title, link)}
		{lineList.map(renderBasicSlideLine)}
	</div> )
}

export const renderLogo = () => {
	return (
		<div style={{display: "flex", justifyContent: "right", alignItems: "center"}}>
		<img src={LewisUniversityLogo} alt='Lewis University' width= '256'/></div>
	)
}

export const orderedListSlide = (header, intro, list) => { 
	return ( <div>
		{renderHeader(header)}
		{renderOrderedList(intro, list)}
	</div> )
}

const title = { fontSize:40	}
export const renderHeader = (slideTitle) => {
	return ( <h1 style={title}>{slideTitle}</h1> ) 
}

const renderHeaderLink  = (slideTitle, link) => {
	return ( <h1 style={title}>{externalLink(slideTitle, link)}</h1> ) 
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

// Submission Percentage
export const submissionPercentage = (assignmentData) => {
	const calculateSubmissionPercentage = (assignmentDataIn) => {
		let totalAssignmentsDue = 0
		let totalAssignmentSubmitted = 0
		for (let index=0; index<assignmentDataIn.length; index++) {
			totalAssignmentsDue += assignmentDataIn[index].due
			totalAssignmentSubmitted += assignmentDataIn[index].submitted
		}
		return Math.floor(totalAssignmentSubmitted/totalAssignmentsDue*100)
	}
	const renderBody = (assignmentDataIn) => {
		return assignmentDataIn.map((row, index) => {
			const {name, due, submitted} = row
				return (
					<tr key={index+1}>
						<td>{name}</td>
						<td style={{textAlign:'right'}}>{due}</td>
						<td style={{textAlign:'right'}}>{submitted}</td>
						<td style={{textAlign:'right'}}>{due-submitted}</td>
					</tr>
				)
		})
	}

	const sp = calculateSubmissionPercentage(assignmentData)

	return ( <div>
		{renderHeader('Submission Percentage')}
		<p>Submission Percentage is calculated by dividing the total number of assignments submitted by the 
		total number of assignments due.</p>
		<h5>Assignment Submission Percentage: <em><u>{sp}%</u></em></h5><br /><br />

		<h5>Summary:</h5>
		<Table style={{width:'500px'}} striped bordered hover size='sm'>
			<thead>
				<tr>
					<th style={{textAlign:'center'}}>Assignment</th>
					<th style={{width:'100px', textAlign:'center'}}>Due</th>
					<th style={{width:'100px', textAlign:'center'}}>Submitted</th>
					<th style={{width:'100px', textAlign:'center'}}>Missing</th>
				</tr>
			</thead>
			<tbody>{renderBody(assignmentData)}</tbody>
		</Table>
	</div> )
}

export const discussionBreakout6 = () => {
	return ( <div>
		{orderedListSlide('Breakout for Discussion 6', 
			'Please complete this breakout session as a scrum team:', [
			'Identify note taker and presenter roles',
			'Review and discuss topic',
			'Note take prepares notes and presenter prepares report out',
			'Each team member pastes and submits an exact copy of notes to their discussion board',
			'Team relaxes and tells note take and presenter how wonderful they are' ])}<br />
		{breakoutNoteExample()}
	</div> )
}

export const discussionBreakout = (sprint) => {
	return ( <div>
		{orderedListSlide(`Breakout for Discussion ${sprint}`, 
			'Please complete this breakout session as a scrum team:', [
			'Identify note taker and presenter roles',
			'Review and discuss topic',
			'Note take prepares notes and presenter prepares report out',
			'Each team member pastes and submits an exact copy of notes to their discussion board',
			'Team relaxes and tells note take and presenter how wonderful they are' ])}<br />
		{breakoutNoteExample()}
	</div> )
}

export const breakout = (slideTitle, introduction, orderedList, sectionTitle, unorderedList ) => {
	return ( <div>
		{orderedListSlide(slideTitle, introduction, orderedList)}<br />
		{renderBulletList(sectionTitle, unorderedList )}
	</div> )
}


const styleBodyText = { fontSize:20 }
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

export const activitiesReview = () => {
	return basicSlide('Review Activity List and Assignments', [
		'Please open Blackboard and review our activity list and assignments together.' ])
}

export const sprintReviewAgendaMWF = (sprint) => {
	return agendaSlide([
		'Prework for Today',
		`Sprint ${sprint-1} Demos`,
		`Sprint ${sprint-1} Retrospective`,
		`Breakouts Session on Sprint ${sprint-1}`,
		'Prework for Next Class' ])
}

export const sprintDemosIntro = () => {
	return bulletListSlide('Sprint Demo Presenters', 
		'Recall that as a presenter you should be prepared to:', [
		'Show your application running and explain what it does',
		'Talk about any challenges your faced',
		'Be prepared to share your code with classmates upon request' ])
}
export const sprintDemos = () => {
	return bulletListSlide('Sprint Demo Listeners', 
		'As a demo listener your responsibilities include:', [
		'Actively listening and watching what your classmate is demoing',
		'Come up with a meaningful yet easy to answer question to ask',
		'Clapping for the presenter when they have finished' ])
}
export const demoAssignment = () => {
	return basicSlide('Complete Demo Assignment', [
		'If you have completed your sprint demo, please also submit your lab demo assignment in Blackboard.' ])
}