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
			`In preparation for our ${getClass().title} class please:`, [
			'Sign into our Blackboard course shell',
			'Sign into Zoom through the Zoom link in our Blackboard course shell',
			'Mute your microphone and speakers as needed',
			'Be prepared to share your computer screen',
			'If you are remote, optionally leave your camera on to help make our class more interactive' ]
		)}<br />
		{renderBulletList(
			'Instructor Checklist:', [
			`Verify this is  ${getClass().title} (${getClassIDfromURL()})`,
			'Update Zoom polls and start Zoom session', 
			'Share desktop and open slides (using ”&hide-nav=y” option as needed)', 
			'Check camera, microphone, and speakers',
			'Verify recording has started automatically' ]
		)}
	</div> )
}

// Todo: Remove this function as the checklists have been consolidated.
export const instructorChecklist = () => {
	return ( <div>
		{renderLogo()}
		{bulletListSlide(
			'Instructor Checklist',
			`In preparation for ${getClass().title} section ${getClassIDfromURL()}`, [
			'Share slides with ”&hide-nav=y” option',
			'Access Zoom series and load/update polls as needed',
			'Start Zoom session',
			'Set camera, microphone, and speakers',
			'Share desktop in Zoom session',
			'Consider reviewing that recordings are opportunistic and available in our Blackboard shell',
			'Be prepared to start recording' ]
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

export const tPrework = (title, preworkItems, sprint=null, activityListFunction=null) => {
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

export const tPreworkWithLogo = (title, preworkItems, sprint=null, activityListFunction=null) => {
	return ( <div>
		{renderLogo()}
		{prework(title, preworkItems, sprint, activityListFunction)}
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

export const tQuizExpectations = () => {
	return orderedListSlide('Quiz Expectations', 
		'Quiz Expectations include:', [
		'You may use any naturally available documentation including books, notes, and web browser',
		'You may not use quiz specific content like question banks',
		'The quiz is an individual assignment so asking others would be inappropriate**',
		'You are welcome to ask me quiz or non-quiz related questions',
		'Your first sincere attempt at the quiz is expected by the end of class']) 
}

export const tQuiz = (sprint) => { return quiz(sprint) } 
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

export const basicSlideWithLogo = (title, lineList) => { 
	return ( <div>
		{renderLogo()}
		{basicSlideWithTitle(title, lineList)}
	</div>) 
}

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

// Depreciated discussionBreakout... eventually replace discussionBreakout with tDiscussionBreakout.
export const tDiscussionBreakout = (sprint) => { return discussionBreakout(sprint) }
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
		'As a presenter you should be prepared to:', [
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
export const reviewDemoSchedule = () => {
	return basicSlide('Review Demo Schedule', [
		'Review the demo schedule in preparation for our upcoming lab demos.' ])
}

export const backlogGrooming = (sprint) => {
	return basicSlide('Backlog Grooming', [
		`Complete backlog grooming in preparation for sprint ${sprint} planning.` ])
}

// Beta 
// Review code Breakout.js
export const breakoutStandard = (breakoutTitle, introduction, topicList) => {
	const styleSubListItem = { fontSize:20, listStyleType:'lower-alpha' }
	const processItem = (item) => { return (<li key={item} style={styleSubListItem}>{item}</li>) }
	const processTopicList = (itemList) => { return (<div><ol>{itemList.map(processItem)}</ol></div>) }

	return ( <div>
		<h1 style={title}>{breakoutTitle}</h1>
		<p style={styleListIntro}>{introduction}</p>
		<ol style={styleListItem}>
			<li>Assign a presenter</li>
			<li>Discuss the following topics while the presenter summarizes the conversation:</li>
			{processTopicList(topicList)}
			<li>Sit back, relax, and thank your presenter for their bravery and dedication</li>
		</ol>
	</div>)
}

export const retrospectiveIntroduction = (sprint) => {
	return orderedListSlide(`Sprint ${sprint-1} Retrospective`, 
		`This is our opportunity to look back and bring closure to sprint ${sprint-1} activities and assignments with an 
		eye toward how we each can improve individually, how we can improve a team, and how we can improve as a class.`, [])
}

export const retrospectiveBreakout = (sprint) => {
		return orderedListSlide('Breakout Session for Team Retrospective', 
			'As a scrum team consider:', [
			`How does your team feel about sprint ${sprint-1} now that it is over`,
			`What could be done to make sprint ${sprint-1} or the class overall better or more manageable`,
			'What improvements should we make as a class, team, or individual going forward' ])
}

export const scrumProcess = () => {
	const styleCreditFooter = { fontSize:20, textAlign:"center" }
	return ( <div> 
		<h1 style={title}>Scrum Process</h1>
		<img src='https://upload.wikimedia.org/wikipedia/commons/d/df/Scrum_Framework.png' alt='scrum process' />
		<p style={styleCreditFooter}>Credit {externalLink('Dr Ian Mitchell', 'https://commons.wikimedia.org/w/index.php?curid=44894952')} 
		license {externalLink('CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0')} </p>
	</div> )
}
