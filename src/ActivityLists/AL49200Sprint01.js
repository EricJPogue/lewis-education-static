import React from 'react'

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivitiesPlus, InitialPost, StandardActivitiesClosingPlus, ScrumIntro } from './AL00000Sprint01'
import { ProgrammingActivity, ToolsOfTheTrade } from './ProgrammingAssignments'
import { classProductSprint1Link } from '../Activities/ClassProduct'
import { oreillyPlaylistSC } from '../DataAndAPIs/Links'
import { gettingToKnowEachOtherAbbreviatedLink } from '../Activities/WebGettingToKnowEachOtherAbbreviated'

export const al49200Sprint01 = () => { return (

<div>
<h5>Sprint 1: Product Team Assignments, Software Engineering Life Cycles and Agile Review, and Tools of the Trade</h5>
<p><em>Welcome to Software Systems Capstone!</em> By this point in your professional software development journey, I'm 
sure you are confident in writing moderately complicated software programs. You’ve learned about structured programming 
techniques and how to break complicated programs down into more manageable pieces by using functions and even web
services. You understand how Object-Oriented Programming can help you develop more complex applications by utilizing 
encapsulation, inheritance, and polymorphism. You understand the key elements of Software Engineering including 
application architecture, design patterns, development frameworks, and software development life cycles (SDLCs)  
like Agile and Scrum.</p>

<p>Now it’s time to demonstrate those skills in an environment that is as close to real-world as we can create within 
our academic setting. Any new real-world Agile software development engagement would start with your assignment to a 
scrum product team. So we will start the semester by identifying product and team assignments. Once assigned to a 
team, you and your scrum teammates will self-organize to implement key Agile roles, activities, and artifacts.</p>

{ScrumIntro()}

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Effectively participate in a blended classroom environment</li>
	<li>Effectively lead and participate in the creation on your product focused scrum team</li>
	<li>Describe and utilize the key elements of agile development and scrum</li>
	<li>Implement Agile Software Development Life Cycle Roles, Activities, and Artifacts for your scrum team</li>
</ul>

{ActivitiesListIntro()}
<ol>
	<li>Request a product team by submitting Requirement 1 of {classProductSprint1Link()} via email by noon on <em>Wednesday, January 12th</em>.</li>
	{StandardActivitiesPlus(gettingToKnowEachOtherAbbreviatedLink())}

	<li>Within {oreillyPlaylistSC()} scan “Essential Scrum” from the beginning through chapter 12</li>
	<li>Within {oreillyPlaylistSC()} read “Essential Scrum” from the beginning through chapter 3</li>

	{InitialPost()}
	<li>Within {oreillyPlaylistSC()} read “Essential Scrum” chapters 4 through 6</li>
	{ProgrammingActivity(ToolsOfTheTrade, 1)}

	<li>Complete {classProductSprint1Link()}</li>
	{StandardActivitiesClosingPlus(gettingToKnowEachOtherAbbreviatedLink(), '2 hours')}
</ol>
The best advise that I can give you is to start early, submit something for each assignment, and focus on delivering 
high quality incremental releases of your product with your scrum team. 
</div>

) }



