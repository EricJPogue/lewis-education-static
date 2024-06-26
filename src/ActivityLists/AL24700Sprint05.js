import React from 'react'
import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, 
	finalProjectsAndMoreResponsibility, closing, estimated } from './AL00000Sprint00'
import { oreillyPlaylistWeb, internalLink } from '../DataAndAPIs/Links'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'
import { mapManiaVersion2Link } from '../Activities/MapMania'

export const al24700Sprint05 = () => {
	const sprint = 5
	return ( <div>
		<h5>Sprint 5: User Experience, Intermediate JavaScript, Final Project Proposals, and Databases</h5>
		<p>Wow! We made it to the halfway point. I hope you enjoyed creating our initial version Map Mania. This sprint 
		we are going to focus on enhancing Map Mania by creating version 2 of the product that implements the remaining
		game playing features. It is impressive what you can create with a powerful application programming interface (API) 
		like Google Maps.</p>

		{finalProjectsAndMoreResponsibility()}
		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Understand User Experience and how it relates to User Interface Design</li>
			<li>Utilize Intermediate JavaScript to access Application Programming Interfaces (APIs)</li>
			<li>Create sophisticated Web applications using the Google Maps API</li>
			<li>Understand Relational Databases and the SQL language</li>
		</ul>  

		{list24700Sprint05(sprint)}
	</div> )
}

export const list24700Sprint05 = (sprint) => {
	const sebestaChapter13Lecture = () => { return internalLink('lecture', '/activity/sebesta-chapter-13') }
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, mapManiaVersion2Link(), oreillyPlaylistWeb())}
			<li>Within {oreillyPlaylistWeb()} read “Learning Web Development” Chapter 7 The Data Store while updating Amazeriffic</li>
			<li>Complete {mapManiaVersion2Link()} requirements 5 & 6{estimated('6 hours')}</li>

			{initialPost(sprint)}
			<li>Review Database Access through the Web {sebestaChapter13Lecture()}</li>
			<li>Complete {finalProjectProposalLink()}{estimated('2 hours')}</li>
			{standardActivitiesClosing(sprint, mapManiaVersion2Link(), '6 hours')}
		</ol>
		{closing(sprint)}
	</div> )
}

// Certified for SU22 (06/03/2022)
// Certified for FA22 (10/21/2022)

// Todo: Replace Sebesta Database Access through the Web (chapter 13)... with what? I don't know. Maybe just focus on MongoDB?


