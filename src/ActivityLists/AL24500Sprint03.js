import React from 'react'
import { NavLink } from 'react-router-dom';

import { FaceDrawWithJava, start, complete } from './ProgrammingAssignments'
const programmingAssignment = FaceDrawWithJava


export const al24500Sprint03 = ( props ) => {
	return (

<div>
	<h4>Object-Oriented Programming</h4>
	<h5>Sprint 3: Graphical User Interfaces and FaceDraw</h5>

	<p>Welcome to Sprint 3. We have covered a lot in the first two sprints. Much of it was preparing us for our first
	substantial programming assignment. I believe we are ready to apply what we have learned to our FaceDraw project. Be
	sure to get an early start on the project and stay focused. You will note that there are fewer items on our
	activities list this week. That is because you will need to focus your time and energy on FaceDraw.</p>

	<p>By the end of this sprint we will be able to:</p>
	<ul style={{listStyleType:'square'}}>
		<li>Develop a moderately sophisticated graphical Java application (FaceDraw)</li>
		<li>Comfortably utilize our command-line Java development environment and VS Code editor</li>
		<li>Utilize source code management and Git/GitHub</li>
		<li>Effectively compile, debug, submit, update, and manage Java application source code</li>
	</ul>
	<p>As you would expect, our activities list for this sprint (below) is laser focused on helping us achieve the above
	Learning Objectives. Once again I have attempted to list the items in the order that I think will be most
	beneficial for you to complete them.</p> 
	<ol>
		<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/3'>[link]</NavLink></li>
		<li><em>Review sprint 3 assignments including Lab 3, Quiz 3, Discussion 3, Reflection 3, and Lab Demo</em></li>
		<li>{start(programmingAssignment)}</li>

		{/* Todo: Update quiz 3 and remove duplicate question*/}
		<li>Review the CAMS Study Table tutoring options <NavLink to='/activity/study-table'>[link]</NavLink></li>
		<li>Review our class example code <NavLink to='/activity/example-code'>[link]</NavLink></li>
		<li>Review our coding standards <NavLink to='/activity/coding-standards'>[link]</NavLink></li>
		{/* The above items should be consistent across classes. */}

		<li>Complete “Graphical User Interfaces (GUI) in Java” <NavLink to='/activity-oop/java-gui-programming'>[video]</NavLink></li>
		{/* Todo: Uncomment the following line and remove chapters 4 and 5 from sprint 4*/}
		{/*<li>Scan “Learning Java, 5th Edition” chapters 4 and 5 <a href='https://learning.oreilly.com/library/view/learning-java-5th/9781492056263/' target='_blank' rel='noopener noreferrer'>[link]</a></li>*/}
		<li>Complete the “FaceDraw Lite” <NavLink to='/activity-oop/java-facedraw-lite'>[video]</NavLink><sup>~2 hours</sup></li>
		<li><em>Complete your initial Discussion Board (DB) post by the middle of the sprint</em></li>
		<li>Read and Understand “JSON Introduction” from W3C <a href='https://www.w3schools.com/js/js_json_intro.asp' target='_blank' rel='noopener noreferrer'>[link]</a></li> 

		{/* The items below should be consistent across classes. */}
		<li>{complete(programmingAssignment)}</li>
		<li><em>Complete Discussion 3 by responding to at least two of your classmates’ posts</em></li>
		<li><em>Submit Lab 3, Quiz 3, and Reflection 3</em></li>
	</ol>
	<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help. Also, be sure to 
	periodically check for new programming together tutorials <NavLink to='/activity/programming-together'>[link]</NavLink>.</p>
	{extras()}
</div>

	)
}

// Todo: Review both quiz 3 questions about verification vs validation testing costs. Validation is testing if it meets 
//     the customer’s needs and occurs after at least pilot release.


const extras = () => {
	return (null)
}