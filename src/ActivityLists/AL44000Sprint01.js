import React from 'react'

import { scrumIntro, learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, estimated, closing } from './AL00000Sprint00'
import { internalLink } from '../DataAndAPIs/Links'

import { gettingToKnowEachOtherLink } from '../Activities/WebGettingToKnowEachOther'
import { toolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade'
import { htmlLink } from '../Activities/HTML'
import { HelloWorldPythonLink } from '../Activities/HelloWorld'

export const al44000Sprint01 = () => {
	const sprint = 1
	return ( <div>
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

		{scrumIntro()}

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Effectively participate in a blended classroom environment and as part of a Scrum team</li>
			<li>Compare and contrast the steps in leading Software Development Life Cycles</li>
			<li>Explain why agile development has become the preferred software development process</li>
			<li>Describe the benefits of software as a service and cloud computing</li>
			<li>Describe client-server, three-tier and MVC design patterns</li>
			<li>Utilize leading developer tools to create and update software applications</li>
		</ul>

		{list44000Sprint01(sprint)}
		
		{closing(sprint)}
	</div> )
}

export const list44000Sprint01 = (sprint) => {
	const foxChapter0Lecture = () => internalLink('lecture', '/activity/fox-chapter-00')
	const foxChapter1Lecture = () => internalLink('lecture', '/activity/fox-chapter-01')
	const foxChapter2Lecture = () => internalLink('lecture', '/activity/fox-chapter-02')

	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, gettingToKnowEachOtherLink())}

			<li>Read “Engineering Software as a Service” Chapter 1 by Armando Fox and David Patterson and review the associated {foxChapter1Lecture()}</li>
			<li>Read “Engineering Software as a Service” Preface and review associated {foxChapter0Lecture()}</li>
			<li>Complete {htmlLink()} - Part 1{estimated('2 hours')}</li>

			{initialPost(sprint)}

			<li>Read “Engineering Software as a Service” Chapter 2 of and review our associated {foxChapter2Lecture()}</li>
			<li>Complete {toolsOfTheTradeLink()}{estimated('2 hours')}</li>
			<li>Complete {HelloWorldPythonLink()}{estimated('1 hour')}</li>

			{standardActivitiesClosing(sprint, gettingToKnowEachOtherLink(), '6 hours')}
		</ol>
	</div> )
}

// Todo: Consider moving chapter 2 to sprint 2 so that we can focus more on chapter 1 (review the very good chapter 1 video for more insights.)
// Todo: Consider adding something about Oreilly playlist. 



