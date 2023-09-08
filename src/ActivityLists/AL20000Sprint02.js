import React from 'react'

import { getClass } from '../DataAndAPIs/Classes'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'
import { SequenceSelectionAndRepetition, overcomingProcrastination, oreillyPlaylistICS, internalLink } from '../DataAndAPIs/Links'

import { gettingToKnowEachOtherLink } from '../Activities/WebGettingToKnowEachOther'
import { toolsOfTheTradeLink } from '../Activities/ToolsOfTheTrade'
import { htmlLink } from '../Activities/HTML'

export const al20000Sprint02 = () => {
	const classSection = getClass()
	const sprint = 2
	return ( <div>
		<h5>Sprint 2: {classSection.class.modules[sprint-1]}</h5>

		<p>Welcome to sprint 2 of Introduction to Computer Science. In sprint 2 we are going to continue our journey into data
		representation and also take look at some of the key technologies that make up the Web. Our sprint activities will 
		include a detailed look at two of those technologies by introducing HyperText Markup Language (HTML) and Cascading Style 
		Sheets (CSS).</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Describe the concept of abstraction</li>
			<li>Develop browser-based HTML5 applications that utilize common HTML and CSS</li>
			<li>Utilize important software developer tools and services to create, update, and deploy basic software applications</li>
			<li>Understand and utilize numbering systems</li>
			<li>Understand sequences, selections, and loops (repetition)</li>
			<li>Identify, define, and discuss data representation, programming, and algorithmic thinking</li>
		</ul> 

		{list20000Sprint02(sprint)}
		{closing(sprint)}
		<br />
		<p>Programming Together: “HelloWorld Plus for the Web” and “HelloWorldPlus with Pictures”</p>
	</div> )
}

export const list20000Sprint02 = (sprint) => {
	const daleChapter2Lecture = () => { return internalLink('lecture', '/activity-dale/2') }
	const daleChapter3Lecture = () => { return internalLink('lecture', '/activity-dale/3') }

	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, gettingToKnowEachOtherLink())}
			<li>Read “Computer Science Illuminated” The Information Layer and review our associated {daleChapter2Lecture()}</li>
			<li>Embrace the 30-for-30 plan {overcomingProcrastination()}</li>
			<li>Review {toolsOfTheTradeLink()}</li>
			<li>Review {SequenceSelectionAndRepetition()}</li>
			{initialPost(sprint)}

			<li>Read “Computer Science Illuminated” Data Representation and review our associated {daleChapter3Lecture()}</li>
			<li>Within {oreillyPlaylistICS()} read “Learning Web Development” Preface through Chapter 2 while focusing on Command Line functions</li>
			<li>Complete {htmlLink()} - Part 1{estimated('3 hours')}</li>
			{standardActivitiesClosing(sprint, gettingToKnowEachOtherLink(), '6 hours')}
		</ol>
	</div> )
}

// Certified for FA22 (08/27/2022)
// Certified for SP23 (01/15/2023)
// Todo: Consider adding Git/GitHub activity / tutorial. 
// Todo: Consider removing Office 365 from the tools of the trade? Maybe it should be left for any writing assignments?
// Todo: Add slide for Metrics (Rule #9)... “Anything that is measured and watched, improves.” – Bob Parsons
/* Todo: Add slide:
	The Beauty of Starting Early
	“The difference of starting early instead of leaving everything for the last minute truly amazes me. I feel so much better about this Sprint. I was able to figure out how to make changes from the Python version of Matchmaker to the HTML version all on my own. 
	Thus, I am proud of myself for getting everything done and not feeling so overwhelmed as I usually did in the past Sprints. Overall, things are going great. I feel that I am getting more and more used to everything and am finally able to solve more problems out on my own.”

	Justina Piwoni
	Introduction to Computer Science, Sprint 6 Reflection


	Kaizen: Small improvements eventually result in huge benefits
*/
// Todo: Consider adding licensing topic to all classes. 
// Todo: Update syllabus with Activity List headers... or update Activity list headers. 

