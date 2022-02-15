import React from 'react'

import { estimated } from './AL00000Sprint01'
import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivitiesWithLink, InitialPost, StandardActivitiesClosingWithLink, Closing } from './AL00000Sprint03'
import { oreillyPlaylistOOP, internalLink, jsonArticle, jsonW3CTutorial } from '../Links';
import { faceDrawJavaLink } from '../Activities/FaceDraw';

const faceDrawLite = () => { return internalLink('FaceDraw Lite', '/activity-oop/java-facedraw-lite') }
const gUIsInJava = () => { return internalLink('Graphical User Interfaces (GUIs) in Java', '/activity-oop/java-gui-programming') }

export const al24500Sprint03 = ( props ) => {
	const playlist = oreillyPlaylistOOP()
	const sprint = 3
	return ( <div>

<h5>Sprint 3: Graphical User Interfaces and FaceDraw</h5>

<p>Welcome to Sprint 3. We have covered a lot in the first two sprints. Much of it was preparing us for our first
substantial programming assignment. I believe we are ready to apply what we have learned to our FaceDraw project. Be
sure to get an early start on the project and stay focused. You will note that there are fewer items on our
activities list this week. That is because you will need to focus your time and energy on FaceDraw.</p>

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Develop a moderately sophisticated graphical Java application (FaceDraw)</li>
	<li>Comfortably utilize our command-line Java development environment and VS Code editor</li>
	<li>Utilize source code management and Git/GitHub</li>
	<li>Effectively compile, debug, submit, update, and manage Java application source code</li>
</ul>

{ActivitiesListIntro(sprint)}
<ol>
	{StandardActivitiesWithLink(faceDrawJavaLink(), playlist )}
	<li>Complete {faceDrawLite()}{estimated('2 hours')}</li>
	<li>Complete {gUIsInJava()}</li>

	{InitialPost(sprint)}
	<li>Within {oreillyPlaylistOOP()} read “Learning Java” chapters 6 and 7</li>
	<li>Read {jsonArticle()} and complete the W3C {jsonW3CTutorial()}{estimated('2 hours')}</li>
	{StandardActivitiesClosingWithLink(faceDrawJavaLink(), '8 hours')}
	</ol>
{Closing()}

</div> )
}

