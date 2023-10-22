import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'

import { oreillyPlaylistICS, JavaScriptW3C, programmingTogether, internalLink } from '../DataAndAPIs/Links'
import { matchmakerWebLink } from '../Activities/Matchmaker'
import { finalProjectProposalLink } from '../Activities/FinalProjectProposal'
import { azureWebsiteLink } from '../Activities/AzureWebsite'
import { matchmakerPythonLink } from '../Activities/Matchmaker'
import { htmlLink } from '../Activities/HTML'
import { gettingToKnowEachOtherLink } from '../Activities/WebGettingToKnowEachOther'

export const al20000Sprint06 = () => {
	const sprint = 6
	return ( <div>
		<h5>Sprint 6: Networks, The Internet, Cloud Computing, and Updated Final Project Proposal</h5>

		<p>Welcome to sprint 6. Sprint 6 will the continuing trend of you taking more responsibility for learning new topics.  
		The new topic this sprint is JavaScript. We will utilize JavaScript along with HTML and CSS to 
		create a <em>Web</em> version of <span style={{color: "red"}}> &#10084;&#10084;&#10084;</span> Matchmaker <span style={{color: "red"}}>&#10084;&#10084;&#10084;</span>.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{ listStyleType:'square' }}>
			<li>Understand and utilize The Internet and World Wide Web</li>
			<li>Understand and utilize Cloud Computing</li>
			<li>Utilize JavaScript to create interactive Web applications</li>
			<li>Update our Final Project proposals and host them on the Web</li>
		</ul>

		{list20000Sprint06(sprint)}
		{closing(sprint)}
	</div> )
}

export const list20000Sprint06 = (sprint) => {
	const daleWWWLecture = () => { return internalLink('lecture', '/activity-dale/16' )}
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, matchmakerWebLink(), oreillyPlaylistICS())}
			<li>Complete {programmingTogether()} MatchmakerLite for the Web - Part 1</li>
			<li>Review and update {finalProjectProposalLink()}</li>
			<li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” The World Wide Web and review our associated {daleWWWLecture()}</li>
			<li>Review the following activities that were completed previously:</li>
			<ul style={{listStyleType:'square'}}>
				<li>{azureWebsiteLink()}</li>
				<li>{matchmakerPythonLink()}</li>
				<li>{htmlLink()}</li>
				<li>{gettingToKnowEachOtherLink()}</li>
			</ul>

			{initialPost(sprint)}
			<li>Within {oreillyPlaylistICS()} read “Learning Web App Development” chapter 4</li>
			<li>Complete {JavaScriptW3C()} tutorial from W3C</li>
			<li>Complete {programmingTogether()} MatchmakerLite for the Web - Part 2</li>
			{standardActivitiesClosing(sprint, matchmakerWebLink(), '8 hours')}
		</ol>
	</div> )
}

// Certified for SP22 (03/24/2022)
// Certified for FA22 (10/21/2022)
// TurtleDraw! Optional MatchMaker for Python
// 			<li>Complete {programmingTogether()} with TurtleDrawLite Parts 1 &amp; 2</li>
// <li>Complete {programmingTogether()} with TurtleDrawLite Part 3</li>
// <li>Within {oreillyPlaylistICS()} read “Introducing Python” Chapters 7 through 9 and review the associated {introducingPythonCodeExamples()}</li>
// Todo: Move Matchmaker Lite - Part 2 up on the activity list. 
// Todo: Consider adding funny video https://www.youtube.com/watch?v=Uo3cL4nrGOk

// Todo: Consider adding MatchmakerLite tutorials to ActivityList (and/or the Matchmaker assignment) instead of just in the Programming Together section. 
// Todo: Consider where the following activities should go. 
//    const pythonW3CPart1 = () => { return internalLink('Python Programming - Part 1', '/activity/python-w3c') }
//    const pythonW3CPart2 = () => { return internalLink('Python Programming - Part 2', '/activity/python-w3c') }

//    <li>Within {oreillyPlaylistICS()} read “Introducing Python” Chapter 2 while reviewing “quotes.py” from the {IntroducingPythonSampleCode()}</li>
//    <li>Within {oreillyPlaylistICS()} read “Introducing Python” Chapters 3 and 4 while reviewing associated {IntroducingPythonSampleCode()}</li>
//    <li>Within {oreillyPlaylistICS()} read “Introducing Python” Chapters 5 and 6 while reviewing associated {IntroducingPythonSampleCode()}</li>
//    
//   
// Todo: Update syllabus with Activity List headers... or update Activity list headers. 
// Todo: Consider adding licensing topic to all classes. 
// Todo: Consider adding Git/GitHub activity / tutorial. 
// Todo: Where should the following go? Sprint 7?
//	   const daleArtificialIntelligenceLecture = () => { return internalLink('lecture', '/activity-dale/13' )}
//	   <li>Within {oreillyPlaylistICS()} read “Computer Science Illuminated” Artificial Intelligence and review our associated {daleArtificialIntelligenceLecture()}</li>
//     import { matchmakerPythonLink } from '../Activities/Matchmaker'
//// Todo: Cloud Computing from sprint 3? Move or remove (do we need this)?