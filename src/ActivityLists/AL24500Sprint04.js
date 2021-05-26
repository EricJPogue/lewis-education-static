import React from 'react'
import { NavLink } from 'react-router-dom';

import { MosaicWithJava, start, complete } from './ProgrammingAssignments'
const programmingAssignment = MosaicWithJava

export const al24500Sprint04 = ( props ) => {
	return (

<div>
<h4>Object-Oriented Programming</h4>
<h5>Sprint 4: Interactive User Interfaces and Mosaic</h5>

<p>Welcome to sprint 4. We have covered a lot of material in the first three sprints. I suspect
that the FaceDraw programming assignment was challenging. As we near the halfway point of our course, we will
continue to focus on delivering real software each sprint. This week we will continue with enhancing our
programming skills by learning how to develop <em>interactive</em> applications while also learning how to
read and write files.</p>

<p>By the end of this sprint we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Develop <em>interactive</em> graphical Java applications utilizing Listeners</li>
	<li>Understand Error Handling and Exceptions</li>
	<li>Describe how to develop <em>interactive</em> command-line Java applications utilizing Scanner</li>
	<li>Develop Java applications that read and write files including JSON files</li>
	<li>Understand JavaDoc and how it can create self-documenting source code</li>

</ul>

<p>Our activities list for this sprint is provided below:</p> 
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/4'>[link]</NavLink></li>
	<li><em>Review sprint 4 assignments including Lab 4, Quiz 4, Discussion 4, Reflection 4, and Lab Demo</em></li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent across classes. */ }

	<li><em>Review Programming Assignment 4, Quiz 4, and Discussion Board 4</em></li>
	{/*Todo: Update video below to remove date references. */}
	<li>Complete ActionListenerPlus <NavLink to='/activity-oop/java-action-listeners'>[video]</NavLink></li>

	<li>Review “Graphical User Interfaces (GUI) in Java” <NavLink to='/activity-oop/java-gui-programming'>[video]</NavLink></li>
	<li>Complete the MosaicLite <NavLink to='/activity-oop/java-mosaic-lite'>[video]</NavLink><sup>~2 hours</sup></li>
	<li>Scan “Learning Java, 5th Edition” chapters 4 and 5 <a href='https://learning.oreilly.com/library/view/learning-java-5th/9781492056263/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Read “Learning Java, 5th Edition” chapters 6 and 10 <a href='https://learning.oreilly.com/library/view/learning-java-5th/9781492056263/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li><em>Complete your initial Discussion Board (DB) post by the middle of the sprint</em></li>

	<li>Analyze and test ShapeDraw (located in our sample code repository)</li>
	<li>Complete ShapeDraw Plus by enhancing ShapeDraw <NavLink to='/activity-oop/java-ovaldraw-plus'>[video]</NavLink><sup>~2 hours</sup></li>
	<li>Review the Java file documentation provide by Oracle <a href='https://docs.oracle.com/javase/7/docs/api/java/io/package-summary.html' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Review the related Java file tutorials provided my Oracle <a href='https://docs.oracle.com/javase/tutorial/essential/io/' target='_blank' rel='noopener noreferrer'>[link]</a>
		and complete and complete one of the tutorials.</li>
	<li>Complete the BMI with JavaDoc and Scanner (keyboard input) <NavLink to='/activity-oop/bmi-calculator-add-javadoc-and-keyboard-input'>[video]</NavLink></li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 4 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 4, Quiz 4, and Reflection 4</em></li>
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