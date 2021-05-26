import React from 'react'
import { NavLink } from 'react-router-dom';

export const al24700Sprint02 = () => {
	return (

<div>
<h4>Web and Distributed Programming</h4>
<h5>Sprint 2: Cascading Style Sheets, JavaScript, and the Azure Cloud</h5>

<p>Welcome to sprint 2 of Web and Distributed Programming. In sprint 2 we are going to take a look at the key
technologies that make up Internet and the Web. Our sprint activities will then include a detailed look at two
of those technologies by introducing Cascading Style Sheets (CSS) and JavaScript.</p>

<p>Once again let’s start with our Learning Objectives. By the end of sprint 2 we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Compare and contrast Internet, Web, and distributed applications</li>
	<li>Implement Cascading Style Sheets to enhance web applications</li>
	<li>Understand the basics of JavaScript</li>
	<li>Utilize Git and GitHub along with Microsoft Azure to manage content and deploy web applications</li>
	<li>Begin to understand APIs and toolkits by reviewing the Google Maps JavaScript API</li>
</ul>  

<p>Below is our sprint 2 activities list. Once again they are provided in the order that I think will be the most
efficient for you and the <em>bold</em> items are graded assignments.</p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/2'>[link]</NavLink></li>
	<li><em>Review sprint 2 assignments including Lab 2, Quiz 2, Discussion 2, and Reflection 2</em></li>
	<li>Review our “Coding Standards” <NavLink to='/activity/coding-standards'>[link]</NavLink> and consistently utilize 
		them on all activities and assignments</li>
	<li>Start early and consistently work on Lab 2 and Quiz 2 throughout the sprint</li>
	<li>Read chapter 3 of Sebesta on Cascading Style Sheets (CSS) and review the associated lecture <NavLink to='/activity/sebesta-chapter-03'>[video]</NavLink></li>
	<li>Review the Sebesta HTML, CSS, and JavaScript examples <a href='http://sebesta-examples.azurewebsites.net/'>[link]</a></li>
	<li>Within Safari Books Online execute searches for HTML, CSS, JavaScript, and Git and save review the results</li>
	<li>Complete “Tools of the Trade - Part 2” <NavLink to='/activity/tools'>[link]</NavLink>~3 hours </li>
	<li><em>Make your initial Discussion 2 post by the middle of the sprint</em></li>
	<li>Read chapter 4 of Sebesta on Basic JavaScript and review the associated lecture <NavLink to='/activity/sebesta-chapter-04'>[video]</NavLink></li>
	<li>Complete “HTML Programming - Part 2” from W3C <NavLink to='/activity/html'>[link]</NavLink>~3 hours</li>
	<li>Complete “Getting to Know Each Other” <NavLink to='/activity/getting-to-know-each-other'>[link]</NavLink></li>
	<li>Complete “Azure Free Static Website” <NavLink to='/activity/azure-website'>[link]</NavLink>~3 hours</li>
	<li>Review the Google Maps JavaScript API <a href='https://developers.google.com/maps/documentation/javascript/overview' target='blank' rel='noopener noreferrer'>[link]</a></li>
	<li><em>Complete Discussion 2 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 2, Quiz 2, and Reflection 2</em></li>
</ol>
<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help.</p>
{extras()}
</div>

	)
}

const extras = () => {
	return (<div>	
		<br />
		<p>Additional suggested activities:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Review “Website Creation with GitHub and Microsoft Azure” as needed <NavLink to='/activity/azure-website'>[link]</NavLink></li>
			<li>Review Git Cheat Sheet from GitHub <a href='https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf'
				target='_blank' rel='noopener noreferrer'>[link]</a></li>
		</ul>
	</div>)
}
