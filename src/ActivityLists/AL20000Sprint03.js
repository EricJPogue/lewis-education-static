import React from 'react'
import { NavLink } from 'react-router-dom'

import { estimated } from './AL00000Sprint00'
import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivitiesWithLink, InitialPost, Closing } from './AL00000Sprint03'

import { oreillyPlaylistICS, SequenceSelectionAndRepetition, CSSW3C } from '../DataAndAPIs/Links'
import { htmlLink } from '../Activities/HTML'
import { gettingToKnowEachOtherLink } from '../Activities/WebGettingToKnowEachOther'
import { azureWebsiteLink } from '../Activities/AzureWebsite'

export const al20000Sprint03 = () => {
	const sprint = 3
	return ( <div>

<h5>Sprint 3: Gates and Circuits, Computing Components, HTML, CSS, and Hosting Web Applications in Azure</h5>

<p>Welcome to sprint 3. I hope you enjoyed our work with HTML and your introduction to CSS because we are going to be 
continuing that journey by enhancing our web applications with more sophisticated HTML and CSS while hosting your 
Web applications in Microsoft Azure so that the whole world can view your creations. We will also be learning about 
gates, circuits, and computing components.</p>

{LearningObjectivesIntro()}
<ul style={{ listStyleType:'square' }}>
	<li>Understand and discuss gates and circuits</li>
	<li>Understand and discuss computing components</li>
	<li>Utilize more more sophisticated HTML and CSS to develop enhanced Web applications</li>
	<li>Host those enhanced web applications in Microsoft Azure</li>
</ul>

{ActivitiesListIntro(sprint)}
<ol>
	{StandardActivitiesWithLink(azureWebsiteLink(), oreillyPlaylistICS())}
	<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Gates and Circuits and review our associated <NavLink to='/activity-dale/4'>lecture</NavLink></li>
	<li>Within {oreillyPlaylistICS()} review “Learning Web Development” Chapter 2 on HTML and read Chapter 3 on CSS</li>
	<li>Study and consistently utilize the basic <NavLink to='/activity/git-commands'>Git commands and patterns</NavLink> </li>
	<li>Review {SequenceSelectionAndRepetition()}</li>

	{InitialPost(sprint)}
	<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Computing Components and review our associated <NavLink to='/activity-dale/5'>lecture</NavLink></li>
	<li>Review {htmlLink()} Part 1 and complete {htmlLink()} Part 2{estimated('1 hour maximum')}</li>
	<li>Complete {CSSW3C()} tutorial{estimated('2 hours')}</li>
	<li>Utilize what you learned in “Learning Web Development” and W3C tutorials to enhance {gettingToKnowEachOtherLink()}{estimated('2 hours')}</li>
	<li>Deploy your enhanced version of {gettingToKnowEachOtherLink()} to an {azureWebsiteLink()}{estimated('2 hours')}</li>
	<li><em>Complete Discussion 3 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Quiz 3, Lab 3, and Reflection 3</em></li>
</ol>
{Closing()}

</div> )
}




