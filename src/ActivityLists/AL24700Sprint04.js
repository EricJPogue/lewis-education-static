import React from 'react'
import { NavLink } from 'react-router-dom';

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost } from './AL00000Sprint03'
import { StandardActivities, StandardActivitiesClosing, Closing  } from './AL00000Sprint04'

import { oreillyPlaylistWeb, successfulProgrammer, internalLink } from '../Links'
import { MapManiaVersion2, complete, ReviewProgrammingActivity, MapManiaLite } from './ProgrammingAssignments'


const googleMapsJavaScriptAPIOverview = () => { return internalLink('Google Maps JavaScript API', 'https://developers.google.com/maps/documentation/javascript/overview')}

export const al24700Sprint04 = () => {
	return (

<div>
<h5>Sprint 4: Map Mania, JavaScript, XML, and JSON, 
	Google Maps API, and Map Mania</h5>

<p>Sprint 4. Where does the time go? I hope you enjoyed Map Mania v1. This sprint we will be focused on
delivering Map Mania v2. We will also be introducing two new topics this week “Dynamic Documents with
JavaScript” and “Introduction to XML.” You will also notice that we start to depart from the text book in this
sprint by focusing on JSON in additional to XML.</p>

<p>**I think that you will enjoy our Map Mania programming project. We will be completing Map Mania version 1 this
sprint and completing Map Mania version 2 next sprint. Although the Google Maps JavaScript API can be daunting
at first, I think you will enjoy what you are able to create using it.</p>

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>**Effectively utilize the Google Maps JavaScript API</li>
	<li>Build dynamic web applications using more sophisticated JavaScript</li>
    <li>Add and change HTML elements on the fly utilizing JavaScript</li>
	<li>Develop basic JSON and XML data </li>
	<li>Understand drag-and-drop functionality</li>
	<li>Create our own web service to publish information about ourselves</li>
</ul>  

<p>This week’s activity list remains focused on giving you time for version 2 of Map Mania. It's a challenging and 
hopefully interesting project. Be sure to start early and you will likely need to experiment and look for outside 
references and tutorials in order to create something you are proud of building. This is how real-world development 
works.</p>

{ActivitiesListIntro()}
<ol>
	<li>{/* Where should this activity go in sprint 3? */}Review the {googleMapsJavaScriptAPIOverview()}</li>
	{ReviewProgrammingActivity(MapManiaLite)}
	{StandardActivities(MapManiaVersion2, oreillyPlaylistWeb(), 4)}
	<li>{complete(MapManiaLite)}</li>
	<li>Read Sebesta chapter 6 on Dynamic Documents with JavaScript, review the associated <NavLink to='/activity/sebesta-chapter-06'>lecture</NavLink>, and review the <a href='http://sebesta-examples.azurewebsites.net/'>examples</a></li>

	{InitialPost(4)}
	<li>Read Sebesta chapter 7 on XML and Web Services and review the associated <NavLink to='/activity/sebesta-chapter-07'>lecture</NavLink></li>
	<li>Read <a href='https://www.infoworld.com/article/3222851/javascript/what-is-json-javascript-object-notation-explained.html' target='_blank' rel='noopener noreferrer'>What is JSON? JavaScript Object Notation explained</a></li>
    <li>Complete <a href='https://www.w3schools.com/js/js_json_intro.asp' target='_blank' rel='noopener noreferrer'>JSON Introduction</a></li>	

	{StandardActivitiesClosing(MapManiaVersion2, 4)}
	<li>Review {successfulProgrammer()}</li>
</ol>
{Closing()}
</div>

	)
}


