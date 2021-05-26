import React from 'react'
import { NavLink } from 'react-router-dom'

import { SwissArmyKnifeWithJavaV2, start, complete } from './ProgrammingAssignments'
const programmingAssignment = SwissArmyKnifeWithJavaV2

export const al24500Sprint06 = ( props ) => {
	return (

<div>
<h4>Object-Oriented Programming</h4>
<h5>Sprint 6: Multithreaded Programming and Application Programming Interfaces</h5>

<p>Sprint 6! This sprint offers a mix of the old and the new. Some things like hosting JSON files on our Azure
websites and enhancing our SwissArmyKnife application will be additions to what we have already learned. On the
other hand, learning how to write multi-threaded Java applications will likely prove to be challenging.</p>

<p>By the end of this sprint we will be able to:</p>
<ul style={{ listStyleType: 'square' }}>
	<li>Develop our first multi-threaded Java application</li>
	<li>Create and update a web service by hosting JSON files in Azure</li>
	<li>Enhance intermediate command line Java applications that span multiple Java files</li>
	<li>Create an automated (api level) Java test client</li>
</ul>

<p>Below is the list of activities that we will need to complete this sprint.</p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/6'>[link]</NavLink></li>
	<li><em>Review Lab 6, Quiz 6, Discussion 6, Reflection 6, and Lab Demo</em></li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent across classes. */}

	<li>Review “Performance and Multithreading” <NavLink to='/activity-oop/performance-and-multithreaded-programming'>[video]</NavLink></li>
	<li>Review “Website Creation With GitHub and Microsoft Azure” <NavLink to='/activity/azure-website'>[link]</NavLink></li>
	<li>Complete “Personal Information JSON Files” <NavLink to='/activity-oop/personal-info-json-to-azure'>[video]</NavLink></li>
	<li><em>Complete your initial Discussion Board post by the middle of the sprint</em></li>

	<li>Read “Learning Java, 5th Edition” chapter 9 <a href='https://learning.oreilly.com/library/view/learning-java-5th/9781492056263/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Complete “SleepFast” <NavLink to='/activity-oop/java-sleep-fast'>[video]</NavLink></li>
	<li>Review Object-Oriented Programming Languages and Platforms <NavLink to='/activity-oop/languages-and-platforms'>[video]</NavLink></li>

	{/* The items below should be consistent across classes. */}
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 6, Lab 6, Quiz 6, and Reflection 6</em></li>
</ol>

<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help. Also, be sure to 
periodically check for new programming together tutorials <NavLink to='/activity/programming-together'>[link]</NavLink>.</p>
{extras()}
</div>
	)
}

// Todo: Fix quiz question, “If it cost $200 to fix a defect that was found in Unit Testing, how much would it likely cost to fix that same defect if it was found in Validation testing?”
// Todo: Review and/or fix all the texting questions. Particularly the money question. 
// Todo: Add review and update Final Project Proposal
// Todo: Add Final Project proposals to assignments. 

const extras = () => {
	return (<div>	
		<p>Additional suggested activities:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Update the content of your “Final Project Proposal” <NavLink to='/activity/final-project-proposal'>[link]</NavLink> 
				and host the updated web page in Azure</li>
			<li>Review our class example code <NavLink to='/activity/example-code'>[link]</NavLink></li>
			<li>Review “Learning Java, 5th Edition” example code <a href='https://github.com/l0y/learnjava5e.git' target='_blank' rel='noopener noreferrer'>[link]</a></li>
		</ul>
	</div>)
}