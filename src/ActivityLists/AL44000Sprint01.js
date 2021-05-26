import React from 'react'
import { NavLink } from 'react-router-dom';

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, InitialPost, StandardActivitiesClosing, ScrumIntro, Closing } from './AL00000Sprint01'
import { GettingToKnowEachOther, ProgrammingActivity, ToolsOfTheTradeParts1And2, HTMLProgrammingPart1, HelloWorldWithPython } from './ProgrammingAssignments'

export const al44000Sprint01 = (syllabusURL) => {
	return (

<div>
<h5>Sprint 1: Getting Started, Software Engineering Life Cycles, Software as a Service, and Tools of the Trade</h5>
<p><em>Welcome to Software Engineering!</em> By this point in your software development journey I'm sure you are 
confident in writing moderately complicated software programs. You’ve learned about structured programming techniques 
like sequence, selection, and repetition. You've learned how to break complicated programs down into more manageable 
pieces by using functions. You even understand how Object-Oriented Programming can help you develop more complex
applications by utilizing encapsulation, inheritance, and polymorphism.</p>

<p>That’s wonderful, however to create sophisticated modern programs we need to master some additional skills that 
allow us to effectively work in and across teams to predictably develop, enhance, and maintain complex systems that 
meet real users needs. These additional Software Engineering skills are included in what we call the Software 
Development Life Cycle and include topics like Project Management, Architecture, Requirements, Testing, Support, and 
Maintenance. These are some of the topics that we will be exploring as part of this Software Engineering course.</p>

{ScrumIntro()}

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Effectively participate in a blended classroom environment and as part of a Scrum team</li>
	<li>Compare and contrast the steps in leading Software Development Life Cycles</li>
	<li>Explain why agile development has become the preferred software development process</li>
	<li>Describe the benefits of software as a service and cloud computing</li>
	<li>Describe client-server, three-tier and MVC design patterns</li>
	<li>Utilize leading developer tools to create and update software applications</li>
</ul>

{ActivitiesListIntro()}
<ol>
	{StandardActivities(GettingToKnowEachOther)}

	<li>Read Chapter 1 of “Engineering Software as a Service” by Armando Fox and David Patterson</li>
	<li>Review “Engineering Software as a Service” chapter 1 lecture <NavLink to='/activity/fox-chapter-01'>[video]</NavLink> 
		and be prepared for a scrum team discussion</li>
	<li>Review “Engineering Software as a Service” Preface and review associated class lecture <NavLink to='/activity/fox-chapter-00'>[video]</NavLink></li>
	{ProgrammingActivity(HTMLProgrammingPart1)}

	{InitialPost()}

	<li>Read Chapter 2 of “Engineering Software as a Service” and review our associated class lecture <NavLink to='/activity/fox-chapter-02'>[video]</NavLink></li>
	{ProgrammingActivity(ToolsOfTheTradeParts1And2)}
	{ProgrammingActivity(HelloWorldWithPython, 1)}

	{StandardActivitiesClosing(GettingToKnowEachOther)}
</ol>
{Closing()}
</div>

	)
}
