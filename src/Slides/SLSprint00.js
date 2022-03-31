import React from 'react'
import Table from 'react-bootstrap/Table'
import LewisUniversityLogo from './LewisUniversityLogo.png'

export const checklist = () => { return [ preflightChecklist, instructorChecklist ] }

export const preflightChecklist = () => {
	return ( <div>
		{renderLogo()}
		{bulletListSlide(
			'Preflight Checklist',
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

export const instructorChecklist = () => {
	return ( <div>
		{renderLogo()}
		{bulletListSlide(
			'Instructor Checklist',
			'In preparation for class:', [
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
		<p style={styleBasic} >A sincere attempt at quiz 5 is due before you leave class today.</p>
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


export const renderHeader = (slideTitle) => {
	const title = { fontSize:40	}
	return ( <h1 style={title}>{slideTitle}</h1> ) 
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

	return (<div>
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

		{/*
		<br />
		<Table style={{width:'160px'}} className="table-borderless table-sm">
			<tbody><tr><td>Active Students:</td><td style={{textAlign:'left'}}>21</td></tr></tbody>
		</Table><br />
		*/}	
	</div> )
}