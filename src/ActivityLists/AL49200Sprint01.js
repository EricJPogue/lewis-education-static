import React from 'react'

import { scrumIntro, learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, estimated, closing } from './AL00000Sprint00'

import { toolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade'
import { classProductSprint1Link } from '../Activities/ClassProduct'
import { oreillyPlaylistSC } from '../DataAndAPIs/Links'
import { gettingToKnowEachOtherAbbreviatedLink } from '../Activities/WebGettingToKnowEachOtherAbbreviated'

export const al49200Sprint01 = () => { 
	const sprint = 1
	return ( <div>
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

		{scrumIntro()}

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Effectively participate in a blended classroom environment</li>
			<li>Effectively lead and participate in the creation on your product focused scrum team</li>
			<li>Describe and utilize the key elements of agile development and scrum</li>
			<li>Implement Agile Software Development Life Cycle Roles, Activities, and Artifacts for your scrum team</li>
		</ul>

		{list49200Sprint01(sprint)}
		{closing(sprint)}
	</div> ) 
}

export const list49200Sprint01 = (sprint) => {
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			<li>Review Requirement 1 of {classProductSprint1Link()} and be prepared for team assignments in class 
				on <em>Tuesday, January 10th</em>.</li>
			{standardActivities(sprint, gettingToKnowEachOtherAbbreviatedLink())}
			<li>Within {oreillyPlaylistSC()} scan “Essential Scrum” from the beginning through chapter 12</li>
			<li>Within {oreillyPlaylistSC()} read “Essential Scrum” from the beginning through chapter 3</li>

			{initialPost(sprint)}
			<li>Within {oreillyPlaylistSC()} read “Essential Scrum” chapters 4 through 6</li>
			<li>Complete {toolsOfTheTradeLink()}{estimated('2 hours')}</li>

			<li>Complete {classProductSprint1Link()}</li>
			{standardActivitiesClosing(sprint, gettingToKnowEachOtherAbbreviatedLink(), '2 hours')}
		</ol>
	</div> )
}

// Certified for SP24 on 08-Jan-24

// Todo: We must link the syllabus modules in ./DataAndAPIs/Classes.js with the activity list titles (see sprints 7 and 8).
// Todo: Lab 1 is too easy. Particularly the question about TEAM.md is not specific or challenging given 30 points. 