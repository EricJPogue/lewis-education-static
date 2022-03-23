import React from 'react'
import LewisUniversityLogo from './LewisUniversityLogo.png'

export const agenda = (agendaItems) => {
	const styleBodyText = { fontSize:20 }
	return ( <div>
		{renderLogo()}
		{renderHeaderAndOrderedList('Agenda:', '', agendaItems)}
		<br /><br />
		<p style={styleBodyText}>Discussion &amp; Questions welcome at any time but please be present with 
			no phones or email during our time together</p>
	</div>)
}

export const prework = (preworkItems) => { return basicSlideWithTitle('Prework', preworkItems) }
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
	const renderBasicSlideLine = (item) => { return (<div style={styleBasic}>{item}<br /></div>) }
	return ( <div>
		{renderHeader(title)}
		{lineList.map(renderBasicSlideLine)}
	</div> )
}

export const renderLogo = () => {
	return (
		<div style={{display: "flex", justifyContent: "right", alignItems: "center"}}>
		<img src={LewisUniversityLogo} alt='Lewis University' width= '256'/></div>
	)
}

export const renderHeaderAndOrderedList = (header, intro, list) => {
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