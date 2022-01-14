import React from 'react'
import { NavLink } from 'react-router-dom'

import { InitialPost,  } from './AL00000Sprint02'
import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, StandardActivitiesClosing, Closing } from './AL00000Sprint03'

import { oreillyPlaylistICS, SequenceSelectionAndRepetition } from '../Links'
import { AzureWebsite } from './ProgrammingAssignments'

export const al20000Sprint03 = () => {
	let playlist = oreillyPlaylistICS()

	return (

<div>
<h5>Sprint 3: Gates and Circuits, Computing Components, and Hosting Web Application is Azure</h5>

<p>Welcome to sprint 3. I hope you enjoyed our work with HTML and CSS because we are going to be continuing that journey
by enhancing our web applications and hosting them in Microsoft Azure. We will also be learning about gates, circuits, 
and computing components.</p>

{LearningObjectivesIntro()}
<ul style={{ listStyleType:'square' }}>
	<li>Create enhanced web applications and host them in Microsoft Azure</li>
	<li>Understand and discuss gates and circuits</li>
	<li>Understand and discuss computing components</li>
	<li>Understand variables and expressions</li>
</ul>

{ActivitiesListIntro()}
<ol>
	{StandardActivities(AzureWebsite, playlist)}

	<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Gates and Circuits and review our associated <NavLink to='/activity-dale/4'>lecture</NavLink></li>
	<li>Complete <NavLink to='/activity/html'>HTML Programming - Part 2</NavLink><sup>~4 hours</sup></li>
	<li>Review {SequenceSelectionAndRepetition()}</li>
	{InitialPost(3)}
	<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Computing Components and review our associated <NavLink to='/activity-dale/5'>lecture</NavLink></li>
	<li>Study and consistently utilize the basic <NavLink to='/activity/git-commands'>Git commands and patterns</NavLink> </li>
	<li>Utilize what you learned in <NavLink to='/activity/html'>HTML Programming - Part 2</NavLink> to enhance your <NavLink to='/activity/getting-to-know-each-other'>Getting to Know Each Other</NavLink> application</li>
	<li>Deploy your enhanced version of <NavLink to='/activity/getting-to-know-each-other'>Getting to Know Each Other</NavLink> to an <NavLink to='/activity/azure-website'>Azure website</NavLink><sup>~2 hours</sup></li>

	{StandardActivitiesClosing(AzureWebsite)}
</ol>
{Closing()}
</div>

	)
}

// Add Introducing Python Preface and Chapters 3 and 4
// Todo: Verify "final comments" were removed from all assignments.

