import React from 'react'
import { NavLink } from 'react-router-dom'
import { estimated } from './AL00000Sprint01'

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, InitialDiscussionPost, StandardActivitiesClosing, Closing } from './AL00000Sprint02'

import { gettingToKnowEachOtherLink } from '../Activities/WebGettingToKnowEachOther'
import { htmlLink } from '../Activities/HTML'
import { ToolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade'
import { SequenceSelectionAndRepetition } from '../Links'
import { oreillyPlaylistICS } from '../Links'

export const al20000Sprint02 = () => {
	return ( <div>
		
<h5>Sprint 2: Numbering Systems, Data Representation, HyperText Markup Language (HTML), and Cascading Style Sheets (CSS)</h5>

<p>Welcome to sprint 2 of Introduction to Computer Science. In sprint 2 we are going to continue our journey into data
representation and also take look at some of the key technologies that make up the Web. Our sprint activities will 
include a detailed look at two of those technologies by introducing HyperText Markup Language (HTML) and Cascading Style 
Sheets (CSS).</p>

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Develop browser-based HTML5 applications that utilize common HTML and CSS</li>
	<li>Utilize important software developer tools and services to create, update, and deploy basic software applications</li>
	<li>Understand and utilize numbering systems</li>
	<li>Understand sequences, selections, and loops (repetition)</li>
	<li>Identify, define, and discuss data representation, programming, and algorithmic thinking</li>
</ul> 

{ActivitiesListIntro()}
<ol>
	{StandardActivities(gettingToKnowEachOtherLink())}

	<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” The Information Layer and review our associated <NavLink to='/activity-dale/2'>lecture</NavLink></li>
	<li>Review {ToolsOfTheTradeLink()}</li>
	<li>Review {SequenceSelectionAndRepetition()}</li>
	<li>{InitialDiscussionPost(2)}</li>

	<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Data Representation and review our associated <NavLink to='/activity-dale/3'>lecture</NavLink></li>
	<li>Complete {htmlLink()} - Part 1{estimated('3 hours')}</li>
	<li>Within {oreillyPlaylistICS()} read “Learning Web Development” Preface through Chapter 2 while focusing on Command Line functions</li>
	{StandardActivitiesClosing(gettingToKnowEachOtherLink(), '6')}
</ol>
{Closing()}

<br />
<p>Programming Together: “HelloWorld Plus for the Web” and “HelloWorldPlus with Pictures”</p>

</div> )
}

// Todo: Move “Learning Web Development” above Part 1 of the HTML tutorial.
// Todo: Consider adding Git/GitHub activity / tutorial. 
// Todo: Consider lining up certain discussion topics with Friendly Conversation Topics.