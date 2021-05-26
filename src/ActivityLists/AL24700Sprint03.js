import React from 'react'
import { NavLink } from 'react-router-dom';

export const al24700Sprint03 = () => {
	return (

<div>
<h4>Web and Distributed Programming</h4>
<h5>Sprint 3: More JavaScript, Google Maps API, and Map Mania</h5>

<p>Welcome to Sprint 3. We have covered a lot in our first two sprints. Much of what we covered was preparing us
for our first complex programming assignment Map Mania. This week our topics with be JavaScript, JavaScript, and
more JavaScript. JavaScript has become the key element of creating dynamic websites and we are going to fully
embrace it this sprint.</p>

<p>I think that you will enjoy our Map Mania programming project. We will be completing Map Mania version 1 this
sprint and completing Map Mania version 2 next sprint. Although the Google Maps JavaScript API can be daunting
at first, I think you will enjoy what you are able to create using it.</p>

<p>By the end of sprint 3 we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Effectively utilize the Google Maps JavaScript API</li>
	<li>Build dynamic web applications using basic JavaScript</li>
    <li>Add buttons and text boxes to our web applications</li>
    <li>Implement event handling in our applications</li>
    <li>Utilize Azure along with Git and GitHub to quickly create and update our global websites</li>
</ul>  

<p>Below is our sprint 3 activities list. You will notice that the list is shorter than in earlier sprints. 
This is so that you can focus your time on Lab 3 and Map Mania.</p>
<ol>
	<li>Review our course calendar <NavLink to='/calendar/3'>[link]</NavLink></li>
	<li><em>Review sprint 3 assignments including Lab 3, Quiz 3, Discussion 3, and Reflection 3</em></li>
	<li>Start early and remain laser focused on “Map Mania Version 1” <NavLink to='/activity/map-mania-v1'>[link]</NavLink></li>
	<li>Review our “Coding Standards” <NavLink to='/activity/coding-standards'>[link]</NavLink> and consistently utilize 
		them on all activities and assignments</li>
	<li>Complete “Assignment Portfolio Website” <NavLink to='/activity/assignment-portfolio'>[link]</NavLink></li>
	<li>Read chapter 5 of Sebesta on JavaScript and review the associated JavaScript and HTML lecture <NavLink to='/activity/sebesta-chapter-05'>[video]</NavLink></li>
	<li>Complete “Dice Roller” <NavLink to='/activity/dice-roller'>[link]</NavLink></li>
	<li>Review the Sebesta HTML, CSS, and JavaScript examples <a href='http://sebesta-examples.azurewebsites.net/'>[link]</a></li>
	<li><em>Make your initial Discussion 3 post by the middle of the sprint</em></li>
    <li>Complete “How To Be A Successful Programmer” <NavLink to='/activity/successful-programmer'>[link]</NavLink></li>
    <li>Start looking ahead to next sprint by reviewing “Map Mania Lite” <NavLink to='/activity-web/map-mania-lite'>[video]</NavLink>~2 hours </li>
	<li><em>Complete Discussion 3 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 3, Quiz 3, and Reflection 3</em></li>
</ol>
<p>Alway feel free to drop a note note to your scrum teammates or to post something in our Class Forum discussion board 
area if you have questions. Oh yes, and treat yourself to something nice. Maybe ice cream this sprint?</p>
{extras()}
</div>

	)
}

const extras = () => {
	return (<div>	
		<br />
		<p>Additional suggested activities:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Review our class sample code by executing “git clone https://github.com/EricJPogueCourses/WEB-ExampleCode.git”</li>
			<li>Review“Website Creation with GitHub and Microsoft Azure - 2020 Supplemental Edition” (highly recommended) <NavLink to='/activity-config/git-deployment-to-azure-supplemental-2020'>[link]</NavLink></li>
			<li>Consider tutoring options<a href='https://botb.blob.core.windows.net/nvm4zqwm/cadahnn5-tutoring.pdf'
				target='_blank' rel='noopener noreferrer'>[link]</a></li> 
		</ul>
	</div>)
}