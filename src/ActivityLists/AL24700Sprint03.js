import React from 'react'
import { NavLink } from 'react-router-dom';

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, StandardActivitiesClosing, Closing } from './AL00000Sprint03'
import { InitialPost,  } from './AL00000Sprint02'
import { oreillyPlaylistWeb } from '../Links'
import { MapManiaVersion1, AssignmentPortfolioWebsite, DiceRoller, complete, ReviewProgrammingActivity, MapManiaLite } from './ProgrammingAssignments'

export const al24700Sprint03 = () => {
	let playlist = oreillyPlaylistWeb()
	return (

<div>
<h5>Sprint 3: More JavaScript, Google Maps API, and Map Mania</h5>

<p>Welcome to Sprint 3. We have covered a lot in our first two sprints. Much of what we covered was preparing us
for our first complex programming assignment Map Mania. This week our topics with be JavaScript, JavaScript, and
more JavaScript. JavaScript has become the key element of creating dynamic websites and we are going to fully
embrace it this sprint.</p>

<p>I think that you will enjoy our Map Mania programming project. We will be completing Map Mania version 1 this
sprint and completing Map Mania version 2 next sprint. Although the Google Maps JavaScript API can be daunting
at first, I think you will enjoy what you are able to create using it.</p>

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Effectively utilize the Google Maps JavaScript API</li>
	<li>Build dynamic web applications using basic JavaScript</li>
    <li>Add buttons and text boxes to our web applications</li>
    <li>Implement event handling in our applications</li>
    <li>Utilize Azure along with Git and GitHub to quickly create and update our global websites</li>
</ul>  

{ActivitiesListIntro()}
<ol>
	{StandardActivities(MapManiaVersion1, playlist)}

	{ReviewProgrammingActivity(AssignmentPortfolioWebsite, '1')}
	<li>Read chapter 5 of Sebesta on JavaScript and review the associated JavaScript and HTML lecture <NavLink to='/activity/sebesta-chapter-05'>[video]</NavLink></li>
	<li>{complete(DiceRoller)}</li>
	<li>Review <a href='http://sebesta-examples.azurewebsites.net/'>Sebesta HTML, CSS, and JavaScript examples</a></li>

	{InitialPost(3)}

    <li>Complete <NavLink to='/activity/successful-programmer'>How To Be A Successful Programmer</NavLink></li>
	{ReviewProgrammingActivity(MapManiaLite)}

	{StandardActivitiesClosing(MapManiaVersion1)}
</ol>
{Closing()}

</div>

	)
}
