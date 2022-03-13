import React from 'react'

import LewisUniversityLogo from './LewisUniversityLogo.png';

const BASE_SLIDE_ROUTE = '/slide/'
export class Slide extends React.Component {
	renderSlide = () => {
		const route = this.props.match.params.reference
		switch(route) {
			case PREFLIGHT_CHECKLIST_ROUTE: return preflightChecklist()
			case INSTRUCTOR_CHECKLIST_ROUTE: return instructorChecklist()
			default: return null
		}
	}
	
	render() { return ( <div>{this.renderSlide()}</div> ) 	}
}

const PREFLIGHT_CHECKLIST_ROUTE = 'preflight-checklist'
const preflightChecklist = () => {
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
const instructorChecklist = () => {
	return ( <div>
		{renderLogo()}
		{renderHeaderAndBulletList(
			'Instructor Checklist', INSTRUCTOR_CHECKLIST_ROUTE,
			'In preparation for class:', [
			'Load polls as needed',
			'Set camera, microphone, and speakers',
			'Share desktop in Zoom session',
			'Review that recordings are opportunistic and available in our Blackboard shell',
			'Open the Activity List, open the Agenda, and Start recording' ]
		)}
	</div> )
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

const styleListIntro = { fontSize:20 }
const renderListIntro = (intro) => { return ( <p style={styleListIntro}>{intro}</p> ) }

const styleListItem = { fontSize:20 }
const renderListItem = (item) => { return (<li key={item} style={styleListItem}>{item}</li>) }
const renderList = (itemList) => { return (<div>{itemList.map(renderListItem)}</div>) }