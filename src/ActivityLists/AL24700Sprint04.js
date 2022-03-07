import React from 'react'
import { NavLink } from 'react-router-dom';

import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost } from './AL00000Sprint03'
import { StandardActivities, StandardActivitiesClosing, Closing  } from './AL00000Sprint04'

import { oreillyPlaylistWeb } from '../Links'
import { MapManiaVersion2, complete, MapManiaLite } from './ProgrammingAssignments'

export const al24700Sprint04 = () => {
	return (

<div>
<h5>Sprint 4: Map Mania, JavaScript, XML, and JSON</h5>

<p>Sprint 4. Where does the time go? I hope you enjoyed Map Mania v1. This sprint we will be focused on
delivering Map Mania v2. We will also be introducing two new topics this week “Dynamic Documents with
JavaScript” and “Introduction to XML.” You will also notice that we start to depart from the text book in this
sprint by focusing on JSON in additional to XML.</p>

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Build dynamic web applications using more sophisticated JavaScript</li>
    <li>Add and change HTML elements on the fly utilizing JavaScript</li>
	<li>Develop basic JSON and XML data </li>
	<li>Understand drag-and-drop functionality</li>
</ul>  

<p>This week’s activity list remains focused on giving you time for version 2 of Map Mania. It's a challenging and 
hopefully interesting project. Be sure to start early and you will likely need to experiment and look for outside 
references and tutorials in order to create something you are proud of building. This is how real-world development 
works.</p>

{ActivitiesListIntro()}
<ol>
	{StandardActivities(MapManiaVersion2, oreillyPlaylistWeb(), 4)}
	<li>{complete(MapManiaLite)}</li>
	<li>Read Sebesta chapter 6 on Dynamic Documents with JavaScript, review the associated <NavLink to='/activity/sebesta-chapter-06'>lecture</NavLink>, and review the <a href='http://sebesta-examples.azurewebsites.net/'>examples</a></li>

	{InitialPost(4)}
	<li>Read Sebesta chapter 7 on XML and Web Services and review the associated <NavLink to='/activity/sebesta-chapter-07'>lecture</NavLink></li>
	<li>Read <a href='https://www.infoworld.com/article/3222851/javascript/what-is-json-javascript-object-notation-explained.html' target='_blank' rel='noopener noreferrer'>What is JSON? JavaScript Object Notation explained</a></li>
    <li>Complete <a href='https://www.w3schools.com/js/js_json_intro.asp' target='_blank' rel='noopener noreferrer'>JSON Introduction</a></li>	

	{StandardActivitiesClosing(MapManiaVersion2, 4)}
</ol>
{Closing()}
</div>

	)
}


