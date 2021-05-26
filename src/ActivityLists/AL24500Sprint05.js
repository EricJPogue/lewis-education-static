import React from 'react'
import { NavLink } from 'react-router-dom'

import { FinalProjectProposal, SwissArmyKnifeWithJava, start, complete } from './ProgrammingAssignments'
const programmingAssignment = SwissArmyKnifeWithJava

export const al24500Sprint05 = ( props ) => {
	return (

<div>
<h4>Object-Oriented Programming</h4>
<h5>Sprint 5: Network Programming, Testing, and The Cloud</h5>

<p>Sprint 5. Do you feel your software development skills growing? Do you feel the power? As your skills grow you will 
realize that you are in the driver’s seat. More and more you will need to be doing your own research and decision 
making. For example, you will notice that our activities list this sprint includes Microsoft Azure and accessing JSON 
files over the Internet from Java. I will be giving you some direction but you will have the power to explore options, 
experiment, and make decisions on how you wish to implement the features. However, always remember: </p>

<h5>
<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
“With great power there must also come great responsibility”<br /></div>
<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
-Peter Parker (aka Spider-Man)</div>
</h5>
<br />

<p>Part of this new found responsibility will include working on your Final Project proposal. Sprint 8 will be dedicated 
to your final project. We will see if we can carve out some additional time prior to sprint 8 as well. How would you 
like to finish the class by creating something that makes you proud? What type of a final project would you enjoy 
creating? Is there a project that would both be interesting to create and be something you could add to your 
professional portfolio to show as you are looking for an internship or job? You have the power.</p>

<p>By the end of this sprint we will be able to:</p>
<ul style={{ listStyleType: 'square' }}>
	<li>Develop your first network and distributed Java application</li>
	<li>Create a web service utilizing the MS Azure cloud platform</li>
	<li>Develop intermediate command-line Java applications that span multiple Java files</li>
	<li>Understand software testing and the basics of software development life cycles</li>
	<li>Describe multiple object-oriented languages and platforms</li>
</ul>

<p>Below is our sprint 5 activities list. </p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar<NavLink to='/calendar/5'>[link]</NavLink></li>
	<li><em>Review Lab 5, Quiz 5, Discussion 5, Reflection 5, and Lab Demo</em></li>
	<li>{start(FinalProjectProposal)}</li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent across classes. */}

	<li>Complete Testing lecture <NavLink to='/activity-oop/java-testing'>[link]</NavLink></li>
	<li>Read “Learning Java, 5th Edition” chapter 11 <a href='https://learning.oreilly.com/library/view/learning-java-5th/9781492056263/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Review “HTML Programming - Part 1” from W3C <NavLink to='/activity/html'>[link]</NavLink><sup>~2 hours</sup></li>
	<li>Complete “Azure Website” <NavLink to='/activity/azure-website'>[link]</NavLink><sup>~3 hours</sup></li>
	<li>Review “What is JSON? JavaScript Object Notation explained” <a href='https://www.infoworld.com/article/3222851/javascript/what-is-json-javascript-object-notation-explained.html' target='_blank' rel='noopener noreferrer'>[link]</a>
		and “JSON Introduction” from W3C <a href='https://www.w3schools.com/js/js_json_intro.asp' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li><em>Make your initial Discussion post by the middle of the sprint</em></li>
	<li>Create an Azure website to host globally accessible JSON files</li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(FinalProjectProposal)}</li>
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 5, Lab 5, Quiz 5, and Reflection 5</em></li>
</ol>

<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help. Also, be sure to 
periodically check for new programming together tutorials <NavLink to='/activity/programming-together'>[link]</NavLink>.</p>
{extras()}
</div>
	)
}

const extras = () => {
	return (<div>	
		<p>Additional suggested activities:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Review our class example code <NavLink to='/activity/example-code'>[link]</NavLink></li>
			<li>Review “Learning Java, 5th Edition” example code <a href='https://github.com/l0y/learnjava5e.git' target='_blank' rel='noopener noreferrer'>[link]</a></li>
		</ul>
	</div>)
}

// Todo: Determine how to reusing and/or enhance Testing lecture.
// Todo: Add Final Project proposals to assignments. 