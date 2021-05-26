import React from 'react'
import { NavLink } from 'react-router-dom';

export const al24700Sprint05 = () => {
	return (

<div>
<h4>Web and Distributed Programming</h4>
<h5>Sprint 5: Distributed applications, JavaScript, Ajax, and JSON</h5>

<p><em>Wow!</em> We made it to the halfway point. I hope you enjoyed Map Mania. This week we switch gears and move into 
writing Distributed applications using JavaScript, Ajax, and JSON.</p>

<p>We will also start working on our Final Project proposals this sprint. How would you like to finishing the course by 
creating something that makes you proud? What type of a final project would you enjoy creating? Is there a final project 
that would both be interesting to create and be something you could add to your professional portfolio as you are 
looking for internships or jobs? How can I help?</p>

<p>You will also notice a continuing trend this sprint where assignments will become less prescriptive and you
will have more control <em>and responsibility</em> in determining what is done and how it is implemented.</p>

<p>Our learning objects are that by the end of the sprint we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Implement Ajax calls utilizing JavaScript and Ajax Toolkits</li>
    <li>Understand Relational Databases and the SQL language</li>
	<li>Create interactive web applications utilizing HTML, CSS, and JavaScript</li>
	<li>Develop and test shared JSON files</li>
</ul>  

<p>This week’s  programming assignment is called Mustang and is a small contact manager will take several sprints to 
complete. In Mustang version 1 we will be utilizing the Cloud and our Microsoft Azure accounts to post information about 
ourselves in JSON files that we can utilize to create a Distributed contact manager.</p>

<p>With this in mind our activities list includes:</p>
<ol>
	<li>Verify due dates by checking our course calendar <NavLink to='/calendar/5'>[link]</NavLink></li>
	<li><em>Review sprint 5 assignments including Lab 5, Quiz 5, Discussion 5, and Reflection 5</em></li>
	<li>Start working on your “Final Project Proposal” <NavLink to='/activity/final-project-proposal'>[link]</NavLink></li>
	<li>Start working on “Mustang version 1”</li>
	{/* Todo: Check if there is a Mustang lite tutorial?*/}
	<li><em>Complete “Final Project Proposal”</em> <NavLink to='/activity/final-project-proposal'>[link]</NavLink> ~2 hours</li>
	<li>Read chapter 10 of Sebesta and review our Ajax lecture <NavLink to='/activity/sebesta-chapter-10'>[video]</NavLink></li>
	<li><em>Complete your initial discussion post by the middle of the sprint</em></li>
	<li>Read chapter 13 of Sebesta and review our Database Access through the Web lecture <NavLink to='/activity/sebesta-chapter-13'>[video]</NavLink></li>
	<li><em>Complete Mustang version 1</em> ~10 hours</li>
	<li><em>Complete “Final Project Proposal” <NavLink to='/activity/final-project-proposal'>[link]</NavLink></em></li>
	<li><em>Complete and submit all sprint 5 assignments including your lab, quiz, discussion, and reflection</em></li>
</ol>


</div>

	)
}
