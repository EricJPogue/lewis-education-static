import React from 'react'
import { NavLink } from 'react-router-dom'

import { InitialPost,  } from './AL00000Sprint02'
import { LearningObjectivesIntro, ActivitiesListIntro } from './AL00000Sprint03'
import { StandardActivities, StandardActivitiesClosing, Closing  } from './AL00000Sprint06'

import { oreillyPlaylistICS } from '../Links'
import { MatchmakerForTheWeb } from './ProgrammingAssignments'

export const al20000Sprint06 = () => {
	return (

<div>
<h5>Sprint 6: Networks, The Internet, Cloud Computing, and Updated Final Project Proposal</h5>

<p>Welcome to sprint 6. Sprint 6 will the continuing trend of you taking more responsibility for learning new topics.  
The new topic this sprint is JavaScript. We will utilize JavaScript along with HTML and CSS to 
create a <em>Web</em> version of <span style={{color: "red"}}> &#10084;&#10084;&#10084;</span> Matchmaker <span style={{color: "red"}}>&#10084;&#10084;&#10084;</span>.</p>

{LearningObjectivesIntro()}
<ul style={{ listStyleType:'square' }}>
	<li>Understand and utilize The Internet and World Wide Web</li>
	<li>Understand and utilize Cloud Computing</li>
	<li>Utilize JavaScript to create interactive Web applications</li>
	<li>Update our Final Project proposals and host them on the Web</li>
</ul>

{ActivitiesListIntro()}
<ol>
	{StandardActivities(MatchmakerForTheWeb, oreillyPlaylistICS(), 6 )}
	<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” The World Wide Web and review our associated <NavLink to='/activity-dale/16'>lecture</NavLink></li>
	<li>Review the following activities that were completed previously:<sup></sup></li>
	<ul style={{listStyleType:'square'}}>
		<li><NavLink to='/activity/azure-website'>Website Creation with GitHub and Microsoft Azure</NavLink></li>
		<li><NavLink to='/activity/matchmaker-python'>Matchmaker with Python</NavLink></li>
		<li><NavLink to='/activity/html'>HTML Programming - Parts 1 and 2</NavLink></li>
		<li><NavLink to='/activity/getting-to-know-each-other'>Getting to Know Each Other</NavLink></li>
		<li>Programming together with <NavLink to='/activity/programming-together'>HelloWorld</NavLink> and <NavLink to='/activity/programming-together'>HelloWorldPlus with Pictures</NavLink></li>
	</ul>

	<li>Complete <a href='https://www.w3schools.com/js/'>JavaScript tutorial from W3C</a></li>
	<li>Complete Programming Together with <NavLink to='/activity/programming-together'>MatchmakerLite for the Web - Part 1</NavLink></li>

	{InitialPost()}	
	<li>Within {oreillyPlaylistICS()} read “Learning Web App Development” chapters 1 through 4</li>

	<li>Complete Programming Together <NavLink to='/activity/programming-together'>MatchmakerLite for the Web - Part 2</NavLink></li>

	{StandardActivitiesClosing(MatchmakerForTheWeb, 6)}
</ol>
{Closing()}

</div>

	)
}
