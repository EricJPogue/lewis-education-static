import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing, estimated } from './AL00000Sprint00'

import { oreillyPlaylistOOP, internalLink, jsonArticle, jsonW3CTutorial } from '../DataAndAPIs/Links';
import { faceDrawJavaLink } from '../Activities/FaceDraw';

export const gUIsInJava = () => { return internalLink('Graphical User Interfaces (GUIs) in Java', '/activity-oop/java-gui-programming') }

export const al24500Sprint03 = () => {
	const faceDrawLite = () => { return internalLink('FaceDraw Lite', '/activity-oop/java-facedraw-lite') }
	const sprint = 3
	return ( <div>
		<h5>Sprint 3: Graphical User Interfaces and FaceDraw</h5>

		<p>Welcome to Sprint 3. We have covered a lot in the first two sprints. Much of it was preparing us for our first
		substantial programming assignment. I believe we are ready to apply what we have learned to our FaceDraw project. Be
		sure to get an early start on the project and stay focused. You will note that there are fewer items on our
		activities list this week. That is because you will need to focus your time and energy on FaceDraw.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Develop a moderately sophisticated graphical Java application (FaceDraw)</li>
			<li>Comfortably utilize our command-line Java development environment and VS Code editor</li>
			<li>Utilize source code management and Git/GitHub</li>
			<li>Effectively compile, debug, submit, update, and manage Java application source code</li>
		</ul>

		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, faceDrawJavaLink(), oreillyPlaylistOOP())}
			<li>Complete {faceDrawLite()}{estimated('2 hours')}</li>
			<li>Complete {gUIsInJava()}</li>

			{initialPost(sprint)}
			<li>Within {oreillyPlaylistOOP()} read “Learning Java” chapters 6 and 7</li>
			<li>Read {jsonArticle()} and complete the W3C {jsonW3CTutorial()}{estimated('2 hours')}</li>
			{standardActivitiesClosing(sprint, faceDrawJavaLink(), '8 hours')}
		</ol>
		{closing(sprint)}
	</div> )
}

// Todo: Review and update FaceDraw and Lab 3 to better reflect FaceDraw requirement 4 which should not be Coding 
// standards. Make coding standards the first question on every lab and not part of a programming assignment’s 
// requirements.
// Todo: Review fall 22 updates and make sure that the programming together tutorial link is appropriate. 